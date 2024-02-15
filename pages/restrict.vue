<template>
  <div>
    Private
  </div>
</template>
  
  <script setup lang="ts">
  // Test Middleware
  definePageMeta({
    middleware: 'auth'
  })
  
  </script>