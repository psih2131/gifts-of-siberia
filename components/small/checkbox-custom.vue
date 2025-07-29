<template>
  <div class="custom-checkbox">

    <label>
        <input type="checkbox" class="checkbox-input" name="colors" value="indigo" @change="handleChange">
        <span>  {{title}}</span>
    </label>

  </div>
</template>


<script setup>

//IMPORT

// import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

const emit = defineEmits(['currentSelect'])



//DATA



//METHOD
function handleChange(event){
  console.log('Checked:', event.target.checked)
  let emitObject = {
    'checked':event.target.checked,
    'dataCat': props.catData
  }
  emit('currentSelect', emitObject)

}


//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});



// props
const props = defineProps({
  title: String,
  catData: Object,

})
</script>