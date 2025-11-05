# Multi-stage build for full-stack application
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
    ttf-freefont \
    nginx

# Set Puppeteer to skip downloading Chromium (we installed it manually)
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Set working directory
WORKDIR /app

# Copy backend package files
COPY package*.json ./

# Install backend dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy backend source code
COPY . .

# Create data and cache directories
RUN mkdir -p /app/data /app/src/cache/images

# Frontend build stage
FROM node:20-alpine AS frontend-build

WORKDIR /frontend

# Copy frontend package files from the root context
COPY ../frontend/package*.json ./

# Install frontend dependencies
RUN npm ci

# Copy frontend source code from the root context
COPY ../frontend/ ./

# Build frontend for production
RUN npm run build

# Final production stage
FROM base AS production

# Copy built frontend from frontend-build stage
COPY --from=frontend-build /frontend/build /app/public

# Create _redirects file for SPA routing
RUN echo "/* /index.html 200" > /app/public/_redirects

# Copy nginx configuration
RUN echo 'server {\
    listen 10000;\
    server_name localhost;\
    root /app/public;\
    index index.html;\
    location /api {\
        proxy_pass http://localhost:3001;\
        proxy_set_header Host $host;\
        proxy_set_header X-Real-IP $remote_addr;\
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\
        proxy_set_header X-Forwarded-Proto $scheme;\
    }\
    location / {\
        try_files $uri $uri/ /index.html;\
    }\
}' > /etc/nginx/conf.d/default.conf

# Expose port (Render uses 10000 by default)
EXPOSE 10000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD node -e "const http=require('http');const req=http.request({hostname:'localhost',port:3001,path:'/api/cards/generate-context',method:'POST',headers:{'Content-Type':'application/json'}},res=>{process.exit(res.statusCode===404?0:1)});req.write(JSON.stringify({theme:'health',publicTarget:'check'}));req.end();" || exit 1

# Start both backend and nginx
CMD nginx && node src/index.js
