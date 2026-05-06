import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/YSS/',
  server: {
    port: 8001,
    open: true,
  },
})
