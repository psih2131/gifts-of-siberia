<template>
    <div class="popups-wrapper">

        <popupForm v-if="store.popupCurrent == 'popup-form'" />

        <popupFormDone v-if="store.popupCurrent == 'popup-form-done'" />
         <!-- <popupFormDone  />   -->
        
    </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import popupForm from '@/components/popups/popup__form.vue'

import popupFormDone from '@/components/popups/popup-form-done.vue'



//DATA
const store = useCounterStore()


//METHODS 



//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});

 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })

</script>