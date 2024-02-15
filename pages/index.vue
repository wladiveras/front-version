<template>
  <NuxtLayout>
    <div>
      <NuxtLink to="/restrict">
        Restrict
      </NuxtLink>

      <!-- test icon module -->
      <Icon name="uil:github" />
      <UButton icon="i-heroicons-magnifying-glass" />

      <!-- test dark module -->
      <ColorMode />

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
  </NuxtLayout>
</template>

<script setup lang="ts">
import ColorMode from '~/components/shared/color-mode.vue';


// test animate module ###########
const items = ref(["😏","😐","😑","😒","😕"])

function removeItem(toRemove: string) {
  items.value = items.value.filter((item) => item !== toRemove)
}
</script>