<template>
  <header class="bg-gray-200">
    <nav class="flex items-center justify-between px-4 py-3">
      <div class="text-2xl font-bold">
        Nuxtul Pro
      </div>
      <div>
        <NuxtLink
          to="/pricing"
          class="mr-4"
        >
          Pricing
        </NuxtLink>
        <NuxtLink
          to="/templates"
          class="mr-4"
        >
          Templates
        </NuxtLink>
        <NuxtLink
          to="/releases"
          class="mr-4"
        >
          Releases
        </NuxtLink>
        <el-button @click="ElMessage('hello')">
          button
        </el-button>
        <ElButton
          :icon="ElIconEditPen"
          type="success"
        >
          button
        </ElButton>
        <LazyElButton type="warning">
          lazy button
        </LazyElButton>
      </div>
    </nav>
  </header>
</template>