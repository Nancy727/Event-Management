# Multi-stage Dockerfile for Sintu Decorators Backend (Node.js 20 + Express + Prisma + TypeScript)

# ─── Stage 1: Build Stage ──────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install OpenSSL (required by Prisma engines on Alpine Linux)
RUN apk add --no-cache openssl

# Copy dependency manifests
COPY package*.json ./

# Install all dependencies (including devDependencies needed for tsc and prisma)
RUN npm ci

# Copy Prisma schema and generate Prisma Client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy application source code
COPY . .

# Compile TypeScript to JavaScript (outputs to /app/dist)
RUN npm run build

# ─── Stage 2: Production Runtime ───────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Install OpenSSL runtime dependency for Prisma query engine
RUN apk add --no-cache openssl

# Copy package manifests
COPY package*.json ./

# Copy installed node_modules containing Prisma Client and production dependencies
COPY --from=builder /app/node_modules ./node_modules

# Copy compiled JavaScript from builder
COPY --from=builder /app/dist ./dist

# Copy Prisma schema and seed files
COPY --from=builder /app/prisma ./prisma

# Expose backend port internally
EXPOSE 5000

# Production startup command from package.json ("start": "node dist/server.js")
CMD ["node", "dist/server.js"]
