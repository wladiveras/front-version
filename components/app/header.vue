<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const authRoutes = reactive({
  home: {
    name: 'Auth',
    path: 'home',
  },
  login: {
    name: 'Sign in',
    path: 'login',
  },
  register: {
    name: 'Create a account',
    path: 'register',
  },
})

const guestRoutes = reactive({
  home: {
    name: 'Home',
    path: 'home',
  },
  stove: {
    name: 'Stove',
    path: 'stove',
  },
})
</script>

<template>
  <header class="header-bg fixed start-0 top-0 z-20 w-full border-b">
    <div class="mx-auto max-w-screen-xl flex flex-wrap items-center justify-between p-4">
      <a href="https://github.com/wladiveras" class="flex items-center space-x-3 rtl:space-x-reverse">
        <div class="i-line-md:iconify1 h-2em w-2em" />
        <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Stoves</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <DarkToggle />
        <button data-collapse-toggle="navbar-sticky" type="button" class="h-10 w-10 inline-flex items-center justify-center rounded-lg p-2 text-sm text-gray-500 md:hidden hover:bg-gray-100 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div id="navbar-sticky" class="hidden w-full items-center justify-between md:order-1 md:w-auto md:flex">
        <ul v-if="userStore.auth" class="mt-4 flex flex-col border border-gray-100 rounded-lg p-4 font-medium md:mt-0 md:flex-row md:border-0 dark:border-gray-700 md:p-0 md:space-x-8 rtl:space-x-reverse">
          <li v-for="link in authRoutes" :key="link.path">
            <NuxtLink :to="link.path">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
        <ul v-else class="mt-4 flex flex-col border border-gray-100 rounded-lg p-4 font-medium md:mt-0 md:flex-row md:border-0 dark:border-gray-700 md:p-0 md:space-x-8 rtl:space-x-reverse">
          <li v-for="link in guestRoutes" :key="link.path">
            <NuxtLink :to="link.path">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style>
.header-bg {
  background-color: rgba(69, 73, 83, 0.396);
  backdrop-filter: blur(10px);
  border: none;
}
</style>
