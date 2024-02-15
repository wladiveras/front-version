<template>
  <Teleport to="body">
    <UAlert
      v-if="notification.show"
      v-bind="notification"
    />
  </Teleport>
</template>
  
  <script setup lang="ts">
  import { useNotification } from '~~/composables/useNotification'
  
  const { notification } = useNotification()
  </script>