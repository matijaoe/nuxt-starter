<script lang="ts" setup>
type LinkItem = {
  label: string
  to: string
  icon?: string
}

const tools: LinkItem[] = [
  { label: 'UnoCSS', to: 'https://nuxt.com/modules/unocss', icon: 'logos:unocss' },
  { label: 'VueUse', to: 'https://vueuse.org/', icon: 'logos:vueuse' },
  { label: 'Pinia', to: 'https://pinia.vuejs.org/', icon: 'Pinia' },
  { label: 'TypeScript', to: 'https://www.typescriptlang.org/', icon: 'logos:typescript-icon' },
  { label: 'PostCSS', to: 'https://github.com/postcss/postcss-nested#readme', icon: 'logos:postcss' },
  { label: 'eslint', to: 'https://github.com/antfu/eslint-config', icon: 'logos:eslint' },
  { label: 'pnpm', to: 'https://pnpm.io/', icon: 'logos:pnpm' },
]

const modules: LinkItem[] = [
  { label: 'devtools', to: 'https://nuxt.com/modules/devtools' },
  { label: 'icon', to: 'https://nuxt.com/modules/icon' },
  { label: 'image', to: 'https://image.nuxt.com/' },
  { label: 'color-mode', to: 'https://color-mode.nuxtjs.org/' },
]

const links: LinkItem[] = [
  { label: 'Nuxt', to: 'https://nuxt.com/', icon: 'logos:nuxt-icon' },
  { label: 'Docs', to: 'https://nuxt.com/docs/getting-started/introduction', icon: 'logos:nuxt-icon' },
  { label: 'Modules', to: 'https://nuxt.com/modules', icon: 'logos:nuxt-icon' },
  { label: 'Code', to: 'https://github.com/matijaoe/nuxt-starter', icon: 'simple-icons:github' },
  { label: 'Live', to: 'https://the-nuxt-starter.vercel.app', icon: 'lucide:link' },
]

const backgrounds = [
  {
    src: '/gradients/hero-gradient.svg',
    class: 'right-0 hidden lg:block',
    width: 1269,
    height: 724,
  },
  {
    src: '/gradients/hero-gradient-tablet.svg',
    class: 'right-0 w-full hidden sm:block lg:hidden',
    width: 924,
    height: 653,
  },
  {
    src: '/gradients/hero-gradient-mobile.svg',
    class: 'inset-x-0 w-full object-cover sm:hidden',
    width: 375,
    height: 494,
  },
]
</script>

<template>
  <div fixed inset-0 flex items-center bg="#0C0C0D" text="zinc-50" p-12>
    <div mx-auto w-4xl space-y-14>
      <NuxtLink to="https://nuxt.com" external target="_blank">
        <NuxtDark />
      </NuxtLink>

      <div z--1>
        <NuxtImg
          v-for="(item, i) in backgrounds"
          :key="i"
          v-bind="item"
          role="presentation"
          class="pointer-events-none absolute top-0 select-none blur-md"
          z--1
        />
      </div>

      <div w-fit w-full flex="~ col gap-14 sm:(row gap-25)">
        <ul class="links-column">
          <li v-for="link in tools" :key="link.to">
            <NuxtLink class="link" :to="link.to" external target="_blank" text-lg>
              <Icon v-if="link.icon" :name="link.icon" shrink-0 class="text-20px" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <ul class="links-column">
          <li v-for="link in modules" :key="link.to">
            <NuxtLink class="link" :to="link.to" external target="_blank" text-lg>
              <Icon name="logos:nuxt-icon" shrink-0 class="text-20px" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <ul mt-8 flex="~ col gap-2 sm:(row gap-5)">
        <li v-for="link in links" :key="link.to">
          <NuxtLink class="link" :to="link.to" external target="_blank" text-lg>
            <Icon v-if="link.icon" :name="link.icon" shrink-0 class="text-20px" />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.links-column {
  @apply flex flex-col gap-2 md:gap-1.5;
}

.link {
  --accent: #00DC82;
  @apply underline decoration-zinc-50/20 decoration-offset-3 decoration-dotted hover:decoration-[--accent] hover:text-[--accent] flex items-center gap-2.5;
}
</style>
