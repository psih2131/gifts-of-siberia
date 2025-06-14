<template>
    <main class="main">

        <section class="info-hero-sec extract-hero-sec">
            <div class="container">

                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">Экстракт чаги</span>
                </div>

                <div class="info-hero-sec__wrapper">
                    <div class="info-hero-sec__text-box">
                        <h1 class="info-hero-sec__title"><b>Экстракты чаги в стиках</b> – <br>
польза природы в удобной форме</h1>
                        <div class="info-hero-sec__text">
                            <p>
                                Авторские экстракты «Дары Сибири» — это современный формат природной поддержки организма. 
В основе каждого стика — 100% натуральный берёзовый гриб чага, собранный в экологически чистых районах Сибири, в сочетании с экстрактами трав и ягод, известных своими 
функциональными свойствами.<br><br>
Мы создали уникальные сочетания: высокая концентрация, удобный формат, премиальная подача.
                            </p>

                        </div>


                    </div>

                    <img src="@/assets/images/img/extract-hero.png" alt="" class="info-hero-sec__bg">
                </div>

            </div>
        </section>



        <section class="info-what-extract-sec ">
            <div class="container"></div>
        </section>

        
    </main>
    
</template>

<script setup>

//IMPORT

// import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';






//DATA



//METHODS 






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