import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    '@nuxtjs/robots',
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

  devtools: {
    enabled: true,
  },

  unocss: {
    preflight: true,
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
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
