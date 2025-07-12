<template>
    <main class="main">


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

            <!-- :pagination="{
            dynamicBullets: true,
            clickable: true
            }" -->

              <swiper-slide v-for="item in frontpage[0].acf.sekcziya_1_bannera" :key="item">
                  <div class="hero-banner-slider__element">
                    <img :src="item.izobrazhenie_bannera_pk.url" :alt="item.izobrazhenie_bannera_pk.alt" class="hero-banner-slider__img">
                    <img :src="item.izobrazhenie_bannera_mobilka.url" :alt="item.izobrazhenie_bannera_mobilka.alt" class="hero-banner-slider__img-mob">
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



      <section class="popular-prod-sec" v-if="popularProdList?.length">
        <div class="container">
          <div class="popular-prod-sec__header">
            <p class="popular-prod-sec__title">Популярные товары</p>

            <NuxtLink to="/products" class="popular-prod-sec__link"  >
              <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="63" height="51" rx="12.5" stroke="#1B3762"/>
              <path d="M42.7071 26.7071C43.0976 26.3166 43.0976 25.6834 42.7071 25.2929L36.3431 18.9289C35.9526 18.5384 35.3195 18.5384 34.9289 18.9289C34.5384 19.3195 34.5384 19.9526 34.9289 20.3431L40.5858 26L34.9289 31.6569C34.5384 32.0474 34.5384 32.6805 34.9289 33.0711C35.3195 33.4616 35.9526 33.4616 36.3431 33.0711L42.7071 26.7071ZM23 26V27H42V26V25H23V26Z" fill="#1B3762"/>
              </svg>
            </NuxtLink>

          </div>

          <div class="popular-prod-sec__row">
             <productCard v-for="item in popularProdList" :key="item" :productData="item" :catList="all_categories" />
          </div>
        </div>
      </section>


      <section class="home-about-sec">
        <div class="container">

          <div class="home-about-sec__title-mob">О компании “Дары Сибири”</div>
          <div class="home-about-sec__slider-wrapper">
            <swiper-container 
            ref="aboutHomeSlider" 
            class="about-home-slider"
            :pagination="{
            dynamicBullets: true,
            clickable: true
            }"
            >

            <!-- :pagination="{
            dynamicBullets: true,
            clickable: true
            }" -->


              <swiper-slide >
                  <div class="about-home-slider__element">
                    <img src="@/assets/images/img/about-img-1.jpg" alt="" class="about-home-slider__img">
                  </div>
              </swiper-slide>

              <swiper-slide >
                  <div class="about-home-slider__element">
                     <img src="@/assets/images/img/about-img-1.jpg" alt="" class="about-home-slider__img">
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
            <p class="home-about-sec__text">
              <b>Дары Сибири</b> — это бренд, который соединяет древние традиции и современные технологии. <br><br>

Мы создаем натуральные продукты на основе уникальных даров сибирской природы, чтобы <b>поддерживать здоровье, укреплять иммунитет и вдохновлять на осознанное потребление</b>.
            </p>
            <div class="home-about-sec__mission">
              Наша миссия — приносить пользу людям, предлагая экологически чистые продукты высочайшего качества.
            </div>
            <img src="@/assets/images/img/about-home-bg.png" alt="" class="home-about-sec__bg-img">
          </div>
        </div>
      </section>


      <section class="home-advantages-sec">
        <div class="container">
          <h2 class="home-advantages-sec__title">чем уникальна чага</h2>
          <p class="home-advantages-sec__subtitle"><b>Чага (Inonotus obliquus)</b> – это гриб, который растет на березах в холодных северных регионах. 
Он давно используется в традиционной медицине благодаря своим многочисленным полезным свойствам</p>
          <div class="home-advantages-sec__wrapper">

            <div class="home-advantages-sec__element">
              <p class="home-advantages-sec__element-title">Антиоксидантное действие:</p>
              <p class="home-advantages-sec__element-text">Чага богата антиоксидантами, которые помогают нейтрализовать свободные радикалы и <b>защищают клетки от окислительного стресса.</b></p>
            </div>

            <div class="home-advantages-sec__element">
              <p class="home-advantages-sec__element-title">Противовоспалительное действие:</p>
              <p class="home-advantages-sec__element-text">Чага содержит вещества, которые помогают <b>уменьшить воспаление в организме</b>, что может быть полезно при различных хронических заболеваниях.</p>
            </div>

            <div class="home-advantages-sec__element">
              <p class="home-advantages-sec__element-title">Регуляция уровня сахара:</p>
              <p class="home-advantages-sec__element-text">Чага может способствовать <b>нормализации уровня сахара в крови</b> 
