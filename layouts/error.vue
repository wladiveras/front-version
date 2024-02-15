<template>
  <div>
    <h1>Something wrong.</h1>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  title: 'Something wrong...',
  meta: [
    { name: 'description', content: config.public.description }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>