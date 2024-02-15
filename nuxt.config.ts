// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false, 
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  runtimeConfig: {
    public: {
      name: process.env.NUXT_PROJECT_NAME || 'Nuxt',
      description: process.env.NUXT_PROJECT_DESCRIPTION || 'Power of Javascript empowered with javascript',
      apiUrl: process.env.NUXT_PUBLIC_API_BASE || '/api',
    }
  },
  typescript: {
    typeCheck: true,
    strict: true
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
  ],
})
