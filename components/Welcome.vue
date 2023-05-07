<template>
  <div fixed inset-0 grid place-content-center bg="#0C0C0D" text="zinc-50" p-12>
    <div w="full md:3xl" space-y-12>
      <NuxtLink to="https://nuxt.com" external target="_blank">
        <NuxtDark />
      </NuxtLink>

      <div z--1>
        <NuxtImg src="/gradients/hero-gradient.svg"
          class="absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-md pointer-events-none"
          role="presentation" width="1269" height="724" />
        <NuxtImg src="/gradients/hero-gradient-tablet.svg"
          class="absolute top-0 right-0 w-full hidden overflow-hidden select-none sm:block lg:hidden blur-md pointer-events-none"
          role="presentation" width="924" height="653" />
        <NuxtImg src="/gradients/hero-gradient-mobile.svg"
          class="absolute inset-x-0 top-0 w-full overflow-hidden object-cover select-none sm:hidden blur-md pointer-events-none"
          role="presentation" width="375" height="494" />
      </div>

      <div grid grid-cols-2 gap-20 w-fit>
        <ul class="links-column">
          <li v-for="link in [
            { label: 'UnoCSS', to: 'https://nuxt.com/modules/unocss', icon: 'UnoCSS' },
            { label: 'VueUse', to: 'https://vueuse.org/', icon: 'logos:vueuse' },
            { label: 'Vue Macros', to: 'https://vue-macros.sxzz.moe/', icon: 'VueMacros' },
            { label: 'Pinia', to: 'https://pinia.vuejs.org/', icon: 'Pinia' },
            { label: 'TypeScript', to: 'https://www.typescriptlang.org/', icon: 'logos:typescript-icon' },
            { label: 'PostCSS', to: 'https://github.com/postcss/postcss-nested#readme', icon: 'logos:postcss' },
            { label: 'eslint', to: 'https://github.com/antfu/eslint-config', icon: 'logos:eslint' },
            { label: 'pnpm', to: 'https://pnpm.io/', icon: 'Pnpm' },
          ]" :key="link.to">
            <NuxtLink class="link" :to="link.to" external target="_blank">
              <Icon v-if="link.icon" :name="link.icon" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <ul class="links-column">
          <li v-for="link in [
            { label: 'devtools', to: 'https://nuxt.com/modules/devtools' },
            { label: 'icon', to: 'https://nuxt.com/modules/icon' },
            { label: 'image', to: 'https://v1.image.nuxtjs.org/get-started/' },
            { label: 'color-mode', to: 'https://color-mode.nuxtjs.org/' },
            { label: 'typed-router', to: 'https://nuxt-typed-router.vercel.app/' },
            { label: 'critters', to: 'https://github.com/nuxt-modules/critters' },
            { label: 'robots', to: 'https://nuxt.com/modules/robots' },
          ]" :key="link.to">
            <NuxtLink class="link" :to="link.to" external target="_blank">
              <Icon name="logos:nuxt-icon" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <ul flex gap-1 mt-8 gap-4>
          <li v-for="link in [
            { label: 'Docs', to: 'https://nuxt.com/docs/guide/directory-structure/nuxt', icon: 'logos:nuxt-icon' },
            { label: 'Modules', to: 'https://nuxt.com/modules', icon: 'logos:nuxt-icon' },
            { label: 'GitHub', to: 'https://github.com/mat2ja/nuxt-starter', icon: 'simple-icons:github' },
            { label: 'Live', to: 'https://nuxt-starter-iota.vercel.app', icon: 'lucide:link' },
          ]" :key="link.to">
            <NuxtLink class="link" :to="link.to" external target="_blank">
              <Icon v-if="link.icon" :name="link.icon" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
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
