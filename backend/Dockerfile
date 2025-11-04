# Use Node.js 20 LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

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

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Create data directory for SQLite database
RUN mkdir -p /app/data

# Create cache directory for images
RUN mkdir -p /app/src/cache/images

# Set environment variables
ENV NODE_ENV=production
ENV DATABASE_PATH=/app/data/database.db

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/api/cards/generate-context', (res) => process.exit(res.statusCode === 404 ? 0 : 1))"

# Start the application
CMD ["node", "src/index.js"]
