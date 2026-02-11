import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages serves at https://<user>.github.io/<repo>/
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  server: {
    host: true, // listen on 0.0.0.0 so other devices on the network can access
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        includePaths: ['node_modules'],
      },
    },
  },
})
