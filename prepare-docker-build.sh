#!/bin/bash
echo "Preparing Docker build..."

# Copy frontend to backend directory for Docker build (excluding node_modules)
rm -rf backend/frontend
mkdir -p backend/frontend
cp -r frontend/* backend/frontend/ 2>/dev/null || true
cp -r frontend/.* backend/frontend/ 2>/dev/null || true
rm -rf backend/frontend/node_modules

echo "Frontend copied to backend directory for Docker build."
echo "You can now run: docker-compose up --build"
