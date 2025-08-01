<template>
    <main class="main">

        <section class="products-catalog-sec">
            <div class="container">

                <div class="breadcrumbs-row-mob">
                    <div class="breadcrumbs">
                        <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                        <NuxtLink class="breadcrumbs__link" to="/products">Продукция /</NuxtLink>
                        <span class="breadcrumbs__text" v-if="current_category && current_category[0]">{{current_category[0].name}}</span>
                    </div>

                    <div class="search-mob-wrapper">
                        <searchComponent />
                    </div>
                </div>
                

                <div class="products-catalog-sec__wrapper">
                    <aside class="products-catalog-sec__aside products-aside">

                        <div class="products-aside__wrapper">
                            <nav class="blog-sec__nav">
                            <ul class="blog-sec__nav-list">
                                <li class="blog-sec__nav-list-element">

                                     <NuxtLink to="/products" class="blog-sec__nav-link"  activeClass="blog-sec__nav-link--activ">
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
                                        <span class="blog-sec__nav-link-text">Все товары</span>
                                     </NuxtLink>
                                </li>


                                <template v-if="all_categories">
                                    <li class="blog-sec__nav-list-element" v-for="item in all_categories" :key="item">
                                        <NuxtLink :to="`/products/sections/${item.slug}`" class="blog-sec__nav-link"  activeClass="blog-sec__nav-link--activ">
                                            <span class="blog-sec__nav-link-icon">
                                                <img v-if="item?.acf?.ikonka_kategorii?.url" :src="item.acf.ikonka_kategorii.url" :alt="item.acf.ikonka_kategorii.alt">
                                            </span>
                                            <span class="blog-sec__nav-link-text">{{item.name}}</span>
                                        </NuxtLink>
                                    </li>
                                </template>


                                

                                <!-- <template v-if="all_categories">
                                    <li class="blog-sec__nav-list-element" v-for="item in all_categories" :key="item">
                                        <NuxtLink :to="`/blog/categories/${item.slug}`" class="blog-sec__nav-link"  activeClass="blog-sec__nav-link--activ">
                                            <span class="blog-sec__nav-link-icon">
                                                <img :src="item.acf.ikonka_kategorii.url" :alt="item.acf.ikonka_kategorii.alt">
                                            </span>
                                            <span class="blog-sec__nav-link-text">{{item.name}}</span>
                                        </NuxtLink>
                                    </li>
                                </template> -->
                                       
                            </ul>
                        </nav>

                        <p class="products-aside__title">Категории товаров</p>

                        <customCheckbox v-for="item in all_categories_filtr" :key="item" :title="item.name" :catData="item" @currentSelect="filtrCateforyValidation"/>


                        <!-- <div class="products-catalog-sec__aside-range-pc">
                            <customRange :title="'Цена'" />
                        </div> -->

                        <!-- <div class="products-aside__row-mob" >
                            <div class="products-aside__filtr-btn" @click="mobFoltrActiv = !mobFoltrActiv" 
                            :class="{'products-aside__filtr-btn--activ':mobFoltrActiv}">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1266_97164)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33203 2.00004C1.33203 1.63185 1.63051 1.33337 1.9987 1.33337H13.9987C14.3669 1.33337 14.6654 1.63185 14.6654 2.00004V3.7239C14.6654 4.07752 14.5249 4.41666 14.2748 4.66671L9.9987 8.94285V12.6667C9.9987 12.9192 9.85603 13.1501 9.63017 13.263L6.96351 14.5963C6.75685 14.6997 6.51142 14.6886 6.31488 14.5671C6.11833 14.4457 5.9987 14.2311 5.9987 14V8.94285L1.72256 4.66671C1.47251 4.41666 1.33203 4.07752 1.33203 3.7239V2.00004ZM2.66536 2.66671V3.7239L7.13677 8.1953C7.26179 8.32033 7.33203 8.4899 7.33203 8.66671V12.9214L8.66536 12.2547V8.66671C8.66536 8.4899 8.7356 8.32033 8.86063 8.1953L13.332 3.7239V2.66671H2.66536Z" fill="#1B3762"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1266_97164">
                                <rect width="13.3333" height="13.3333" fill="white" transform="translate(1.33203 1.33337)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                <span>Фильтры</span>
                            </div>


                            <div class="products-aside__filtr-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1266_97167)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19396 1.52864C4.45431 1.26829 4.87642 1.26829 5.13677 1.52864L7.80344 4.1953C8.06379 4.45565 8.06379 4.87776 7.80344 5.13811C7.54309 5.39846 7.12098 5.39846 6.86063 5.13811L5.33203 3.60952V12.6667C5.33203 13.0349 5.03355 13.3334 4.66536 13.3334C4.29717 13.3334 3.9987 13.0349 3.9987 12.6667V3.60952L2.4701 5.13811C2.20975 5.39846 1.78764 5.39846 1.52729 5.13811C1.26694 4.87776 1.26694 4.45565 1.52729 4.1953L4.19396 1.52864ZM11.332 2.66671C11.7002 2.66671 11.9987 2.96518 11.9987 3.33337L11.9987 12.3906L13.5273 10.862C13.7876 10.6016 14.2098 10.6016 14.4701 10.862C14.7305 11.1223 14.7305 11.5444 14.4701 11.8048L11.8034 14.4714C11.6784 14.5965 11.5088 14.6667 11.332 14.6667C11.1552 14.6667 10.9857 14.5965 10.8606 14.4714L8.19396 11.8048C7.93361 11.5444 7.93361 11.1223 8.19396 10.862C8.45431 10.6016 8.87642 10.6016 9.13677 10.862L10.6654 12.3906V3.33337C10.6654 2.96518 10.9638 2.66671 11.332 2.66671Z" fill="#1B3762"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1266_97167">
                                <rect width="13.3333" height="13.3333" fill="white" transform="translate(1.33203 1.33337)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                <span>Популярность</span>
                            </div>
                        </div> -->

                        <!-- <div class="products-aside__filtr-mob-wrapper" v-if="mobFoltrActiv == true">
                            <customRange :title="'Цена'" />
                        </div> -->
                        </div>

                        
                        

                    </aside>

                    <div class="products-catalog-sec__elements-wrapper">
                        <div class="products-catalog-sec__elements-wrapper-header">
                            <h1 class="products-catalog-sec__elements-wrapper-title">{{current_category[0].name}}</h1>

                            <searchComponent />
                            
                        </div>

                        <div class="products-catalog-sec__elements-wrapper-body">

                            <template v-if="all_object && all_categories && all_object.length > 0">

                                <productCard v-for="(item, index) in all_object" :key="index" :productData="item" :catList="all_categories" />

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
                                <div class="bnt-pagin-wrapper">
                                    <a  class="pagination__btn pagination__btn-prev" @click="prevPage()" v-if="currentPage > 1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8332 10H4.1665M4.1665 10L9.99984 15.8333M4.1665 10L9.99984 4.16667" stroke="#1B3762" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <span>Назад</span>
                                    </a>
                                </div>

                                <ul class="pagination__num-list">
                                    <li class="pagination__nam-li " v-for="(item, index) in totalPages" :key="index" :class="{'pagination__nam-li--activ' : item == currentPage }">
                                 
                                        <NuxtLink :to="`/products/sections/${route.params.id}/?page=${item}`" >
                                            {{ item }}
                                        </NuxtLink>

                                    </li>

                                </ul>

                                <div class="bnt-pagin-wrapper">
                                    <a  class="pagination__btn pagination__btn-next" @click="nextPage()" v-if="currentPage < totalPages">
                                        <span>Далее</span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16666M15.8332 10L9.99984 15.8333" stroke="#1B3762" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
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

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import productCard from '@/components/component__producr-card.vue'

