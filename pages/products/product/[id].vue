<template>
    <main class="main">

        <section class="product-hero-sec">
            <div class="container">
                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <NuxtLink class="breadcrumbs__link" to="/products">Продукция /</NuxtLink>
                    <span class="breadcrumbs__text">{{ route.params.id }}</span>
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


                            <swiper-slide >
                                <div class="prod-big-slider__element">
                                    <img src="@/assets/images/img/prod-single.png" alt="" class="prod-big-slider__img">
                                </div>
                            </swiper-slide>

                            <swiper-slide >
                                <div class="prod-big-slider__element">
                                    <img src="@/assets/images/img/prod-single.png" alt="" class="prod-big-slider__img">
                                </div>
                            </swiper-slide>

                            <swiper-slide >
                                <div class="prod-big-slider__element">
                                    <img src="@/assets/images/img/product-2.jpg" alt="" class="prod-big-slider__img">
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

                               <div class="prod-small-slider__element" @click="swiperProdBig.to(1)">
                                    <img src="@/assets/images/img/prod-single.png" alt="" class="prod-small-slider__img">
                                </div>

                                <div class="prod-small-slider__element" @click="swiperProdBig.to(2)">
                                    <img src="@/assets/images/img/prod-single.png" alt="" class="prod-small-slider__img">
                                </div>

                                <div class="prod-small-slider__element" @click="swiperProdBig.to(3), assda(swiperProdBig)" >
                                    <img src="@/assets/images/img/product-2.jpg" alt="" class="prod-small-slider__img">
                                </div>
                           </div>
 
                        </div>


                        
                    </div>

                    


                    <div class="product-hero-sec__info">
                        <h1 class="product-hero-sec__title">Набор "Для всей семьи"</h1>
                        <ul class="product-hero-sec__info-list">
                            <li class="product-hero-sec__info-list-element">
                                <div class="product-hero-sec__info-list-name">
                                    <div class="product-hero-sec__info-list-name-icons">
                                        <div class="product-hero-sec__info-list-name-icon">
                                            <img src="@/assets/images/img/ing-1.png" alt="" class="product-hero-sec__info-list-name-icon-img">
                                        </div>
                                    </div>
                                    <p class="product-hero-sec__info-list-name-text">Чага-чай с Розмарином</p>
                                </div>
                                <div class="product-hero-sec__info-list-value">75 г</div>
                            </li>

                            <li class="product-hero-sec__info-list-element">
                                <div class="product-hero-sec__info-list-name">
                                    <div class="product-hero-sec__info-list-name-icons">
                                        <div class="product-hero-sec__info-list-name-icon">
                                            <img src="@/assets/images/img/ing-2.png" alt="" class="product-hero-sec__info-list-name-icon-img">
                                        </div>
                                    </div>
                                    <p class="product-hero-sec__info-list-name-text">Чага-чай с Розмарином</p>
                                </div>
                                <div class="product-hero-sec__info-list-value">75 г</div>
                            </li>

                            <li class="product-hero-sec__info-list-element">
                                <div class="product-hero-sec__info-list-name">
                                    <div class="product-hero-sec__info-list-name-icons">
                                        <div class="product-hero-sec__info-list-name-icon">
                                            <img src="@/assets/images/img/ing-1.png" alt="" class="product-hero-sec__info-list-name-icon-img">
                                        </div>
                                        <div class="product-hero-sec__info-list-name-icon">
                                            <img src="@/assets/images/img/ing-2.png" alt="" class="product-hero-sec__info-list-name-icon-img">
                                        </div>
                                        <div class="product-hero-sec__info-list-name-icon">
                                            <img src="@/assets/images/img/ing-3.png" alt="" class="product-hero-sec__info-list-name-icon-img">
                                        </div>
                                    </div>
                                    <p class="product-hero-sec__info-list-name-text">Экстракт чаги “Общеукрепляющий”</p>
                                </div>
                                <div class="product-hero-sec__info-list-value">75 г</div>
                            </li>


                        </ul>

                        <div class="product-hero-sec__info-price">
                            1 200 ₽
                        </div>

                        <div class="product-hero-sec__info-advantages">
                            <p class="product-hero-sec__info-advantages-title">Разделы:</p>
                            <div class="product-hero-sec__info-advantages-element">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 22.7599C10.9099 22.7599 9.8299 22.4399 8.9799 21.8099L4.6799 18.5999C3.5399 17.7499 2.6499 15.9699 2.6499 14.5599V7.11994C2.6499 5.57994 3.7799 3.93994 5.2299 3.39994L10.2199 1.52994C11.2099 1.15994 12.7699 1.15994 13.7599 1.52994L18.7499 3.39994C20.1999 3.93994 21.3299 5.57994 21.3299 7.11994V14.5499C21.3299 15.9699 20.4399 17.7399 19.2999 18.5899L14.9999 21.7999C14.1699 22.4399 13.0899 22.7599 11.9999 22.7599ZM10.7499 2.93994L5.7599 4.80994C4.9099 5.12994 4.1599 6.20994 4.1599 7.12994V14.5599C4.1599 15.5099 4.8299 16.8399 5.5799 17.3999L9.8799 20.6099C11.0299 21.4699 12.9699 21.4699 14.1299 20.6099L18.4299 17.3999C19.1899 16.8299 19.8499 15.5099 19.8499 14.5599V7.11994C19.8499 6.20994 19.0999 5.12994 18.2499 4.79994L13.2599 2.92994C12.5799 2.68994 11.4199 2.68994 10.7499 2.93994Z" fill="#4471B4"/>
                                <path d="M10.66 14.2301C10.47 14.2301 10.28 14.1601 10.13 14.0101L8.51999 12.4001C8.22999 12.1101 8.22999 11.6301 8.51999 11.3401C8.80999 11.0501 9.28999 11.0501 9.57999 11.3401L10.66 12.4201L14.43 8.65012C14.72 8.36012 15.2 8.36012 15.49 8.65012C15.78 8.94012 15.78 9.42012 15.49 9.71012L11.19 14.0101C11.04 14.1601 10.85 14.2301 10.66 14.2301Z" fill="#4471B4"/>
                                </svg>

                                <span class="product-hero-sec__info-advantages-element-text">Защита иммунитета</span>
                            </div>

                            <div class="product-hero-sec__info-advantages-element">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4599 22.7501C12.2899 22.7501 12.1199 22.7501 11.9499 22.7401C6.34995 22.4901 1.66995 17.9801 1.27995 12.4801C0.939948 7.76011 3.66995 3.35011 8.06995 1.50011C9.31995 0.980114 9.97995 1.38011 10.2599 1.67011C10.5399 1.95011 10.9299 2.60011 10.4099 3.79011C9.94995 4.85011 9.71995 5.98011 9.72995 7.14011C9.74995 11.5701 13.4299 15.3301 17.9199 15.5101C18.5699 15.5401 19.2099 15.4901 19.8299 15.3801C21.1499 15.1401 21.6999 15.6701 21.9099 16.0101C22.1199 16.3501 22.3599 17.0801 21.5599 18.1601C19.4399 21.0601 16.0699 22.7501 12.4599 22.7501ZM2.76995 12.3701C3.10995 17.1301 7.16995 21.0301 12.0099 21.2401C15.2999 21.4001 18.4199 19.9001 20.3399 17.2801C20.4899 17.0701 20.5599 16.9201 20.5899 16.8401C20.4999 16.8301 20.3399 16.8201 20.0899 16.8701C19.3599 17.0001 18.5999 17.0501 17.8499 17.0201C12.5699 16.8101 8.24995 12.3801 8.21995 7.16011C8.21995 5.78011 8.48995 4.45011 9.03995 3.20011C9.13995 2.98011 9.15995 2.83011 9.16995 2.75011C9.07995 2.75011 8.91995 2.77011 8.65995 2.88011C4.84995 4.48011 2.48995 8.30011 2.76995 12.3701Z" fill="#4471B4"/>
                                </svg>

                                <span class="product-hero-sec__info-advantages-element-text">Снятие стресса и улучшение сна</span>
                            </div>
                        </div>

                        <div class="product-hero-sec__small-description">
                            <b>Набор "Для всей семьи"</b> — это универсальный набор чаев для любого случая. Сочетание бодрящего чая с розмарином, успокаивающей мяты и целебного экстракта чаги обеспечит всей семье пользу и приятные вкусовые ощущения. Каждый напиток в этом наборе создан, чтобы заботиться о здоровье и хорошем настроении ваших близких в любое время дня.
                        </div>

                        <div class="product-hero-sec__info-buy info-buy">
                            <p class="info-buy__title">Покупка в один клик!</p>
                            <p class="info-buy__subtitle">Перейдите на маркетплейс и оформите понравившийся товар в пару шагов.</p>
                            <div class="info-buy__btn-request">
                                <button class="btnreq">
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
                                <a href="" class="info-buy__link">
                                    <img src="@/assets/images/img/buy-wb.png" alt="" class="info-buy__link-img">
                                </a>

                                <a href="" class="info-buy__link">
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
                        <h3 class="product-info-sec__title">Обзор Набора "Для всей семьи"</h3>
                        <div class="product-info-sec__editor wp-editor-prod">
                            <p>Узнайте все о нашем подарочном наборе! В этом видео специалист расскажет о полезных свойствах напитков, уникальном сочетании ингредиентов и секретах заваривания.</p>
                        </div>

                        <videoBanner />

                    </div>

                    <div class="product-info-sec__body-element" v-if="curentTabCounter == 2">
                        <h3 class="product-info-sec__title">полезные свойства</h3>
                        <div class="product-info-sec__editor wp-editor-prod">
                            <p>Этот набор создан, чтобы подарить вам и вашим близким комфорт, здоровье и удовольствие от каждого глотка. В состав входят:</p>
                            <ul>
                                <li>Экстракт "Общеукрепляющий" (30 стиков) — это мощный комплекс натуральных экстрактов, созданный для поддержания здоровья и укрепления иммунитета. Экстракт чаги насыщает организм антиоксидантами, защищая его от негативного воздействия окружающей среды. Календула обладает противовоспалительными свойствами, способствуя общему оздоровлению. Облепиха — природный источник витаминов, помогает восстановить силы, а шиповник, богатый витамином С, поддерживает иммунную систему и защищает организм от простуд. Этот экстракт станет идеальной поддержкой для вашего здоровья каждый день.общего здоровья всей семьи.</li>
                                <li>Чай чага с розмарином (75 г) — бодрящий напиток для поддержания ясности ума и энергии на протяжении дня. Розмарин стимулирует мозговую активность, улучшает память и внимание, создавая приятное утреннее пробуждение.</li>
                                <li>Чай чага с мятой (75 г) — идеальный вечерний чай для релаксации и восстановления. Мята снимает нервное напряжение, улучшает пищеварение и способствует хорошему сну, что помогает восстановить баланс после насыщенного дня.</li>
                            </ul>
                            <p>Набор "Для всей семьи" — это гармония вкуса и пользы, которая поможет заботиться о здоровье всех членов семьи круглый год.</p>
                        </div>
                    </div>

                    <div class="product-info-sec__body-element" v-if="curentTabCounter == 3">
                        <!-- <h3 class="product-info-sec__title">Обзор Набора "Для всей семьи"</h3> -->
                        <div class="product-info-sec__editor wp-editor-prod">
                            <p>Хранить в сухом, темном месте при температуре не выше 25 °С.</p>
                        </div>
                    </div>

                    <div class="product-info-sec__body-element" v-if="curentTabCounter == 4">
                        <h3 class="product-info-sec__title">Рекомендации по применению</h3>
                        <div class="product-info-sec__editor wp-editor-prod">
                            <p>Заварите одну чайную ложку смеси в 200 мл горячей (не кипящей) воды, дайте настояться 5-7 минут и наслаждайтесь уникальным вкусом и ароматом чая. Этот напиток идеально подходит для утреннего пробуждения и вечернего расслабления, помогая поддерживать здоровье и баланс в течение дня.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="product-simmilar-sec">
            <div class="container">
                <h3 class="product-simmilar-sec__title">Может понравиться</h3>
                <div class="product-simmilar-sec__row">

                    <productCard />

                    <productCard />

                    <productCard />

                    <productCard />
                    
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


                    <swiper-slide >
                        <div class="prod-single-slider__element">
                            <productCard />
                        </div>
                    </swiper-slide>

                    <swiper-slide >
                        <div class="prod-single-slider__element">
                            <productCard />
                        </div>
                    </swiper-slide>

                    <swiper-slide >
                        <div class="prod-single-slider__element">
                            <productCard />
                        </div>
                    </swiper-slide>

                    <swiper-slide >
                        <div class="prod-single-slider__element">
                            <productCard />
                        </div>
                    </swiper-slide>
                </swiper-container>

            </div>
        </section>

    

        
    </main>
    
</template>

<script setup>

//IMPORT

// import { useCounterStore } from '@/stores/counter'

import videoBanner from '@/components/component__video-banner.vue'

import productCard from '@/components/component__producr-card.vue'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

const route = useRoute()

console.log(route.params.id)





//DATA
const prodBigSlider = ref(null)

const curentTabCounter = ref(1)

const nprodHomeSlider = ref(null)




//METHODS 


const swiperProdBig = useSwiper(prodBigSlider, {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,   
   speed: 700,
})


const swiperProd = useSwiper(nprodHomeSlider, {
   loop: true,
   slidesPerView: 2,
   spaceBetween: 10,   
   speed: 700,
})



function assda(data){
    console.log(data)
}








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
