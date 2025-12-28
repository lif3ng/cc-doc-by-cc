# 实战示例

通过真实场景学习如何使用 Claude Code 提升开发效率。

## 🚀 添加新功能：用户认证系统

**用户**：
```
添加用户登录功能，使用 JWT 进行身份验证，包含注册、登录、登出三个端点
```

**Claude Code**：
```
我来帮你添加用户认证功能。让我先了解一下项目结构...

我发现了以下内容：
- 使用 Express.js 框架
- 已有用户模型 (models/User.js)
- 使用 MongoDB 数据库

我将创建以下文件：
1. middleware/auth.js - JWT 验证中间件
2. routes/auth.js - 认证路由
3. controllers/authController.js - 认证控制器

是否继续？
```

**用户**：
```
继续
```

**Claude Code**：
```
正在创建文件...

✓ 创建 middleware/auth.js
✓ 创建 routes/auth.js
✓ 创建 controllers/authController.js
✓ 更新 app.js 添加认证路由

需要安装依赖：
- jsonwebtoken
- bcryptjs

是否现在安装？
```

## 🐛 修复 Bug：API 返回错误

**用户**：
```
API 返回 500 错误，这是错误日志：

TypeError: Cannot read properties of undefined (reading 'map')
  at getUserPosts (controllers/postController.js:25:18)
```

**Claude Code**：
```
问题定位：postController.js:25:18

代码尝试对 undefined 调用 .map() 方法。

修复方案：在使用 .map() 前检查数组是否存在。

正在修复...
```

## 🔧 代码重构：优化组件结构

**用户**：
```
UserProfile 组件太大了，有 500+ 行代码。帮我将它拆分成更小的组件
```

**Claude Code**：
```
正在分析 UserProfile 组件...

我发现这个组件包含以下功能：
1. 用户基本信息展示
2. 头像上传
3. 密码修改
4. 邮箱验证
5. 账户删除

建议拆分为以下组件：
- UserProfileHeader - 用户信息展示
- AvatarUpload - 头像上传
- PasswordChange - 密码修改
- EmailVerification - 邮箱验证
- AccountDelete - 账户删除

重构完成！新结构：
- UserProfile.js: 120 行 (从 500+ 行减少)
- 各个子组件: 50-80 行
```

## 📝 Git 工作流：创建 Commit

**用户**：
```
创建一个 commit
```

**Claude Code**：
```
正在检查 Git 状态...

发现以下变更：
修改的文件：
- src/auth.js: 添加 JWT 验证
- src/routes/userRoutes.js: 更新用户路由
- package.json: 新增依赖

建议的 commit 信息：
feat: add JWT authentication system

- Implement JWT token generation and validation
- Add user registration, login, and logout endpoints

是否使用此 commit 信息？
```

## ✅ 编写测试：覆盖业务逻辑

**用户**：
```
为 authController.js 编写完整的单元测试
```

**Claude Code**：
```
正在分析 authController.js...

发现以下需要测试的函数：
1. register - 用户注册
2. login - 用户登录
3. logout - 用户登出
4. refreshToken - 刷新令牌

运行结果：

PASS  tests/authController.test.js
  Auth Controller
    register
      ✓ 应该成功注册新用户
      ✓ 应该拒绝重复邮箱
    login
      ✓ 应该使用正确凭据登录
      ✓ 应该返回 JWT token

Tests: 8 passed, 8 total
Coverage: 95%
```

## 📚 文档编写：API 文档

**用户**：
```
为所有 API 端点生成 OpenAPI/Swagger 文档
```

**Claude Code**：
```
正在扫描 API 路由...

发现的端点：
- POST /api/auth/register
- POST /api/auth/login
- GET /api/users/:id
... 共 25 个端点

正在生成文档...

✓ 创建 swagger.json
✓ 创建 docs/api.md
✓ 添加 JSDoc 注释
✓ 配置 Swagger UI

访问文档：http://localhost:3000/api-docs
```

## 高级使用技巧

### 1. 使用项目记忆

在 CLAUDE.md 中记录项目约定，Claude Code 会遵循这些约定。

```markdown
# 项目约定
- 使用 TypeScript 严格模式
- 组件放在 src/components
- 测试文件放在 __tests__ 目录
```

### 2. 批量处理任务

一次提出多个相关任务，Claude Code 会按逻辑顺序执行。

```bash
> claude
1. 为所有 API 添加错误处理
2. 编写对应的测试
3. 更新文档
4. 创建 PR
```

### 3. 管道组合

将 Claude Code 与其他工具组合使用。

```bash
# 查找所有 TODO 并生成任务清单
grep -r "TODO" src/ | claude -p "整理成 GitHub issues"

# 监控日志并自动报警
tail -f app.log | claude -p "如果发现异常就通知我"
```
