<template>
    <main class="main">

        <section class="info-hero-sec gift-sets-hero-sec">
            <div class="container">

                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">Подарочные наборы</span>
                </div>

                <div class="info-hero-sec__wrapper">
                    <div class="info-hero-sec__text-box">
                        <h1 class="info-hero-sec__title"><b>Натуральные подарки</b> из Сибири –<br> Эко-подарки с чагой, ягодами и травами</h1>
                        <div class="info-hero-sec__text">
                            <p>
                                Ищете необычный, полезный и красивый подарок? Подарочные наборы «Даров Сибири» — 
это сочетание природной силы чаги, сибирских ягод, ароматных трав и продуманного дизайна. 
Наши наборы — не просто чай, а символ заботы, уюта и настоящего северного качества.
                            </p>
                            <ul>
                                <li>– Натуральный состав</li>
                                <li>– Подарочная упаковка</li>
                                <li>– Концепция «подарка со смыслом»</li>
                            </ul>

                        </div>

                    </div>

                    <img src="@/assets/images/img/gift-sets-hero.png" alt="" class="info-hero-sec__bg">
                </div>

            </div>
        </section>


        <section class="info-benefits-sec  gift-sets-benefits-sec">
            <div class="container">
                <h2 class="info-sec-title">Почему выбирают наши подарки</h2>
                
                <div class="info-benefits-sec__row">
                    <div class="info-benefits-sec__card">
                        <img src="@/assets/images/img/gift-sets-choise-1.jpg" alt="" class="info-benefits-sec__card-img">
                        <p class="info-benefits-sec__card-title">Подарок со смыслом</p>
                        <p class="info-benefits-sec__card-text">Каждый набор — это забота 
о человеке, его здоровье 
и настроении. Это не просто “ещё один чай”, а внимательное “я хочу, чтобы тебе было хорошо”.</p>
                    </div>

                    <div class="info-benefits-sec__card">
                        <img src="@/assets/images/img/gift-sets-choise-2.jpg" alt="" class="info-benefits-sec__card-img">
                        <p class="info-benefits-sec__card-title">Натуральный состав</p>
                        <p class="info-benefits-sec__card-text">Внутри — крупная сибирская чага, цельные ягоды, настоящие травы. Без пыли, искусственных ароматизаторов и "здоровья 
