# Multi-stage Dockerfile for Sintu Decorators Frontend (React + Vite + Nginx)

# ─── Stage 1: Build Stage ──────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies using clean install from lockfile
RUN npm ci

# Build-time argument for API URL with safe production default
ARG VITE_API_URL=/api
ENV VITE_API_URL=$VITE_API_URL

# Copy source code and assets
COPY . .

# Build production bundle (tsc && vite build)
RUN npm run build

# ─── Stage 2: Production Nginx Runtime ────────────────────────────────────
FROM nginx:alpine AS runner

# Remove default Nginx HTML content
RUN rm -rf /usr/share/nginx/html/*

# Copy compiled static assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
