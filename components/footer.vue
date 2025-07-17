<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="container">
                <div class="footer__top-left-side">
                    <a href="" class="footer__top-logo">
                        <img v-if="optionsData?.logotip_v_futere_pk" :src="optionsData.logotip_v_futere_pk.url" :alt="optionsData.logotip_v_futere_pk.alt" class="footer__top-logo-img">
                        <img src="@/assets/images/img/logo-footer-mob.png" alt="" class="footer__top-logo-img-footer">
                    </a>

                    <div class="footer__soc-wrapper">

                        <div class="footer__top-social-row">
                            <template v-if="optionsData?.spisok_socz_setej_v_podvale?.length">
                                 <a v-for="item in optionsData.spisok_socz_setej_v_podvale" :key="item" 
                                 :href="item.ssylka" 
                                 target="_blank"
                                 class="footer__top-social">
                                    <img :src="item.ikonka.url" :alt="item.ikonka.alt" class="footer__top-social-img">
                                </a>
                            </template>
                           
                        </div>

                        <div class="footer__top-contacts-claster-marketplace-row footer__top-contacts-claster-marketplace-row--mob">

                            <template v-if="optionsData?.spisok_marketplejsov_v_podvale?.length">
                                 <a v-for="item in optionsData.spisok_marketplejsov_v_podvale" :key="item" 
                                 :href="item.ssylka" 
                                 target="_blank"
                                 class="footer__top-contacts-claster-marketplace-element">
                                    <img :src="item.ikonka.url" :alt="item.ikonka.alt" class="footer__top-contacts-claster-marketplace-img">
                                </a>
                            </template>

                        </div>
                        
                    </div>
                    
                </div>
                <div class="footer__top-right-side">
                    <nav class="footer__top-nav">
                        <div class="footer__top-nav-row">
                            <div class="footer__top-nav-claster">
                                <p class="footer__top-nav-claster-title">
                                    <a href="">Дары Сибири</a>
                                </p>
                                <ul class="footer__top-nav-list">
                                    <li class="footer__top-nav-list-element">
                                        <NuxtLink to="/"  class="footer__top-nav-list-link">Главная</NuxtLink>
                                    </li>
                                    <li class="footer__top-nav-list-element">
                                        <NuxtLink to="/about-company"  class="footer__top-nav-list-link">О компании</NuxtLink>
                                    </li>
                                    <!-- <li class="footer__top-nav-list-element">
                                        <a href="" class="footer__top-nav-list-link">Производство</a>
                                    </li> -->

                                    <li class="footer__top-nav-list-element">
                                         <NuxtLink to="/premium-teas"  class="footer__top-nav-list-link">Премиальные чаи</NuxtLink>
                                    </li>

                                    <li class="footer__top-nav-list-element">
                                         <NuxtLink to="/extract-chagi"  class="footer__top-nav-list-link">Экстракт чаги</NuxtLink>
                                    </li>

                                    <li class="footer__top-nav-list-element">
                                         <NuxtLink to="/gift-sets"  class="footer__top-nav-list-link">Подарочные наборы</NuxtLink>
                                    </li>

                                    <li class="footer__top-nav-list-element">
                                         <NuxtLink to="/contacts"  class="footer__top-nav-list-link">Контакты</NuxtLink>
                                    </li>

                         
                                </ul>
                            </div>
                            
                            <div class="footer__top-nav-claster">
                                <p class="footer__top-nav-claster-title">
                                    <a href="">Сотрудничество</a>
                                </p>
                                <ul class="footer__top-nav-list">
                                    <li class="footer__top-nav-list-element">
                                        <NuxtLink to="/export"  class="footer__top-nav-list-link">Экспорт</NuxtLink>
                                    </li>
                                    <li class="footer__top-nav-list-element">
                                        <NuxtLink to="/yur-litsam"  class="footer__top-nav-list-link">Юридическим лицам</NuxtLink>
                                    </li>
                                    <li class="footer__top-nav-list-element">
                                        <NuxtLink to="/corporation-gifts"  class="footer__top-nav-list-link">Корпоративные подарки</NuxtLink>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div class="footer__top-nav-row">
                            <div class="footer__top-nav-claster">
                                <p class="footer__top-nav-claster-title">
                                    <NuxtLink to="/products">Продукция</NuxtLink>
                                </p>
                            </div>

                            <div class="footer__top-nav-claster">
                                <p class="footer__top-nav-claster-title">
                                     <NuxtLink to="/blog">Блог</NuxtLink>
                                </p>
                            </div>

                        </div>
                    </nav>

                    <div class="footer__top-contacts-claster">
                        <p class="footer__top-contacts-claster-title">
                            <NuxtLink to="/contacts">Контакты</NuxtLink>
                        </p>
                        <ul class="footer__top-contacts-claster-ul">
                            <li class="footer__top-contacts-claster-li" v-for="item in optionsData.futer_nomera_telefonov" :key="item">
                                <a :href="`tel:${item.ssyllka_na_nomer}`" class="footer__top-contacts-claster-li-link">
                                    <span class="footer__top-contacts-claster-li-icon">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.45 23.25C16.32 23.25 15.13 22.98 13.9 22.46C12.7 21.95 11.49 21.25 10.31 20.4C9.14 19.54 8.01 18.58 6.94 17.53C5.88 16.46 4.92 15.33 4.07 14.17C3.21 12.97 2.52 11.77 2.03 10.61C1.51 9.37 1.25 8.17 1.25 7.04C1.25 6.26 1.39 5.52 1.66 4.83C1.94 4.12 2.39 3.46 3 2.89C3.77 2.13 4.65 1.75 5.59 1.75C5.98 1.75 6.38 1.84 6.72 2C7.11 2.18 7.44 2.45 7.68 2.81L10 6.08C10.21 6.37 10.37 6.65 10.48 6.93C10.61 7.23 10.68 7.53 10.68 7.82C10.68 8.2 10.57 8.57 10.36 8.92C10.21 9.19 9.98 9.48 9.69 9.77L9.01 10.48C9.02 10.51 9.03 10.53 9.04 10.55C9.16 10.76 9.4 11.12 9.86 11.66C10.35 12.22 10.81 12.73 11.27 13.2C11.86 13.78 12.35 14.24 12.81 14.62C13.38 15.1 13.75 15.34 13.97 15.45L13.95 15.5L14.68 14.78C14.99 14.47 15.29 14.24 15.58 14.09C16.13 13.75 16.83 13.69 17.53 13.98C17.79 14.09 18.07 14.24 18.37 14.45L21.69 16.81C22.06 17.06 22.33 17.38 22.49 17.76C22.64 18.14 22.71 18.49 22.71 18.84C22.71 19.32 22.6 19.8 22.39 20.25C22.18 20.7 21.92 21.09 21.59 21.45C21.02 22.08 20.4 22.53 19.68 22.82C18.99 23.1 18.24 23.25 17.45 23.25ZM5.59 3.25C5.04 3.25 4.53 3.49 4.04 3.97C3.58 4.4 3.26 4.87 3.06 5.38C2.85 5.9 2.75 6.45 2.75 7.04C2.75 7.97 2.97 8.98 3.41 10.02C3.86 11.08 4.49 12.18 5.29 13.28C6.09 14.38 7 15.45 8 16.46C9 17.45 10.08 18.37 11.19 19.18C12.27 19.97 13.38 20.61 14.48 21.07C16.19 21.8 17.79 21.97 19.11 21.42C19.62 21.21 20.07 20.89 20.48 20.43C20.71 20.18 20.89 19.91 21.04 19.59C21.16 19.34 21.22 19.08 21.22 18.82C21.22 18.66 21.19 18.5 21.11 18.32C21.08 18.26 21.02 18.15 20.83 18.02L17.51 15.66C17.31 15.52 17.13 15.42 16.96 15.35C16.74 15.26 16.65 15.17 16.31 15.38C16.11 15.48 15.93 15.63 15.73 15.83L14.97 16.58C14.58 16.96 13.98 17.05 13.52 16.88L13.25 16.76C12.84 16.54 12.36 16.2 11.83 15.75C11.35 15.34 10.83 14.86 10.2 14.24C9.71 13.74 9.22 13.21 8.71 12.62C8.24 12.07 7.9 11.6 7.69 11.21L7.57 10.91C7.51 10.68 7.49 10.55 7.49 10.41C7.49 10.05 7.62 9.73 7.87 9.48L8.62 8.7C8.82 8.5 8.97 8.31 9.07 8.14C9.15 8.01 9.18 7.9 9.18 7.8C9.18 7.72 9.15 7.6 9.1 7.48C9.03 7.32 8.92 7.14 8.78 6.95L6.46 3.67C6.36 3.53 6.24 3.43 6.09 3.36C5.93 3.29 5.76 3.25 5.59 3.25ZM13.95 15.51L13.79 16.19L14.06 15.49C14.01 15.48 13.97 15.49 13.95 15.51Z" fill="#1B3762"/>
                                        </svg>
                                    </span>
                                    <span class="footer__top-contacts-claster-li-value">{{ item.nomer }}</span>
                                </a>
                            </li>

                            <li class="footer__top-contacts-claster-li"  
                            v-for="item in optionsData.futer_elektronnye_pochty"
                            :key="item">
                                <a :href="`mailto:${item.elektronnaya_pochta}`" class="footer__top-contacts-claster-li-link">
                                    <span class="footer__top-contacts-claster-li-icon">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21.75H7C3.35 21.75 1.25 19.65 1.25 16V9C1.25 5.35 3.35 3.25 7 3.25H17C20.65 3.25 22.75 5.35 22.75 9V16C22.75 19.65 20.65 21.75 17 21.75ZM7 4.75C4.14 4.75 2.75 6.14 2.75 9V16C2.75 18.86 4.14 20.25 7 20.25H17C19.86 20.25 21.25 18.86 21.25 16V9C21.25 6.14 19.86 4.75 17 4.75H7Z" fill="#1B3762"/>
                                        <path d="M11.9998 13.37C11.1598 13.37 10.3098 13.11 9.65978 12.58L6.52978 10.08C6.20978 9.81997 6.14978 9.34997 6.40978 9.02997C6.66978 8.70997 7.13978 8.64997 7.45978 8.90997L10.5898 11.41C11.3498 12.02 12.6398 12.02 13.3998 11.41L16.5298 8.90997C16.8498 8.64997 17.3298 8.69997 17.5798 9.02997C17.8398 9.34997 17.7898 9.82997 17.4598 10.08L14.3298 12.58C13.6898 13.11 12.8398 13.37 11.9998 13.37Z" fill="#1B3762"/>
                                        </svg>

                                    </span>
                                    <span class="footer__top-contacts-claster-li-value">{{item.elektronnaya_pochta}}</span>
                                </a>
                            </li>

                            <li class="footer__top-contacts-claster-li" v-if="optionsData?.adres">
                                <a :href="optionsData.adres_ssylka_na_yandeks_kartu" target="_blank" class="footer__top-contacts-claster-li-link">
                                    <span class="footer__top-contacts-claster-li-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14.1699C9.87 14.1699 8.13 12.4399 8.13 10.2999C8.13 8.15994 9.87 6.43994 12 6.43994C14.13 6.43994 15.87 8.16994 15.87 10.3099C15.87 12.4499 14.13 14.1699 12 14.1699ZM12 7.93994C10.7 7.93994 9.63 8.99994 9.63 10.3099C9.63 11.6199 10.69 12.6799 12 12.6799C13.31 12.6799 14.37 11.6199 14.37 10.3099C14.37 8.99994 13.3 7.93994 12 7.93994Z" fill="#1B3762"/>
                                        <path d="M12.0001 22.76C10.5201 22.76 9.03005 22.2 7.87005 21.09C4.92005 18.25 1.66005 13.72 2.89005 8.33C4.00005 3.44 8.27005 1.25 12.0001 1.25C12.0001 1.25 12.0001 1.25 12.0101 1.25C15.7401 1.25 20.0101 3.44 21.1201 8.34C22.3401 13.73 19.0801 18.25 16.1301 21.09C14.9701 22.2 13.4801 22.76 12.0001 22.76ZM12.0001 2.75C9.09005 2.75 5.35005 4.3 4.36005 8.66C3.28005 13.37 6.24005 17.43 8.92005 20C10.6501 21.67 13.3601 21.67 15.0901 20C17.7601 17.43 20.7201 13.37 19.6601 8.66C18.6601 4.3 14.9101 2.75 12.0001 2.75Z" fill="#1B3762"/>
                                        </svg>

                                    </span>
                                    <span class="footer__top-contacts-claster-li-value" v-html="optionsData.adres"></span>
                                </a>
                            </li>

                            <li class="footer__top-contacts-claster-li" v-if="optionsData?.vremya_raboty">
                                <a  class="footer__top-contacts-claster-li-link">
                                    <span class="footer__top-contacts-claster-li-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#1B3762"/>
                                    <path d="M15.71 15.93C15.58 15.93 15.45 15.9 15.33 15.82L12.23 13.97C11.46 13.51 10.89 12.5 10.89 11.61V7.51001C10.89 7.10001 11.23 6.76001 11.64 6.76001C12.05 6.76001 12.39 7.10001 12.39 7.51001V11.61C12.39 11.97 12.69 12.5 13 12.68L16.1 14.53C16.46 14.74 16.57 15.2 16.36 15.56C16.21 15.8 15.96 15.93 15.71 15.93Z" fill="#1B3762"/>
                                    </svg>

                                    </span>
                                    <span class="footer__top-contacts-claster-li-value" v-html="optionsData.vremya_raboty"></span>
                                </a>
                            </li>
                        </ul>

                        <div class="footer__top-contacts-claster-marketplace-row">

                            <template v-if="optionsData?.spisok_marketplejsov_v_podvale?.length">
                                 <a v-for="item in optionsData.spisok_marketplejsov_v_podvale" :key="item" 
                                 :href="item.ssylka" 
                                 target="_blank"
                                 class="footer__top-contacts-claster-marketplace-element">
                                    <img :src="item.ikonka.url" :alt="item.ikonka.alt" class="footer__top-contacts-claster-marketplace-img">
                                </a>
                            </template>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__down">
            <div class="container">
                <p class="footer__down-copy">{{ optionsData.copy_text }}</p>
                <div class="footer__down-right-row">
                    <p class="footer__down-rules-text">Все права защищены</p>
                    <nav class="footer__down-nav">
                        <ul class="footer__down-ul">

                            <template v-for="item in doc_pages" :key="item">
                                <li class="footer__down-li" v-if="item.template == 'pages/doc-page.php'">
                                    <NuxtLink :to="`/system/${item.slug}`"  class="footer__down-link">{{item.acf.kratkoe_nazvanie_dlya_navigaczii || item.title.rendered}}</NuxtLink>
                                </li>
                            </template>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
    
</template>

<script setup>
    //IMPORT

    import { useCounterStore } from '@/stores/counter'

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


    //DATA
    const store = useCounterStore()

    const currentListDocPage = ref([])

    const { data: doc_pages } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?per_page=100`)

    const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

    console.log('doc_pages',doc_pages)

    console.log('optionsData',optionsData)

</script>