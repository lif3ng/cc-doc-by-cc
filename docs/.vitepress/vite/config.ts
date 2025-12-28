import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        (await import('@tailwindcss/postcss')).default,
        (await import('autoprefixer')).default
      ]
    }
  }
})
