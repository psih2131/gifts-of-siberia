<template>
    <main class="main">
      <template v-if="frontpage?.[0]">
      <!-- Hero sec banner -->
      <section class="hero-banner-sec" v-if="frontpage[0]?.acf?.sekcziya_1_bannera" >
        <div class="container">
          <div class="hero-banner-sec__slider">

            <swiper-container 
            ref="heroBannerSec" 
            class="hero-banner-slider"
            :pagination="{
            dynamicBullets: true,
            clickable: true
            }"
            >
              <swiper-slide v-for="item in frontpage[0].acf.sekcziya_1_bannera" :key="item">
                  <div class="hero-banner-slider__element">
                    <img v-if="item?.izobrazhenie_bannera_pk?.url" :src="item.izobrazhenie_bannera_pk.url" :alt="item.izobrazhenie_bannera_pk.alt || ''" class="hero-banner-slider__img">
                    <img v-if="item?.izobrazhenie_bannera_mobilka?.url" :src="item.izobrazhenie_bannera_mobilka.url" :alt="item.izobrazhenie_bannera_mobilka.alt || ''" class="hero-banner-slider__img-mob">
                  </div>
              </swiper-slide>

            </swiper-container>

              <div class="hero-button-prev custom-nav-v1" @click="swiperHerroBanner.prev()" >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.09 20.67C15.28 20.67 15.47 20.6 15.62 20.45C15.91 20.16 15.91 19.68 15.62 19.39L9.09999 12.87C8.61999 12.39 8.61999 11.61 9.09999 11.13L15.62 4.61002C15.91 4.32002 15.91 3.84002 15.62 3.55002C15.33 3.26002 14.85 3.26002 14.56 3.55002L8.03999 10.07C7.52999 10.58 7.23999 11.27 7.23999 12C7.23999 12.73 7.51999 13.42 8.03999 13.93L14.56 20.45C14.71 20.59 14.9 20.67 15.09 20.67Z" fill="#1B3762"/>
                  </svg>
              </div>
              <div class="hero-button-next custom-nav-v1" @click="swiperHerroBanner.next()">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.90998 20.67C8.71998 20.67 8.52998 20.6 8.37998 20.45C8.08998 20.16 8.08998 19.68 8.37998 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37998 4.61002C8.08998 4.32002 8.08998 3.84002 8.37998 3.55002C8.66998 3.26002 9.14998 3.26002 9.43998 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43998 20.45C9.28998 20.59 9.09998 20.67 8.90998 20.67Z" fill="#1B3762"/>
                  </svg>
              </div>
          </div>
        </div>
      </section>


      <!-- POPULAR PRODUCTS SEC -->
      <section class="popular-prod-sec" v-if="popularProdList?.length">
        <div class="container">
          <div class="popular-prod-sec__header">
            <p class="popular-prod-sec__title">{{ $t('home.popularProducts') }}</p>

            <NuxtLinkLocale to="/products" class="popular-prod-sec__link"  >
              <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="63" height="51" rx="12.5" stroke="#1B3762"/>
              <path d="M42.7071 26.7071C43.0976 26.3166 43.0976 25.6834 42.7071 25.2929L36.3431 18.9289C35.9526 18.5384 35.3195 18.5384 34.9289 18.9289C34.5384 19.3195 34.5384 19.9526 34.9289 20.3431L40.5858 26L34.9289 31.6569C34.5384 32.0474 34.5384 32.6805 34.9289 33.0711C35.3195 33.4616 35.9526 33.4616 36.3431 33.0711L42.7071 26.7071ZM23 26V27H42V26V25H23V26Z" fill="#1B3762"/>
              </svg>
            </NuxtLinkLocale>

          </div>

          <div class="popular-prod-sec__row">
             <productCard v-for="item in popularProdList" :key="item" :productData="item" :catList="all_categories" />
          </div>
        </div>
      </section>


      <!-- ABOUT MISSION SEC -->
      <section class="home-about-sec" v-if="frontpage[0]?.acf?.sekcziya_3_missiya">
        <div class="container">

          <div class="home-about-sec__title-mob">{{ $t('home.aboutCompany') }}</div>
          <div class="home-about-sec__slider-wrapper">
            <swiper-container 
            ref="aboutHomeSlider" 
            class="about-home-slider"
            :pagination="{
            dynamicBullets: true,
            clickable: true
            }"
            >
              <swiper-slide v-for="item in frontpage[0].acf.sekcziya_3_missiya.slajder_izobrazhenij" :key="item">
                  <div class="about-home-slider__element">
                    <img v-if="item?.izobrazhenie?.url" :src="item.izobrazhenie.url" :alt="item.izobrazhenie?.alt || ''" class="about-home-slider__img">
                  </div>
              </swiper-slide>

            </swiper-container>

              <div class="about-button-prev custom-nav-v2" @click="swiperAbout.prev()" >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.09 20.67C15.28 20.67 15.47 20.6 15.62 20.45C15.91 20.16 15.91 19.68 15.62 19.39L9.09999 12.87C8.61999 12.39 8.61999 11.61 9.09999 11.13L15.62 4.61002C15.91 4.32002 15.91 3.84002 15.62 3.55002C15.33 3.26002 14.85 3.26002 14.56 3.55002L8.03999 10.07C7.52999 10.58 7.23999 11.27 7.23999 12C7.23999 12.73 7.51999 13.42 8.03999 13.93L14.56 20.45C14.71 20.59 14.9 20.67 15.09 20.67Z" fill="#1B3762"/>
                  </svg>
              </div>
              <div class="about-button-next custom-nav-v2" @click="swiperAbout.next()">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.90998 20.67C8.71998 20.67 8.52998 20.6 8.37998 20.45C8.08998 20.16 8.08998 19.68 8.37998 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37998 4.61002C8.08998 4.32002 8.08998 3.84002 8.37998 3.55002C8.66998 3.26002 9.14998 3.26002 9.43998 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43998 20.45C9.28998 20.59 9.09998 20.67 8.90998 20.67Z" fill="#1B3762"/>
                  </svg>
              </div>
          </div>

          <div class="home-about-sec__text-wrapper">
            <div class="home-about-sec__text" v-html="frontpage[0].acf.sekcziya_3_missiya.tekst"></div>
            <div class="home-about-sec__mission" v-html="frontpage[0].acf.sekcziya_3_missiya.tekst_v_ramke"></div>
            <img src="@/assets/images/img/about-home-bg.png" alt="" class="home-about-sec__bg-img">
          </div>
        </div>
      </section>


      <!-- ADVANTAGES SEC -->
      <section class="home-advantages-sec" v-if="frontpage[0]?.acf?.sekcziya_4_preimushhestva">
        <div class="container">
          <h2 class="home-advantages-sec__title" v-html="frontpage[0].acf.sekcziya_4_preimushhestva.zagolovok"></h2>
          <p class="home-advantages-sec__subtitle" v-html="frontpage[0].acf.sekcziya_4_preimushhestva.podzagolovok"></p>
          <div class="home-advantages-sec__wrapper">

            <div class="home-advantages-sec__element" v-for="item in frontpage[0].acf.sekcziya_4_preimushhestva.preimushhestva" :key="item">
              <p class="home-advantages-sec__element-title" v-html="item.zagolovok_preimushhestva"></p>
              <p class="home-advantages-sec__element-text" v-html="item.tekst"></p>
            </div>

          </div>
        </div>

        <img src="@/assets/images/img/home-advantages-bg.png" alt="" class="home-advantages-sec__bg">
      </section>


      <!-- VIDEO SEC -->
      <section class="banner-video-sec" v-if="frontpage[0]?.acf?.sekcziya_5_video?.url">
        <div class="container">
          <videoBanner :videoUrl="frontpage[0].acf.sekcziya_5_video.url" />
        </div>
      </section>


      <!-- NEWS POSTS SEC -->
      <section class="last-news-sec" v-if="popularPostList?.length">
        <div class="container">
          <div class="last-news-sec__header">
            <h2 class="last-news-sec__title">{{ $t('home.latestArticles') }}</h2>

            <NuxtLinkLocale class="last-news-sec__link" to="/blog/">
              <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="63" height="51" rx="12.5" stroke="#1B3762"/>
              <path d="M42.7071 26.7071C43.0976 26.3166 43.0976 25.6834 42.7071 25.2929L36.3431 18.9289C35.9526 18.5384 35.3195 18.5384 34.9289 18.9289C34.5384 19.3195 34.5384 19.9526 34.9289 20.3431L40.5858 26L34.9289 31.6569C34.5384 32.0474 34.5384 32.6805 34.9289 33.0711C35.3195 33.4616 35.9526 33.4616 36.3431 33.0711L42.7071 26.7071ZM23 26V27H42V26V25H23V26Z" fill="#1B3762"/>
              </svg>
            </NuxtLinkLocale>

          </div>

          <div class="last-news-sec__row">
            <newsCard v-for="item in popularPostList" :key="item" :postData="item" :catList="all_categories_post" />
          </div>

          <div class="last-news-sec__slider" v-if="popularPostList?.length > 0">
            <swiper-container 
            ref="newsHomeSlider" 
            class="news-home-slider"
            :pagination="{
            dynamicBullets: true,
            clickable: true
            }"
            >

              <swiper-slide v-for="item in popularPostList" :key="item"  >
                  <div class="news-home-slider__element">
                    <newsCard :postData="item" :catList="all_categories_post" />
                  </div>
              </swiper-slide>

            </swiper-container>
          </div>
        </div>
      </section>
      </template>
      <ContentNotTranslated v-else-if="!pending" />

    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import productCard from '@/components/component__producr-card.vue'