, что полезно для людей 
с диабетом или предиабетом.</p>
            </div>

            <div class="home-advantages-sec__element">
              <p class="home-advantages-sec__element-title">Улучшение пищеварения:</p>
              <p class="home-advantages-sec__element-text">Чага поддерживает здоровье желудочно-кишечного тракта, помогая в <b>лечении язв и гастритов</b>.</p>
            </div>

            <div class="home-advantages-sec__element">
              <p class="home-advantages-sec__element-title">Детоксикация организма:</p>
              <p class="home-advantages-sec__element-text">Чага способствует <b>выведению токсинов</b> из организма 
и поддерживает функцию печени.</p>
            </div>
          </div>
        </div>

        <img src="@/assets/images/img/home-advantages-bg.png" alt="" class="home-advantages-sec__bg">
      </section>


      <section class="banner-video-sec">
        <div class="container">
          <videoBanner />
        </div>
      </section>


      <section class="last-news-sec">
        <div class="container">
          <div class="last-news-sec__header">
            <h2 class="last-news-sec__title">Последние статьи и новости</h2>
            <a href="" class="last-news-sec__link">
              <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="63" height="51" rx="12.5" stroke="#1B3762"/>
              <path d="M42.7071 26.7071C43.0976 26.3166 43.0976 25.6834 42.7071 25.2929L36.3431 18.9289C35.9526 18.5384 35.3195 18.5384 34.9289 18.9289C34.5384 19.3195 34.5384 19.9526 34.9289 20.3431L40.5858 26L34.9289 31.6569C34.5384 32.0474 34.5384 32.6805 34.9289 33.0711C35.3195 33.4616 35.9526 33.4616 36.3431 33.0711L42.7071 26.7071ZM23 26V27H42V26V25H23V26Z" fill="#1B3762"/>
              </svg>

            </a>
          </div>

          <div class="last-news-sec__row">
            <newsCard />

            <newsCard />

            <newsCard />

            <newsCard />
          </div>

          <div class="last-news-sec__slider">
              <swiper-container 
            ref="newsHomeSlider" 
            class="news-home-slider"
            :pagination="{
            dynamicBullets: true,
            clickable: true
            }"
            >

            <!-- :pagination="{
            dynamicBullets: true,
            clickable: true
            }" -->


              <swiper-slide >
                  <div class="news-home-slider__element">
                    <newsCard />
                  </div>
              </swiper-slide>

              <swiper-slide >
                  <div class="news-home-slider__element">
                     <newsCard />
                  </div>
              </swiper-slide>

              <swiper-slide >
                  <div class="news-home-slider__element">
                     <newsCard />
                  </div>
              </swiper-slide>

              <swiper-slide >
                  <div class="news-home-slider__element">
                     <newsCard />
                  </div>
              </swiper-slide>
                </swiper-container>
          </div>
        </div>
      </section>

  
       

        
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

const heroBannerSec = ref(null)

const aboutHomeSlider = ref(null)

const newsHomeSlider = ref(null)

const popularProdList = ref([])

// категории
const { data: all_categories } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/products-section`
)

const { data: frontpage } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=home`)

// получаем рекомендованные посты
try {
  const mainPost = frontpage.value?.[0]
  const chitatTakzhe = mainPost?.acf['sekcziya_2_-_populyarnye_tovary']

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/products?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    popularProdList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}

console.log('recomendPostsList', popularProdList)

console.log('frontpage', frontpage)

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









//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});



 // props
 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })
</script>


<style >
@media only screen and (min-width: 760px) {
   swiper-container::part(pagination) {
    opacity: 0;
   }
}
@media only screen and (max-width: 760px) {

  swiper-container::part(pagination) {
    bottom: 0px; /* если нужно сместить пагинацию */
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
