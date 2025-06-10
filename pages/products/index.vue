<template>
    <main class="main">

        <section class="products-catalog-sec">
            <div class="container">
                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">Продукция</span>
                </div>

                <div class="products-catalog-sec__wrapper">
                    <aside class="products-catalog-sec__aside products-aside">

                        <p class="products-aside__title">Категории товаров</p>

                        <customCheckbox :title="'Чаи из чаги'" />

                        <customCheckbox :title="'Экстракты чаги'" />

                        <customCheckbox :title="'Подарочные наборы'" />

                        <customRange :title="'Цена'" />

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