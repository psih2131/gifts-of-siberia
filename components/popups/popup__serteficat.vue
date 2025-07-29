<template>
    <div class="serteficat-popup popup">
        <div class="popup__close" @click="closePopup()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0D0D0D"/>
            </svg>
        </div>

        <div class="serteficat-popup__wrapper">
           <!-- <iframe :src="store.serteficatCurrent.url" ></iframe> -->

      
            <div class="serteficat-popup__slider">
                    <swiper-container 
                    ref="imgSerteficatsSlider" 
                    class="serteficat-popup-slider"
                    :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }"
                    >

                    <swiper-slide  v-for="item in store.serteficatCurrent" :key="item">
                        <div class="serteficat-popup-slider__element">
                            <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt" class="serteficat-popup-slider__img">
                        </div>
                    </swiper-slide>

                    </swiper-container>

                    <div class="serteficat-popup-slider-prev custom-nav-v1" @click="swiperImgSlider.prev()" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.09 20.67C15.28 20.67 15.47 20.6 15.62 20.45C15.91 20.16 15.91 19.68 15.62 19.39L9.09999 12.87C8.61999 12.39 8.61999 11.61 9.09999 11.13L15.62 4.61002C15.91 4.32002 15.91 3.84002 15.62 3.55002C15.33 3.26002 14.85 3.26002 14.56 3.55002L8.03999 10.07C7.52999 10.58 7.23999 11.27 7.23999 12C7.23999 12.73 7.51999 13.42 8.03999 13.93L14.56 20.45C14.71 20.59 14.9 20.67 15.09 20.67Z" fill="#1B3762"/>
                        </svg>
                    </div>
                    <div class="serteficat-popup-slider-next custom-nav-v1" @click="swiperImgSlider.next()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.90998 20.67C8.71998 20.67 8.52998 20.6 8.37998 20.45C8.08998 20.16 8.08998 19.68 8.37998 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37998 4.61002C8.08998 4.32002 8.08998 3.84002 8.37998 3.55002C8.66998 3.26002 9.14998 3.26002 9.43998 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43998 20.45C9.28998 20.59 9.09998 20.67 8.90998 20.67Z" fill="#1B3762"/>
                        </svg>
                    </div>
                </div>
          

        </div>
        
        
    </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
// import popupForm from '@/components/popups/popup__form.vue'



//DATA
const store = useCounterStore()

const route = useRoute()

const imgSerteficatsSlider = ref(null)



//METHODS 
function closePopup(){
    store.changePopupCurrent(null)
    store.changePopupCurrent(null)
}


//banner gallery
const swiperImgSlider = useSwiper(imgSerteficatsSlider, {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,   
   speed: 700,

   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },


  }
})



//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});

</script>