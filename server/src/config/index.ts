import dotenv from 'dotenv';
dotenv.config();

// Ensure MongoDB credentials containing special characters (e.g. '@', ':', '/', '#')
// are safely percent-encoded to prevent breaking MongoDB connection URI parsing.
if (process.env.MONGO_INITDB_ROOT_USERNAME && process.env.MONGO_INITDB_ROOT_PASSWORD) {
  const user = encodeURIComponent(process.env.MONGO_INITDB_ROOT_USERNAME);
  const pass = encodeURIComponent(process.env.MONGO_INITDB_ROOT_PASSWORD);
  const db = process.env.MONGO_INITDB_DATABASE || 'sintu_decorators';
  const host = process.env.MONGO_HOST || 'mongo';
  const port = process.env.MONGO_PORT || '27017';
  process.env.DATABASE_URL = `mongodb://${user}:${pass}@${host}:${port}/${db}?authSource=admin`;
}

export const config = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'sintu-decorators-jwt-secret-key-2026',
  nodeEnv: process.env.NODE_ENV || 'development',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@sintudecorators.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'adminpassword123',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  geminiApiKey: process.env.GEMINI_API_KEY || '',
};
