
  
<template>
  <div>
    <header>Pre Setup</header>
    <hr>
    <slot />
    <hr>
    <footer>Make with ❤️</footer>
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
    class: 'test-body-class'
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
