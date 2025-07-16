<template>
    <main class="main">

        <section class="info-hero-sec extract-hero-sec">
            <div class="container">

                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">Экстракт чаги</span>
                </div>

                <div class="info-hero-sec__wrapper info-hero-sec__wrapper--extract">
                    <div class="info-hero-sec__text-box">
                        <h1 class="info-hero-sec__title" v-html="pageData[0].acf.sekcziya_1_hero.zagolovok_h1"></h1>
                        <div class="info-hero-sec__text" v-html="pageData[0].acf.sekcziya_1_hero.tekstovyj_redaktor"></div>
                    </div>

                    <img src="@/assets/images/img/extract-hero.png" alt="" class="info-hero-sec__bg">
                </div>

            </div>
        </section>



        <section class="info-what-extract-sec ">
            <div class="container">
                <div class="info-what-extract-sec__top-row" v-if="pageData[0].acf.sekcziya_chto_takoe_ekstrakt_chagi">

                    <div class="info-what-extract-sec__text-wrapper">
                        <h2 class="info-sec-title" v-html="pageData[0].acf.sekcziya_chto_takoe_ekstrakt_chagi.zagolovok"></h2>
                        <div class="info-what-extract-sec__text" v-html="pageData[0].acf.sekcziya_chto_takoe_ekstrakt_chagi.tekst">

                        </div>
                    </div>


                    <div class="info-what-extract-sec__slider">
                        <swiper-container 
                        ref="extractSliderRef" 
                        class="extract-slider"
                        :pagination="{
                        dynamicBullets: true,
                        clickable: true
                        }"
                        >

                        <swiper-slide v-for="item in pageData[0].acf.sekcziya_chto_takoe_ekstrakt_chagi.slajder" :key="item">
                            <div class="extract-slider__element">
                                <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt" class="extract-slider__img">
                            </div>
                        </swiper-slide>

                        </swiper-container>

                        <div class="extract-button-prev custom-nav-v1" @click="swiperExtract.prev()" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.09 20.67C15.28 20.67 15.47 20.6 15.62 20.45C15.91 20.16 15.91 19.68 15.62 19.39L9.09999 12.87C8.61999 12.39 8.61999 11.61 9.09999 11.13L15.62 4.61002C15.91 4.32002 15.91 3.84002 15.62 3.55002C15.33 3.26002 14.85 3.26002 14.56 3.55002L8.03999 10.07C7.52999 10.58 7.23999 11.27 7.23999 12C7.23999 12.73 7.51999 13.42 8.03999 13.93L14.56 20.45C14.71 20.59 14.9 20.67 15.09 20.67Z" fill="#1B3762"/>
                            </svg>
                        </div>
                        <div class="extract-button-next custom-nav-v1" @click="swiperExtract.next()">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.90998 20.67C8.71998 20.67 8.52998 20.6 8.37998 20.45C8.08998 20.16 8.08998 19.68 8.37998 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37998 4.61002C8.08998 4.32002 8.08998 3.84002 8.37998 3.55002C8.66998 3.26002 9.14998 3.26002 9.43998 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43998 20.45C9.28998 20.59 9.09998 20.67 8.90998 20.67Z" fill="#1B3762"/>
                            </svg>
                        </div>
                    </div>
                </div>


                <div class="info-benefits-sec__row" v-if="pageData[0].acf['sekcziya_2_-_polza'].preimushhestva">
                    <div class="info-benefits-sec__card" v-for="item in pageData[0].acf['sekcziya_2_-_polza'].preimushhestva" :key="item">
                        <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt" class="info-benefits-sec__card-img">
                        <p class="info-benefits-sec__card-title" v-html="item.zagolovok"></p>
                        <p class="info-benefits-sec__card-text" v-html="item.tekst"></p>
                    </div>
                </div>

            </div>
        </section>


        <section class="info-dirrections-sec extract-how-crate-sec" v-if="pageData[0].acf['sekcziya_-_kak_sozdaetsya']?.zagolovok">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf['sekcziya_-_kak_sozdaetsya'].zagolovok"></h2>

                <div class="info-dirrections-sec__row">

                    <swiper-container 
                    ref="coorpDirrectionsSlider" 
                    class="coorp-dirrections-slider"
                    :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }"
                    >

                    <swiper-slide v-for="(item, index) in pageData[0].acf['sekcziya_-_kak_sozdaetsya'].etapy" :key="index">
                    <div class="info-dirrections-sec__element" @click="curentIndexProcess = index" 
                    :class="{'info-dirrections-sec__element--activ': curentIndexProcess == index}">
                        <img :src="item.fon.url" :alt="item.fon.alt" class="info-dirrections-sec__element-img">
                        <div class="info-dirrections-sec__element-wrapper">
                            <div class="info-dirrections-sec__element-text-box">
                                <div class="info-dirrections-sec__element-tag">Шаг {{index + 1}}</div>
                                <p class="info-dirrections-sec__element-title" v-html="item.nazvanie_etapa"></p>
                                <p class="info-dirrections-sec__element-text">Нажмите, чтобы узнать подробнее</p>
                                <p class="info-dirrections-sec__element-description" v-html="item.opisanie"></p>
                            </div>
                        </div>
                    </div>
                    </swiper-slide>

                    </swiper-container>


                    <div class="coorp-dirrections-prev custom-nav-v1" @click="swiperDirrections.prev()" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.09 20.67C15.28 20.67 15.47 20.6 15.62 20.45C15.91 20.16 15.91 19.68 15.62 19.39L9.09999 12.87C8.61999 12.39 8.61999 11.61 9.09999 11.13L15.62 4.61002C15.91 4.32002 15.91 3.84002 15.62 3.55002C15.33 3.26002 14.85 3.26002 14.56 3.55002L8.03999 10.07C7.52999 10.58 7.23999 11.27 7.23999 12C7.23999 12.73 7.51999 13.42 8.03999 13.93L14.56 20.45C14.71 20.59 14.9 20.67 15.09 20.67Z" fill="#1B3762"/>
                        </svg>
                    </div>

                    <div class="coorp-dirrections-next custom-nav-v1" @click="swiperDirrections.next()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.90998 20.67C8.71998 20.67 8.52998 20.6 8.37998 20.45C8.08998 20.16 8.08998 19.68 8.37998 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37998 4.61002C8.08998 4.32002 8.08998 3.84002 8.37998 3.55002C8.66998 3.26002 9.14998 3.26002 9.43998 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43998 20.45C9.28998 20.59 9.09998 20.67 8.90998 20.67Z" fill="#1B3762"/>
                        </svg>
                    </div>

                </div>
            </div>
        </section>


        <section class="info-dif-sec " v-if="pageData[0].acf.sekcziya_v_chem_otlichiya">
            <div class="container">
                <h2 class="info-sec-title">в чем отличие от экстрактов других брендов?</h2>
                <div class="info-dif-sec__row">

                  
                    <div class="info-dif-sec__text-wrapper">
                        <img src="@/assets/images/img/dif-1.png" alt="" class="info-dif-sec__img-1">
                        <div class="info-dif-sec__text-wrapper-ar-1">
                            <svg width="59" height="94" viewBox="0 0 59 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.2139 0.223012C34.9299 0.195723 34.6424 0.195723 34.356 0.223012C33.8218 0.259514 33.3081 0.455917 32.8943 0.781945C32.4267 1.21383 32.1388 1.78029 32.0838 2.37627C32.0198 2.68781 31.9559 2.99935 31.9027 3.29256C31.7759 3.88814 31.6595 4.47456 31.554 5.04266C31.342 6.19717 31.1321 7.30587 30.9347 8.35959C30.5699 10.467 30.2748 12.3546 30.0629 13.9489C29.6494 17.1284 29.59 19.0984 29.9769 19.1442C30.3639 19.19 31.1373 17.3117 32.0766 14.1963C32.5462 12.6386 33.0599 10.7694 33.5927 8.69862C33.8396 7.65406 34.1188 6.55452 34.3902 5.40917C34.5285 4.85329 34.6639 4.2852 34.7967 3.70489C34.9977 4.02116 35.2169 4.32699 35.4534 4.62117C36.3233 5.8948 37.9493 7.87397 40.2993 11.2642C43.6662 16.0749 46.4425 21.2267 48.5801 26.6303C50.1105 30.5787 51.1749 34.682 51.7557 38.8718C52.0693 41.1814 52.2168 43.5138 52.1972 45.8538C52.1476 48.3015 51.9232 50.7501 51.5257 53.1841C51.0866 55.6593 50.4521 58.1093 49.6272 60.5144C48.7821 62.9501 47.7202 65.3254 46.4524 67.6155C43.9524 72.1578 40.603 76.2854 36.5632 79.8021C34.6231 81.4675 32.5528 82.9991 30.3705 84.3835C28.297 85.6726 26.1276 86.8211 23.8805 87.8196C20.0431 89.5682 15.9942 90.8588 11.8362 91.6588C8.99396 92.169 6.12177 92.4753 3.24603 92.5751C2.17999 92.5003 1.10253 92.5464 0.0378254 92.7125C1.05284 93.0175 2.11768 93.1811 3.19784 93.1981C6.14049 93.3699 9.10737 93.2594 12.0506 92.8683C16.4206 92.2632 20.703 91.1068 24.775 89.4322C27.171 88.4632 29.4901 87.3298 31.7117 86.042C34.0686 84.653 36.3075 83.0964 38.4065 81.3873C42.796 77.7686 46.4652 73.4748 49.2354 68.7151C50.6337 66.3186 51.8145 63.8267 52.7652 61.2657C53.6948 58.7338 54.4156 56.1485 54.9213 53.5323C55.8734 48.5283 56.0329 43.454 55.3949 38.4686C54.8209 34.076 53.7214 29.7744 52.1162 25.6407C49.9144 19.9976 46.9211 14.6673 43.2094 9.77983C41.5075 7.4985 39.6033 5.35365 37.5152 3.36586L37.2754 3.15512C41.9306 3.67543 46.6386 3.85619 51.3556 3.69572C55.5015 3.55828 58.0542 3.13679 58.0605 2.77944C58.0937 2.04641 47.9632 1.95479 35.8494 0.287152L35.2139 0.223012Z" fill="#C8A65F"/>
                            </svg>

                        </div>
                        <div class="ssad" v-html="pageData[0].acf.sekcziya_v_chem_otlichiya.ekstrakty_dary_sibiri"></div>
                    </div>

                    <div class="info-dif-sec__text-wrapper info-dif-sec__text-wrapper--other">
                        <img src="@/assets/images/img/dif-2.png" alt="" class="info-dif-sec__img-2">

                        <div class="info-dif-sec__text-wrapper-ar-2">
                            <svg width="59" height="94" viewBox="0 0 59 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" d="M35.2139 93.2561C34.93 93.2834 34.6424 93.2834 34.356 93.2561C33.8218 93.2196 33.3081 93.0232 32.8943 92.6972C32.4267 92.2653 32.1388 91.6988 32.0838 91.1028C32.0198 90.7913 31.9559 90.4797 31.9027 90.1865C31.7759 89.591 31.6595 89.0045 31.554 88.4364C31.342 87.2819 31.1321 86.1732 30.9347 85.1195C30.5699 83.0121 30.2748 81.1245 30.0629 79.5302C29.6494 76.3507 29.59 74.3807 29.9769 74.3349C30.3639 74.289 31.1373 76.1674 32.0766 79.2828C32.5462 80.8405 33.0599 82.7097 33.5927 84.7805C33.8396 85.825 34.1188 86.9246 34.3902 88.0699C34.5285 88.6258 34.6639 89.1939 34.7967 89.7742C34.9977 89.4579 35.2169 89.1521 35.4534 88.8579C36.3233 87.5843 37.9493 85.6051 40.2993 82.2149C43.6662 77.4042 46.4425 72.2524 48.5801 66.8488C50.1105 62.9004 51.1749 58.7971 51.7557 54.6073C52.0693 52.2976 52.2168 49.9653 52.1972 47.6252C52.1476 45.1776 51.9232 42.729 51.5257 40.295C51.0866 37.8198 50.4521 35.3698 49.6272 32.9647C48.7821 30.529 47.7202 28.1537 46.4524 25.8635C43.9524 21.3213 40.603 17.1937 36.5632 13.677C34.6231 12.0116 32.5528 10.4799 30.3705 9.09558C28.297 7.80651 26.1276 6.65795 23.8805 5.65952C20.0431 3.91088 15.9942 2.62024 11.8362 1.8203C8.99396 1.31012 6.12177 1.00376 3.24603 0.904016C2.17999 0.978804 1.10253 0.93265 0.037825 0.766579C1.05284 0.461592 2.11768 0.297949 3.19784 0.280951C6.14049 0.109197 9.10737 0.219732 12.0506 0.610799C16.4206 1.21585 20.703 2.37226 24.775 4.04686C27.171 5.01585 29.4901 6.14927 31.7117 7.43711C34.0686 8.82605 36.3075 10.3827 38.4065 12.0918C42.796 15.7105 46.4652 20.0043 49.2354 24.764C50.6337 27.1605 51.8145 29.6524 52.7652 32.2134C53.6948 34.7453 54.4156 37.3306 54.9213 39.9468C55.8734 44.9508 56.0329 50.0251 55.3949 55.0105C54.8209 59.4031 53.7214 63.7047 52.1162 67.8384C49.9144 73.4815 46.9211 78.8118 43.2094 83.6993C41.5075 85.9806 39.6033 88.1254 37.5152 90.1132L37.2754 90.324C41.9306 89.8037 46.6386 89.6229 51.3556 89.7834C55.5015 89.9208 58.0542 90.3423 58.0605 90.6997C58.0937 91.4327 47.9632 91.5243 35.8494 93.1919L35.2139 93.2561Z" fill="#1B3762"/>
                            </svg>
                        </div>
                        <div class="ssad" v-html="pageData[0].acf.sekcziya_v_chem_otlichiya.ekstrakty_drugih_brendov"></div>
                    </div>
                </div>
            </div>
        </section>


         <section class="info-extract-video-sec " v-if="pageData[0].acf.sekcziya_video">
            <div class="container">
                <videoBanner :videoUrl="pageData[0].acf.sekcziya_video.url" />
            </div>
        </section>
        

        <section class="info-form-sec extract-form-sec">
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

//IMPORT
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import videoBanner from '@/components/component__video-banner.vue'

import formTypeAbout from '@/components/forms/form-type-about.vue'

import productCard from '@/components/component__producr-card.vue'






//DATA
const store = useCounterStore()

const route = useRoute()

const extractSliderRef = ref(null)

const coorpDirrectionsSlider = ref(null)

const recomendPostsList = ref([])

const curentIndexProcess = ref(null)


const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=extract-chagi`)

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



//METHODS 
const swiperExtract = useSwiper(extractSliderRef, {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,   
   speed: 700,
});

//banner gallery
const swiperDirrections = useSwiper(coorpDirrectionsSlider, {
   loop: true,
   slidesPerView: 5,
   spaceBetween: 10,   
   speed: 700,
   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1220: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1520: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1750: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  }
})























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