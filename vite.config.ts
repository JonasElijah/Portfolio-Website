import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' makes the build work at any GitHub Pages path
// (e.g. https://jonaselijah.github.io/Portfolio-Website/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
