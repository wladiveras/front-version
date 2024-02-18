<template>
  <main class="min-h-screen flex flex-col justify-between">
    <AppHeader />
    <section class="mb-auto mt-[100px] min-h-screen bg-white dark:bg-slate-900">
      <slot />
    </section>
    <AppFooter />
  </main>
</template>
