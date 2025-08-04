<template>
  <div class="custom-checkbox">

    <label>
        <input type="checkbox" class="checkbox-input" name="colors" value="indigo" @change="handleChange" :checked="statusChecked">
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

const statusChecked = ref()



//METHOD
function handleChange(event){
  console.log('Checked:', event.target.checked)
  let emitObject = {
    'checked':event.target.checked,
    'dataCat': props.catData
  }
  emit('currentSelect', emitObject)

}

function checkSelectedStatus(){
  for(let i = 0; i < props.querySelectedCut.length; i++){ 

    if(props.catData.slug == props.querySelectedCut[i].slug){

      statusChecked.value = true

      break 
    }
  }
}


//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
  checkSelectedStatus()

  
});

onBeforeUnmount(() => {

});



// props
const props = defineProps({
  title: String,
  catData: Object,
  querySelectedCut: Object,

})


watch(props.querySelectedCut, async(newValue)=>{
  checkSelectedStatus()
})
</script>