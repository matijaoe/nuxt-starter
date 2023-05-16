import { defineNuxtConfig } from 'nuxt/config'

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
    '@nuxt/devtools',
  ],

  experimental: {
    inlineSSRStyles: true,
  },

  devtools: {
    enabled: true,
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

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
      'postcss-nesting': {},
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
    },
  },
})
