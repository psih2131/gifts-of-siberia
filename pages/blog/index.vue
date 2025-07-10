<template>
    <main class="main">

        <section class="blog-sec">
            <div class="container">

                <div class="breadcrumbs-row-mob">
                    <div class="breadcrumbs">
                        <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                        <span class="breadcrumbs__text">Блог</span>
                    </div>

                    <div class=" product-search">
                        <div class="product-search__input-wrapepr">
                            <input type="text" placeholder="Поиск" class="product-search__input">
                            <div class="product-search__start-search-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#1B3762" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="blog-sec__wrapper">

                    <aside class="blog-sec__aside">
                        <nav class="blog-sec__nav">
                            <ul class="blog-sec__nav-list">
                                <li class="blog-sec__nav-list-element">

                                     <NuxtLink to="/blog" class="blog-sec__nav-link"  activeClass="blog-sec__nav-link--activ">
                                          <span class="blog-sec__nav-link-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 20.25H11C10.59 20.25 10.25 19.91 10.25 19.5C10.25 19.09 10.59 18.75 11 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z" fill="#1B3762"/>
                                            <path d="M21 13.25H11C10.59 13.25 10.25 12.91 10.25 12.5C10.25 12.09 10.59 11.75 11 11.75H21C21.41 11.75 21.75 12.09 21.75 12.5C21.75 12.91 21.41 13.25 21 13.25Z" fill="#1B3762"/>
                                            <path d="M21 6.25H11C10.59 6.25 10.25 5.91 10.25 5.5C10.25 5.09 10.59 4.75 11 4.75H21C21.41 4.75 21.75 5.09 21.75 5.5C21.75 5.91 21.41 6.25 21 6.25Z" fill="#1B3762"/>
                                            <path d="M3.99945 7.24994C3.80945 7.24994 3.61945 7.17994 3.46945 7.02994L2.46945 6.02994C2.17945 5.73994 2.17945 5.25994 2.46945 4.96994C2.75945 4.67994 3.23945 4.67994 3.52945 4.96994L3.99945 5.43994L6.46945 2.96994C6.75945 2.67994 7.23945 2.67994 7.52945 2.96994C7.81945 3.25994 7.81945 3.73994 7.52945 4.02994L4.52945 7.02994C4.37945 7.17994 4.18945 7.24994 3.99945 7.24994Z" fill="#1B3762"/>
                                            <path d="M3.99945 14.2499C3.80945 14.2499 3.61945 14.1799 3.46945 14.0299L2.46945 13.0299C2.17945 12.7399 2.17945 12.2599 2.46945 11.9699C2.75945 11.6799 3.23945 11.6799 3.52945 11.9699L3.99945 12.4399L6.46945 9.96994C6.75945 9.67994 7.23945 9.67994 7.52945 9.96994C7.81945 10.2599 7.81945 10.7399 7.52945 11.0299L4.52945 14.0299C4.37945 14.1799 4.18945 14.2499 3.99945 14.2499Z" fill="#1B3762"/>
                                            <path d="M3.99945 21.2499C3.80945 21.2499 3.61945 21.1799 3.46945 21.0299L2.46945 20.0299C2.17945 19.7399 2.17945 19.2599 2.46945 18.9699C2.75945 18.6799 3.23945 18.6799 3.52945 18.9699L3.99945 19.4399L6.46945 16.9699C6.75945 16.6799 7.23945 16.6799 7.52945 16.9699C7.81945 17.2599 7.81945 17.7399 7.52945 18.0299L4.52945 21.0299C4.37945 21.1799 4.18945 21.2499 3.99945 21.2499Z" fill="#1B3762"/>
                                            </svg>

                                        </span>
                                        <span class="blog-sec__nav-link-text">Все статьи</span>
                                     </NuxtLink>

                                </li>

                                <template v-if="all_categories">
                                    <li class="blog-sec__nav-list-element" v-for="item in all_categories" :key="item">
                                        <NuxtLink :to="`/blog/categories/${item.slug}`" class="blog-sec__nav-link"  activeClass="blog-sec__nav-link--activ">
                                            <span class="blog-sec__nav-link-icon">
                                                <img :src="item.acf.ikonka_kategorii.url" :alt="item.acf.ikonka_kategorii.alt">
                                            </span>
                                            <span class="blog-sec__nav-link-text">{{item.name}}</span>
                                        </NuxtLink>
                                    </li>
                                </template>
                                       
                            </ul>
                        </nav>
                    </aside>

                    <div class="blog-sec__body">
                        <div class="blog-sec__body-header">
                            <h1 class="products-catalog-sec__elements-wrapper-title">блог</h1>
                            <div class="products-catalog-sec__elements-wrapper-search product-search">
                                <div class="product-search__input-wrapepr">
                                    <input type="text" placeholder="Поиск" class="product-search__input">
                                    <div class="product-search__start-search-btn">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#1B3762" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="blog-sec__body-wrapper">

                            <template v-if="all_object && all_categories && all_object.length > 0">

                                <newsCard v-for="(item, index) in all_object" :key="index" :postData="item" :catList="all_categories" />

                            </template>


                            <template v-else>
                                <div class="blog-sec__body-no-posts no-posts-box">
                                    <p class="no-posts-box__title">упс!</p>
                                    <p class="no-posts-box__subtitle">По запросу ничего не найдено</p>
                                    <div class="no-posts-box__img-wrapper">
                                        <img src="@/assets/images/img/do-posts.png" alt="">
                                    </div>
                                </div>
                            </template>


                        </div>


                        <div class="blog-sec__body-pagination-row" v-if="all_object && all_categories && all_object.length > 0">

                            <div class="pagination">

                                <a  class="pagination__btn pagination__btn-prev" @click="prevPage()" v-if="currentPage > 1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8332 10H4.1665M4.1665 10L9.99984 15.8333M4.1665 10L9.99984 4.16667" stroke="#1B3762" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span>Назад</span>
                                </a>

                                <ul class="pagination__num-list">
                                    <li class="pagination__nam-li " v-for="(item, index) in totalPages" :key="index" :class="{'pagination__nam-li--activ' : item == currentPage }">
                                 

                                        <NuxtLink :to="`/blog/?page=${item}`" >
                                            {{ item }}
                                        </NuxtLink>

                                    </li>

                                </ul>
                                <a  class="pagination__btn pagination__btn-next" @click="nextPage()" v-if="currentPage < totalPages">
                                    <span>Далее</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16666M15.8332 10L9.99984 15.8333" stroke="#1B3762" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </a>
                            </div>

                            <div class="page-counter">
                                <div class="page-counter__text">Страница</div>
                                <div class="page-counter__counter">{{ currentPage }}</div>
                                <div class="page-counter__text">из  {{ totalPages }}</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
        
    </main>
    
