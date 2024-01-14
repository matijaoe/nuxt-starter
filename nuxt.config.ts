export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
  ],

  experimental: {
    typedPages: true,
  },

  features: {
    inlineStyles: false,
  },

  vite: {
    vue: {
      script: {
        propsDestructure: false,
      },
    },
  },

  postcss: {
    plugins: {
      'postcss-nesting': {},
    },
  },

  unocss: {
    preflight: true,
  },

  app: {
    head: {
      title: 'Nuxt Starter',
    },
  },

  devtools: {
    enabled: true,
  },
})
