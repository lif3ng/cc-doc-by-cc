# 代码高亮功能说明

## 已集成的技术

### Highlight.js
- **版本**: 11.10.0
- **主题**: GitHub Dark
- **CDN**: jsDelivr

### 支持的语言
- Bash / Shell
- JavaScript / TypeScript
- Python
- JSON / YAML
- HTML / CSS
- SQL
- Markdown
- Git 配置

## 功能特性

### 1. 代码高亮
自动检测语言并应用语法高亮，支持 180+ 种编程语言。

### 2. 专业复制按钮
- 图标按钮设计
- 点击后显示"已复制"状态（绿色对勾）
- 2秒后自动恢复
- 支持 Navigator Clipboard API

### 3. 代码块头部
- 显示编程语言标签
- 复制按钮位于右上角
- 半透明背景，现代化设计

### 4. 响应式设计
- 代码块自适应容器宽度
- 移动端友好的字体大小
- 横向滚动支持

## 样式配置

### 代码块结构
```html
<div class="code-block">
    <div class="code-header">
        <span class="code-language">bash</span>
        <button class="copy-btn" onclick="copyCode(this)">
            <svg>...</svg>
            <span>复制</span>
        </button>
    </div>
    <pre><code class="language-bash">代码内容</code></pre>
</div>
```

### 自定义样式
位置：`<style>` 标签中

```css
.code-block {
    background: #0d1117; /* GitHub Dark 背景 */
    border-radius: 0.5rem;
}

.code-header {
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.copy-btn.copied {
    background: rgba(34, 197, 94, 0.2); /* 绿色成功状态 */
    border-color: rgba(34, 197, 94, 0.4);
    color: #22c55e;
}
```

## JavaScript 功能

### 自动初始化
```javascript
hljs.highlightAll();
```

### 复制功能
```javascript
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code');
    const textToCopy = code.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
        // 显示"已复制"状态
        // 2秒后恢复
    });
}
```

### 语言自动检测
自动从 `language-*` 类名提取语言，并显示友好的语言名称。

## 主题切换

### 可用主题 (Highlight.js)
- github-dark (当前)
- monokai
- atom-one-dark
- vs2015
- dracula

切换方式：
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.10.0/styles/THEME_NAME.min.css">
```

## 优势

1. ✅ **成熟稳定**: Highlight.js 是业界标准的代码高亮库
2. ✅ **自动检测**: 智能识别编程语言
3. ✅ **性能优秀**: 轻量级，加载快速
4. ✅ **可访问性**: 支持屏幕阅读器
5. ✅ **跨浏览器**: 支持所有现代浏览器
6. ✅ **易于维护**: 清晰的代码结构

## 使用示例

### Bash 代码
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### JavaScript 代码
```javascript
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
```

### Python 代码
```python
def hello(name):
    print(f"Hello, {name}!")
```

## 更新日志

- 2025-01-XX: 集成 Highlight.js 11.10.0
- 2025-01-XX: 添加专业复制按钮
- 2025-01-XX: 实现代码块头部设计
- 2025-01-XX: 支持多语言语法高亮
