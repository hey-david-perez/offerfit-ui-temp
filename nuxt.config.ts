// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
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
})