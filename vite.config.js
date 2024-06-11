import fs from 'fs/promises';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'move-about-html',
      apply: 'build',
      writeBundle: async () => {
        const aboutSourcePath = 'dist/pages/about/index.html'
        const aboutDestPath = 'dist/about/index.html'

        try {
          await fs.mkdir('dist/about', { recursive: true })
          await fs.rename(aboutSourcePath, aboutDestPath)
          console.log(`Moved: ${aboutSourcePath} -> ${aboutDestPath}`)
        } catch (err) {
          console.error('Error moving about/index.html:', err)
        }
      }
    }
  ],
  test: {
    environment: 'jsdom',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'about/index': 'pages/about/index.html',
      }
    }
  }
})
