export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],

  devtools: {
    enabled: true,
  },

  experimental: {
    typedPages: true,
    cookieStore: true,
  },

  features: {
    inlineStyles: false,
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

})
