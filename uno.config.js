import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: '#D4A27F',
      secondary: '#0E0E0E',
    },
  },
  shortcuts: {
    'container': 'max-w-1200px mx-auto px-20px',
    'btn': 'px-30 py-14 rounded-8px font-600 transition-all duration-300 inline-block',
    'btn-primary': 'bg-primary text-white hover:bg-#c08d6a hover:-translate-y-2px shadow-lg hover:shadow-xl cursor-pointer',
    'btn-secondary': 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-secondary cursor-pointer',
    'code-block': 'relative bg-#1a1a1a rounded-8px overflow-hidden my-16px',
    'section': 'py-50px',
  },
})
