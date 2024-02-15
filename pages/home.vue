<template>
    
  <div>
    <!-- test icon module -->
    <Icon name="uil:github" />
    <UButton icon="i-heroicons-magnifying-glass" />

    <!-- test dark module -->
 
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
  </div>
</template>

<script setup lang="ts">
// test dark module ###########
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

</script>