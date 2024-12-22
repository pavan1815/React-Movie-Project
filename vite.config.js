import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/React-Movie-Project/",
  build: {
    outDir: 'dist', // Ensure this matches your deployment command
},
})