<template>
  <main class="min-h-screen flex flex-col justify-between">
    <AppHeader />
    <main class="mb-auto mt-[100px] min-h-screen bg-white dark:bg-slate-900">
      <slot />
    </main>
    <AppFooter />
  </main>
</template>
