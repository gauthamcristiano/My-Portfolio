
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],

  // GitHub Pages repository path
  base: '/My-Portfolio/',

  // Production build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild'
  },

  // Development server
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
