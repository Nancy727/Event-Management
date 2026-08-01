# Sintu Decorators

Premium business portfolio site for Sintu Decorators with a React client, an Express + Prisma API, an AI event consultant experience, and a lightweight admin dashboard.

## What’s Included

- Client app built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Router.
- Server API built with Express, Prisma, JWT auth, and seeded demo data.
- AI planner and inquiry flows that can run against mock responses or external AI providers.
- Mobile-first pages for home, about, services, portfolio, contact, and admin access.

## Project Layout

```text
client/   Frontend app
server/   Backend API and Prisma schema
Dockerfile
docker-compose.yml
README.md
```

## Prerequisites

- Node.js 18 or newer
- npm

## Local Setup

### 1. Start the backend

```bash
cd server
npm install
npm run prisma:generate
npm run prisma:push
npm run prisma:seed
npm run dev
```

The API runs at `http://localhost:5000` and exposes a health check at `/health`.

### 2. Start the frontend

In a second terminal:

```bash
cd client
npm install
npm run dev
```

The Vite app runs at `http://localhost:3000` and proxies `/api` requests to the backend.

## Environment Variables

The server reads these variables from `.env` when present:

- `PORT` - defaults to `5000`
- `JWT_SECRET` - defaults to a local development secret
- `NODE_ENV` - defaults to `development`
- `ADMIN_EMAIL` - defaults to `admin@sintudecorators.com`
- `ADMIN_PASSWORD` - defaults to `adminpassword123`
- `OPENAI_API_KEY` - optional
- `GEMINI_API_KEY` - optional

## Admin Login

- URL: `http://localhost:3000/admin/login`
- Email: `admin@sintudecorators.com`
- Password: `admin123`

## NPM Scripts

### Client

- `npm run dev` - start the Vite dev server
- `npm run build` - type-check and build the frontend
- `npm run lint` - run TypeScript checks
- `npm run preview` - preview the production build

### Server

- `npm run dev` - start the API in development
- `npm run build` - compile the server
- `npm run start` - run the compiled server
- `npm run prisma:generate` - generate Prisma Client
- `npm run prisma:push` - push the Prisma schema to the database
- `npm run prisma:seed` - load sample data

## Docker

```bash
docker-compose up -d --build
```

After the containers start, open the frontend on `http://localhost:3000`.
