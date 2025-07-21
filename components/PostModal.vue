<template>
  <div class="modal-backdrop" @click.self="$emit('close')">

    <div class="modal-content">

        <div class="modal-close" @click="$emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0D0D0D"/>
            </svg>
        </div>


        <div class="modal-content__container">
            <div class="modal-content__header">

                <div class="modal-content__header-text">
                    <p class="modal-content__title" v-if="postData.acf?.zagolovok_h1" v-html="postData.acf.zagolovok_h1"></p>
                    <p class="modal-content__subtitle" v-if="postData.acf?.podzagolovok" v-html="postData.acf.podzagolovok"></p>
                </div>

                <img src="@/assets/images/img/pageModal-logo.png" alt="" class="modal-content__header-img">
            </div>

            <div class="modal-content__body">
                <div class="modal-content__advantages" v-if="postData.acf?.preimushhestva?.length">

                    <div class="modal-content__advantages-element" v-for="item in postData.acf.preimushhestva" :key="item">
                        <div class="modal-content__advantages-element-wrapper">
                            <p class="modal-content__advantages-title" v-if="item.zagolovok_preimushhestva" v-html="item.zagolovok_preimushhestva"></p>
                            <p class="modal-content__advantages-subtitle" v-if="item.tekst" v-html="item.tekst"></p>
                        </div>
                    </div>
                </div>

                <div class="modal-content__use" v-if="postData.acf?.varianty_primeneniya?.length">
                    <p class="modal-content__use-title">Варианты применения:</p>
                    <ul class="modal-content__use-wrapper">
                        <li class="modal-content__use-element"  v-for="item in postData.acf.varianty_primeneniya" :key="item">{{ item.tekst_varianta }}</li>
                    </ul>
                </div>
            </div>

            <div class="modal-content__footer">
                <img src="@/assets/images/img/pageModalFooterImg.png" alt="" class="modal-content__footer-img">
                <img src="@/assets/images/img/pageModalBg.png" alt="" class="modal-content__footer-bg">
            </div>
        </div>
      
   
    </div>

  </div>
</template>

<script setup>


// PROPS
    const props = defineProps({
        postData: Object,
 

    })
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}


</style>