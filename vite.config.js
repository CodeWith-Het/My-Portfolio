import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/My-Portfolio/",   // 👈 yaha repo ka naam 100% sahi hona chahiye
  plugins: [react()],
})
