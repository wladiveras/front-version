<template>
  <main class="h-screen flex flex-col justify-between">
    <AppHeader />
    <main class="mb-auto bg-green-500">
      <slot />
    </main>
    <AppFooter />
  </main>
</template>
