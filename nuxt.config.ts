// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      name: process.env.NUXT_PROJECT_NAME || 'Nuxt',
      description: process.env.NUXT_PROJECT_DESCRIPTION || 'Power of Javascript empowered with javascript',
      baseURL: process.env.NUXT_PUBLIC_APP_BASE,
    },
    api: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE,
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Auth token'
      }
    }
  },
  colorMode: {
    preference: 'dark'
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  eslint: {},
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
  ],
})
