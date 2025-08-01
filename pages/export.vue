<template>
    <main class="main">

        <section class="info-hero-sec export-hero-sec">
            <div class="container">

                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">Экспорт</span>
                </div>

                <div class="info-hero-sec__wrapper info-hero-sec__wrapper--export">
                    <div class="info-hero-sec__text-box">
                        <h1 class="info-hero-sec__title" v-html="pageData[0].acf.sekcziya_1_hero.zagolovok_h1"></h1>
                        <div class="info-hero-sec__text" v-html="pageData[0].acf.sekcziya_1_hero.tekstovyj_redaktor"></div>

                        <div class="info-hero-sec__btn-wrapper">
                            <button class="info-hero-sec__btn btn-request" @click="openForm()">
                                <span>Оставить заявку</span>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5004 10.25C12.0904 10.25 11.7504 9.90999 11.7504 9.49999V4.30999L11.0304 5.02999C10.7404 5.31999 10.2604 5.31999 9.97043 5.02999C9.68043 4.73999 9.68043 4.25999 9.97043 3.96999L11.9704 1.96999C12.1804 1.75999 12.5104 1.68999 12.7904 1.80999C13.0704 1.91999 13.2504 2.19999 13.2504 2.49999V9.49999C13.2504 9.90999 12.9104 10.25 12.5004 10.25Z" fill="white"/>
                                <path d="M14.5004 5.24994C14.3104 5.24994 14.1204 5.17994 13.9704 5.02994L11.9704 3.02994C11.6804 2.73994 11.6804 2.25994 11.9704 1.96994C12.2604 1.67994 12.7404 1.67994 13.0304 1.96994L15.0304 3.96994C15.3204 4.25994 15.3204 4.73994 15.0304 5.02994C14.8804 5.17994 14.6904 5.24994 14.5004 5.24994Z" fill="white"/>
                                <path d="M14.2605 18.25H10.7305C9.68047 18.25 8.74047 17.67 8.27047 16.73L7.10047 14.39C7.06047 14.3 6.97047 14.25 6.88047 14.25H2.48047C2.07047 14.25 1.73047 13.91 1.73047 13.5C1.73047 13.09 2.07047 12.75 2.48047 12.75H6.89047C7.56047 12.75 8.16047 13.12 8.46047 13.72L9.63047 16.06C9.84047 16.49 10.2705 16.75 10.7505 16.75H14.2805C14.7605 16.75 15.1905 16.49 15.4005 16.06L16.5705 13.72C16.8705 13.12 17.4705 12.75 18.1405 12.75H22.5005C22.9105 12.75 23.2505 13.09 23.2505 13.5C23.2505 13.91 22.9105 14.25 22.5005 14.25H18.1405C18.0405 14.25 17.9605 14.3 17.9205 14.39L16.7505 16.73C16.2505 17.67 15.3105 18.25 14.2605 18.25Z" fill="white"/>
                                <path d="M15.5 23.25H9.5C4.07 23.25 1.75 20.93 1.75 15.5V12.5C1.75 7.81005 3.49 5.46005 7.39 4.89005C7.81 4.83005 8.18 5.11005 8.24 5.52005C8.3 5.93005 8.02 6.31005 7.61 6.37005C4.47 6.83005 3.25 8.55005 3.25 12.5V15.5C3.25 20.1101 4.89 21.75 9.5 21.75H15.5C20.11 21.75 21.75 20.1101 21.75 15.5V12.5C21.75 8.55005 20.53 6.83005 17.39 6.37005C16.98 6.31005 16.7 5.93005 16.76 5.52005C16.82 5.11005 17.2 4.83005 17.61 4.89005C21.51 5.46005 23.25 7.81005 23.25 12.5V15.5C23.25 20.93 20.93 23.25 15.5 23.25Z" fill="white"/>
                                </svg>

                            </button>
                        </div>
                    </div>

                    <img src="@/assets/images/img/export-hero-bg.png" alt="" class="info-hero-sec__bg">
                </div>

            </div>
        </section>

        <section class="info-dirrections-sec export-dirrections-sec" v-if="pageData[0].acf['sekcziya_-_gde_rabotaet']?.zagolovok">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf['sekcziya_-_gde_rabotaet'].zagolovok"></h2>

                <div class="info-dirrections-sec__row">

                    <swiper-container 
                    ref="coorpDirrectionsSlider" 
                    class="coorp-dirrections-slider"
                    :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }"
                    >

                    <swiper-slide v-for="(item, index) in pageData[0].acf['sekcziya_-_gde_rabotaet'].etapy" :key="index">

                    <div class="info-dirrections-sec__element">
                        <img :src="item.fon.url" :alt="item.fon.alt" class="info-dirrections-sec__element-img">
                        <div class="info-dirrections-sec__element-wrapper">
                            <div class="info-dirrections-sec__element-text-box">
                                <p class="info-dirrections-sec__element-title" v-html="item.nazvanie_etapa"></p>
                                
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

        <section class="info-numbers-sec" v-if="pageData[0].acf['sekcziya_-_produkty_v_czifrah']?.zagolovok">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf['sekcziya_-_produkty_v_czifrah'].zagolovok"></h2>

                <div class="info-numbers-sec__row">
                    <div class="info-numbers-sec__element" v-for="item in pageData[0].acf['sekcziya_-_produkty_v_czifrah'].spisok" :key="item">
                        <p class="info-numbers-sec__element-num">{{item.czifra}}</p>
                        <p class="info-numbers-sec__element-title">{{ item.zagolovok }}</p>
                        <p class="info-numbers-sec__element-sutitle">{{ item.tekst }}</p>
                    </div>

                </div>
            </div>
        </section>

        <section class="info-close-sec export-close-sec" v-if="pageData[0].acf.sekcziya_tovarah?.length">
            <div class="container">

                <h2 class="info-sec-title">Продукт, который закрывает потребности клиентов</h2>

                <div class="info-close-sec__row">

                    <div class="info-close-sec__element info-close-sec__element--anim" v-for="item in pageData[0].acf.sekcziya_tovarah" :key="item">
                        <img :src="item.fon.url" 
                        :alt="item.fon.alt" 
                        class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title" v-html="item.zagolovok"></p>
                            <p class="info-close-sec__element-text" v-html="item.opisanie"></p>
                            <p class="info-close-sec__element-full-text" v-html="item.polnoe_opisanie"></p>
                        </div>
                        <!-- <NuxtLink to="/extract-chagi"  class="info-close-sec__element-btn">
                            <span>Узнать подробнее</span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4998 22.58C12.1998 22.58 11.8998 22.51 11.6498 22.37C9.77978 21.35 6.49976 20.27 4.43976 20L4.14978 19.96C2.83978 19.8 1.75977 18.57 1.75977 17.24V5.15999C1.75977 4.36999 2.06977 3.65002 2.63977 3.13002C3.20977 2.61002 3.94974 2.36001 4.72974 2.43001C6.91974 2.61001 10.2398 3.71002 12.1198 4.88002L12.3597 5.02003C12.4297 5.05003 12.5798 5.06003 12.6398 5.02003L12.7997 4.92C13.4697 4.5 14.3097 4.08999 15.2297 3.71999C15.4597 3.62999 15.7197 3.66 15.9297 3.8C16.1397 3.94 16.2598 4.17 16.2598 4.42V7.09999L17.0898 6.55C17.3398 6.38 17.6697 6.38 17.9197 6.55L18.7498 7.09999V3.28004C18.7498 2.92004 19.0097 2.60999 19.3597 2.53999C19.6497 2.48999 19.9398 2.45001 20.1998 2.43001C20.2198 2.43001 20.2998 2.43001 20.3198 2.43001C21.0498 2.37001 21.7997 2.62003 22.3597 3.14003C22.9297 3.66003 23.2397 4.38 23.2397 5.17V17.24C23.2397 18.58 22.1598 19.8 20.8398 19.96L20.5098 20C18.4498 20.27 15.1498 21.36 13.3198 22.37C13.0998 22.51 12.7998 22.58 12.4998 22.58ZM4.47974 3.90999C4.15974 3.90999 3.86977 4.01999 3.63977 4.23C3.38977 4.46 3.24976 4.78999 3.24976 5.15999V17.24C3.24976 17.83 3.75977 18.4 4.32977 18.48L4.62976 18.52C6.87976 18.82 10.3298 19.95 12.3298 21.05C12.4198 21.09 12.5497 21.1 12.5997 21.08C14.6097 19.97 18.0698 18.83 20.3298 18.53L20.6697 18.49C21.2397 18.42 21.7498 17.84 21.7498 17.25V5.18001C21.7498 4.81001 21.6097 4.49001 21.3597 4.25001C21.1097 4.02001 20.7598 3.91001 20.3998 3.93001C20.3698 3.93001 20.2798 3.93001 20.2598 3.93001V8.50001C20.2598 8.78001 20.1097 9.02999 19.8597 9.15999C19.6097 9.28999 19.3198 9.28001 19.0898 9.12001L17.5098 8.07002L15.9297 9.12001C15.6997 9.27001 15.4097 9.28999 15.1597 9.15999C14.9197 9.02999 14.7598 8.78001 14.7598 8.50001V5.57002C14.3298 5.78002 13.9397 5.99002 13.5997 6.19002L13.4398 6.28999C12.8898 6.62999 12.1098 6.63 11.5798 6.3L11.3398 6.15004C9.64978 5.09004 6.56974 4.06999 4.60974 3.90999C4.55974 3.90999 4.51974 3.90999 4.47974 3.90999Z" fill="#1B3762"/>
                            <path d="M12.5 21.74C12.09 21.74 11.75 21.4 11.75 20.99V5.98999C11.75 5.57999 12.09 5.23999 12.5 5.23999C12.91 5.23999 13.25 5.57999 13.25 5.98999V20.99C13.25 21.41 12.91 21.74 12.5 21.74Z" fill="#1B3762"/>
                            <path d="M19.5 9.24999C19.35 9.24999 19.21 9.20998 19.08 9.11998L17.5 8.07L15.92 9.11998C15.69 9.26998 15.4 9.28996 15.15 9.15996C14.91 9.02996 14.75 8.77999 14.75 8.49999V4.41997C14.75 4.10997 14.94 3.83996 15.22 3.71996C16.6 3.16996 18.11 2.73997 19.38 2.53997C19.6 2.49997 19.82 2.57001 19.99 2.71001C20.16 2.85001 20.25 3.06002 20.25 3.28002V8.49999C20.25 8.77999 20.1 9.02996 19.85 9.15996C19.74 9.21996 19.62 9.24999 19.5 9.24999ZM17.5 6.41997C17.64 6.41997 17.79 6.45998 17.92 6.54998L18.75 7.09996V4.18999C17.95 4.36999 17.08 4.62999 16.25 4.93999V7.09996L17.08 6.54998C17.21 6.45998 17.36 6.41997 17.5 6.41997Z" fill="#1B3762"/>
                            </svg>
                        </NuxtLink> -->
               
                    </div>


                </div>
            </div>
        </section>

        <section class="info-sertificat-sec" v-if="pageData[0].acf.sekcziya_5_sertifikaty">
            <div class="container">
                <img src="@/assets/images/img/sertificat-sec.png" alt="" class="info-sertificat-sec__img">
                <div class="info-sertificat-sec__info-wrapper">
                    <div class="info-sertificat-sec__info-wrapper-header">
                        <h2 class="info-sertificat-sec__info-wrapper-title" v-html="pageData[0].acf.sekcziya_5_sertifikaty.zagolovok"></h2>
                        <a @click="openSerteficatPopup(pageData[0].acf.sekcziya_5_sertifikaty.sertifikaty)" class="info-sertificat-sec__info-wrapper-btn">
                            <span>Смотреть сертификацию компании</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2002 12.45H9.2002C8.7902 12.45 8.4502 12.11 8.4502 11.7C8.4502 11.29 8.7902 10.95 9.2002 10.95H14.2002C14.6102 10.95 14.9502 11.29 14.9502 11.7C14.9502 12.11 14.6102 12.45 14.2002 12.45Z" fill="white"/>
                            <path d="M11.7002 14.95C11.2902 14.95 10.9502 14.61 10.9502 14.2V9.20001C10.9502 8.79001 11.2902 8.45001 11.7002 8.45001C12.1102 8.45001 12.4502 8.79001 12.4502 9.20001V14.2C12.4502 14.61 12.1102 14.95 11.7002 14.95Z" fill="white"/>
                            <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="white"/>
                            <path d="M22.0004 22.75C21.8104 22.75 21.6204 22.68 21.4704 22.53L19.4704 20.53C19.1804 20.24 19.1804 19.76 19.4704 19.47C19.7604 19.18 20.2404 19.18 20.5304 19.47L22.5304 21.47C22.8204 21.76 22.8204 22.24 22.5304 22.53C22.3804 22.68 22.1904 22.75 22.0004 22.75Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                    <div class="info-sertificat-sec__body" v-html="pageData[0].acf.sekcziya_5_sertifikaty.tekst"></div>
                </div>
            </div>
        </section>

        <section class="info-form-sec export-form-sec">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf.sekcziya_forma.zagolovok"></h2>
                <p class="info-form-sec__subtitle" v-html="pageData[0].acf.sekcziya_forma.tekst"></p>
                <div class="info-form-sec__wrapper">
                    <img :src="pageData[0].acf.sekcziya_forma.izobrazhenie.url" :alt="pageData[0].acf.sekcziya_forma.izobrazhenie.alt" class="info-form-sec__img">

                    <formTypeExport />

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

import formTypeExport from '@/components/forms/form-type-export.vue'


//DATA
const store = useCounterStore()

const route = useRoute()

const coorpDirrectionsSlider = ref(null)

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=export`)

console.log('pageData', pageData)


//METHODS 

function openForm(){
    store.changeTrigerButtonForm('Кнопка в первой секции страницы')
    store.changePopupCurrent('popup-form')
}

function openSerteficatPopup(data){
    store.changeSerteficatCurrent(data)
    store.changePopupCurrent('popup-serteficat') 
}


//banner gallery
const swiperDirrections = useSwiper(coorpDirrectionsSlider, {
   loop: true,
   slidesPerView: 6,
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
      slidesPerView: 6,
      spaceBetween: 10,
    },
  }
})


//HOOKS


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
        { rel: 'canonical', href: `${store.domainUrlCurrent}/${pageData.value[0].acf.canonical || route.name}` }
    ]
})
</script>