import videoBanner from '@/components/component__video-banner.vue'

import newsCard from '@/components/component__news-card.vue'



//DATA
const store = useCounterStore()
const route = useRoute()
const { locale } = useI18n()

const heroBannerSec = ref(null)

const aboutHomeSlider = ref(null)

const newsHomeSlider = ref(null)

const popularProdList = ref([])

const popularPostList = ref([])

// категории товаров
const { data: all_categories } = await useFetch(
  () => `${store.serverUrlDomainRequest}/wp-json/wp/v2/products-section${locale.value && locale.value !== 'ru' ? `?lang=${locale.value}` : ''}`,
  { watch: [locale] }
)

const { data: frontpage, pending } = await useFetch(
  () => `${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=home${locale.value && locale.value !== 'ru' ? `&lang=${locale.value}` : ''}`,
  { watch: [locale] }
)

// получаем популярные товары
async function loadPopularProducts() {
  const mainPost = frontpage.value?.[0]
  const popularTovary = mainPost?.acf?.['sekcziya_2_-_populyarnye_tovary']
  const langParam = locale.value && locale.value !== 'ru' ? `&lang=${locale.value}` : ''

  if (!Array.isArray(popularTovary) || !popularTovary.length) {
    popularProdList.value = []
    return
  }

  try {
    const slugs = popularTovary.map(obj => obj.post_name)
    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/products?slug=${slug}${langParam}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )
    popularProdList.value = await Promise.all(promises)
  } catch (error) {
    console.error('Ошибка при загрузке популярных товаров:', error)
    popularProdList.value = []
  }
}

