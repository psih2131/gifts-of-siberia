<template>
    <main class="main" v-if="pageData[0]">

        <section class="info-hero-sec about-hero-sec" v-if="pageData[0].acf?.sekcziya_1_hero">
            <div class="container">

                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">О компании</span>
                </div>

                <div class="info-hero-sec__wrapper info-hero-sec__wrapper--about">
                    <div class="info-hero-sec__text-box">
                       
                        <h1 class="info-hero-sec__title" v-html="pageData[0].acf.sekcziya_1_hero.zagolovok_h1"></h1>
                        <div class="info-hero-sec__text" v-html="pageData[0].acf.sekcziya_1_hero.tekstovyj_redaktor"></div>

                    </div>

                    <img src="@/assets/images/img/about-hero-sec.png" alt="" class="info-hero-sec__bg">
                    <img src="@/assets/images/img/about-hero-sec-mob.png" alt="" class="info-hero-sec__bg-mob">
                </div>

            </div>
        </section>



        <section class="info-mission-sec ">
            <div class="container">
                <div class="info-mission-sec__row">
                    <div class="info-mission-sec__element">
                        <div class="info-mission-sec__element-wrapper">
                            <div class="info-mission-sec__element-text" v-html="pageData[0].acf['sekcziya_2_-_nasha_missiya'].tekstovyj_blok_1">
                               
                            </div>
                        </div>
                    </div>

                    <img src="@/assets/images/img/about-mission-img.png" alt="" class="info-mission-sec__img">

                    <div class="info-mission-sec__element">
                        <div class="info-mission-sec__element-wrapper">
                            <div class="info-mission-sec__element-text" v-html="pageData[0].acf['sekcziya_2_-_nasha_missiya'].tekstovyj_blok_2">
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="info-video-about-sec " v-if="pageData[0].acf.sekcziya_3_video">
            <div class="container">
                <videoBanner :videoUrl="pageData[0].acf.sekcziya_3_video.url" />
            </div>
        </section>


        <section class="info-close-sec about-close-sec" v-if="pageData[0].acf.sekcziya_4_o_tovarah">
            <div class="container">
                <div class="info-close-sec__row">

                    <div class="info-close-sec__element" v-if="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah">
                        <img :src="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.fon.url" 
                        :alt="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.fon.alt" 
                        class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title" v-html="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.zagolovok"></p>
                            <p class="info-close-sec__element-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.tekst"></p>
                        </div>
                        <NuxtLink to="/extract-chagi"  class="info-close-sec__element-btn">
                            <span>Узнать подробнее</span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4998 22.58C12.1998 22.58 11.8998 22.51 11.6498 22.37C9.77978 21.35 6.49976 20.27 4.43976 20L4.14978 19.96C2.83978 19.8 1.75977 18.57 1.75977 17.24V5.15999C1.75977 4.36999 2.06977 3.65002 2.63977 3.13002C3.20977 2.61002 3.94974 2.36001 4.72974 2.43001C6.91974 2.61001 10.2398 3.71002 12.1198 4.88002L12.3597 5.02003C12.4297 5.05003 12.5798 5.06003 12.6398 5.02003L12.7997 4.92C13.4697 4.5 14.3097 4.08999 15.2297 3.71999C15.4597 3.62999 15.7197 3.66 15.9297 3.8C16.1397 3.94 16.2598 4.17 16.2598 4.42V7.09999L17.0898 6.55C17.3398 6.38 17.6697 6.38 17.9197 6.55L18.7498 7.09999V3.28004C18.7498 2.92004 19.0097 2.60999 19.3597 2.53999C19.6497 2.48999 19.9398 2.45001 20.1998 2.43001C20.2198 2.43001 20.2998 2.43001 20.3198 2.43001C21.0498 2.37001 21.7997 2.62003 22.3597 3.14003C22.9297 3.66003 23.2397 4.38 23.2397 5.17V17.24C23.2397 18.58 22.1598 19.8 20.8398 19.96L20.5098 20C18.4498 20.27 15.1498 21.36 13.3198 22.37C13.0998 22.51 12.7998 22.58 12.4998 22.58ZM4.47974 3.90999C4.15974 3.90999 3.86977 4.01999 3.63977 4.23C3.38977 4.46 3.24976 4.78999 3.24976 5.15999V17.24C3.24976 17.83 3.75977 18.4 4.32977 18.48L4.62976 18.52C6.87976 18.82 10.3298 19.95 12.3298 21.05C12.4198 21.09 12.5497 21.1 12.5997 21.08C14.6097 19.97 18.0698 18.83 20.3298 18.53L20.6697 18.49C21.2397 18.42 21.7498 17.84 21.7498 17.25V5.18001C21.7498 4.81001 21.6097 4.49001 21.3597 4.25001C21.1097 4.02001 20.7598 3.91001 20.3998 3.93001C20.3698 3.93001 20.2798 3.93001 20.2598 3.93001V8.50001C20.2598 8.78001 20.1097 9.02999 19.8597 9.15999C19.6097 9.28999 19.3198 9.28001 19.0898 9.12001L17.5098 8.07002L15.9297 9.12001C15.6997 9.27001 15.4097 9.28999 15.1597 9.15999C14.9197 9.02999 14.7598 8.78001 14.7598 8.50001V5.57002C14.3298 5.78002 13.9397 5.99002 13.5997 6.19002L13.4398 6.28999C12.8898 6.62999 12.1098 6.63 11.5798 6.3L11.3398 6.15004C9.64978 5.09004 6.56974 4.06999 4.60974 3.90999C4.55974 3.90999 4.51974 3.90999 4.47974 3.90999Z" fill="#1B3762"/>
                            <path d="M12.5 21.74C12.09 21.74 11.75 21.4 11.75 20.99V5.98999C11.75 5.57999 12.09 5.23999 12.5 5.23999C12.91 5.23999 13.25 5.57999 13.25 5.98999V20.99C13.25 21.41 12.91 21.74 12.5 21.74Z" fill="#1B3762"/>
                            <path d="M19.5 9.24999C19.35 9.24999 19.21 9.20998 19.08 9.11998L17.5 8.07L15.92 9.11998C15.69 9.26998 15.4 9.28996 15.15 9.15996C14.91 9.02996 14.75 8.77999 14.75 8.49999V4.41997C14.75 4.10997 14.94 3.83996 15.22 3.71996C16.6 3.16996 18.11 2.73997 19.38 2.53997C19.6 2.49997 19.82 2.57001 19.99 2.71001C20.16 2.85001 20.25 3.06002 20.25 3.28002V8.49999C20.25 8.77999 20.1 9.02996 19.85 9.15996C19.74 9.21996 19.62 9.24999 19.5 9.24999ZM17.5 6.41997C17.64 6.41997 17.79 6.45998 17.92 6.54998L18.75 7.09996V4.18999C17.95 4.36999 17.08 4.62999 16.25 4.93999V7.09996L17.08 6.54998C17.21 6.45998 17.36 6.41997 17.5 6.41997Z" fill="#1B3762"/>
                            </svg>
                        </NuxtLink>
               
                    </div>


                    <div class="info-close-sec__element" v-if="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai">
                        <img :src="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.fon.url" 
                        :alt="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.fon.alt" 
                        class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title" v-html="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.zagolovok"></p>
                            <p class="info-close-sec__element-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.tekst"></p>
                        </div>
                        <NuxtLink to="/premium-teas"  class="info-close-sec__element-btn">
                            <span>Узнать подробнее</span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4998 22.58C12.1998 22.58 11.8998 22.51 11.6498 22.37C9.77978 21.35 6.49976 20.27 4.43976 20L4.14978 19.96C2.83978 19.8 1.75977 18.57 1.75977 17.24V5.15999C1.75977 4.36999 2.06977 3.65002 2.63977 3.13002C3.20977 2.61002 3.94974 2.36001 4.72974 2.43001C6.91974 2.61001 10.2398 3.71002 12.1198 4.88002L12.3597 5.02003C12.4297 5.05003 12.5798 5.06003 12.6398 5.02003L12.7997 4.92C13.4697 4.5 14.3097 4.08999 15.2297 3.71999C15.4597 3.62999 15.7197 3.66 15.9297 3.8C16.1397 3.94 16.2598 4.17 16.2598 4.42V7.09999L17.0898 6.55C17.3398 6.38 17.6697 6.38 17.9197 6.55L18.7498 7.09999V3.28004C18.7498 2.92004 19.0097 2.60999 19.3597 2.53999C19.6497 2.48999 19.9398 2.45001 20.1998 2.43001C20.2198 2.43001 20.2998 2.43001 20.3198 2.43001C21.0498 2.37001 21.7997 2.62003 22.3597 3.14003C22.9297 3.66003 23.2397 4.38 23.2397 5.17V17.24C23.2397 18.58 22.1598 19.8 20.8398 19.96L20.5098 20C18.4498 20.27 15.1498 21.36 13.3198 22.37C13.0998 22.51 12.7998 22.58 12.4998 22.58ZM4.47974 3.90999C4.15974 3.90999 3.86977 4.01999 3.63977 4.23C3.38977 4.46 3.24976 4.78999 3.24976 5.15999V17.24C3.24976 17.83 3.75977 18.4 4.32977 18.48L4.62976 18.52C6.87976 18.82 10.3298 19.95 12.3298 21.05C12.4198 21.09 12.5497 21.1 12.5997 21.08C14.6097 19.97 18.0698 18.83 20.3298 18.53L20.6697 18.49C21.2397 18.42 21.7498 17.84 21.7498 17.25V5.18001C21.7498 4.81001 21.6097 4.49001 21.3597 4.25001C21.1097 4.02001 20.7598 3.91001 20.3998 3.93001C20.3698 3.93001 20.2798 3.93001 20.2598 3.93001V8.50001C20.2598 8.78001 20.1097 9.02999 19.8597 9.15999C19.6097 9.28999 19.3198 9.28001 19.0898 9.12001L17.5098 8.07002L15.9297 9.12001C15.6997 9.27001 15.4097 9.28999 15.1597 9.15999C14.9197 9.02999 14.7598 8.78001 14.7598 8.50001V5.57002C14.3298 5.78002 13.9397 5.99002 13.5997 6.19002L13.4398 6.28999C12.8898 6.62999 12.1098 6.63 11.5798 6.3L11.3398 6.15004C9.64978 5.09004 6.56974 4.06999 4.60974 3.90999C4.55974 3.90999 4.51974 3.90999 4.47974 3.90999Z" fill="#1B3762"/>
                            <path d="M12.5 21.74C12.09 21.74 11.75 21.4 11.75 20.99V5.98999C11.75 5.57999 12.09 5.23999 12.5 5.23999C12.91 5.23999 13.25 5.57999 13.25 5.98999V20.99C13.25 21.41 12.91 21.74 12.5 21.74Z" fill="#1B3762"/>
                            <path d="M19.5 9.24999C19.35 9.24999 19.21 9.20998 19.08 9.11998L17.5 8.07L15.92 9.11998C15.69 9.26998 15.4 9.28996 15.15 9.15996C14.91 9.02996 14.75 8.77999 14.75 8.49999V4.41997C14.75 4.10997 14.94 3.83996 15.22 3.71996C16.6 3.16996 18.11 2.73997 19.38 2.53997C19.6 2.49997 19.82 2.57001 19.99 2.71001C20.16 2.85001 20.25 3.06002 20.25 3.28002V8.49999C20.25 8.77999 20.1 9.02996 19.85 9.15996C19.74 9.21996 19.62 9.24999 19.5 9.24999ZM17.5 6.41997C17.64 6.41997 17.79 6.45998 17.92 6.54998L18.75 7.09996V4.18999C17.95 4.36999 17.08 4.62999 16.25 4.93999V7.09996L17.08 6.54998C17.21 6.45998 17.36 6.41997 17.5 6.41997Z" fill="#1B3762"/>
                            </svg>
                        </NuxtLink>
               
                    </div>




                    <div class="info-close-sec__element" v-if="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory">
                        <img :src="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.fon.url" 
                        :alt="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.fon.alt" 
                        class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title" v-html="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.zagolovok"></p>
                            <p class="info-close-sec__element-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.tekst"></p>
                        </div>
                        <NuxtLink to="/gift-sets"  class="info-close-sec__element-btn">
                            <span>Узнать подробнее</span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4998 22.58C12.1998 22.58 11.8998 22.51 11.6498 22.37C9.77978 21.35 6.49976 20.27 4.43976 20L4.14978 19.96C2.83978 19.8 1.75977 18.57 1.75977 17.24V5.15999C1.75977 4.36999 2.06977 3.65002 2.63977 3.13002C3.20977 2.61002 3.94974 2.36001 4.72974 2.43001C6.91974 2.61001 10.2398 3.71002 12.1198 4.88002L12.3597 5.02003C12.4297 5.05003 12.5798 5.06003 12.6398 5.02003L12.7997 4.92C13.4697 4.5 14.3097 4.08999 15.2297 3.71999C15.4597 3.62999 15.7197 3.66 15.9297 3.8C16.1397 3.94 16.2598 4.17 16.2598 4.42V7.09999L17.0898 6.55C17.3398 6.38 17.6697 6.38 17.9197 6.55L18.7498 7.09999V3.28004C18.7498 2.92004 19.0097 2.60999 19.3597 2.53999C19.6497 2.48999 19.9398 2.45001 20.1998 2.43001C20.2198 2.43001 20.2998 2.43001 20.3198 2.43001C21.0498 2.37001 21.7997 2.62003 22.3597 3.14003C22.9297 3.66003 23.2397 4.38 23.2397 5.17V17.24C23.2397 18.58 22.1598 19.8 20.8398 19.96L20.5098 20C18.4498 20.27 15.1498 21.36 13.3198 22.37C13.0998 22.51 12.7998 22.58 12.4998 22.58ZM4.47974 3.90999C4.15974 3.90999 3.86977 4.01999 3.63977 4.23C3.38977 4.46 3.24976 4.78999 3.24976 5.15999V17.24C3.24976 17.83 3.75977 18.4 4.32977 18.48L4.62976 18.52C6.87976 18.82 10.3298 19.95 12.3298 21.05C12.4198 21.09 12.5497 21.1 12.5997 21.08C14.6097 19.97 18.0698 18.83 20.3298 18.53L20.6697 18.49C21.2397 18.42 21.7498 17.84 21.7498 17.25V5.18001C21.7498 4.81001 21.6097 4.49001 21.3597 4.25001C21.1097 4.02001 20.7598 3.91001 20.3998 3.93001C20.3698 3.93001 20.2798 3.93001 20.2598 3.93001V8.50001C20.2598 8.78001 20.1097 9.02999 19.8597 9.15999C19.6097 9.28999 19.3198 9.28001 19.0898 9.12001L17.5098 8.07002L15.9297 9.12001C15.6997 9.27001 15.4097 9.28999 15.1597 9.15999C14.9197 9.02999 14.7598 8.78001 14.7598 8.50001V5.57002C14.3298 5.78002 13.9397 5.99002 13.5997 6.19002L13.4398 6.28999C12.8898 6.62999 12.1098 6.63 11.5798 6.3L11.3398 6.15004C9.64978 5.09004 6.56974 4.06999 4.60974 3.90999C4.55974 3.90999 4.51974 3.90999 4.47974 3.90999Z" fill="#1B3762"/>
                            <path d="M12.5 21.74C12.09 21.74 11.75 21.4 11.75 20.99V5.98999C11.75 5.57999 12.09 5.23999 12.5 5.23999C12.91 5.23999 13.25 5.57999 13.25 5.98999V20.99C13.25 21.41 12.91 21.74 12.5 21.74Z" fill="#1B3762"/>
                            <path d="M19.5 9.24999C19.35 9.24999 19.21 9.20998 19.08 9.11998L17.5 8.07L15.92 9.11998C15.69 9.26998 15.4 9.28996 15.15 9.15996C14.91 9.02996 14.75 8.77999 14.75 8.49999V4.41997C14.75 4.10997 14.94 3.83996 15.22 3.71996C16.6 3.16996 18.11 2.73997 19.38 2.53997C19.6 2.49997 19.82 2.57001 19.99 2.71001C20.16 2.85001 20.25 3.06002 20.25 3.28002V8.49999C20.25 8.77999 20.1 9.02996 19.85 9.15996C19.74 9.21996 19.62 9.24999 19.5 9.24999ZM17.5 6.41997C17.64 6.41997 17.79 6.45998 17.92 6.54998L18.75 7.09996V4.18999C17.95 4.36999 17.08 4.62999 16.25 4.93999V7.09996L17.08 6.54998C17.21 6.45998 17.36 6.41997 17.5 6.41997Z" fill="#1B3762"/>
                            </svg>
                        </NuxtLink>
               
                    </div>

                </div>
            </div>
        </section>


        <section class="info-sertificat-sec about-sertificat-sec" v-if="pageData[0].acf.sekcziya_5_sertifikaty">
            <div class="container">
                <img src="@/assets/images/img/sertificat-sec.png" alt="" class="info-sertificat-sec__img">
                <div class="info-sertificat-sec__info-wrapper">
                    <div class="info-sertificat-sec__info-wrapper-header">
                        <h2 class="info-sertificat-sec__info-wrapper-title" v-html="pageData[0].acf.sekcziya_5_sertifikaty.zagolovok"></h2>
                        <a @click="openSerteficatPopup(pageData[0].acf.sekcziya_5_sertifikaty.sertifikat_pdf)" class="info-sertificat-sec__info-wrapper-btn">
                            <span>Смотреть сертификацию компании</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2002 12.45H9.2002C8.7902 12.45 8.4502 12.11 8.4502 11.7C8.4502 11.29 8.7902 10.95 9.2002 10.95H14.2002C14.6102 10.95 14.9502 11.29 14.9502 11.7C14.9502 12.11 14.6102 12.45 14.2002 12.45Z" fill="white"/>
                            <path d="M11.7002 14.95C11.2902 14.95 10.9502 14.61 10.9502 14.2V9.20001C10.9502 8.79001 11.2902 8.45001 11.7002 8.45001C12.1102 8.45001 12.4502 8.79001 12.4502 9.20001V14.2C12.4502 14.61 12.1102 14.95 11.7002 14.95Z" fill="white"/>
                            <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="white"/>
                            <path d="M22.0004 22.75C21.8104 22.75 21.6204 22.68 21.4704 22.53L19.4704 20.53C19.1804 20.24 19.1804 19.76 19.4704 19.47C19.7604 19.18 20.2404 19.18 20.5304 19.47L22.5304 21.47C22.8204 21.76 22.8204 22.24 22.5304 22.53C22.3804 22.68 22.1904 22.75 22.0004 22.75Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                    <div class="info-sertificat-sec__body" v-html="pageData[0].acf.sekcziya_5_sertifikaty.tekst"></div>
                </div>
            </div>
        </section>



        <section class="info-form-sec">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf.sekcziya_forma.zagolovok"></h2>
                <p class="info-form-sec__subtitle" v-html="pageData[0].acf.sekcziya_forma.tekst"></p>
                <div class="info-form-sec__wrapper">
                    <img :src="pageData[0].acf.sekcziya_forma.izobrazhenie.url" :alt="pageData[0].acf.sekcziya_forma.izobrazhenie.alt" class="info-form-sec__img">

                    <formTypeAbout />

                </div>

                <div class="info-form-sec__down-text" v-if="pageData[0].acf.sekcziya_melkij_tekst">
                    <p v-html="pageData[0].acf.sekcziya_melkij_tekst"></p>
                </div>
            </div>
        </section>
   
        
    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import videoBanner from '@/components/component__video-banner.vue'

import formTypeAbout from '@/components/forms/form-type-about.vue'


//DATA

const store = useCounterStore()

const route = useRoute()

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=about`)

console.log('pageData', pageData)



//METHODS 
function openSerteficatPopup(data){
 
    store.changeSerteficatCurrent(data)
    store.changePopupCurrent('popup-serteficat')
    
}





//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});


//SEO
useHead({
    title: pageData.value[0].acf.seo_title || pageData.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: pageData.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: pageData.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: pageData.value[0].acf.seo_title },
        { property: 'og:description', content: pageData.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: pageData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageData.value[0].acf.seo_title },
        { name: 'twitter:description', content: pageData.value[0].acf.seo_description },
        { name: 'twitter:image', content: pageData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            pageData.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/blog/categories/${pageData.value[0].acf.canonical || route.params.id}` }
    ]
})
</script>