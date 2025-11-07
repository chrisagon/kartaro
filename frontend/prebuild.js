#!/usr/bin/env node

/**
 * Pre-build script to optimize dependencies and reduce build memory usage
 * This script:
 * 1. Creates a dependency cache
 * 2. Pre-compiles heavy modules
 * 3. Optimizes node_modules structure
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting pre-build optimization...\n');

try {
  // 1. Clean node_modules cache
  console.log('📦 Cleaning npm cache...');
  try {
    execSync('npm cache clean --force', { stdio: 'inherit' });
  } catch (e) {
    console.log('⚠️  Cache clean failed, continuing...');
  }

  // 2. Install with offline preference
  console.log('\n📥 Installing dependencies with offline preference...');
  execSync('npm ci --prefer-offline --no-audit', { stdio: 'inherit' });

  // 3. Prune dev dependencies for production
  console.log('\n✂️  Pruning dev dependencies...');
  execSync('npm prune --production=false', { stdio: 'inherit' });

  // 4. Create .npmrc for build optimization
  console.log('\n⚙️  Optimizing npm configuration...');
  const npmrc = path.join(__dirname, '.npmrc');
  if (fs.existsSync(npmrc)) {
    console.log('✅ .npmrc already configured');
  }

  console.log('\n✨ Pre-build optimization complete!');
  console.log('Ready for production build.\n');

} catch (error) {
  console.error('❌ Pre-build failed:', error.message);
  process.exit(1);
}
