import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: './' keeps asset URLs relative so the same build works on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
})
