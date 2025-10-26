import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";
import { performance } from "node:perf_hooks";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const isDev = process.env.NODE_ENV !== "production";

// Validate DATABASE_URL early to avoid cryptic SASL errors
const connectionString = process.env.DATABASE_URL;
if (
  !connectionString ||
  typeof connectionString !== "string" ||
  !connectionString.startsWith("postgres")
) {
  console.error(
    "\n[Startup Error] DATABASE_URL is missing or invalid. Create a .env file with a valid Neon connection string."
  );
  // Provide a quick hint
  console.error(
    "Example: DATABASE_URL=postgresql://USER:PASSWORD@HOST/dbname?sslmode=require"
  );
  process.exit(1);
}

try {
  const parsed = new URL(connectionString.replace("postgresql://", "http://"));
  if (!parsed.password) {
    console.warn(
      "[Warning] No password detected in DATABASE_URL; this will cause SASL errors."
    );
  }
} catch {
  console.warn(
    "[Warning] Could not parse DATABASE_URL to verify password segment."
  );
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }, // Neon requires SSL; relaxed cert for local dev
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 8000,
});

// Keep-alive (prevents Neon cold starts adding 5-12s latency to first query after idle)
const KEEP_ALIVE_MS = parseInt(process.env.DB_KEEP_ALIVE_MS || "45000", 10);
if (KEEP_ALIVE_MS > 0) {
  setInterval(async () => {
    const t = performance.now();
    try {
      await pool.query("/* keep-alive */ SELECT 1");
      if (isDev) {
        const dt = (performance.now() - t).toFixed(1);
        console.log(`[DB] keep-alive OK ${dt}ms`);
      }
    } catch (e) {
      console.warn("[DB] keep-alive failed", (e as Error).message);
    }
  }, KEEP_ALIVE_MS).unref();
  if (isDev) console.log(`[DB] keep-alive every ${KEEP_ALIVE_MS}ms`);
}

// Simple in-memory metrics
let lastInsertMs: number | null = null;
let lastInsertAt: string | null = null;
let lastInsertError: string | null = null;

// Prepared statement text
const INSERT_CONTACT_SQL = `INSERT INTO contact_submissions
  (full_name, email, phone, event_type, event_date, guest_count, message)
  VALUES ($1,$2,$3,$4,$5,$6,$7)
  RETURNING id, created_at`;

// Startup schema sanity check
(async () => {
  const start = performance.now();
  try {
    await pool.query("SELECT 1");
    const warmMs = (performance.now() - start).toFixed(1);
    console.log(`[Warmup] Initial probe completed in ${warmMs} ms`);
    const col = await pool.query(
      "SELECT data_type FROM information_schema.columns WHERE table_name='contact_submissions' AND column_name='guest_count'"
    );
    const dt = col.rows[0]?.data_type;
    if (dt && dt !== "text") {
      console.warn(
        `[Schema Warning] guest_count column is ${dt}. Expected text. Run:\nALTER TABLE contact_submissions ALTER COLUMN guest_count TYPE TEXT USING guest_count::text;`
      );
    }
  } catch (err) {
    console.warn("[Warmup] Skipped or failed:", (err as Error).message);
  }
})();

app.post("/api/contact", async (req, res) => {
  const { fullName, email, phone, eventType, eventDate, guestCount, message } =
    req.body;
  if (!fullName || !email || !eventType || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const guestCountValue =
      guestCount == null || guestCount === ""
        ? null
        : typeof guestCount === "string"
        ? guestCount.trim()
        : String(guestCount);

    const t0 = performance.now();
    const result = await pool.query({
      text: INSERT_CONTACT_SQL,
      values: [
        fullName,
        email,
        phone || null,
        eventType,
        eventDate ? new Date(eventDate) : null,
        guestCountValue,
        message,
      ],
      name: "insert_contact_v1", // prepared statement name for reuse
    });
    lastInsertMs = performance.now() - t0;
    lastInsertAt = new Date().toISOString();
    lastInsertError = null;

    if (isDev)
      console.log(
        `[contact] Insert completed in ${lastInsertMs.toFixed(1)}ms, ID: ${
          result.rows[0].id
        }`
      );

    res.status(201).json({ success: true, id: result.rows[0].id });
    return; // ensure no further processing

  } catch (e: unknown) {
    console.log(`Error: ${(e as Error).message}`);
    return; // ensure handler exits after sending error
  }
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
