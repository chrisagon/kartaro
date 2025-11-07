#!/usr/bin/env node

/**
 * Optimized build script that disables fork-ts-checker
 * to prevent OOM errors during production builds
 */

// Set all optimization variables
process.env.CI = 'true';
process.env.GENERATE_SOURCEMAP = 'false';
process.env.SKIP_PREFLIGHT_CHECK = 'true';
process.env.TSC_COMPILE_ON_ERROR = 'true';
process.env.ESLINT_NO_DEV_ERRORS = 'true';
process.env.DISABLE_NEW_JSX_TRANSFORM = 'true';
process.env.FORK_TS_CHECKER_ENABLED = 'false';

// Increase Node heap size
if (!process.env.NODE_OPTIONS) {
  process.env.NODE_OPTIONS = '--max-old-space-size=16384';
}

// Import and run react-scripts build
require('react-scripts/scripts/build');
