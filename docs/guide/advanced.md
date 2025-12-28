# 高级技巧

## 项目记忆 (CLAUDE.md)

使用 `#` 快捷方式为项目添加上下文记忆。

**用户**：
```
# 这是一个使用 TypeScript + React 的项目
# 测试框架是 Vitest
# 遵循 Airbnb 代码风格
```

**Claude Code**：
```
已保存到项目记忆。在后续对话中，我会遵循这些约定。
```

## Vim 模式

使用 `/vim` 启用 Vim 键位，支持：

- `hjkl` - 导航
- `w/e/b` - 单词跳转
- `dd` - 删除行
- `cc` - 修改行
- `yy` - 复制行
- `p` - 粘贴

```bash
/vim
```

## 成本追踪

使用 `/cost` 查看 Token 使用统计和成本。

```bash
/cost
```

输出示例：

```
Token 使用统计:
- 当前会话: 12,345 tokens
- 估算成本: $0.12
- 缓存命中: 45%
```

## 多模型支持

在 Opus、Sonnet、Haiku 之间切换。

```bash
claude config set model opus    # 最强模型
claude config set model sonnet  # 平衡模型
claude config set model haiku   # 快速模型
```

## 键盘快捷键

### 换行输入

- **快速转义**：输入 `\` 后按 Enter
- **macOS**：`Option` + `Enter`

### 其他快捷键

- `Ctrl/Cmd + K` - 快速聚焦搜索（如果有的话）
- `ESC` (按两次) - 返回顶部

## 管道处理示例

### 监控日志并报警

```bash
tail -f app.log | claude -p "如果发现异常就发送 Slack 通知"
```

### 批量处理错误

```bash
cat errors.txt | claude -p "分析并修复所有这些错误"
```

### Git 工作流

```bash
# 查看未暂存的变更
git diff | claude -p "审查这些更改"

# 查看最近一次提交
git show HEAD | claude -p "总结这个提交"
```

## CI/CD 集成

### GitHub Actions

```yaml
# .github/workflows/ai-review.yml
name: AI Code Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: AI Code Review
        run: |
          git diff origin/main | claude -p "审查代码质量并报告问题"
```

### Pre-commit Hook

```bash
# .git/hooks/pre-commit
git diff --cached | claude -p "检查即将提交的代码"
```

## 性能优化技巧

### 1. 使用更快的模型

对于简单任务，使用 Haiku 模型：

```bash
claude config set model haiku
```

### 2. 利用缓存

Claude Code 会缓存项目分析结果，第二次询问更快。

### 3. 精简上下文

只在需要时提供代码片段，而不是整个文件。

**用户**：
```
这个函数有什么问题？

function getUser(id) {
  return users.find(u => u.id === id)
}
```

**Claude Code**：
```
这个函数没有处理 users 为 null 的情况。

建议：添加空值检查。
```
