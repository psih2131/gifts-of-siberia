<template>
    <main class="main">

        <section class="post-sec">
            <div class="container">

                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>

                    <NuxtLink class="breadcrumbs__link" to="/blog">Блог /</NuxtLink>

                    <span class="breadcrumbs__text">{{object_data_single[0].title.rendered}}</span>
                </div>

                <div class="post-sec__wrapper">
                    <div class="post-sec__header">

                        <template v-if="object_data_single[0]['blog-category'] && all_categories && all_categories.length > 0">
                            <NuxtLink v-for="item in object_data_single[0]['blog-category']" :key="item"  class="post-sec__teg" :to="`/blog/categories/${currentCatSlug(item)}`">#{{ curentCatTitle(item) }}</NuxtLink>
                        </template>

                        <!-- <NuxtLink  class="post-sec__teg" to="/blog/categories/health">#здоровье</NuxtLink> -->
                        <div class="post-sec__time-read" v-if="object_data_single[0].acf.vremya_prochteniya_v_minutah">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.9987 18.5104C5.63203 18.5104 2.08203 15.1379 2.08203 10.9896C2.08203 6.84125 5.63203 3.46875 9.9987 3.46875C14.3654 3.46875 17.9154 6.84125 17.9154 10.9896C17.9154 15.1379 14.3654 18.5104 9.9987 18.5104ZM9.9987 4.65625C6.3237 4.65625 3.33203 7.49833 3.33203 10.9896C3.33203 14.4808 6.3237 17.3229 9.9987 17.3229C13.6737 17.3229 16.6654 14.4808 16.6654 10.9896C16.6654 7.49833 13.6737 4.65625 9.9987 4.65625Z" fill="#1B3762"/>
                            <path d="M10 11.3855C9.65833 11.3855 9.375 11.1163 9.375 10.7917V6.83337C9.375 6.50879 9.65833 6.23962 10 6.23962C10.3417 6.23962 10.625 6.50879 10.625 6.83337V10.7917C10.625 11.1163 10.3417 11.3855 10 11.3855Z" fill="#1B3762"/>
                            <path d="M12.5 2.67712H7.5C7.15833 2.67712 6.875 2.40796 6.875 2.08337C6.875 1.75879 7.15833 1.48962 7.5 1.48962H12.5C12.8417 1.48962 13.125 1.75879 13.125 2.08337C13.125 2.40796 12.8417 2.67712 12.5 2.67712Z" fill="#1B3762"/>
                            </svg>
                            <span>
                                Время прочтения -
                                <b>{{object_data_single[0].acf.vremya_prochteniya_v_minutah}}  мин</b>
                            </span>
                        </div>
                        <p class="post-sec__creade-date">{{formatDateToRussian(object_data_single[0].date)}}</p>  
                    </div>
                    <h1 class="post-sec__title">{{object_data_single[0].title.rendered}}</h1>

                    <div class="post-sec__text-container post-wp-editor" v-if="object_data_single[0]?.acf?.redaktor" v-html="object_data_single[0].acf.redaktor">
                      
                    </div>

                    <p class="post-sec__down-text" v-if="object_data_single[0]?.acf?.nizhnij_tekst_posle_redaktora">
                        {{object_data_single[0].acf.nizhnij_tekst_posle_redaktora}}
                    </p>
                </div>

            </div>
        </section>


        <section class="last-news-sec post-page-other-news" v-if="object_data_single && recomendPostsList && recomendPostsList.length > 0">
            <div class="container">
            <div class="last-news-sec__header">
                <h2 class="last-news-sec__title">читайте также</h2>
            </div>

            <div class="last-news-sec__row">

                <newsCard v-for="(item, index) in recomendPostsList" :key="index" :postData="item" :catList="all_categories" />

            </div>
            </div>
        </section>
        
    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import newsCard from '@/components/component__news-card.vue'





//DATA
const route = useRoute()

const store = useCounterStore()

const recomendPostsList = ref([])

// основной пост
const { data: object_data_single } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?slug=${route.params.id}`,
  { key: `post-${route.params.id}` }
)

// категории
const { data: all_categories } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category`
)

// получаем рекомендованные посты
try {
  const mainPost = object_data_single.value?.[0]
  const chitatTakzhe = mainPost?.acf?.chitat_takzhe

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    recomendPostsList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}

console.log('recomendPostsList.value', recomendPostsList)
console.log('object_data_single', object_data_single)
console.log('all_categories', all_categories)

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
    let element = all_categories.value.find(u => u.id === +itemID)

    return element.name
}

//get current cat slug
function currentCatSlug(itemID){
    let element = all_categories.value.find(u => u.id === +itemID)

    return element.slug
}







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




//SEO
useHead({
    title: object_data_single.value[0].acf.seo_title || object_data_single.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: object_data_single.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: object_data_single.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: object_data_single.value[0].acf.seo_title },
        { property: 'og:description', content: object_data_single.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: object_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: object_data_single.value[0].acf.seo_title },
        { name: 'twitter:description', content: object_data_single.value[0].acf.seo_description },
        { name: 'twitter:image', content: object_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            object_data_single.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/blog/categories/${object_data_single.value[0].acf.canonical || route.params.id}` }
    ]
})
</script>