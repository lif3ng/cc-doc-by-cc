// ===== 初始化 Highlight.js 代码高亮 =====
document.addEventListener('DOMContentLoaded', function() {
    // 初始化代码高亮
    hljs.highlightAll();

    // 为代码块添加更好的复制功能
    document.querySelectorAll('.code-block').forEach(block => {
        const code = block.querySelector('code');
        if (!code) return;

        // 自动检测语言并添加标签
        if (!block.querySelector('.code-language')) {
            const header = block.querySelector('.code-header');
            if (header) {
                const languageSpan = document.createElement('span');
                languageSpan.className = 'code-language';

                // 获取语言类名
                const langClass = Array.from(code.classList)
                    .find(cls => cls.startsWith('language-'));

                if (langClass) {
                    const lang = langClass.replace('language-', '');
                    const langNames = {
                        'bash': 'Bash',
                        'sh': 'Shell',
                        'javascript': 'JavaScript',
                        'js': 'JavaScript',
                        'typescript': 'TypeScript',
                        'ts': 'TypeScript',
                        'python': 'Python',
                        'py': 'Python',
                        'json': 'JSON',
                        'yaml': 'YAML',
                        'yml': 'YAML',
                        'markdown': 'Markdown',
                        'md': 'Markdown',
                        'html': 'HTML',
                        'css': 'CSS',
                        'scss': 'SCSS',
                        'sql': 'SQL',
                        'git': 'Git'
                    };
                    languageSpan.textContent = langNames[lang] || lang.toUpperCase();
                } else {
                    languageSpan.textContent = 'CODE';
                }

                header.insertBefore(languageSpan, header.firstChild);
            }
        }
    });
});

// ===== 复制代码功能 =====
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code');

    // 获取纯文本内容
    const textToCopy = code.textContent || code.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        // 更新按钮状态
        const icon = button.querySelector('svg');
        const span = button.querySelector('span');

        if (icon) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
        }
        if (span) {
            span.textContent = '已复制';
        }

        button.classList.add('copied');

        // 2秒后恢复
        setTimeout(() => {
            if (icon) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>';
            }
            if (span) {
                span.textContent = '复制';
            }

            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);

        const span = button.querySelector('span');
        if (span) {
            span.textContent = '失败';
        }

        setTimeout(() => {
            if (span) {
                span.textContent = '复制';
            }
        }, 2000);
    });
}

// ===== 平滑滚动 =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===== 返回顶部按钮 =====
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.createElement('button');
    backToTop.className = 'fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center';
    backToTop.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    `;
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: hsl(var(--p));
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 50;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transform: translateY(20px);
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
            backToTop.style.transform = 'translateY(0)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
            backToTop.style.transform = 'translateY(20px)';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ===== 滚动动画观察器 =====
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有卡片元素
    document.querySelectorAll('.card, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== 导航栏滚动效果 =====
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // 添加阴影
        if (currentScroll > 10) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }

        lastScroll = currentScroll;
    });
});

// ===== 键盘快捷键 =====
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 快速聚焦搜索（如果有的话）
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // ESC 返回顶部
    if (e.key === 'Escape' && (e.ctrlKey || e.metaKey)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

console.log('🎨 Claude Code 文档已加载 | Highlight.js 代码高亮已启用');
