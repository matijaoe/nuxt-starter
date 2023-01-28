export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    'nuxt-typed-router',
    '@nuxtjs/critters',
    '@nuxtjs/robots',
  ],
  unocss: {
    preflight: true,
  },
  experimental: {
    inlineSSRStyles: true,
  },
  imports: {
    dirs: [
      'composables/**',
      'store/**',
    ],
    presets: [
      'pinia',
    ],
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  colorMode: {
    classSuffix: '',
  },
  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/',
    },
  },
  app: {
    head: {
      title: 'Nuxt Starter',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
