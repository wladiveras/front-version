
  
<template>
  <div>
    <BaseHeader />
    <hr>
    <slot />
    
    <hr>
    <BaseFooter />
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
