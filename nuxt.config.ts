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
  ],
  unocss: {
    preflight: true,
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
  app: {
    head: {
      title: 'Nuxt Starter',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      ],
    },
  },
})
