<script setup lang="ts">
const online = useOnline()

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <Page v-if="online" />

        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
