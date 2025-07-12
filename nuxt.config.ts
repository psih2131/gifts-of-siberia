// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['nuxt-swiper', '@vueform/nuxt', '@pinia/nuxt'],





})