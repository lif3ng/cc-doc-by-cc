import DefaultTheme from 'vitepress/theme'
import CodeBlock from './components/CodeBlock.vue'
import ChatBubble from './components/ChatBubble.vue'
import FeatureCard from './components/FeatureCard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CodeBlock', CodeBlock)
    app.component('ChatBubble', ChatBubble)
    app.component('FeatureCard', FeatureCard)
  }
}
