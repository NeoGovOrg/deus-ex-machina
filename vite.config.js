import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/deus-ex-machina/' : '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        404: './public/404.html' // Inclui o 404.html no build
      }
    }
  }
}))