// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/storybook",
    "@unocss/nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
  ],
  compatibilityDate: "2024-10-04",
  features: {
    // For UnoCSS
    inlineStyles: false,
  },
  future: {
    compatibilityVersion: 4,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  components: {
    dirs: [
      '~/components',
      '~/components/ui',
    ],
  },
})