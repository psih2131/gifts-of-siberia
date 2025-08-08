// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        { name: 'yandex-verification', content: 'e2576f975b9b4417' }
      ],

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],

    }

  },

  sitemap: {

    sitemaps: {
      pages: {
        sources: [
          'https://gift-siberia.com/api/__sitemap__/urls',
        ]
      },
      posts: {
        sources: [
          'https://gift-siberia.com/api/__sitemap__/wordpress-posts',
        ]
      },

      postCategories: {
        sources: [
          'https://gift-siberia.com/api/__sitemap__/wordpress-posts-categories',
        ]
      },

      products: {
        sources: [
          'https://gift-siberia.com/api/__sitemap__/wordpress-products',
        ]
      },

      productSection: {
        sources: [
          'https://gift-siberia.com/api/__sitemap__/wordpress-procuct-section',
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

  // robots: {
  //   // blockAiBots: true
  //   allow: '*'
  // },
  modules: [
    'nuxt-swiper',
    '@vueform/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],





})