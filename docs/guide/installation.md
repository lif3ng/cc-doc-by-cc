# 安装指南

## 系统要求

- macOS、Linux 或 Windows (WSL)
- Node.js 16+ （可选，用于某些功能）

## 快速安装

### 默认安装方式

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Homebrew（macOS/Linux）

```bash
brew install claude-ai
```

### NPM

```bash
npm install -g @anthropic-ai/claude-code
```

### Windows（Scoop）

```powershell
scoop bucket add claude-ai
scoop install claude-code
```

## 首次启动

```bash
claude
```

首次运行时，Claude Code 会提示你：

1. 使用浏览器访问 Claude.ai
2. 授权 CLI 工具访问你的账户
3. 返回终端继续使用

## 验证安装

**用户**：
```
你好
```

**Claude Code**：
```
你好！我是 Claude Code，你的 AI 编程助手。
我可以帮你编写代码、调试程序、理解代码库等。有什么可以帮助你的吗？
```

## 更新

```bash
claude --update
```

## 卸载

```bash
rm ~/.claude
rm /usr/local/bin/claude
```
