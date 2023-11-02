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

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
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
