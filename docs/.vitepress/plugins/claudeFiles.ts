import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'
import type { Plugin } from 'vite'

export function claudeFilesPlugin(): Plugin {
  const claudeDir = join(process.cwd(), '.claude')
  const docsDir = join(process.cwd(), 'docs', 'claude')

  return {
    name: 'claude-files-plugin',

    buildStart() {
      // 构建开始时，将 .claude 文件复制到 docs/claude
      this.info('[Claude Files] Copying .claude files to docs/claude...')

      try {
        // 确保目标目录存在
        if (!existsSync(docsDir)) {
          mkdirSync(docsDir, { recursive: true })
          this.info(`[Claude Files] Created directory: ${docsDir}`)
        }

        const files = readdirSync(claudeDir).filter(f => f.endsWith('.md'))

        files.forEach(file => {
          const sourcePath = join(claudeDir, file)
          const destPath = join(docsDir, file)
          const content = readFileSync(sourcePath, 'utf-8')

          // 添加 front matter
          const pageContent = `---
title: ${file.replace('.md', '')}
---

${content}`

          writeFileSync(destPath, pageContent)
          this.info(`[Claude Files] Generated: docs/claude/${file}`)
        })

        this.info(`[Claude Files] Successfully copied ${files.length} files`)
      } catch (error) {
        this.warn(`[Claude Files] Failed to copy files: ${error}`)
      }
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
