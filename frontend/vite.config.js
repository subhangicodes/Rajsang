import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  script:{
    Proxy:{
      "/api":"http://localhost:4000",
    },
  },
  plugins: [react()],
})
