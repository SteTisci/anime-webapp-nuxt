// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },
  modules: ['@nuxt/eslint', 'nuxt-mongoose'],
  runtimeConfig: {
    REQ_SLUG_VIDEO: process.env.REQ_SLUG_VIDEO,
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: process.env.NODE_ENV === 'development',
  },
  css: ['~/assets/base.css'],
})
