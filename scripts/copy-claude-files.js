import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const claudeDir = join(process.cwd(), '.claude')
const docsDir = join(process.cwd(), 'docs', 'claude')

console.log('[Claude Files] Copying .claude files to docs/claude...')

try {
  // 确保目标目录存在
  if (!existsSync(docsDir)) {
    mkdirSync(docsDir, { recursive: true })
    console.log(`[Claude Files] Created directory: ${docsDir}`)
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
    console.log(`[Claude Files] Generated: docs/claude/${file}`)
  })

  console.log(`[Claude Files] Successfully copied ${files.length} files`)
} catch (error) {
  console.error(`[Claude Files] Failed to copy files: ${error}`)
  process.exit(1)
}
