<template>
    <main class="main">

        <section class="products-catalog-sec">
            <div class="container">

                <div class="breadcrumbs-row-mob">
                    <div class="breadcrumbs">
                        <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                        <span class="breadcrumbs__text">Продукция</span>
                    </div>

                    <div class=" product-search">
                        <div class="product-search__input-wrapepr">
                            <input type="text" placeholder="Поиск" class="product-search__input">
                            <div class="product-search__start-search-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#1B3762" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                

                <div class="products-catalog-sec__wrapper">
                    <aside class="products-catalog-sec__aside products-aside">

                        <p class="products-aside__title">Категории товаров</p>

                        <customCheckbox :title="'Чаи из чаги'" />

                        <customCheckbox :title="'Экстракты чаги'" />

                        <customCheckbox :title="'Подарочные наборы'" />


                        <div class="products-catalog-sec__aside-range-pc">
                            <customRange :title="'Цена'" />
                        </div>

                        <div class="products-aside__row-mob" >
                            <div class="products-aside__filtr-btn" @click="mobFoltrActiv = !mobFoltrActiv" 
                            :class="{'products-aside__filtr-btn--activ':mobFoltrActiv}">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1266_97164)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33203 2.00004C1.33203 1.63185 1.63051 1.33337 1.9987 1.33337H13.9987C14.3669 1.33337 14.6654 1.63185 14.6654 2.00004V3.7239C14.6654 4.07752 14.5249 4.41666 14.2748 4.66671L9.9987 8.94285V12.6667C9.9987 12.9192 9.85603 13.1501 9.63017 13.263L6.96351 14.5963C6.75685 14.6997 6.51142 14.6886 6.31488 14.5671C6.11833 14.4457 5.9987 14.2311 5.9987 14V8.94285L1.72256 4.66671C1.47251 4.41666 1.33203 4.07752 1.33203 3.7239V2.00004ZM2.66536 2.66671V3.7239L7.13677 8.1953C7.26179 8.32033 7.33203 8.4899 7.33203 8.66671V12.9214L8.66536 12.2547V8.66671C8.66536 8.4899 8.7356 8.32033 8.86063 8.1953L13.332 3.7239V2.66671H2.66536Z" fill="#1B3762"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1266_97164">
                                <rect width="13.3333" height="13.3333" fill="white" transform="translate(1.33203 1.33337)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                <span>Фильтры</span>
                            </div>


                            <div class="products-aside__filtr-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1266_97167)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19396 1.52864C4.45431 1.26829 4.87642 1.26829 5.13677 1.52864L7.80344 4.1953C8.06379 4.45565 8.06379 4.87776 7.80344 5.13811C7.54309 5.39846 7.12098 5.39846 6.86063 5.13811L5.33203 3.60952V12.6667C5.33203 13.0349 5.03355 13.3334 4.66536 13.3334C4.29717 13.3334 3.9987 13.0349 3.9987 12.6667V3.60952L2.4701 5.13811C2.20975 5.39846 1.78764 5.39846 1.52729 5.13811C1.26694 4.87776 1.26694 4.45565 1.52729 4.1953L4.19396 1.52864ZM11.332 2.66671C11.7002 2.66671 11.9987 2.96518 11.9987 3.33337L11.9987 12.3906L13.5273 10.862C13.7876 10.6016 14.2098 10.6016 14.4701 10.862C14.7305 11.1223 14.7305 11.5444 14.4701 11.8048L11.8034 14.4714C11.6784 14.5965 11.5088 14.6667 11.332 14.6667C11.1552 14.6667 10.9857 14.5965 10.8606 14.4714L8.19396 11.8048C7.93361 11.5444 7.93361 11.1223 8.19396 10.862C8.45431 10.6016 8.87642 10.6016 9.13677 10.862L10.6654 12.3906V3.33337C10.6654 2.96518 10.9638 2.66671 11.332 2.66671Z" fill="#1B3762"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1266_97167">
                                <rect width="13.3333" height="13.3333" fill="white" transform="translate(1.33203 1.33337)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                <span>Популярность</span>
                            </div>
                        </div>

                        <div class="products-aside__filtr-mob-wrapper" v-if="mobFoltrActiv == true">
                            <customRange :title="'Цена'" />
                        </div>
                        

                    </aside>

                    <div class="products-catalog-sec__elements-wrapper">
                        <div class="products-catalog-sec__elements-wrapper-header">
                            <h1 class="products-catalog-sec__elements-wrapper-title">Товары</h1>
                            <div class="products-catalog-sec__elements-wrapper-search product-search">
                                <div class="product-search__input-wrapepr">
                                    <input type="text" placeholder="Поиск" class="product-search__input">
                                    <div class="product-search__start-search-btn">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#1B3762" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="products-catalog-sec__elements-wrapper-body">
                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                            <productCard />

                        </div>
                        
                        <div class="pagination">

                            <a href="" class="pagination__btn pagination__btn-prev">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8332 10H4.1665M4.1665 10L9.99984 15.8333M4.1665 10L9.99984 4.16667" stroke="#1B3762" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <span>Назад</span>
                            </a>

                            <ul class="pagination__num-list">
                                <li class="pagination__nam-li ">
                                    <a href="">1</a>
                                </li>
                                <li class="pagination__nam-li pagination__nam-li--activ">
                                    <a href="">2</a>
                                </li>
                                <li class="pagination__nam-li">
                                    <a href="">3</a>
                                </li>
                                <li class="pagination__nam-li">
                                    <a href="">4</a>
                                </li>
                            </ul>
                            <a href="" class="pagination__btn pagination__btn-next">
                                <span>Далее</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16666M15.8332 10L9.99984 15.8333" stroke="#1B3762" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        
    </main>
    
</template>

<script setup>

//IMPORT

// import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import productCard from '@/components/component__producr-card.vue'

import customCheckbox from '@/components/small/checkbox-custom.vue'

import customRange from '@/components/small/range-custom.vue'




//DATA
const mobFoltrActiv = ref(false)
// const heroBannerSec = ref(null)

// const aboutHomeSlider = ref(null)


// //METHODS 

// //banner gallery
// const swiperHerroBanner = useSwiper(heroBannerSec, {
//    loop: true,
//    slidesPerView: 1,
//    spaceBetween: 0,   
//    speed: 700,
// })

// //about gallery
// const swiperAbout = useSwiper(aboutHomeSlider, {
//    loop: true,
//    slidesPerView: 1,
//    spaceBetween: 0,   
//    speed: 700,
// })








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