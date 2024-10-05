import {
    defineConfig,
    presetAttributify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'
  import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'
  import { presetAnimations } from 'unocss-preset-animations'
  import { presetShadcn, builtinColors } from 'unocss-preset-shadcn'

  export default defineConfig({
    shortcuts: [],
    presets: [
      presetUno(),
      presetAttributify(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          sans: 'Jost',
          serif: 'DM Serif Display',
          mono: 'DM Mono',
        },
      }),
      presetHeroPatterns(),
      presetAnimations(),
      presetShadcn({
        color: 'zinc',
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
    safelist: 'prose prose-sm m-auto text-left'.split(' '),
    // By default, `.ts` and `.js` files are NOT extracted.
    // If you want to extract them, use the following configuration.
    // It's necessary to add the following configuration if you use shadcn-vue.
    content: {
      pipeline: {
        include: [
          // the default
          /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
          // include js/ts files
          '(components|src)/**/*.{js,ts}',
        ],
      },
    },
  })