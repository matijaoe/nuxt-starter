<script lang="ts" setup>
const tools = [
  { label: 'UnoCSS', to: 'https://nuxt.com/modules/unocss', icon: 'logos:unocss' },
  { label: 'VueUse', to: 'https://vueuse.org/', icon: 'logos:vueuse' },
  { label: 'Pinia', to: 'https://pinia.vuejs.org/', icon: 'Pinia' },
  { label: 'TypeScript', to: 'https://www.typescriptlang.org/', icon: 'logos:typescript-icon' },
  { label: 'PostCSS', to: 'https://github.com/postcss/postcss-nested#readme', icon: 'logos:postcss' },
  { label: 'eslint', to: 'https://github.com/antfu/eslint-config', icon: 'logos:eslint' },
  { label: 'pnpm', to: 'https://pnpm.io/', icon: 'logos:pnpm' },
]

const modules = [
  { label: 'devtools', to: 'https://nuxt.com/modules/devtools' },
  { label: 'icon', to: 'https://nuxt.com/modules/icon' },
  { label: 'image', to: 'https://image.nuxt.com/' },
  { label: 'color-mode', to: 'https://color-mode.nuxtjs.org/' },
]

const links = [
  { label: 'Docs', to: 'https://nuxt.com/docs/guide/directory-structure/nuxt', icon: 'logos:nuxt-icon' },
  { label: 'Modules', to: 'https://nuxt.com/modules', icon: 'logos:nuxt-icon' },
  { label: 'GitHub', to: 'https://github.com/matijaoe/nuxt-starter', icon: 'simple-icons:github' },
  { label: 'Live', to: 'https://nuxt-starter-iota.vercel.app', icon: 'lucide:link' },
]

const heroImgs = [
  {
    src: '/gradients/hero-gradient.svg',
    class: 'absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-md pointer-events-none',
    role: 'presentation',
    width: 1269,
    height: 724,
  },
  {
    src: '/gradients/hero-gradient-tablet.svg',
    class: 'absolute top-0 right-0 w-full hidden overflow-hidden select-none sm:block lg:hidden blur-md pointer-events-none',
    role: 'presentation',
    width: 924,
    height: 653,
  },
  {
    src: '/gradients/hero-gradient-mobile.svg',
    class: 'absolute inset-x-0 top-0 w-full overflow-hidden object-cover select-none sm:hidden blur-md pointer-events-none',
    role: 'presentation',
    width: 375,
    height: 494,
  },
]
</script>

<template>
  <div fixed inset-0 grid place-content-center bg="#0C0C0D" text="zinc-50" p-12>
    <div w="full md:3xl" space-y-12>
      <NuxtLink to="https://nuxt.com" external target="_blank">
        <NuxtDark />
      </NuxtLink>

      <NuxtImg v-for="(hero, i) in heroImgs" :key="i" z--1 v-bind="hero" />

      <div grid grid-cols-2 w-fit gap-20>
        <ul class="links-column">
          <li v-for="link in tools" :key="link.to">
            <NuxtLink class="link" :to="link.to" external target="_blank">
              <Icon v-if="link.icon" :name="link.icon" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <ul class="links-column">
          <li v-for="link in modules" :key="link.to">
            <NuxtLink class="link" :to="link.to" external target="_blank">
              <Icon name="logos:nuxt-icon" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <ul mt-8 flex gap-1 gap-4>
        <li v-for="link in links" :key="link.to">
          <NuxtLink class="link" :to="link.to" external target="_blank">
            <Icon v-if="link.icon" :name="link.icon" />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.links-column {
  @apply flex flex-col gap-1;
}

.link {
  @apply underline decoration-zinc-50/20 decoration-offset-3 decoration-dotted hover:decoration-#00DC82 flex items-center gap-2;
}
</style>
