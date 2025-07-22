<template>
    <main class="main">

        <section class="product-hero-sec">
            <div class="container">
                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <NuxtLink class="breadcrumbs__link" to="/products">Продукция /</NuxtLink>
                    <span class="breadcrumbs__text" v-html="object_data_single[0].title.rendered"></span>
                </div>

                <div class="product-hero-sec__wrapper">
                    <div class="product-hero-sec__slider">

                        <div class="prod-big-slider__wrapper">
                            <swiper-container 
                            ref="prodBigSlider" 
                            class="prod-big-slider"
                            >

                            <!-- :pagination="{
                            dynamicBullets: true,
                            clickable: true
                            }" -->


                            <swiper-slide v-for="(item, index) in object_data_single[0].acf.galereya_izobrazhenij" :key="index">
                                <div class="prod-big-slider__element">
                                    <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt" class="prod-big-slider__img">
                                </div>
                            </swiper-slide>

                            </swiper-container>

                            <div class="prodB-button-prev custom-nav-v1" @click="swiperProdBig.prev()" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.09 20.67C15.28 20.67 15.47 20.6 15.62 20.45C15.91 20.16 15.91 19.68 15.62 19.39L9.09999 12.87C8.61999 12.39 8.61999 11.61 9.09999 11.13L15.62 4.61002C15.91 4.32002 15.91 3.84002 15.62 3.55002C15.33 3.26002 14.85 3.26002 14.56 3.55002L8.03999 10.07C7.52999 10.58 7.23999 11.27 7.23999 12C7.23999 12.73 7.51999 13.42 8.03999 13.93L14.56 20.45C14.71 20.59 14.9 20.67 15.09 20.67Z" fill="#1B3762"/>
                                </svg>
                            </div>
                            <div class="prodB-button-next custom-nav-v1" @click="swiperProdBig.next()">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.90998 20.67C8.71998 20.67 8.52998 20.6 8.37998 20.45C8.08998 20.16 8.08998 19.68 8.37998 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37998 4.61002C8.08998 4.32002 8.08998 3.84002 8.37998 3.55002C8.66998 3.26002 9.14998 3.26002 9.43998 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43998 20.45C9.28998 20.59 9.09998 20.67 8.90998 20.67Z" fill="#1B3762"/>
                                </svg>
                            </div>    
                        </div>

                        <div class="prod-small-slider-wrapper">
                           <div class="prod-small-slider">


                            <swiper-container 
                            ref="prodSmallSlider" 
                            class="prod-small-slider"
                            
                            >

                            <!-- :pagination="{
                            dynamicBullets: true,
                            clickable: true
                            }" -->


                            <swiper-slide v-for="(item,index) in object_data_single[0].acf.galereya_izobrazhenij" :key="index">
                                <div class="prod-small-slider__element" @click="swiperProdBig.to(index)">
                                    <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt" class="prod-small-slider__img">
                                </div>
                            </swiper-slide>

                            </swiper-container>


                               <!-- <div v-for="(item, index) in object_data_single[0].acf.galereya_izobrazhenij" :key="index" class="prod-small-slider__element" @click="swiperProdBig.to(index)">
                                    <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt" class="prod-small-slider__img">
                                </div> -->

                           </div>
 
                        </div>
                        
                    </div>

                    

                    <div class="product-hero-sec__info">
                        <h1 class="product-hero-sec__title" v-html="object_data_single[0].title.rendered"></h1>
                        <ul class="product-hero-sec__info-list" v-if="object_data_single[0]?.acf?.spisok_izobrazhenij_soderzhimogo">

                            <li class="product-hero-sec__info-list-element" v-for="item in object_data_single[0].acf.spisok_izobrazhenij_soderzhimogo" :key="item">
                                <div class="product-hero-sec__info-list-name">
                                    <div class="product-hero-sec__info-list-name-icons">
                                        <div class="product-hero-sec__info-list-name-icon" v-for="image in item.izobrazhenie" :key="image">
                                            <img :src="image.img.url" :alt="image.img.alt" class="product-hero-sec__info-list-name-icon-img">
                                        </div>
                                    </div>
                                    <p class="product-hero-sec__info-list-name-text">{{ item.nazvanie_sostava }}</p>
                                </div>
                                <div class="product-hero-sec__info-list-value">{{ item.kolichestvo }}</div>
                            </li>

                        </ul>


                        <div class="info-buy__row-mob">
                                <a  v-if="object_data_single[0]?.acf?.ssylka_na_wildberries" 
                                :href="object_data_single[0].acf.ssylka_na_wildberries" 
                                target="_blank"
                                class="info-buy__link-mob">
                                    <img src="@/assets/images/img/wb-mob-btn.png" alt="" class="info-buy__link-img-mob">
                                </a>

                                <a v-if="object_data_single[0]?.acf?.ssylka_na_ozon"  
                                :href="object_data_single[0].acf.ssylka_na_ozon"  
                                target="_blank"
                                class="info-buy__link-mob">
                                    <img src="@/assets/images/img/ozon-mob-btn-v2.png" alt="" class="info-buy__link-img-mob">
                                </a>
                            </div>

                        <!-- <div class="product-hero-sec__info-price">
                            1 200 ₽
                        </div> -->

                        <div class="product-hero-sec__info-advantages" v-if="object_data_single[0]['products-section']?.length"> 
                            <p class="product-hero-sec__info-advantages-title">Разделы:</p>

                            <div class="product-hero-sec__info-advantages-element" v-for="item in object_data_single[0]['products-section']" :key="item">
                                <span class="product-hero-sec__info-advantages-element-icon">
                                    <img v-if="getCurrentCat(item)?.acf?.ikonka_kategorii?.url" :src="getCurrentCat(item).acf.ikonka_kategorii.url" :alt="getCurrentCat(item).acf.ikonka_kategorii.alt">
                                </span>

                                <span class="product-hero-sec__info-advantages-element-text">{{ getCurrentCat(item).name }}</span>
                            </div>


                        </div>

                        <div class="product-hero-sec__small-description" v-if="object_data_single[0]?.acf?.kratkoe_opisanie" v-html="object_data_single[0].acf.kratkoe_opisanie"></div>

                        <div class="product-hero-sec__info-buy info-buy">
                            <p class="info-buy__title">Покупка в один клик!</p>
                            <p class="info-buy__subtitle">Перейдите на маркетплейс и оформите понравившийся товар в пару шагов.</p>
                            <div class="info-buy__btn-request">
                                <button class="btnreq" @click="openFormPopup()">
                                    <span>Оставить заявку</span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99964 6.99997C7.7263 6.99997 7.49964 6.77331 7.49964 6.49997V3.03997L7.01964 3.51997C6.8263 3.71331 6.5063 3.71331 6.31297 3.51997C6.11964 3.32664 6.11964 3.00664 6.31297 2.81331L7.6463 1.47997C7.7863 1.33997 8.0063 1.29331 8.19297 1.37331C8.37964 1.44664 8.49964 1.63331 8.49964 1.83331V6.49997C8.49964 6.77331 8.27297 6.99997 7.99964 6.99997Z" fill="white"/>
                                    <path d="M9.33167 3.66669C9.205 3.66669 9.07833 3.62002 8.97833 3.52002L7.645 2.18669C7.45167 1.99336 7.45167 1.67336 7.645 1.48002C7.83833 1.28669 8.15833 1.28669 8.35167 1.48002L9.685 2.81336C9.87833 3.00669 9.87833 3.32669 9.685 3.52002C9.585 3.62002 9.45833 3.66669 9.33167 3.66669Z" fill="white"/>
                                    <path d="M9.17365 12.3334H6.82031C6.12031 12.3334 5.49365 11.9467 5.18031 11.32L4.40031 9.76002C4.37365 9.70002 4.31365 9.66669 4.25365 9.66669H1.32031C1.04698 9.66669 0.820312 9.44002 0.820312 9.16669C0.820312 8.89335 1.04698 8.66669 1.32031 8.66669H4.26031C4.70698 8.66669 5.10698 8.91335 5.30698 9.31335L6.08698 10.8734C6.22698 11.16 6.51365 11.3334 6.83365 11.3334H9.18698C9.50698 11.3334 9.79365 11.16 9.93365 10.8734L10.7136 9.31335C10.9136 8.91335 11.3136 8.66669 11.7603 8.66669H14.667C14.9403 8.66669 15.167 8.89335 15.167 9.16669C15.167 9.44002 14.9403 9.66669 14.667 9.66669H11.7603C11.6936 9.66669 11.6403 9.70002 11.6136 9.76002L10.8336 11.32C10.5003 11.9467 9.87365 12.3334 9.17365 12.3334Z" fill="white"/>
                                    <path d="M9.9987 15.6667H5.9987C2.3787 15.6667 0.832031 14.12 0.832031 10.5V8.49999C0.832031 5.37333 1.99203 3.80666 4.59203 3.42666C4.87203 3.38666 5.1187 3.57333 5.1587 3.84666C5.1987 4.11999 5.01203 4.37333 4.7387 4.41333C2.64536 4.71999 1.83203 5.86666 1.83203 8.49999V10.5C1.83203 13.5733 2.92536 14.6667 5.9987 14.6667H9.9987C13.072 14.6667 14.1654 13.5733 14.1654 10.5V8.49999C14.1654 5.86666 13.352 4.71999 11.2587 4.41333C10.9854 4.37333 10.7987 4.11999 10.8387 3.84666C10.8787 3.57333 11.132 3.38666 11.4054 3.42666C14.0054 3.80666 15.1654 5.37333 15.1654 8.49999V10.5C15.1654 14.12 13.6187 15.6667 9.9987 15.6667Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="info-buy__row">
                                <a  v-if="object_data_single[0]?.acf?.ssylka_na_wildberries" 
                                :href="object_data_single[0].acf.ssylka_na_wildberries" 
                                target="_blank"
                                class="info-buy__link">
                                    <img src="@/assets/images/img/buy-wb.png" alt="" class="info-buy__link-img">
                                </a>

                                <a v-if="object_data_single[0]?.acf?.ssylka_na_ozon"  
                                :href="object_data_single[0].acf.ssylka_na_ozon"  
                                target="_blank"
                                class="info-buy__link">
                                    <img src="@/assets/images/img/buy-ozon.png" alt="" class="info-buy__link-img">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="product-info-sec">
            <div class="container">

                <div class="product-info-sec__nav-wrapper">
                    <ul class="product-info-sec__nav">
                        <li class="product-info-sec__nav-li" :class="{'product-info-sec__nav-li--activ': curentTabCounter == 1}" @click="curentTabCounter = 1">Видео</li>
                        <li class="product-info-sec__nav-li" :class="{'product-info-sec__nav-li--activ': curentTabCounter == 2}" @click="curentTabCounter = 2">Состав и полезные свойства</li>
                        <li class="product-info-sec__nav-li" :class="{'product-info-sec__nav-li--activ': curentTabCounter == 3}" @click="curentTabCounter = 3">Условия хранения</li>
                        <li class="product-info-sec__nav-li" :class="{'product-info-sec__nav-li--activ': curentTabCounter == 4}" @click="curentTabCounter = 4">Способы приготовления</li>
                    </ul>
                </div>
                

                <div class="product-info-sec__body">

                    <div class="product-info-sec__body-element" v-if="curentTabCounter == 1">

                        <template v-if="object_data_single[0]?.acf?.video?.video_fajl">
                            <h3 class="product-info-sec__title" v-if="object_data_single[0].acf.video.zagolovok">
                                {{object_data_single[0].acf.video.zagolovok}}
                            </h3>
                        
                            <div class="product-info-sec__editor wp-editor-prod" 
                            v-if="object_data_single[0].acf.video.tekst_nad_video"
                            v-html="object_data_single[0].acf.video.tekst_nad_video"></div>

                            <videoBanner v-if="object_data_single[0].acf.video.video_fajl" :videoUrl="object_data_single[0].acf.video.video_fajl.url" />
                        </template>

                        <template v-else>
                            <p>Видеообзора для этого товара еще не добавленно</p>
                        </template>

                        

                    </div>

                    <div class="product-info-sec__body-element" v-if="curentTabCounter == 2">

                        <template v-if="object_data_single[0]?.acf?.sostav_i_poleznye_svojstva">
                            <h3 class="product-info-sec__title">полезные свойства</h3>
                            <div class="product-info-sec__editor wp-editor-prod" v-html="object_data_single[0].acf.sostav_i_poleznye_svojstva">
                           
                            </div>
                        </template>

                        <template v-else>
                            <p>Нет информации</p>
                        </template>
                        
                    </div>

                    <div class="product-info-sec__body-element" v-if="curentTabCounter == 3">
                        <template v-if="object_data_single[0]?.acf?.usloviya_hraneniya">
                            <div class="product-info-sec__editor wp-editor-prod" v-html="object_data_single[0].acf.usloviya_hraneniya">
                           
                            </div>
                        </template>

                        <template v-else>
                            <p>Нет информации</p>
                        </template>
                    </div>

                    <div class="product-info-sec__body-element" v-if="curentTabCounter == 4">
                        <template v-if="object_data_single[0]?.acf?.sposoby_prigotovleniya">
                            <h3 class="product-info-sec__title">Рекомендации по применению</h3>
                            <div class="product-info-sec__editor wp-editor-prod" v-html="object_data_single[0].acf.sposoby_prigotovleniya">
                           
                            </div>
                        </template>

                        <template v-else>
                            <p>Нет информации</p>
                        </template>
                    </div>

                </div>
            </div>
        </section>

        <section class="product-simmilar-sec" v-if="object_data_single[0]?.acf?.rekomenduemye_tovary?.length && recomendPostsList?.length">
            <div class="container">
                <h3 class="product-simmilar-sec__title">Может понравиться</h3>
                <div class="product-simmilar-sec__row">

                    <productCard v-for="item in recomendPostsList" :key="item" :productData="item" :catList="all_categories" />

                </div>

                 <swiper-container 
                    ref="nprodHomeSlider" 
                    class="prod-single-slider"
                    :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }"
                    >

                    <!-- :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }" -->

                    <swiper-slide  v-for="item in recomendPostsList" :key="item">
                        <div class="prod-single-slider__element">
                            <productCard :productData="item" :catList="all_categories"/>
                        </div>
                    </swiper-slide>

                </swiper-container>

            </div>
        </section>

    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import videoBanner from '@/components/component__video-banner.vue'

