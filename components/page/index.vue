<script setup lang="ts">
const config = useRuntimeConfig()

const { pending, data: stoves } = useLazyFetch('/api/stove/1', {
  baseURL: config.public.apiURL,
})
</script>

<template>
  <div v-if="!pending">
    <div class="mb-[100px] mt-4 w-full flex flex-wrap items-center justify-center gap-x-4 p-2 text-4xl">
      <h1 class="mb-4 text-3xl text-gray-900 font-extrabold lg:text-6xl md:text-5xl dark:text-white">
        <span class="from-sky-400 to-emerald-600 bg-gradient-to-r bg-clip-text text-transparent">Stoves</span> <br>
      </h1>

      <p class="w-full text-center text-lg text-gray-500 font-normal lg:text-xl dark:text-gray-400">
        Interview Stove Project Case
      </p>

      <div class="mt-20 max-w-sm w-full">
        <a href="#">
          <div class="i-mdi:stove m-auto h-5em w-5em" />
        </a>
        <div class="px-5 pb-5">
          <h5 class="text-center text-xl text-gray-900 font-semibold tracking-tight dark:text-white">
            Mega Power Stove
          </h5>
        </div>
      </div>
    </div>
    <div id="about" class="m-auto mb-[100px] max-w-[40rem] rounded-lg bg-white p-4 dark:bg-gray-800 md:p-8" role="tabpanel" aria-labelledby="about-tab">
      <h2 class="mb-[70px] w-full text-center text-2xl text-gray-900 font-extrabold tracking-tight dark:text-white">
        Stove {{ stoves.data.brand }} Specification
      </h2>
      <!-- List -->
      <div class="flex flex-wrap">
        <div class="w-[50%] flex-auto">
          <ul role="list" class="text-gray-500 space-y-4 dark:text-gray-400">
            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Brand: <b>{{ stoves.data.brand }}</b>
              </span>
            </li>
            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Burners: <b>{{ stoves.data.burners }}</b>
              </span>
            </li>
            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Lighters Button: <b>{{ stoves.data.lighters }}</b>
              </span>
            </li>
            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Oven: <b>{{ stoves.data.oven }}</b>
              </span>
            </li>

            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Oven Lamp: <b>{{ stoves.data.oven_lamp }}</b>
              </span>
            </li>
            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Lamp Button: {{ stoves.data.lamp_button }}
              </span>
            </li>
          </ul>
        </div>
        <div class="w-[50%] flex-auto">
          <ul role="list" class="text-gray-500 space-y-4 dark:text-gray-400">
            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Stove Color: <b><span class="me-2 ml-2 rounded px-2.5 py-0.5 text-xs" :style="`background:${stoves.data.stove_color}`" /></b>
              </span>
            </li>
            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Oven Color: <b><span class="me-2 ml-2 rounded px-2.5 py-0.5 text-xs" :style="`background:${stoves.data.oven_color}`" /></b>
              </span>
            </li>
            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Oven Lamp Color: <b><span class="me-2 ml-2 rounded px-2.5 py-0.5 text-xs" :style="`background:${stoves.data.oven_lamp_color}`" /></b>
              </span>
            </li>

            <li class="flex items-center space-x-2 rtl:space-x-reverse">
              <svg class="h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Lighters Colors:
                <b v-for="color in stoves.data.lighters_colors" :key="color.key">
                  <span class="me-2 ml-2 rounded px-2.5 py-0.5 text-xs" :style="`background:${color}`" />
                </b>
              </span>
            </li>
          </ul>
        </div>

        <table class="mt-[20px] w-[100%] border-collapse border border-slate-500">
          <thead>
            <tr>
              <th class="border border-slate-600">
                stove Dimension
              </th>
              <th class="border border-slate-600">
                Glass Dimension
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700">
                width: {{ stoves.data.stove_width }}cm
              </td>
              <td class="border border-slate-700">
                Width: {{ stoves.data.glass_width }}cm
              </td>
            </tr>
            <tr>
              <td class="border border-slate-700">
                height: {{ stoves.data.stove_height }}cm
              </td>
              <td class="border border-slate-700">
                height: {{ stoves.data.glass_height }}cm
              </td>
            </tr>
            <tr>
              <td class="border border-slate-700">
                depth: {{ stoves.data.stove_depth }}cm
              </td>
              <td class="border border-slate-700">
                lenght: {{ stoves.data.glass_lenght }}cm
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