</template>

<script setup>




//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch   } from 'vue';

import newsCard from '@/components/component__news-card.vue'


//SEO
useHead({
  title: 'Заголовок страницы',
  meta: [
    { name: 'description', content: 'Описание страницы для SEO' },
    { name: 'keywords', content: 'ключевое, слово, пример' },
    { property: 'og:title', content: 'Заголовок для соцсетей' },
    // другие мета-теги...
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/blog' }
  ]
})


//DATA
const store = useCounterStore()

const route = useRoute()

const router = useRouter()

const currentPage = ref(route.query.page || 1)

const perPage = ref(2)

const totalPages = ref(null)

// const { data: all_object } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog`)


const { data: all_object, error, pending } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?page=${currentPage.value || 1}&per_page=${perPage.value}`, {
    onResponse({ response }) {
      const total = response.headers.get('X-WP-Total')
      const pages = response.headers.get('X-WP-TotalPages')
      
      if (pages) totalPages.value = Number(pages)
      
      console.log('X-WP-Total', total)
      console.log('X-WP-TotalPages', pages)
    },
})

const { data: all_categories } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category`)

console.log(all_object)

console.log(all_categories)






//METHODS 

//get posts on client side
async function fetchClientData() {
  const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?page=${currentPage.value || 1}&per_page=${perPage.value}`)
  const data = await res.json()
  all_object.value = data

  const pages = res.headers.get('X-WP-TotalPages')
  if (pages) totalPages.value = Number(pages)
}


//next pagin page
function nextPage(){
    if(currentPage.value >= totalPages.value){

    }
    else{
        router.push({
            path: '/blog/',
            query: { page: +currentPage.value + 1 }
        })
    }
}

function prevPage(){
    if(currentPage.value <= 1){

    }
    else{
        router.push({
            path: '/blog/',
            query: { page: +currentPage.value - 1 }
        })
    }
}





//HOOKS
onMounted(async () => {
    const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?page=${currentPage.value || 1}&per_page=${perPage.value}`)
    const pages = res.headers.get('X-WP-TotalPages')
    if (pages) totalPages.value = Number(pages)


    console.log('route',route.query.page)
})



watch(() => route.query.page, async (newPage) => {
    console.log('gg', route.query.page)
    currentPage.value = route.query.page
    fetchClientData()
})


onBeforeUnmount(() => {

});



 // props
 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })
</script>