import productCard from '@/components/component__producr-card.vue'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

const route = useRoute()

console.log(route.params.id)


//DATA
const store = useCounterStore()

const prodBigSlider = ref(null)

const prodSmallSlider = ref(null)

const curentTabCounter = ref(1)

const nprodHomeSlider = ref(null)

const recomendPostsList = ref([])


// товар
const { data: object_data_single } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/products?slug=${route.params.id}`,
  { key: `post-${route.params.id}` }
)

// категории
const { data: all_categories } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/products-section`
)


// получаем рекомендованные посты
try {
  const mainPost = object_data_single.value?.[0]
  const chitatTakzhe = mainPost?.acf?.rekomenduemye_tovary

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

console.log('recomendPostsList', recomendPostsList)
console.log('object_data_single', object_data_single)


//METHODS 

const swiperProdBig = useSwiper(prodBigSlider, {
   loop: false,
   slidesPerView: 1,
   spaceBetween: 0,   
   speed: 700,
  
})

const swiperProdSmall = useSwiper(prodSmallSlider, {
   loop: false,
   slidesPerView: 7,
   spaceBetween: 0,   
   speed: 700,
//   centeredSlides: true

breakpoints: {
    100: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    760: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1220: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
  }
})


const swiperProd = useSwiper(nprodHomeSlider, {
   loop: true,
   slidesPerView: 2,
   spaceBetween: 10,   
   speed: 700,
})

//get current category
function getCurrentCat(itemID){
    let element = all_categories.value.find(u => u.id === +itemID)

    return element
}


//open form popup 
function openFormPopup(){
    store.changeTrigerButtonForm('кнопка внутри товара в первой секции')
    store.changePopupCurrent('popup-form')
}


//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

});

onBeforeUnmount(() => {

});



//SEO
useHead({
    title: object_data_single.value[0].acf.seo_title || object_data_single.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: object_data_single.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: object_data_single.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: object_data_single.value[0].acf.seo_title },
        { property: 'og:description', content: object_data_single.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: object_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: object_data_single.value[0].acf.seo_title },
        { name: 'twitter:description', content: object_data_single.value[0].acf.seo_description },
        { name: 'twitter:image', content: object_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            object_data_single.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/blog/categories/${object_data_single.value[0].acf.canonical || route.params.id}` }
    ]
})

</script>





<style >

.prod-small-slider::part(wrapper) {
  justify-content: center;
}
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


  .prod-small-slider::part(wrapper) {
  justify-content: flex-start;
}
  
}


</style>