import customCheckbox from '@/components/small/checkbox-custom.vue'

// import customRange from '@/components/small/range-custom.vue'

import searchComponent from '@/components/component__search-prod.vue'



//DATA
const mobFoltrActiv = ref(false)

const store = useCounterStore()

const route = useRoute()

const router = useRouter()

const currentPage = ref(route.query.page || 1)

const perPage = ref(9)

const totalPages = ref(null)

const filtrProdCatList = ref([])

const { data: current_category } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/products-section?slug=${route.params.id}`)

const { data: all_object, error, pending } = await useFetch(
    `${store.serverUrlDomainRequest}/wp-json/wp/v2/products?products-section=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`, {
    onResponse({ response }) {
      const total = response.headers.get('X-WP-Total')
      const pages = response.headers.get('X-WP-TotalPages')
      
      if (pages) totalPages.value = Number(pages)
      
      console.log('X-WP-Total', total)
      console.log('X-WP-TotalPages', pages)
    },
})

const { data: all_categories } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/products-section`)

const { data: all_categories_filtr } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/productsCategory`)

console.log('all_categories_filtr',all_categories_filtr)

console.log('current_category', current_category)

console.log('all_object',all_object)

console.log('all_categories', all_categories)

// const heroBannerSec = ref(null)

// const aboutHomeSlider = ref(null)


// //METHODS 

//get posts on client side
async function fetchClientData() {
  const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/products?products-section=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`)
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
            path: `/products/sections/${route.params.id}`,
            query: { page: +currentPage.value + 1 }
        })
    }
}

