# Build script for frontend
cd frontend

# Install dependencies
npm install

# Build for production
npm run build

# Move build to root for Render
cd ..
mv frontend/build ./build

echo "Frontend built successfully!"
