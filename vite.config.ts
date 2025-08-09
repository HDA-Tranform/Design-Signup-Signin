import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/login', // Khi npm run dev sẽ tự mở http://localhost:5173/login
  },
})
