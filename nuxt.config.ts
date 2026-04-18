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

  site: {
    url: 'https://gift-siberia.com',
  },

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

      postCategories: {
        sources: [
          '/api/__sitemap__/wordpress-posts-categories',
        ]
      },

      products: {
        sources: [
          '/api/__sitemap__/wordpress-products',
        ]
      },

      productSection: {
        sources: [
          '/api/__sitemap__/wordpress-procuct-section',
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
    '@nuxtjs/i18n',
  ],

  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Russian', file: 'ru.json' },
      { code: 'ko', name: 'Korean', file: 'ko.json' },
      { code: 'zh-hans', name: 'Chinese', file: 'zh.json' }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    // strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
    },
  },




})