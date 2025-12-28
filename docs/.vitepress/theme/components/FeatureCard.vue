<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <div class="text-5xl mb-4">{{ icon }}</div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="text-base-content/70">{{ description }}</p>
    </div>
  </div>
</template>
