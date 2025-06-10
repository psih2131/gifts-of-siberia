<template>
  <div class="custom-checkbox">

    <label>
        <input type="checkbox" class="checkbox-input" name="colors" value="indigo">
        <span>  {{title}}</span>
    </label>

  </div>
</template>


<script setup>

//IMPORT

// import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';





//DATA


//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});



// props
const props = defineProps({
  title: String,
})
</script>