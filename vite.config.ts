import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: './' makes all asset URLs relative, so the same build works whether
// it's served from a root domain (Netlify / Vercel) or a GitHub Pages subpath
// like https://<user>.github.io/<repo>/ — no need to hardcode the repo name.
export default defineConfig({
  plugins: [react()],
  base: './',
})
