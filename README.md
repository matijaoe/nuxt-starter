# 🧚🏻 Nuxt 3 starter template

> Minimal Nuxt 3 starter template pre-configured with essential modules

<a href="https://the-nuxt-starter.vercel.app">
  <img width="1512" alt="Screenshot" src="https://github.com/matijaoe/nuxt-starter/assets/46557266/39a34562-1cdf-474b-a00a-1c69205d9cda">
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
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostCSS Nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting)
- [ESLint](https://github.com/matijaoe/eslint-config)
- [pnpm](https://pnpm.io/)

### Modules
- [`@nuxt/devtools`](https://nuxt.com/modules/devtools)
- [`nuxt-icon`](https://github.com/nuxt-modules/icon)
- [`@nuxt/image`](https://image.nuxt.com/)
- [`@nuxtjs/color-mode`](https://color-mode.nuxtjs.org/)

## Use the template

### StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/matijaoe/nuxt-starter)
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://pr.new/matijaoe/nuxt-starter)

### GitHub Template
[Create a repo from this template on GitHub](https://github.com/matijaoe/nuxt-starter/generate)

### Local
Clone the template locally, with no git history (using [`unjs/giget`](https://github.com/unjs/giget))

```bash
npx giget gh:matijaoe/nuxt-starter <name>
```

## Checklist

- [ ] Install the recommended extensions
- [ ] Change the author name in `LICENSE`
- [ ] Delete `gradients` directory in `public`
- [ ] Delete `Welcome.vue` component
- [ ] Delete icon components in `components/global`
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

- 👽 [`vue-starter`](https://github.com/matijaoe/vue-starter)
- 🔮 [`vue-anu-starter`](https://github.com/matijaoe/vue-anu-starter)
