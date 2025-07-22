<template>
    <div class="news-card" v-if="postData && postData.slug">
        <NuxtLink :to="`/blog/posts/${postData.slug}`" class="news-card__img-wrapper">
            <img :src="postData.acf.maloe_izobrazhenie_dlya_kartochki_posta.url" :alt="postData.acf.maloe_izobrazhenie_dlya_kartochki_posta.alt" class="news-card__img">
        </NuxtLink>

        <div class="news-card__header">

            <template v-if="postData['blog-category'] && catList && catList.length > 0">
                <NuxtLink v-for="item in postData['blog-category']" :key="item"  class="news-card__teg" :to="`/blog/categories/${currentCatSlug(item)}`">#{{ curentCatTitle(item) }}</NuxtLink>
            </template>
            
            <!-- <p class="news-card__date-post">15 сентября 2024</p> -->
            <p class="news-card__date-post">{{formatDateToRussian(postData.date)}}</p>
        </div>
        
        <p class="news-card__title">
            <NuxtLink :to="`/blog/posts/${postData.slug}`">{{ postData.acf.zagolovok_dlya_kartochki || postData.title.rendered }}</NuxtLink>
        </p>

        <p class="news-card__description">{{ postData.acf.korotkoe_opisanie_dlya_kartochki_posta }}</p>
        
        <div class="news-card__mob-btn-wrapper">
            <NuxtLink class="news-card__mob-btn" :to="`/blog/posts/${postData.slug}`" >Читать статью</NuxtLink>
        </div>
        
        
    </div>
</template>

<script setup>

    //IMPORT

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


    //DATA


    //METHODS 

    //date convertor
    function formatDateToRussian(dateString) {
        const date = new Date(dateString);
        
        return date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    //get current cat title
    function curentCatTitle(itemID){
        let element = props.catList.find(u => u.id === +itemID)

        return element.name
    }

    //get current cat slug
    function currentCatSlug(itemID){
        let element = props.catList.find(u => u.id === +itemID)

        return element.slug
    }


    // PROPS
    const props = defineProps({
        postData: Object,
        catList: Object,

    })
</script>