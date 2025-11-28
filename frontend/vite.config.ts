import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const externalPlugin = {
  name: 'external-resolver',
  resolveId(id: string) {
    if (id === 'firebase' || id.startsWith('firebase/') || 
        id === '@google-cloud/vertexai' || id.startsWith('@google-cloud/vertexai/')) {
      return { id, external: true }
    }
  },
}

export default defineConfig({
  plugins: [externalPlugin, react()],
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          'vendor-other': ['axios', 'framer-motion'],
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['firebase', '@google-cloud/vertexai'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  define: {
    'process.env.REACT_APP_API_BASE_URL': JSON.stringify(process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api'),
  },
})