// категории блога
const { data: all_categories_post } = await useFetch(
  () => `${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category${locale.value && locale.value !== 'ru' ? `?lang=${locale.value}` : ''}`,
  { watch: [locale] }
)

// получаем последние посты
async function loadPopularPosts() {
  const mainPost = frontpage.value?.[0]
  const novosti = mainPost?.acf?.sekcziya_6_novosti
  const langParam = locale.value && locale.value !== 'ru' ? `&lang=${locale.value}` : ''

  if (!Array.isArray(novosti) || !novosti.length) {
    popularPostList.value = []
    return
  }

  try {
    const slugs = novosti.map(obj => obj.post_name)
    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?slug=${slug}${langParam}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )
    popularPostList.value = await Promise.all(promises)
  } catch (error) {
    console.error('Ошибка при загрузке последних постов:', error)
    popularPostList.value = []
  }
}

watch([frontpage, locale], () => {
  loadPopularProducts()
  loadPopularPosts()
}, { immediate: true })

// console.log('popularPostList', popularPostList)

// console.log('recomendPostsList', popularProdList)

// console.log('frontpage', frontpage)



//METHODS 

//banner gallery
const swiperHerroBanner = useSwiper(heroBannerSec, {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,   
   speed: 700,
})

//about gallery
const swiperAbout = useSwiper(aboutHomeSlider, {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,   
   speed: 700,
})

//news slier mob
const swiperNews = useSwiper(newsHomeSlider, {
   loop: true,
   slidesPerView: 2,
   spaceBetween: 10,   
   speed: 700,
})


//SEO
const { t } = useI18n()
useHead(() => {
    const page = frontpage.value?.[0]
    if (!page?.acf) return { title: t('nav.brand.giftsOfSiberia') }
    return {
        title: page.acf.seo_title || page.title?.rendered,
        meta: [
            { name: 'description', content: page.acf.seo_description || t('common.defaultDescription') },
            { name: 'keywords', content: page.acf.klyuchevaya_fraza || t('common.defaultKeywords') },
            { property: 'og:title', content: page.acf.seo_title || page.title?.rendered },
            { property: 'og:description', content: page.acf.seo_description || t('common.defaultDescription') },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
            { property: 'og:image', content: page.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: page.acf.seo_title || page.title?.rendered },
            { name: 'twitter:description', content: page.acf.seo_description || t('common.defaultDescription') },
            { name: 'twitter:image', content: page.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },
            { name: 'robots', content: page.acf?.indeksacziya_v_poiskovyh_sistemah === 'index' ? 'index, follow' : 'noindex, nofollow' }
        ],
        link: [{ rel: 'canonical', href: `${store.domainUrlCurrent}${route.fullPath === '/' ? '' : route.fullPath}` }]
    }
})
</script>


<style >
/* swiper custom styles */
@media only screen and (min-width: 760px) {
   swiper-container::part(pagination) {
    opacity: 0;
   }
}
@media only screen and (max-width: 760px) {

  swiper-container::part(pagination) {
    bottom: 0px; 
  }

  swiper-container::part(bullet) {
    background-color:rgba(27, 55, 98, 0.20);
    opacity: 1;
    width: 8px;
    height: 8px;
    margin: 0 2px;
    border-radius: 50%;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  swiper-container::part(bullet-active) {
    background-color: #4471B4;
    width: 8px;
    height: 8px;
  }
  
}
</style>
