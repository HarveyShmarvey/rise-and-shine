// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Import the new plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // <-- Add it to the plugins array
    react()
  ],
})