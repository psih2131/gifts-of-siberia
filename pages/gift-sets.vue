<template>
    <main class="main">

        <section class="info-hero-sec gift-sets-hero-sec">
            <div class="container">

                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">Подарочные наборы</span>
                </div>

                <div class="info-hero-sec__wrapper info-hero-sec__wrapper--gift-sets">
                    <div class="info-hero-sec__text-box">
                        <h1 class="info-hero-sec__title" v-html="pageData[0].acf.sekcziya_1_hero.zagolovok_h1"></h1>
                        <div class="info-hero-sec__text" v-html="pageData[0].acf.sekcziya_1_hero.tekstovyj_redaktor"></div>

                    </div>

                    <img src="@/assets/images/img/gift-sets-hero.png" alt="" class="info-hero-sec__bg">
                </div>

            </div>
        </section>


        <section class="info-benefits-sec  gift-sets-benefits-sec">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf['sekcziya_2_-_polza'].zagolovok"></h2>

                <template v-if="pageData[0].acf['sekcziya_2_-_polza'].podzagolovok">
                     <p class="info-benefits-sec__subtitle" v-html="pageData[0].acf['sekcziya_2_-_polza'].podzagolovok"></p>
                </template>
               
                
                <div class="info-benefits-sec__row">
                    <div class="info-benefits-sec__card" v-for="item in pageData[0].acf['sekcziya_2_-_polza'].preimushhestva" :key="item">
                        <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt" class="info-benefits-sec__card-img">
                        <p class="info-benefits-sec__card-title" v-html="item.zagolovok"></p>
                        <p class="info-benefits-sec__card-text" v-html="item.tekst"></p>
                    </div>
                </div>
            </div>
        </section>

        <section class="info-img-slider-sec" v-if="pageData[0].acf.sekcziya_3_slajder_izobrazhenij?.length">
            <div class="container">
                <div class="info-img-slider-sec__slider">
                    <swiper-container 
                    ref="imgSlideBannerSec" 
                    class="img-slider"
                    :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }"
                    >

                    <swiper-slide  v-for="item in pageData[0].acf.sekcziya_3_slajder_izobrazhenij" :key="item">
                        <div class="img-slider__element">
                            <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt" class="img-slider__img">
                        </div>
                    </swiper-slide>

                    </swiper-container>

                    <div class="imsl-button-prev custom-nav-v1" @click="swiperImgSlider.prev()" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.09 20.67C15.28 20.67 15.47 20.6 15.62 20.45C15.91 20.16 15.91 19.68 15.62 19.39L9.09999 12.87C8.61999 12.39 8.61999 11.61 9.09999 11.13L15.62 4.61002C15.91 4.32002 15.91 3.84002 15.62 3.55002C15.33 3.26002 14.85 3.26002 14.56 3.55002L8.03999 10.07C7.52999 10.58 7.23999 11.27 7.23999 12C7.23999 12.73 7.51999 13.42 8.03999 13.93L14.56 20.45C14.71 20.59 14.9 20.67 15.09 20.67Z" fill="#1B3762"/>
                        </svg>
                    </div>
                    <div class="imsl-button-next custom-nav-v1" @click="swiperImgSlider.next()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.90998 20.67C8.71998 20.67 8.52998 20.6 8.37998 20.45C8.08998 20.16 8.08998 19.68 8.37998 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37998 4.61002C8.08998 4.32002 8.08998 3.84002 8.37998 3.55002C8.66998 3.26002 9.14998 3.26002 9.43998 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43998 20.45C9.28998 20.59 9.09998 20.67 8.90998 20.67Z" fill="#1B3762"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>


        <section class="info-form-sec gift-sets-form-sec">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf.sekcziya_forma.zagolovok"></h2>
                <p class="info-form-sec__subtitle" v-html="pageData[0].acf.sekcziya_forma.tekst"></p>
                <div class="info-form-sec__wrapper">
                    <img :src="pageData[0].acf.sekcziya_forma.izobrazhenie.url" :alt="pageData[0].acf.sekcziya_forma.izobrazhenie.alt" class="info-form-sec__img">

                    <formTypeAbout />

                </div>
            </div>
        </section>

         <section class="info-other-prod-sec">
            <div class="container">
          <div class="popular-prod-sec__header">
            <p class="popular-prod-sec__title" v-html="pageData[0].acf['sekcziya_-_tovary'].zagolovok"></p>

            <NuxtLink class="popular-prod-sec__link" to="/products">
                <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="63" height="51" rx="12.5" stroke="#1B3762"/>
                <path d="M42.7071 26.7071C43.0976 26.3166 43.0976 25.6834 42.7071 25.2929L36.3431 18.9289C35.9526 18.5384 35.3195 18.5384 34.9289 18.9289C34.5384 19.3195 34.5384 19.9526 34.9289 20.3431L40.5858 26L34.9289 31.6569C34.5384 32.0474 34.5384 32.6805 34.9289 33.0711C35.3195 33.4616 35.9526 33.4616 36.3431 33.0711L42.7071 26.7071ZM23 26V27H42V26V25H23V26Z" fill="#1B3762"/>
                </svg>
            </NuxtLink>

          </div>

          <div class="popular-prod-sec__row" v-if="recomendPostsList?.length">
            <productCard v-for="item in recomendPostsList" :key="item" :productData="item"  :catList="all_categories"/>
          </div>

          <div class="info-form-sec__down-text" v-if="pageData[0].acf.sekcziya_melkij_tekst">
            <p v-html="pageData[0].acf.sekcziya_melkij_tekst"></p>
          </div>
        </div>
      </section>


    </main>
    
</template>

<script setup>

//IMPORT
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import videoBanner from '@/components/component__video-banner.vue'

import formTypeAbout from '@/components/forms/form-type-about.vue'

import productCard from '@/components/component__producr-card.vue'



//DATA
const store = useCounterStore()

const route = useRoute()

const imgSlideBannerSec = ref(null)

const recomendPostsList = ref([])

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=gift-sets`)

// категории
const { data: all_categories } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/products-section`
)

// получаем рекомендованные посты
try {
  const mainPost = pageData.value?.[0]
  const chitatTakzhe = mainPost?.acf['sekcziya_-_tovary']?.tovary

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/products?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    recomendPostsList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}

console.log('pageData', pageData)


//banner gallery
const swiperImgSlider = useSwiper(imgSlideBannerSec, {
   loop: true,
   slidesPerView: 2,
   spaceBetween: 14,   
   speed: 700,


   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 14, 
    },

  }
})


//METHODS 






//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});



//SEO
useHead({
    title: pageData.value[0].acf.seo_title || pageData.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: pageData.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: pageData.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: pageData.value[0].acf.seo_title },
        { property: 'og:description', content: pageData.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: pageData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageData.value[0].acf.seo_title },
        { name: 'twitter:description', content: pageData.value[0].acf.seo_description },
        { name: 'twitter:image', content: pageData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            pageData.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/blog/categories/${pageData.value[0].acf.canonical || route.params.id}` }
    ]
})
</script>