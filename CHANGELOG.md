# 变更日志

本文档记录项目的所有重要变更。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [未发布]

### 新增
- Claude Code 提交规范系统
  - `.claude/commit-conventions.md` - 提交规范定义
  - `CHANGELOG.md` - 变更日志文件

---

## 1.0.0 - 2025-12-29

### 新增
- 初始项目结构
  - VitePress + Vue 3 技术栈
  - Tailwind CSS + DaisyUI 样式系统
  - 完整的文档内容（安装、命令、配置、示例、高级技巧）
- GitHub Actions 自动部署
  - 配置 GitHub Pages 自动部署流程
- 项目元数据文件
  - `README.md` - 项目说明
  - `LICENSE` - MIT 许可证
  - `.gitignore` - Git 忽略规则

### 文档
- 首页：Hero 区域 + 功能概览 + 关于本站
- 入门指南
  - 快速开始
  - 安装指南
  - 命令参考
  - 配置指南
- 核心功能
  - 功能概览
- 实战示例
  - 使用示例
  - 高级技巧

### 配置
- VitePress 配置
  - 导航结构
  - 侧边栏
  - 社交链接
- GitHub Actions 工作流
  - 自动构建和部署
- Tailwind CSS + DaisyUI 配置

### 修复
- 修复 GitHub Actions pnpm setup 顺序问题
- 调整 VitePress `base` 配置以支持 GitHub Pages

### 部署
- 成功部署到 https://lif3ng.github.io/cc-doc-by-cc/

---

## 提交历史

### 2025-12-29
- **提交**: `chore: 触发 GitHub Pages 重新部署`
  - 用户需求：用户要求配置完成后重新部署
  - 改动：创建空提交触发 GitHub Actions

- **提交**: `fix: 调整 pnpm setup 顺序以修复 GitHub Actions 构建失败`
  - 用户需求：用户报告 GitHub Actions 构建失败
  - 改动：
    - 调整 `.github/workflows/deploy.yml` 中的步骤顺序
    - 将 pnpm setup 移到 setup Node 之前

- **提交**: `Initial commit: Claude Code 中文文档 - 由 Claude Code 生成 🤖`
  - 用户需求：用户要求将项目提交到 GitHub 并通过 GitHub Pages 部署
  - 改动：
    - 创建完整的项目结构
    - 生成所有文档内容
    - 配置 GitHub Actions 工作流
    - 创建 README、LICENSE 等元数据文件