function prevPage(){
    if(currentPage.value <= 1){

    }
    else{
        router.push({
            path: `/products/sections/${route.params.id}`,
            query: { page: +currentPage.value - 1 }
        })
    }
}

//filtr category validation
function filtrCateforyValidation(data){
    console.log('data', data.checked)
    console.log('dataCat', data.dataCat)
    
    if(data.checked == true){
        let objectArray = {
            'id': data.dataCat.id,
            'slug': data.dataCat.slug
        }
        filtrProdCatList.value.push(objectArray)
    }
    else{
         filtrProdCatList.value = filtrProdCatList.value.filter(item => item.id !== data.dataCat.id)
    }

    console.log('filtrProdCatList.value',filtrProdCatList.value)

    let changeFiltr = 'reload'

    fetchCatFiltr(changeFiltr)

}


async function fetchCatFiltr(changeFiltr) {

    if(changeFiltr == 'reload'){
          currentPage.value = 1
          router.push({
            path: `/products/sections/${route.params.id}`,
            query: {
            page: 1
            }
        })
    }

  const selectedCategoryIds = filtrProdCatList.value.map(item => item.id)

  let categoryParam = ''
  if (selectedCategoryIds.length > 0) {
    categoryParam = `&productsCategory=${selectedCategoryIds.join(',')}`
  }

  const url = `${store.serverUrlDomainRequest}/wp-json/wp/v2/products?products-section=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}${categoryParam}`

  const res = await fetch(url)
  const data = await res.json()
  all_object.value = data

  const pages = res.headers.get('X-WP-TotalPages')
  if (pages) totalPages.value = Number(pages)
}

// //banner gallery
// const swiperHerroBanner = useSwiper(heroBannerSec, {
//    loop: true,
//    slidesPerView: 1,
//    spaceBetween: 0,   
//    speed: 700,
// })

// //about gallery
// const swiperAbout = useSwiper(aboutHomeSlider, {
//    loop: true,
//    slidesPerView: 1,
//    spaceBetween: 0,   
//    speed: 700,
// })


//HOOKS
onMounted(async () => {
    const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/products?products-section=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`)
    const pages = res.headers.get('X-WP-TotalPages')
    if (pages) totalPages.value = Number(pages)


    console.log('route',route.query.page)
})

watch(() => route.query.page, async (newPage) => {
    console.log('gg', route.query.page)
    currentPage.value = route.query.page
    // fetchClientData()
    fetchCatFiltr()
})


onBeforeUnmount(() => {

});




//SEO
useHead({
    title: current_category.value[0].acf.seo_title,
    meta: [
        // Description
        { name: 'description', content: current_category.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: current_category.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: current_category.value[0].acf.seo_title },
        { property: 'og:description', content: current_category.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: current_category.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: current_category.value[0].acf.seo_title },
        { name: 'twitter:description', content: current_category.value[0].acf.seo_description },
        { name: 'twitter:image', content: current_category.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            current_category.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/products/sections/${current_category.value[0].acf.canonical || route.params.id}` }
    ]
})
</script>