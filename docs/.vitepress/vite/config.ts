import { defineConfig } from 'vite'
import { claudeFilesPlugin } from '../plugins/claudeFiles'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        (await import('@tailwindcss/postcss')).default,
        (await import('autoprefixer')).default
      ]
    }
  },
  plugins: [
    claudeFilesPlugin()
  ]
})
