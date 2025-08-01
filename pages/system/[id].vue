<template>
    <main class="main">

        <section class="doc-page-sec">
            <div class="container">
                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">{{ page_data_single[0].title.rendered }}</span>
                </div>

                <h1 class="doc-page-sec__title">
                    {{ page_data_single[0].title.rendered }}
                </h1>

                <div class="doc-page-sec__text-wrapper doc-wp-editor" v-html="page_data_single[0].content.rendered"></div>

            </div>
        </section>

    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


//DATA
const route = useRoute()

const store = useCounterStore()


// основной пост
const { data: page_data_single } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=${route.params.id}`,
  { key: `post-${route.params.id}` }
)

console.log(page_data_single)

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



  //SEO
useHead({
    title: page_data_single.value[0].acf.seo_title || page_data_single.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: page_data_single.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: page_data_single.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: page_data_single.value[0].acf.seo_title },
        { property: 'og:description', content: page_data_single.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: page_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: page_data_single.value[0].acf.seo_title },
        { name: 'twitter:description', content: page_data_single.value[0].acf.seo_description },
        { name: 'twitter:image', content: page_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            page_data_single.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/system/${page_data_single.value[0].acf.canonical || route.params.id}` }
    ]
})


</script>