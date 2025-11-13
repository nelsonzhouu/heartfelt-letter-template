import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite Configuration
// This configures how your development server runs and how the project builds
// Learn more: https://vite.dev/config/
export default defineConfig({
  // Enable React support
  plugins: [react()],

  // Development server settings
  server: {
    port: 5200  // Dev server runs at http://localhost:5200 (520 = I love you!)
  }
})
