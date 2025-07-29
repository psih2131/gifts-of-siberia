<template>

  <div class="search-component" :class="{'search-component--activ': resultList, 'search-component--full': isFocused == true}">
        <div class="search-component__input-wrapepr">
            <input type="text" placeholder="Поиск" class="search-component__input" v-model="keyWord"
            @focus="isFocused = true"
            @blur="closeSearchMob()">

            <div class="search-component__loader" v-if="loaderStatus == true">
                <div class="spinner"></div>
            </div>

            <div class="search-component__close-search-btn" v-if="resultList " @click="cleareSearchResult">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#A0AAB8"/>
                </svg>
            </div>
            <div class="search-component__start-search-btn" @click="searchValidation">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#1B3762" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>

        <div class="search-component__result-wrapper" v-if="resultList">
            <ul class="search-component__result-list" v-if="resultList.length > 0">
                <li class="search-component__result-list-element search-result-element" v-for="item in resultList" :key="item">
                    <NuxtLink :to="`/blog/posts/${item.slug}`" class="search-result-element__wrapper">
                        <img :src="item.acf.maloe_izobrazhenie_dlya_kartochki_posta.url" :alt="item.acf.maloe_izobrazhenie_dlya_kartochki_posta.alt" class="search-result-element__img">
                        <div class="search-result-element__data">

                            <span class="search-result-element__title" v-html="item.title.rendered"></span>

                            <span class="search-result-element__description" v-html="item.acf.korotkoe_opisanie_dlya_kartochki_posta"></span>
                        </div>
                    </NuxtLink>
                </li>
            </ul>

            <div v-else class="search-component__error">
                По ключевому запросу постов не найдено
            </div>
        </div>

        <!-- <div  class="search-component__result-wrapper-error">
            Поле не может быть пустым
        </div> -->
    </div>
    
</template>

<script setup>
    //IMPORT
    import { useCounterStore } from '@/stores/counter'

    import SlideUpDown from 'vue-slide-up-down'

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


    //DATA

    const store = useCounterStore()

    const keyWord = ref(null)

    const resultList = ref(null)

    const loaderStatus = ref(false)

    const isFocused = ref(false)

    


    //METHODS

    function searchValidation(){
        if(keyWord.value && keyWord.value != '' && keyWord.value != ' '){
            loaderStatus.value = true
            REST_SEARCH_REQUEST()
        }
        console.log('keyWord',keyWord.value)
    }

    function cleareSearchResult(){
        resultList.value = null
        keyWord.value = null
        closeSearchMob()
    }

    function REST_SEARCH_REQUEST(){

        fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?search=${keyWord.value}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Ошибка сети: ' + response.status);
            }
            return response.json(); // парсим JSON из ответа
        })
        .then(data => {
            console.log(data); // выводим данные в консоль
            loaderStatus.value = false
            resultList.value = data

        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            resultList.value = null
            loaderStatus.value = false
        });

    }


     function closeSearchMob(){
        if(resultList.value != null || keyWord.value && keyWord.value != ''){
            isFocused.value = true
            console.log('gg1',resultList.value)
        }
        else{
            isFocused.value = false
            console.log('gg2',resultList.value)
        }
    }




</script>