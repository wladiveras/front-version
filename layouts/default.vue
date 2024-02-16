<template>
  <main class="flex flex-col h-screen justify-between">
    <Header />
    <main class="mb-auto bg-green-500">
      <slot />
    </main>
    <Footer />
  </main>
</template>
