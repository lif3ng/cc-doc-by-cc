import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import type { Plugin } from 'vite'
import type { PageData } from 'vitepress'

export function claudeFilesPlugin(): Plugin {
  const claudeDir = join(process.cwd(), '.claude')
  const virtualPagesDir = join(process.cwd(), 'docs', '.vitepress', 'cache', 'claude')

  return {
    name: 'claude-files-plugin',

    buildStart() {
      // 构建开始时，生成虚拟页面
      this.info('Generating .claude virtual pages...')
      try {
        const files = readdirSync(claudeDir).filter(f => f.endsWith('.md'))

        // 确保目标目录存在
        if (!existsSync(virtualPagesDir)) {
          mkdirSync(virtualPagesDir, { recursive: true })
        }

        files.forEach(file => {
          const content = readFileSync(join(claudeDir, file), 'utf-8')
          const pageContent = `---
title: ${file.replace('.md', '')}
---

${content}`

          writeFileSync(join(virtualPagesDir, file), pageContent)
          this.info(`Generated virtual page: ${file}`)
        })
      } catch (error) {
        this.warn(`Failed to generate .claude pages: ${error}`)
      }
    },

    resolveId(id) {
      // 解析虚拟模块 /claude/xxx.md
      if (id.startsWith('/claude/') && id.endsWith('.md')) {
        const fileName = id.split('/').pop()!
        const virtualPath = join(virtualPagesDir, fileName)

        if (existsSync(virtualPath)) {
          return virtualPath
        }

        // 如果缓存文件不存在，直接读取原文件
        const filePath = join(claudeDir, fileName)
        try {
          const content = readFileSync(filePath, 'utf-8')
          // 返回虚拟模块 ID
          return `virtual:claude:${fileName}`
        } catch {
          return null
        }
      }
    },

    load(id) {
      // 加载虚拟模块内容
      if (id.startsWith('virtual:claude:')) {
        const fileName = id.slice('virtual:claude:'.length)
        const filePath = join(claudeDir, fileName)

        try {
          const content = readFileSync(filePath, 'utf-8')
          // 返回带有 front matter 的 Markdown
          return `---
title: ${fileName.replace('.md', '')}
---

${content}`
        } catch (error) {
          return null
        }
      }

      // 从缓存加载
      if (id.startsWith(virtualPagesDir)) {
        try {
          return readFileSync(id, 'utf-8')
        } catch {
          return null
        }
      }
    },

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // 开发服务器处理 /claude/ 路径
        if (req.url?.startsWith('/claude/')) {
          const fileName = req.url.split('/claude/')[1]?.split('?')[0]
          const filePath = join(claudeDir, fileName)

          try {
            const content = readFileSync(filePath, 'utf-8')
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            // 返回一个简单的 HTML 页面用于预览
            res.end(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${fileName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }
    pre { background: #f6f8fa; padding: 16px; border-radius: 6px; overflow-x: auto; }
    code { background: #f6f8fa; padding: 2px 6px; border-radius: 3px; }
    h1 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
  </style>
</head>
<body>
  <h1>.claude/${fileName}</h1>
  <pre>${content}</pre>
</body>
</html>
            `)
          } catch (error) {
            res.statusCode = 404
            res.end('File not found')
          }
        } else {
          next()
        }
      })
    }
  }
}

// 获取 .claude 目录下的所有 Markdown 文件
export function getClaudeFiles() {
  const claudeDir = join(process.cwd(), '.claude')
  try {
    return readdirSync(claudeDir)
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        name: file,
        path: `/claude/${file}`
      }))
  } catch {
    return []
  }
}
