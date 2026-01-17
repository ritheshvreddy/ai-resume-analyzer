import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      "ai-resume-frontend-zh38.onrender.com"
    ]
  }
})
