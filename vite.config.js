import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'gsap': ['gsap', '@gsap/react'],
          'swiper': ['swiper'],
          'firebase': ['firebase/app', 'firebase/firestore'],
          'forms': ['react-hook-form'],
          'lottie': ['lottie-react'],
        }
      }
    }
  }
})

