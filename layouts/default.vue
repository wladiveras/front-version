<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  title: config.public.name,
  meta: [
    { name: 'description', content: config.public.description }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>