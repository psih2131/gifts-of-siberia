<template>
    <div class="form-popup-done popup">
        <div class="popup__close" @click="closePopup()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0D0D0D"/>
            </svg>
        </div>

        <div class="form-popup-done__wrapper">
            <div class="form-popup-done__icon-wrapper">
                <svg width="109" height="108" viewBox="0 0 109 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="54.5" cy="53.9961" r="53.9961" fill="#23A26D" fill-opacity="0.12"/>
                <path d="M53.5327 28.2832C39.3652 28.2832 27.8203 39.8281 27.8203 53.9956C27.8203 68.1632 39.3652 79.7081 53.5327 79.7081C67.7003 79.7081 79.2452 68.1632 79.2452 53.9956C79.2452 39.8281 67.7003 28.2832 53.5327 28.2832ZM65.8233 48.0818L51.2443 62.6607C50.8844 63.0207 50.3958 63.2264 49.8816 63.2264C49.3673 63.2264 48.8788 63.0207 48.5188 62.6607L41.2422 55.3841C40.4965 54.6384 40.4965 53.4042 41.2422 52.6586C41.9879 51.9129 43.2221 51.9129 43.9677 52.6586L49.8816 58.5724L63.0978 45.3563C63.8434 44.6106 65.0776 44.6106 65.8233 45.3563C66.5689 46.1019 66.5689 47.3104 65.8233 48.0818Z" fill="#23A26D"/>
                </svg>
            </div>

            <p class="form-popup-done__title">Заявка отправлена</p>
            <p class="form-popup-done__subtitle">Спасибо, что выбрали нас! Наши специалисты свяжутся с Вами в ближайшее время.</p>

        </div>
        
    </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
// import popupForm from '@/components/popups/popup__form.vue'


//DATA
const store = useCounterStore()


//METHODS 
function closePopup(){
    store.changePopupCurrent(null)
}

//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});

</script>