export default defineNuxtConfig({
  extends: ['..'],
  modules: ['@nuxt/eslint'],
  compatibilityDate: '2024-10-04',
  // This is needed to make the playground work with Storybook
  rootDir: './',
  devtools: {
    enabled: true,
  }
})
