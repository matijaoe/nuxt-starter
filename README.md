# 🧚🏻 Nuxt 3 Starter Template

> Minimal Nuxt 3 starter template preconfigured with essential modules

<a href="https://nuxt-starter-iota.vercel.app">
  <img width="1512" alt="Screenshot" src="https://user-images.githubusercontent.com/46557266/215290984-bbdf7179-05f9-424a-8ec2-febaffceda66.png">
</a>

## Included
- [UnoCSS](https://github.com/unocss/unocss)
  - [`presetUno`](https://github.com/unocss/unocss/tree/main/packages/preset-uno)
  - [`presetAttributify`](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)
  - [`presetTypography`](https://github.com/unocss/unocss/tree/main/packages/preset-typography)
  - [`presetWebFonts`](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts)
  - [`transformerDirectives`](https://github.com/unocss/unocss/tree/main/packages/transformer-directives)
  - [`transformerVariantGroup`](https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group)
- [VueUse](https://vueuse.org/)
- [Vue Macros](https://vue-macros.sxzz.moe/)
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostCSS Nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting)
- [ESLint](https://github.com/antfu/eslint-config)
- [pnpm](https://pnpm.io/)

### Modules
- [`@nuxt/devtools`](https://nuxt.com/modules/devtools)
- [`nuxt-icon`](https://github.com/nuxt-modules/icon)
- [`@nuxt/image-edge`](https://v1.image.nuxtjs.org/get-started)
- [`@nuxtjs/color-mode`](https://color-mode.nuxtjs.org/)
- [`@nuxtjs/critters`](https://github.com/nuxt-modules/critters)
- [`@nuxtjs/robots`](https://nuxt.com/modules/robots)

## Use the template

### StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mat2ja/nuxt-starter)
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://pr.new/mat2ja/nuxt-starter)

### GitHub Template
[Create a repo from this template on GitHub](https://github.com/mat2ja/vue-starter/generate)

### Local
Clone the template locally, with no git history (using [`unjs/giget`](https://github.com/unjs/giget))

```bash
npx giget gh:mat2ja/nuxt-starter <name>
```

## Checklist

- [ ] Install the recommended extensions
- [ ] Change the author name in `LICENSE`
- [ ] Delete `gradients` directory in `public`
- [ ] Delete `Welcome.vue` component
- [ ] Delete icon components in `components/global`
- [ ] Customize robots.txt rules in `nuxt.config.ts`
- [ ] Remove any not needed modules from `nuxt.config.ts` and `package.json`
- [ ] Customize `README.md`

## Setup

```bash
# install dependencies
pnpm i

# update dependencies
pnpm up --interactive --latest

# start development server
pnpm dev

# build for production
pnpm build

# locally preview production build
pnpm preview
```

## Related

- 👽 [`vue-starter`](https://github.com/mat2ja/vue-starter)
- 🔮 [`vue-anu-starter`](https://github.com/mat2ja/vue-anu-starter)
