<script setup lang="ts">
defineProps<{
  type: 'user' | 'assistant'
  content: string
}>()
</script>

<template>
  <div class="chat-bubble" :class="type">
    <div class="flex items-center gap-2 mb-2">
      <span class="font-bold">{{ type === 'user' ? '👤 你' : '🤖 Claude Code' }}</span>
    </div>
    <div class="whitespace-pre-wrap">{{ content }}</div>
  </div>
</template>
