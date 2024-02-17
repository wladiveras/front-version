<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '.dark' : '.light',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="i-meteocons:overcast-day-fill dark:i-meteocons:overcast-night-drizzle text-4xl text-gray-500 dark:text-gray-400" />
  </button>
</template>
