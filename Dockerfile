# Multi-stage build for production deployment on Render
FROM node:20-alpine AS base

# Install system dependencies needed for sqlite3 and puppeteer
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    sqlite \
    sqlite-dev \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Set Puppeteer to skip downloading Chromium (we installed it manually)
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Set working directory
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy backend source code
COPY backend/ ./

# Create data and cache directories
RUN mkdir -p /app/data /app/src/cache/images

# Build stage (if needed for any build steps)
FROM base AS build

# Copy environment file for build (if needed)
# COPY backend/.env .env

# Final production stage
FROM base AS production

# Set environment variables
ENV NODE_ENV=production
ENV DATABASE_PATH=/app/data/database.db
ENV PORT=10000

# Expose port (Render uses 10000 by default)
EXPOSE 10000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD node -e "const http=require('http');const req=http.request({hostname:'localhost',port:process.env.PORT,path:'/api/cards/generate-context',method:'POST',headers:{'Content-Type':'application/json'}},res=>{process.exit(res.statusCode===404?0:1)});req.write(JSON.stringify({theme:'health',publicTarget:'check'}));req.end();" || exit 1

# Start the application
CMD ["node", "src/index.js"]
