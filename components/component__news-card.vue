<template>
    <div class="news-card" v-if="postData && postData.slug">
        <NuxtLinkLocale :to="`/blog/posts/${postData.slug}`" class="news-card__img-wrapper">
            <img v-if="postData?.acf?.maloe_izobrazhenie_dlya_kartochki_posta?.url" :src="postData.acf.maloe_izobrazhenie_dlya_kartochki_posta.url" :alt="postData.acf.maloe_izobrazhenie_dlya_kartochki_posta.alt || ''" class="news-card__img">
        </NuxtLinkLocale>

        <div class="news-card__header">

            <template v-if="postData['blog-category'] && catList?.length">
                <template v-for="item in postData['blog-category']" :key="item">
                    <NuxtLinkLocale v-if="currentCatSlug(item)" class="news-card__teg" :to="`/blog/categories/${currentCatSlug(item)}`">#{{ curentCatTitle(item) }}</NuxtLinkLocale>
                </template>
            </template>
            
            <!-- <p class="news-card__date-post">15 сентября 2024</p> -->
            <p class="news-card__date-post">{{formatDateToRussian(postData.date)}}</p>
        </div>
        
        <p class="news-card__title">
            <NuxtLinkLocale :to="`/blog/posts/${postData.slug}`">{{ postData.acf.zagolovok_dlya_kartochki || postData.title.rendered }}</NuxtLinkLocale>
        </p>

        <p class="news-card__description">{{ postData.acf.korotkoe_opisanie_dlya_kartochki_posta }}</p>
        
        <div class="news-card__mob-btn-wrapper">
            <NuxtLinkLocale class="news-card__mob-btn" :to="`/blog/posts/${postData.slug}`">{{ $t('post.readArticle') }}</NuxtLinkLocale>
        </div>
        
        
    </div>
</template>

<script setup>

    //IMPORT

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


    //DATA


    //METHODS 

    //date convertor
    const { locale } = useI18n()
    function formatDateToRussian(dateString) {
        const date = new Date(dateString);
        const localeKey = locale.value === 'ru' ? 'ru-RU' : 'en-US';
        return date.toLocaleDateString(localeKey, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    //get current cat title
    function curentCatTitle(itemID){
        let element = props.catList?.find(u => u.id === +itemID)
        return element?.name ?? ''
    }

    //get current cat slug
    function currentCatSlug(itemID){
        let element = props.catList?.find(u => u.id === +itemID)
        return element?.slug ?? ''
    }


    // PROPS
    const props = defineProps({
        postData: Object,
        catList: Object,

    })
</script>