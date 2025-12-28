# 命令参考

## CLI 命令

### 基础用法

| 命令 | 说明 | 示例 |
|------|------|------|
| `claude` | 启动交互式会话 | `claude` |
| `claude "任务"` | 执行一次性任务 | `claude "解释这个项目"` |
| `claude -p "查询"` | 查询后退出 | `claude -p "解释这个函数"` |
| `cat file \| claude -p` | 处理管道内容 | `cat logs.txt \| claude -p "分析"` |
| `claude -c` | 继续最近的对话 | `claude -c` |

### Git 集成

| 命令 | 说明 |
|------|------|
| `claude commit` | 创建 Git 提交 |

## 斜杠命令

在交互式会话中可用的命令：

| 命令 | 说明 |
|------|------|
| `/help` | 显示帮助信息 |
| `/clear` | 清除对话历史 |
| `/config` | 查看或修改配置 |
| `/cost` | 显示 Token 使用统计 |
| `/init` | 初始化项目指南 |
| `/memory` | 编辑记忆文件 |
| `/review` | 请求代码审查 |
| `/vim` | 进入/退出 Vim 模式 |

## 使用示例

### 理解代码库

**用户**：
```
这个项目是做什么的？

主要模块有哪些？
```

**Claude Code**：
```
我会分析项目结构，找出关键模块和它们的职责...
```

### 修复 Bug

**用户**：
```
修复登录页面的验证错误
```

**Claude Code**：
```
让我先看看登录相关的代码和错误日志...
```

### Git 工作流

**用户**：
```
创建一个 commit
```

**Claude Code**：
```
正在检查 Git 状态...

发现以下变更：
- src/auth.js: 添加 JWT 验证
- src/routes/userRoutes.js: 更新用户路由

建议的 commit 信息：
feat: add JWT authentication system

是否使用此 commit 信息？
```
