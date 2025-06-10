<template>
  <div class="custom-range">

    <p class="custom-range__title">{{title}}</p>


    <div class="custom-range__slide">
      <ClientOnly>
      <Vueform>
        <SliderElement @change="getData" :min="0" :max="500" :default="price" />
      </Vueform>
    </ClientOnly>
    </div>
    

    <div class="custom-range__row">
        <div class="custom-range__value">{{price[0]}} ₽</div>
        <div class="custom-range__value">{{price[1]}} ₽</div>
    </div>



  </div>
</template>


<script setup  > 

//IMPORT

// import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';



const price = ref([0, 500])

//methods
function getData(data){

    price.value = data
    console.log(data)
     
    
}




// props
const props = defineProps({
  title: String,
})
</script>