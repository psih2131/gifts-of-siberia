<template>
    <div class="header-mob-meny" :class="{'header-mob-meny--activ': burgerActiv == true}">
        <div class="container">
            <nav class="header-navigation-mobile">

                <ul class="header-navigation-mobile__ul">
                    <li class="header-navigation-mobile__li" :class=" { 'faq-sec__element_active ': openStatusSelect }"
                    @click="openStatusSelect = !openStatusSelect">
                        <div class="header-navigation-mobile__li-header">

                            <p class="header-navigation-mobile__li-title">Дары Сибири</p>

                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 0.999999" stroke="#1B3762" stroke-width="0.5"/>
                            </svg>


                        </div>

                        <SlideUpDown :active="openStatusSelect" :duration="500">
                            <ul class="header-navigation-mobile__li-sub-meny">

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLink to="/" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">Главная</NuxtLink>
                                </li>

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLink to="/about-company"  @click="closeMobNav()" class="header-navigation-mobile__li-sub-meny-element-link">О компании</NuxtLink>
                                </li>

                                
                            </ul>
                        </SlideUpDown>
                    
                    </li>



                    <li class="header-navigation-mobile__li" :class=" { 'faq-sec__element_active ': openStatusSelect2 }"
                    @click="openStatusSelect2 = !openStatusSelect2">
                        <div class="header-navigation-mobile__li-header">

                            <p class="header-navigation-mobile__li-title">О продукции</p>

                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 0.999999" stroke="#1B3762" stroke-width="0.5"/>
                            </svg>


                        </div>

                        <SlideUpDown :active="openStatusSelect2" :duration="500">
                            <ul class="header-navigation-mobile__li-sub-meny">

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLink to="/premium-teas" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">Премиальные чаи</NuxtLink>
                                </li>

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLink to="/extract-chagi" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">Экстракт чаги</NuxtLink>
                                </li>

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLink to="/gift-sets" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">Подарочные наборы</NuxtLink>
                                </li>

                            </ul>
                        </SlideUpDown>
                    
                    </li>

                    <li class="header-navigation-mobile__li">
                        <NuxtLink class="header-navigation-mobile__li-title" @click="closeMobNav()" to="/products">Товары</NuxtLink>
                    </li>


                    <li class="header-navigation-mobile__li" :class=" { 'faq-sec__element_active ': openStatusSelect3 }"
                    @click="openStatusSelect3 = !openStatusSelect3">
                        <div class="header-navigation-mobile__li-header">

                            <p class="header-navigation-mobile__li-title">Сотрудничество</p>

                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 0.999999" stroke="#1B3762" stroke-width="0.5"/>
                            </svg>


                        </div>

                        <SlideUpDown :active="openStatusSelect3" :duration="500">
                            <ul class="header-navigation-mobile__li-sub-meny">

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLink to="/export" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">Экспорт</NuxtLink>
                                </li>
                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLink to="/yur-litsam" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">Юридическим лицам</NuxtLink>
                                </li>
                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLink to="/corporation-gifts" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">Корпоративные подарки</NuxtLink>
                                </li>

                            </ul>
                        </SlideUpDown>
                    
                    </li>

                    <li class="header-navigation-mobile__li">
                        <NuxtLink to="/blog/" @click="closeMobNav()" class="header-navigation-mobile__li-title">Блог</NuxtLink>
                    </li>

                    <li class="header-navigation-mobile__li">
                        <NuxtLink to="/contacts" @click="closeMobNav()"  class="header-navigation-mobile__li-title">Контакты</NuxtLink>
                    </li>

                </ul>

            </nav>
        </div>
    </div>

    <header class="header">
        
        <div class="container">
            <div class="header__burger burger" @click="burgerActiv = !burgerActiv" 
            :class="{'header__burger--activ': burgerActiv == true}">
                <span class="burger_el burger__el--1"></span>
                <span class="burger_el burger__el--2"></span>
                <span class="burger_el burger__el--3"></span>
            </div>

            <NuxtLink to="/" class="header__logo">
                <img v-if="optionsData?.logotip_v_shapke" :src="optionsData.logotip_v_shapke.url" :alt="optionsData.logotip_v_shapke.alt" class="header__logo-img">
            </NuxtLink>

            <nav class="header__nav header-nav">
                <ul class="header-nav__list">
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a  class="header-nav__list-element-link">Дары Сибири</a>

                        <ul class="sub-meny">

                            <li class="sub-meny__element">
                                <NuxtLink to="/"  class="sub-meny__element-link">Главная</NuxtLink>
                            </li>

                            <li class="sub-meny__element">
                                <NuxtLink to="/about-company"  class="sub-meny__element-link">О компании</NuxtLink>
                            </li>
                            
                        </ul>
                    </li>
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a  class="header-nav__list-element-link">О продукции</a>

                        <ul class="sub-meny">

                            <li class="sub-meny__element">
                                <NuxtLink to="/premium-teas"  class="sub-meny__element-link">Премиальные чаи</NuxtLink>
                            </li>

                            <li class="sub-meny__element">
                                <NuxtLink to="/extract-chagi"  class="sub-meny__element-link">Экстракт чаги</NuxtLink>
                            </li>

                            <li class="sub-meny__element">
                                <NuxtLink to="/gift-sets"  class="sub-meny__element-link">Подарочные наборы</NuxtLink>
                            </li>

                        </ul>
                    </li>
                    <li class="header-nav__list-element">
                        <NuxtLink class="header-nav__list-element-link" to="/products">Товары</NuxtLink>
                    </li>
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a  class="header-nav__list-element-link">Сотрудничество</a>
                        <ul class="sub-meny">

                            <li class="sub-meny__element">
                                <NuxtLink to="/export"  class="sub-meny__element-link">Экспорт</NuxtLink>
                            </li>
                            <li class="sub-meny__element">
                                <NuxtLink to="/yur-litsam"  class="sub-meny__element-link">Юридическим лицам</NuxtLink>
                            </li>
                            <li class="sub-meny__element">
                                <NuxtLink to="/corporation-gifts"  class="sub-meny__element-link">Корпоративные подарки</NuxtLink>
                            </li>

                        </ul>
                    </li>
                    <li class="header-nav__list-element">
                        <NuxtLink to="/blog/" class="header-nav__list-element-link">Блог</NuxtLink>
                    </li>
                    <li class="header-nav__list-element">
                        <NuxtLink to="/contacts"  class="header-nav__list-element-link">Контакты</NuxtLink>
                    </li>
                </ul>
            </nav>

        </div>
    </header>
    
    
</template>

<script setup>
    //IMPORT
    import { useCounterStore } from '@/stores/counter'

    import SlideUpDown from 'vue-slide-up-down'

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


    //DATA

    const burgerActiv = ref(false)

    const openStatusSelect = ref(false)

    const openStatusSelect2 = ref(false)

    const openStatusSelect3 = ref(false)

    const store = useCounterStore()

    const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)
    
    console.log('optionsData',optionsData)


    //METHODS
    
    function closeMobNav(){
        burgerActiv.value = false
        openStatusSelect.value = false
        openStatusSelect2.value = false
        openStatusSelect3.value = false
    }

</script>