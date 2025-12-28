/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/.vitepress/theme/**/*.{vue,js,ts}',
    './docs/**/*.{md,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4A27F',
        secondary: '#0E0E0E'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['winter', 'light', 'dark']
  }
}
