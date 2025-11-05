# Build script for frontend
cd frontend

# Install dependencies
npm install

# Build for production
npm run build

# Move build to root for Render
cd ..
rm -rf ./build
mv frontend/build ./build

# Create _redirects file for SPA routing
echo "/* /index.html 200" > build/_redirects

echo "Frontend built successfully!"
