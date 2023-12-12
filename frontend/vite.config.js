import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://upload-download-files-two.vercel.app/",
        secure: false
      }
    }
  }
})
