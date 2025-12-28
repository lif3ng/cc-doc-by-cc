# 配置指南

Claude Code 提供了丰富的配置选项，让你可以根据使用场景自定义行为。

## 配置文件

Claude Code 使用分层配置系统，支持多个配置文件：

### 配置文件优先级

1. **项目配置** - `.claude/settings.json`（项目特定，可提交到版本控制）
2. **用户配置** - `~/.claude/settings.json`（全局配置，应用于所有项目）
3. **替代位置** - `~/.claude.json` 或 `~/.claude/claude.json`

### 基本配置示例

**用户配置** `~/.claude/settings.json`：
```json
{
  "permissionMode": "acceptEdits",
  "model": "sonnet",
  "autoAcceptEdits": true
}
```

**项目配置** `.claude/settings.json`：
```json
{
  "permissionMode": "default",
  "systemPrompt": "你是一个专注于 TypeScript 项目的助手",
  "dangerouslySkipPermissions": false
}
```

## 权限模式

权限模式控制 Claude Code 在执行操作前是否需要确认。

### 可用模式

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| `default` | 默认模式，需要手动确认 | 日常开发，确保安全 |
| `acceptEdits` | 自动接受编辑操作 | 信任的代码库 |
| `bypassPermissions` | 跳过所有权限检查 | 沙盒环境 |
| `dontAsk` | 不询问，直接执行 | 自动化脚本 |
| `plan` | 计划模式，只规划不执行 | 代码审查 |

### 命令行使用

```bash
# 自动接受编辑
claude --permission-mode acceptEdits

# 跳过所有权限检查
claude --dangerously-skip-permissions

# 不询问直接执行
claude --permission-mode dontAsk

# 计划模式
claude --permission-mode plan
```

### 配置文件设置

```json
{
  "permissionMode": "acceptEdits"
}
```

### 交互式设置

在 Claude Code 会话中输入：
```
/config
```

打开配置界面，可以交互式调整权限模式。

## 命令行参数

### 常用参数

```bash
# 权限相关
--permission-mode <mode>           # 设置权限模式
--dangerously-skip-permissions     # 跳过所有权限检查
--allow-dangerously-skip-permissions # 允许使用跳过权限选项

# 模型相关
--model <model>                    # 指定模型 (sonnet, opus, haiku)
--fallback-model <model>           # 设置备用模型

# 会话相关
-c, --continue                     # 继续上一次对话
-r, --resume [session-id]          # 恢复指定会话
--no-session-persistence           # 不保存会话

# 输出相关
-p, --print                        # 非交互模式，输出后退出
--output-format <format>           # 输出格式 (text, json, stream-json)
--verbose                          # 详细输出

# 工具相关
--allowed-tools <tools>            # 允许的工具列表
--disallowed-tools <tools>         # 禁用的工具列表
--tools <tools>                    # 指定可用工具集

# 其他
--debug [filter]                   # 调试模式
--system-prompt <prompt>           # 自定义系统提示
--settings <file>                  # 加载指定配置文件
--add-dir <dirs>                   # 添加额外可访问目录
```

### 实用示例

```bash
# 开发时自动接受编辑
claude --permission-mode acceptEdits

# 使用 Haiku 模型快速处理简单任务
claude --model haiku "修复所有 lint 错误"

# 只读模式分析代码
claude --allowed-tools "Read,Grep" -p "分析项目结构"

# JSON 输出用于脚本
echo "重构这个组件" | claude -p --output-format json

# 调试模式查看详细信息
claude --debug api,hooks

# 继续上一次对话
claude -c
```

## 工具权限管理

### 限制可用工具

```bash
# 只允许读取和搜索
claude --allowed-tools "Read Grep"

# 禁用写操作
claude --disallowed-tools "Write Edit Bash"

# 使用默认工具集
claude --tools "default"

# 禁用所有工具
claude --tools ""
```

### 工具权限语法

```bash
# 允许特定模式的 Bash 命令
claude --allowed-tools "Bash(git:*)"

# 组合多个工具权限
claude --allowed-tools "Read Write Edit Bash(git:*,npm:*)"
```

## 自动确认配置

### 方法一：命令行参数

```bash
# 自动接受编辑
claude --permission-mode acceptEdits

# 完全跳过确认（谨慎使用）
claude --dangerously-skip-permissions
```

### 方法二：配置文件

**~/.claude/settings.json**：
```json
{
  "permissionMode": "acceptEdits",
  "autoAcceptEdits": true
}
```

### 方法三：交互式配置

在 Claude Code 中：
```
/config
```

在配置界面中找到 "Auto-accept edits" 选项并启用。

## VS Code 扩展配置

### 设置方式

**方式一：通过 VS Code 设置界面**

1. 打开设置 (`Ctrl/Cmd + ,`)
2. 搜索 "Claude Code"
3. 配置相关选项

**方式二：通过 settings.json**

