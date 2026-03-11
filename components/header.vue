<template>
    <div class="header-mob-meny" :class="{'header-mob-meny--activ': burgerActiv == true}">
        <div class="container">
            <nav class="header-navigation-mobile">

                <ul class="header-navigation-mobile__ul">
                    <li class="header-navigation-mobile__li" :class=" { 'faq-sec__element_active ': openStatusSelect }"
                    @click="openStatusSelect = !openStatusSelect">
                        <div class="header-navigation-mobile__li-header">

                            <p class="header-navigation-mobile__li-title">{{ $t('nav.brand.giftsOfSiberia') }}</p>

                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 0.999999" stroke="#1B3762" stroke-width="0.5"/>
                            </svg>


                        </div>

                        <SlideUpDown :active="openStatusSelect" :duration="500">
                            <ul class="header-navigation-mobile__li-sub-meny">

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLinkLocale to="/" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">{{ $t('nav.brand.home') }}</NuxtLinkLocale>
                                </li>

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLinkLocale to="/about-company"  @click="closeMobNav()" class="header-navigation-mobile__li-sub-meny-element-link">{{ $t('nav.brand.aboutCompany') }}</NuxtLinkLocale>
                                </li>

                                
                            </ul>
                        </SlideUpDown>
                    
                    </li>



                    <li class="header-navigation-mobile__li" :class=" { 'faq-sec__element_active ': openStatusSelect2 }"
                    @click="openStatusSelect2 = !openStatusSelect2">
                        <div class="header-navigation-mobile__li-header">

                            <p class="header-navigation-mobile__li-title">{{ $t('nav.products.title') }}</p>

                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 0.999999" stroke="#1B3762" stroke-width="0.5"/>
                            </svg>


                        </div>

                        <SlideUpDown :active="openStatusSelect2" :duration="500">
                            <ul class="header-navigation-mobile__li-sub-meny">

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLinkLocale to="/premium-teas" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">{{ $t('nav.products.premiumTeas') }}</NuxtLinkLocale>
                                </li>

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLinkLocale to="/extract-chagi" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">{{ $t('nav.products.chagaExtract') }}</NuxtLinkLocale>
                                </li>

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLinkLocale to="/gift-sets" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">{{ $t('nav.products.giftSets') }}</NuxtLinkLocale>
                                </li>

                            </ul>
                        </SlideUpDown>
                    
                    </li>

                    <li class="header-navigation-mobile__li">
                        <NuxtLinkLocale class="header-navigation-mobile__li-title" @click="closeMobNav()" to="/products/">{{ $t('nav.products.list') }}</NuxtLinkLocale>
                    </li>


                    <li class="header-navigation-mobile__li" :class=" { 'faq-sec__element_active ': openStatusSelect3 }"
                    @click="openStatusSelect3 = !openStatusSelect3">
                        <div class="header-navigation-mobile__li-header">

                            <p class="header-navigation-mobile__li-title">{{ $t('nav.cooperation.title') }}</p>

                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 0.999999" stroke="#1B3762" stroke-width="0.5"/>
                            </svg>


                        </div>

                        <SlideUpDown :active="openStatusSelect3" :duration="500">
                            <ul class="header-navigation-mobile__li-sub-meny">

                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLinkLocale to="/export" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">{{ $t('nav.cooperation.export') }}</NuxtLinkLocale>
                                </li>
                                <li class="header-navigation-mobile__li-sub-meny-element">
                                    <NuxtLinkLocale to="/yur-litsam" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">{{ $t('nav.cooperation.legalEntities') }}</NuxtLinkLocale>
                                </li>
                                <li class="header-navigation-mobile__li-sub-meny-element">
                                     <a href="https://business.gift-siberia.com/" class="header-navigation-mobile__li-sub-meny-element-link">{{ $t('nav.cooperation.corporateGifts') }}</a>
                                    <!-- <NuxtLink to="/corporation-gifts" @click="closeMobNav()"  class="header-navigation-mobile__li-sub-meny-element-link">Корпоративные подарки</NuxtLink> -->
                                </li>

                            </ul>
                        </SlideUpDown>
                    
                    </li>

                    <li class="header-navigation-mobile__li">
                        <NuxtLinkLocale to="/blog/" @click="closeMobNav()" class="header-navigation-mobile__li-title">{{ $t('nav.blog') }}</NuxtLinkLocale>
                    </li>

                    <li class="header-navigation-mobile__li">
                        <NuxtLinkLocale to="/contacts" @click="closeMobNav()"  class="header-navigation-mobile__li-title">{{ $t('nav.contacts') }}</NuxtLinkLocale>
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

            <NuxtLinkLocale to="/" class="header__logo">
                <img v-if="optionsData?.logotip_v_shapke" :src="optionsData.logotip_v_shapke.url" :alt="optionsData.logotip_v_shapke.alt" class="header__logo-img">
            </NuxtLinkLocale>

            <nav class="header__nav header-nav">
                <ul class="header-nav__list">
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a  class="header-nav__list-element-link">{{ $t('nav.brand.giftsOfSiberia') }}</a>

                        <ul class="sub-meny">

                            <li class="sub-meny__element">
                                <NuxtLinkLocale to="/"  class="sub-meny__element-link">{{ $t('nav.brand.home') }}</NuxtLinkLocale>
                            </li>

                            <li class="sub-meny__element">
                                <NuxtLinkLocale to="/about-company"  class="sub-meny__element-link">{{ $t('nav.brand.aboutCompany') }}</NuxtLinkLocale>
                            </li>
                            
                        </ul>
                    </li>
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a  class="header-nav__list-element-link">{{ $t('nav.products.title') }}</a>

                        <ul class="sub-meny">

                            <li class="sub-meny__element">
                                <NuxtLinkLocale to="/premium-teas"  class="sub-meny__element-link">{{ $t('nav.products.premiumTeas') }}</NuxtLinkLocale>
                            </li>

                            <li class="sub-meny__element">
                                <NuxtLinkLocale to="/extract-chagi"  class="sub-meny__element-link">{{ $t('nav.products.chagaExtract') }}</NuxtLinkLocale>
                            </li>

                            <li class="sub-meny__element">
                                <NuxtLinkLocale to="/gift-sets"  class="sub-meny__element-link">{{ $t('nav.products.giftSets') }}</NuxtLinkLocale>
                            </li>

                        </ul>
                    </li>
                    <li class="header-nav__list-element">
                        <NuxtLinkLocale class="header-nav__list-element-link" to="/products/">{{ $t('nav.products.list') }}</NuxtLinkLocale>
                    </li>
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a  class="header-nav__list-element-link">{{ $t('nav.cooperation.title') }}</a>
                        <ul class="sub-meny">

                            <li class="sub-meny__element">
                                <NuxtLinkLocale to="/export"  class="sub-meny__element-link">{{ $t('nav.cooperation.export') }}</NuxtLinkLocale>
                            </li>
                            <li class="sub-meny__element">
                                <NuxtLinkLocale to="/yur-litsam"  class="sub-meny__element-link">{{ $t('nav.cooperation.legalEntities') }}</NuxtLinkLocale>
                            </li>
                            <li class="sub-meny__element">
                                <a href="https://business.gift-siberia.com/" class="sub-meny__element-link">{{ $t('nav.cooperation.corporateGifts') }}</a>
                                <!-- <NuxtLink to="/corporation-gifts"  class="sub-meny__element-link">Корпоративные подарки</NuxtLink> -->
                            </li>

                        </ul>
                    </li>
                    <li class="header-nav__list-element">
                        <NuxtLinkLocale to="/blog/" class="header-nav__list-element-link">{{ $t('nav.blog') }}</NuxtLinkLocale>
                    </li>
                    <li class="header-nav__list-element">
                        <NuxtLinkLocale to="/contacts"  class="header-nav__list-element-link">{{ $t('nav.contacts') }}</NuxtLinkLocale>
                    </li>
                </ul>
            </nav>

            <!-- Language Switcher -->
            <LangSwitcher ref="langSwitcherRef" />

        </div>
    </header>
    
    
</template>

<script setup>
    //IMPORT
    import { useCounterStore } from '@/stores/counter'

    import SlideUpDown from 'vue-slide-up-down'

    import { ref, onMounted, onBeforeUnmount } from 'vue';

    //DATA

    const burgerActiv = ref(false)

    const langSwitcherRef = ref(null)

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
        langSwitcherRef.value?.close?.()
    }

</script>