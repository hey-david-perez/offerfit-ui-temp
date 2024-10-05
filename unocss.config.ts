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
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
    safelist: 'prose prose-sm m-auto text-left'.split(' '),
  })