```json
{
  "claude-code.autoAcceptEdits": true,
  "claude-code.permissionMode": "acceptEdits",
  "claude-code.model": "sonnet",
  "claude-code.enableDangerouslySkipPermissions": true
}
```

### VS Code 特有配置

```json
{
  // 自动连接 IDE
  "claude-code.autoConnectIde": true,

  // 显示内联建议
  "claude-code.enableInlineSuggestions": true,

  // 启用调试模式
  "claude-code.debugMode": true
}
```

## 环境变量

Claude Code 也支持通过环境变量配置：

```bash
# 设置 API 密钥
export ANTHROPIC_API_KEY="your-api-key"

# 设置默认模型
export CLAUDE_MODEL="sonnet"

# 设置权限模式
export CLAUDE_PERMISSION_MODE="acceptEdits"

# 设置配置文件路径
export CLAUDE_SETTINGS_PATH="/path/to/settings.json"
```

## 项目记忆配置

### CLAUDE.md 文件

在项目根目录创建 `CLAUDE.md` 文件，为项目提供上下文：

**CLAUDE.md**：
```markdown
# 项目约定

- 使用 TypeScript 严格模式
- 组件放在 src/components 目录
- 测试文件放在 __tests__ 目录
- 遵循 Airbnb 代码风格
- 使用 Vitest 作为测试框架

# 常用命令

- 测试: npm test
- 构建: npm run build
- 开发: npm run dev
```

### 使用项目记忆

在 Claude Code 中使用 `#` 快速添加项目记忆：

```
# 这是一个 React + TypeScript 项目
# 使用 Tailwind CSS 进行样式开发
# 遵循组件化开发原则
```

## 高级配置

### 自定义系统提示

```bash
# 命令行方式
claude --system-prompt "你是一个专注于性能优化的助手"

# 配置文件方式
{
  "systemPrompt": "你是一个专注于 TypeScript 的高级开发助手"
}

# 追加系统提示
claude --append-system-prompt "始终遵循 SOLID 原则"
```

### MCP 服务器配置

**通过命令行**：
```bash
claude mcp install github
claude mcp install brave-search
```

**通过配置文件**：
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-brave-search"]
    }
  }
}
```

### 自定义 Agents

```bash
# 命令行方式
claude --agents '{
  "reviewer": {
    "description": "代码审查专家",
    "prompt": "你是一个专注于代码质量和最佳实践的审查者"
  }
}'

# 配置文件方式
{
  "agents": {
    "reviewer": {
      "description": "代码审查专家",
      "prompt": "你是一个专注于代码质量和最佳实践的审查者"
    }
  }
}
```

## 配置最佳实践

### 1. 根据环境选择权限模式

**开发环境**：
```json
{
  "permissionMode": "acceptEdits"
}
```

**生产环境**：
```json
{
  "permissionMode": "default"
}
```

**CI/CD 环境**：
```bash
claude -p --permission-mode bypassPermissions --output-format json
```

### 2. 使用项目配置覆盖

项目配置 `.claude/settings.json` 可以覆盖全局设置，适合：
- 团队协作时的统一规范
- 特定项目的特殊需求
- 敏感操作的安全限制

### 3. 分层配置建议

```
全局配置 (~/.claude/settings.json)
  ├── 默认模型
  ├── 通用权限模式
  └── 个人偏好

项目配置 (.claude/settings.json)
  ├── 项目特定提示
  ├── 团队规范
  └── 工具限制
```

### 4. 安全建议

- ⚠️ 避免在公共代码库中使用 `bypassPermissions`
- ✅ 在沙盒或隔离环境中使用自动确认
- ✅ 定期审查配置文件
- ✅ 使用 `--allowed-tools` 限制工具访问

## 配置文件完整示例

**用户全局配置** `~/.claude/settings.json`：
```json
{
  "model": "sonnet",
  "permissionMode": "acceptEdits",
  "autoAcceptEdits": true,
  "debugMode": false,
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"]
    }
  }
}
```

**项目配置** `.claude/settings.json`：
```json
{
  "permissionMode": "default",
  "systemPrompt": "这是一个 TypeScript + React 项目，使用 Vite 构建",
  "allowedTools": ["Read", "Write", "Edit", "Bash(npm:*,git:*)"],
  "maxBudgetUsd": 10.0
}
```

## 故障排查

### 配置不生效？

1. 检查配置文件位置是否正确
2. 确认 JSON 格式是否有效
3. 使用 `--debug` 查看加载的配置
4. 检查优先级（项目 > 用户）

### 查看当前配置

```bash
# 使用调试模式
claude --debug config

# 查看配置文件
cat ~/.claude/settings.json
cat .claude/settings.json
```

### 重置配置

```bash
# 删除用户配置
rm ~/.claude/settings.json

# 删除项目配置
rm .claude/settings.json

# 使用默认配置重启
claude
```

## 相关链接

- [命令参考](/guide/commands)
- [高级技巧](/guide/advanced)
- [官方配置文档](https://code.claude.com/docs/en/settings)
