// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  site: {
    url: 'https://psih2131-gifts-of-siberia-34fa.twc1.net',
    name: 'Gift of siberia',

    // routes: async () => {
    //   // Тут вызываем API, чтобы получить все id постов
    //   const response = await fetch('https://cy18281-wordpress-gre0n.tw1.ru//wp-json/wp/v2/my-blog')
    //   const posts = await response.json()

    //   // Возвращаем массив URL для sitemap
    //   return posts.map(post => `/blog/posts/${post.slug}`)
    // }

  },
  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  robots: {
    blockAiBots: true
  },
  modules: [
    'nuxt-swiper',
    '@vueform/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],





})