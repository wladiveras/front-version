
  
<template>
  <html>
    <NuxtLoadingIndicator />
    <header>Pre Setup</header>
    <hr>
    <slot />

    <hr>
    <footer>Make with ❤️</footer>
  </html>
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

<style lang="scss">
header,
footer {
  text-align: center;
  font-weight: bold;
}
</style>
