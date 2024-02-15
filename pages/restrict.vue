<template>
  <div>
    <NuxtLayout>
      <NuxtLink to="/">
        voltar pro inicio
      </NuxtLink>
    </NuxtLayout>
  </div>
</template>
  
  <script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })
  </script>