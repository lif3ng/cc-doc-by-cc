import { defineConfig } from 'vitepress'

export default defineConfig({
  // GitHub Pages 配置: 如果仓库名不是 'cc-doc-by-cc'，请修改 base
  // 例如: base: '/your-repo-name/'
  // 本地开发可以设置为: base: '/'
  base: '/cc-doc-by-cc/',

  title: 'Claude Code 完全指南',
  description: 'Anthropic 官方 AI 编程助手 - 中文文档',

  // 添加 lastUpdated 时间戳
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '核心功能', link: '/guide/features' },
      { text: '安装', link: '/guide/installation' },
      { text: '命令', link: '/guide/commands' },
      { text: '配置', link: '/guide/configuration' },
      { text: '示例', link: '/guide/examples' }
    ],

    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '快速开始', link: '/guide/' },
          { text: '安装', link: '/guide/installation' },
          { text: '命令参考', link: '/guide/commands' },
          { text: '配置指南', link: '/guide/configuration' }
        ]
      },
      {
        text: '核心功能',
        items: [
          { text: '功能概览', link: '/guide/features' }
        ]
      },
      {
        text: '实战示例',
        items: [
          { text: '使用示例', link: '/guide/examples' },
          { text: '高级技巧', link: '/guide/advanced' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anthropics/claude-code' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '© 2025 Claude Code 完全指南'
    }
  },

  markdown: {
    lineNumbers: true
  },

  highlight: {
    theme: 'github-dark',
    lineNumbers: true
  }
})
