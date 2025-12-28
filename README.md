# Claude Code 完全指南

<div align="center">

**Anthropic 官方 AI 编程助手 - 中文文档**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883)](https://vuejs.org/)
[![VitePress](https://img.shields.io/badge/VitePress-1.6-6c8fb9)](https://vitepress.dev/)

[在线预览](https://lif3ng.github.io/cc-doc-by-cc/) • [快速开始](#快速开始) • [贡献指南](#贡献)

</div>

## 📖 简介

这是 Claude Code 的中文文档项目，提供了完整的安装指南、命令参考、配置说明和实战示例。

### 🤖 特别说明

本项目完全由 **Claude Code** 生成，展示了 AI 辅助开发的强大能力：

- **项目架构**: 通过对话描述需求，自动规划技术栈
- **环境搭建**: 自动配置开发环境和依赖
- **内容编写**: 基于最佳实践生成文档
- **代码实现**: 创建所有必要的配置和组件

## ✨ 特性

- 📚 **完整文档**: 涵盖安装、配置、命令、示例等各个方面
- 🎨 **现代设计**: 基于 DaisyUI + Tailwind CSS 的优雅界面
- ⚡ **快速开发**: VitePress 提供卓越的开发体验
- 🔍 **易于搜索**: 结构化的内容组织
- 📱 **响应式**: 完美支持各种设备

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0
- pnpm (推荐) / npm / yarn

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 本地开发

```bash
# 启动开发服务器
pnpm docs:dev

# 或
npm run docs:dev
```

访问 http://localhost:5173 查看文档

### 构建生产版本

```bash
# 构建静态文件
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

## 📁 项目结构

```
cc-doc-by-cc/
├── docs/                      # 文档源文件
│   ├── .vitepress/           # VitePress 配置
│   │   └── config.ts         # 站点配置
│   ├── guide/                # 文档内容
│   │   ├── index.md          # 快速开始
│   │   ├── features.md       # 核心功能
│   │   ├── installation.md   # 安装指南
│   │   ├── commands.md       # 命令参考
│   │   ├── configuration.md  # 配置指南
│   │   ├── examples.md       # 使用示例
│   │   └── advanced.md       # 高级技巧
│   ├── public/               # 静态资源
│   └── index.md              # 首页
├── .github/workflows/        # GitHub Actions
│   └── deploy.yml            # 自动部署配置
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ 技术栈

- **VitePress** - Vue 官方静态站点生成器
- **Vue 3** - 渐进式 JavaScript 框架
- **Tailwind CSS** - 实用优先的 CSS 框架
- **DaisyUI** - 优雅的组件库
- **TypeScript** - 类型安全的 JavaScript

## 📝 可用脚本

```bash
# 开发
pnpm docs:dev          # 启动开发服务器

# 构建
pnpm docs:build        # 构建生产版本

# 预览
pnpm docs:preview      # 预览构建结果
```

## 🌐 部署

### GitHub Pages

本项目已配置 GitHub Actions 自动部署到 GitHub Pages。

#### 部署步骤

1. **Fork 或创建仓库**

   将本项目推送到 GitHub 仓库（仓库名：`cc-doc-by-cc`）

2. **配置 GitHub Pages**

   - 进入仓库 **Settings** → **Pages**
   - Source 选择：**GitHub Actions**

3. **自动部署**

   每次推送到 `main` 分支时，GitHub Actions 会自动构建并部署到 GitHub Pages

4. **访问网站**

   部署完成后，访问：
   ```
   https://lif3ng.github.io/cc-doc-by-cc/
   ```

#### 自定义域名（可选）

1. 在仓库根目录创建 `CNAME` 文件，内容为你的域名：
   ```
   docs.yourdomain.com
   ```

2. 在域名 DNS 设置中添加 CNAME 记录指向：
   ```
   lif3ng.github.io
   ```

### 其他部署平台

#### Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

#### Netlify

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
netlify deploy --prod
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 文档编辑

直接编辑 `docs/guide/` 下的 Markdown 文件即可。修改后推送到 GitHub，会自动触发部署。

## 📚 文档内容

### 入门指南
- **快速开始** - 5 分钟上手 Claude Code
- **安装** - 详细的安装指南
- **命令参考** - 常用命令说明
- **配置指南** - 权限模式、环境变量等

### 核心功能
- **功能概览** - 所有核心功能介绍
- **从描述构建功能** - 自然语言编程
- **智能调试修复** - 快速定位和修复 Bug
- **导航代码库** - 理解任意项目

### 实战示例
- **使用示例** - 真实场景演示
- **高级技巧** - Vim 模式、成本追踪等

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源。

## 🙏 致谢

- [Claude Code](https://code.claude.com/) - 强大的 AI 编程助手
- [VitePress](https://vitepress.dev/) - 优秀的文档生成工具
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架

## 📮 联系方式

如有问题或建议，欢迎提交 [Issue](https://github.com/lif3ng/cc-doc-by-cc/issues)。

## 🔗 相关链接

- [Claude Code 官方文档](https://docs.anthropic.com/en/docs/claude-code)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
- [MCP 协议文档](https://modelcontextprotocol.io/)

---

<div align="center">

**由 Claude Code 生成 🤖**

Made with ❤️ by Claude Code

</div>
