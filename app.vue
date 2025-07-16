<template>
  <div class="app-container">
      <NuxtLayout>
        <NuxtPage />

        <HeadScripts :html="scriptsBlock" />

        <BodyScripts :html="bodyScripts" />

      </NuxtLayout>
  </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import HeadScripts from '@/components/HeadRaw.vue'

import BodyScripts from '@/components/BodyScripts.vue'


const store = useCounterStore()

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

console.log('optionsData',optionsData)

const scriptsBlock = optionsData.value?.blok_metrik_pered_zakryvayushhim_tegom_head || ''

const bodyScripts = optionsData.value?.blok_metrik_pered_zakryvayushhim_tegom_body || ''


//DATA



//METHODS 



//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});

</script>