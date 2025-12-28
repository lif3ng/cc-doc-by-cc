<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  language?: string
  code: string
}>()

const isCopied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>

<template>
  <div class="code-block">
    <div class="code-header">
      <span class="code-language">{{ language || 'CODE' }}</span>
      <button class="copy-btn" :class="{ copied: isCopied }" @click="copyCode">
        <svg v-if="!isCopied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>{{ isCopied ? '已复制' : '复制' }}</span>
      </button>
    </div>
    <pre><code>{{ code }}</code></pre>
  </div>
</template>
