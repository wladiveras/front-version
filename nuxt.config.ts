export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

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

  app: {
    head: {
      title: 'Interview Project',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  css: ['~/assets/scss/index.scss'],

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/eslint-module',
    '@formkit/auto-animate',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },

  colorMode: {
    preference: 'dark'
  },

  vueuse: {
    ssrHandlers: true,
  },

  typescript: {
    typeCheck: true,
    strict: true,
    shim: false,
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  }
})
