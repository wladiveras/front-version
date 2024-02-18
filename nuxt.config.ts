import { pwa } from './config/pwa'
import { ApiUrl, AppUrl, appDescription, appName } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'nuxt-module-eslint-config',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  pinia: {
    storesDirs: ['./stores/**',
    ],
  },

  colorMode: {
    classSuffix: '',
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      name: appName,
      description: appDescription,
      baseURL: AppUrl,
      apiURL: ApiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  },

  pwa,

  ssr: false,

  devtools: {
    enabled: true,
  },

  features: {
    inlineStyles: false,
  },

  eslintConfig: {
    setup: false,
  },
})
