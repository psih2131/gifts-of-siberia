// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // site: {
  //   url: 'https://psih2131-gifts-of-siberia-34fa.twc1.net',
  //   name: 'Gift of siberia',


  //   sitemaps: [
  //     {
  //       path: '/sitemap-xml/wordpress.xml', // красивый путь
  //       // Подключает твой файл из server/api/__sitemap__/wordpress.ts
  //       eventHandler: 'server/api/__sitemap__/wordpress'
  //     }
  //   ]



  // },

  sitemap: {


    sitemaps: {
      pages: {
        sources: [
          '/api/__sitemap__/urls',
        ]
      },
      posts: {
        sources: [
          '/api/__sitemap__/wordpress-posts',
        ]
      },
      products: {
        sources: [
          '/api/__sitemap__/wordpress-products',
        ]
      },
      // static: {
      //   sources: [
      //     'https://psih2131-gifts-of-siberia-34fa.twc1.net',
      //   ]
      // }
    }
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