на словах".</p>
                    </div>

                    <div class="info-benefits-sec__card">
                        <img src="@/assets/images/img/gift-sets-choise-3.jpg" alt="" class="info-benefits-sec__card-img">
                        <p class="info-benefits-sec__card-title">Готовый к вручению</p>
                        <p class="info-benefits-sec__card-text">Плотные коробки, премиальные тубусы, оформление, которое приятно держать в руках. Можно дарить без лишней подготовки — просто вручить с улыбкой.</p>
                    </div>

                    <div class="info-benefits-sec__card">
                        <img src="@/assets/images/img/gift-sets-choise-4.jpg" alt="" class="info-benefits-sec__card-img">
                        <p class="info-benefits-sec__card-title">Незабываемые эмоции</p>
                        <p class="info-benefits-sec__card-text">Такой подарок не уйдёт “в ящик”. Его заваривают, пробуют, обсуждают и вспоминают. А вкус и польза чаги оставляют после себя ощущение тепла и силы.</p>
                    </div>

                    <div class="info-benefits-sec__card">
                        <img src="@/assets/images/img/gift-sets-choise-5.jpg" alt="" class="info-benefits-sec__card-img">
                        <p class="info-benefits-sec__card-title">Аромат и уют</p>
                        <p class="info-benefits-sec__card-text">Когда в коробке пахнет ягодами и травами — это момент, который хочется повторить. Наши наборы дарят ощущение уюта, будто кто-то позаботился по-настоящему.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="info-img-slider-sec">
            <div class="container">
                <div class="info-img-slider-sec__slider">
                    <swiper-container 
                    ref="imgSlideBannerSec" 
                    class="img-slider"
                    >

                    <!-- :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }" -->


                    <swiper-slide >
                        <div class="img-slider__element">
                            <img src="@/assets/images/img/slide-1.jpg" alt="" class="img-slider__img">
                        </div>
                    </swiper-slide>

                    <swiper-slide >
                        <div class="img-slider__element">
                            <img src="@/assets/images/img/slide-2.jpg" alt="" class="img-slider__img">
                        </div>
                    </swiper-slide>

                    <swiper-slide >
                        <div class="img-slider__element">
                            <img src="@/assets/images/img/slide-1.jpg" alt="" class="img-slider__img">
                        </div>
                    </swiper-slide>

                    <swiper-slide >
                        <div class="img-slider__element">
                            <img src="@/assets/images/img/slide-2.jpg" alt="" class="img-slider__img">
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
                <h2 class="info-sec-title">Хотите купить подарки из чаги оптом?</h2>
                <p class="info-form-sec__subtitle">Мы работаем с оптом, экспортом и корпоративными заказами. Заполните форму, и мы свяжемся с вами, чтобы предложить индивидуальные решения для вашего бизнеса.</p>
                <div class="info-form-sec__wrapper">
                    <img src="@/assets/images/img/form-img.jpg" alt="" class="info-form-sec__img">
                    <div class="info-form-sec__form">
                        <p class="info-form-sec__form-title">Оставьте заявку</p>
                        <p class="info-form-sec__form-subtitle">Заполните форму, и наши специалисты свяжутся с Вами в ближайшее время.</p>
                        <form action="">
                            <div class="info-form-sec__form-inp">
                                <input type="text" placeholder="Ваше имя">
                            </div>

                             <div class="info-form-sec__form-inp">
                                <input type="text" placeholder="Email">
                            </div>

                             <div class="info-form-sec__form-inp">
                                <input type="text" placeholder="Номер телефона">
                            </div>

                            <div class="info-form-sec__form-inp-btn">
                                <input type="submit" value="Оставить заявку">
                                <div class="info-form-sec__form-inp-btn-icon">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5004 10.25C12.0904 10.25 11.7504 9.90999 11.7504 9.49999V4.30999L11.0304 5.02999C10.7404 5.31999 10.2604 5.31999 9.97043 5.02999C9.68043 4.73999 9.68043 4.25999 9.97043 3.96999L11.9704 1.96999C12.1804 1.75999 12.5104 1.68999 12.7904 1.80999C13.0704 1.91999 13.2504 2.19999 13.2504 2.49999V9.49999C13.2504 9.90999 12.9104 10.25 12.5004 10.25Z" fill="white"/>
                                    <path d="M14.5004 5.24994C14.3104 5.24994 14.1204 5.17994 13.9704 5.02994L11.9704 3.02994C11.6804 2.73994 11.6804 2.25994 11.9704 1.96994C12.2604 1.67994 12.7404 1.67994 13.0304 1.96994L15.0304 3.96994C15.3204 4.25994 15.3204 4.73994 15.0304 5.02994C14.8804 5.17994 14.6904 5.24994 14.5004 5.24994Z" fill="white"/>
                                    <path d="M14.2605 18.25H10.7305C9.68047 18.25 8.74047 17.67 8.27047 16.73L7.10047 14.39C7.06047 14.3 6.97047 14.25 6.88047 14.25H2.48047C2.07047 14.25 1.73047 13.91 1.73047 13.5C1.73047 13.09 2.07047 12.75 2.48047 12.75H6.89047C7.56047 12.75 8.16047 13.12 8.46047 13.72L9.63047 16.06C9.84047 16.49 10.2705 16.75 10.7505 16.75H14.2805C14.7605 16.75 15.1905 16.49 15.4005 16.06L16.5705 13.72C16.8705 13.12 17.4705 12.75 18.1405 12.75H22.5005C22.9105 12.75 23.2505 13.09 23.2505 13.5C23.2505 13.91 22.9105 14.25 22.5005 14.25H18.1405C18.0405 14.25 17.9605 14.3 17.9205 14.39L16.7505 16.73C16.2505 17.67 15.3105 18.25 14.2605 18.25Z" fill="white"/>
                                    <path d="M15.5 23.25H9.5C4.07 23.25 1.75 20.93 1.75 15.5V12.5C1.75 7.81005 3.49 5.46005 7.39 4.89005C7.81 4.83005 8.18 5.11005 8.24 5.52005C8.3 5.93005 8.02 6.31005 7.61 6.37005C4.47 6.83005 3.25 8.55005 3.25 12.5V15.5C3.25 20.1101 4.89 21.75 9.5 21.75H15.5C20.11 21.75 21.75 20.1101 21.75 15.5V12.5C21.75 8.55005 20.53 6.83005 17.39 6.37005C16.98 6.31005 16.7 5.93005 16.76 5.52005C16.82 5.11005 17.2 4.83005 17.61 4.89005C21.51 5.46005 23.25 7.81005 23.25 12.5V15.5C23.25 20.93 20.93 23.25 15.5 23.25Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="info-form-sec__form-captcha-wrapper">
                                <img src="@/assets/images/img/captcha.png" alt="" class="info-form-sec__form-captcha">
                            </div>
                        </form>
                    </div>
                </div>

                <!-- <div class="info-form-sec__down-text">
                    <p>Чага оптом | Натуральные чаи оптом | Экстракт чаги в стиках оптом | Поставщик чаги | Сибирские экстракты | Натуральные продукты из Сибири | Продукция для HoReCa | Травяной чай для фитнес-центров | Чага для санаториев | Эко-подарки для корпоративных клиентов | Подарочные наборы из чаги | Купить чагу оптом от производителя</p>
                </div> -->
            </div>
        </section>

         <section class="info-other-prod-sec">
            <div class="container">
            <div class="popular-prod-sec__header">
                <p class="popular-prod-sec__title">товары: подарочные наборы из чаги</p>
                <a href="" class="popular-prod-sec__link">
                <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="63" height="51" rx="12.5" stroke="#1B3762"/>
                <path d="M42.7071 26.7071C43.0976 26.3166 43.0976 25.6834 42.7071 25.2929L36.3431 18.9289C35.9526 18.5384 35.3195 18.5384 34.9289 18.9289C34.5384 19.3195 34.5384 19.9526 34.9289 20.3431L40.5858 26L34.9289 31.6569C34.5384 32.0474 34.5384 32.6805 34.9289 33.0711C35.3195 33.4616 35.9526 33.4616 36.3431 33.0711L42.7071 26.7071ZM23 26V27H42V26V25H23V26Z" fill="#1B3762"/>
                </svg>

                </a>
            </div>

            <div class="popular-prod-sec__row">
                <productCard />

                <productCard />

                <productCard />

                <productCard />
            </div>

            <div class="info-form-sec__down-text">
                    <p>Чай с чагой | Чай из чаги | Чага чай купить | Иван-чай с чагой | Травяные чаи оптом | Натуральный чай из Сибири | Сибирский чай купить | Премиальный чай | Премиальный чай купить | Премиальная коллекция чая | Премиальные бренды чая | Премиальные сорта чая | Премиальный подарочный набор чая | Премиальный подарочный чай | Наборы премиальных чаёв | Магазин премиального чая | Русский чай | Традиционный русский чай | Ароматный русский чай | Русский иван-чай | Чай русские традиции</p>
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


//DATA
const imgSlideBannerSec = ref(null)

//banner gallery
const swiperImgSlider = useSwiper(imgSlideBannerSec, {
   loop: true,
   slidesPerView: 2,
   spaceBetween: 14,   
   speed: 700,
})


//METHODS 






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