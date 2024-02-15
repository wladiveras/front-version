<template>
  <div>
    <NuxtLink to="/">
      voltar pro inicio
    </NuxtLink>
  </div>
</template>
  
  <script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })
  </script>