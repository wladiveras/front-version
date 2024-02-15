<template>
  <div>
    <NuxtLink to="/home">
      home
    </NuxtLink>

    <!-- test icon module -->
    <Icon name="uil:github" />
    <UButton icon="i-heroicons-magnifying-glass" />

    <!-- test dark module -->
    <BaseColorMode />
    <UButton
      label="Show toast"
      @click="error('w','w')"
    />
    <!-- test animate -->
    <ul v-auto-animate>
      <li
        v-for="item in items"
        :key="item"
        @click="removeItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useNotification } from '~/composables/useNotification'

const { error, warn, info, success } = useNotification()

// test animate module ###########
const items = ref(["😏","😐","😑","😒","😕"])

function removeItem(toRemove: string) {
  items.value = items.value.filter((item) => item !== toRemove)
}
</script>