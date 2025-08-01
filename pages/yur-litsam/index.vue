<template>
    <main class="main">

        <section class="info-hero-sec">
            <div class="container">

                <div class="breadcrumbs">
                    <NuxtLink class="breadcrumbs__link" to="/">Главная /</NuxtLink>
                    <span class="breadcrumbs__text">Юридическим Лицам</span>
                </div>

                <div class="info-hero-sec__wrapper info-hero-sec__wrapper--yr-lica">
                    <div class="info-hero-sec__text-box">
                        
                        <h1 class="info-hero-sec__title" v-html="pageData[0].acf.sekcziya_1_hero.zagolovok_h1"></h1>
                        <div class="info-hero-sec__text" v-html="pageData[0].acf.sekcziya_1_hero.tekstovyj_redaktor"></div>

                        <div class="info-hero-sec__btn-wrapper">
                            <button class="info-hero-sec__btn btn-request" @click="openForm()">
                                <span>Оставить заявку</span>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5004 10.25C12.0904 10.25 11.7504 9.90999 11.7504 9.49999V4.30999L11.0304 5.02999C10.7404 5.31999 10.2604 5.31999 9.97043 5.02999C9.68043 4.73999 9.68043 4.25999 9.97043 3.96999L11.9704 1.96999C12.1804 1.75999 12.5104 1.68999 12.7904 1.80999C13.0704 1.91999 13.2504 2.19999 13.2504 2.49999V9.49999C13.2504 9.90999 12.9104 10.25 12.5004 10.25Z" fill="white"/>
                                <path d="M14.5004 5.24994C14.3104 5.24994 14.1204 5.17994 13.9704 5.02994L11.9704 3.02994C11.6804 2.73994 11.6804 2.25994 11.9704 1.96994C12.2604 1.67994 12.7404 1.67994 13.0304 1.96994L15.0304 3.96994C15.3204 4.25994 15.3204 4.73994 15.0304 5.02994C14.8804 5.17994 14.6904 5.24994 14.5004 5.24994Z" fill="white"/>
                                <path d="M14.2605 18.25H10.7305C9.68047 18.25 8.74047 17.67 8.27047 16.73L7.10047 14.39C7.06047 14.3 6.97047 14.25 6.88047 14.25H2.48047C2.07047 14.25 1.73047 13.91 1.73047 13.5C1.73047 13.09 2.07047 12.75 2.48047 12.75H6.89047C7.56047 12.75 8.16047 13.12 8.46047 13.72L9.63047 16.06C9.84047 16.49 10.2705 16.75 10.7505 16.75H14.2805C14.7605 16.75 15.1905 16.49 15.4005 16.06L16.5705 13.72C16.8705 13.12 17.4705 12.75 18.1405 12.75H22.5005C22.9105 12.75 23.2505 13.09 23.2505 13.5C23.2505 13.91 22.9105 14.25 22.5005 14.25H18.1405C18.0405 14.25 17.9605 14.3 17.9205 14.39L16.7505 16.73C16.2505 17.67 15.3105 18.25 14.2605 18.25Z" fill="white"/>
                                <path d="M15.5 23.25H9.5C4.07 23.25 1.75 20.93 1.75 15.5V12.5C1.75 7.81005 3.49 5.46005 7.39 4.89005C7.81 4.83005 8.18 5.11005 8.24 5.52005C8.3 5.93005 8.02 6.31005 7.61 6.37005C4.47 6.83005 3.25 8.55005 3.25 12.5V15.5C3.25 20.1101 4.89 21.75 9.5 21.75H15.5C20.11 21.75 21.75 20.1101 21.75 15.5V12.5C21.75 8.55005 20.53 6.83005 17.39 6.37005C16.98 6.31005 16.7 5.93005 16.76 5.52005C16.82 5.11005 17.2 4.83005 17.61 4.89005C21.51 5.46005 23.25 7.81005 23.25 12.5V15.5C23.25 20.93 20.93 23.25 15.5 23.25Z" fill="white"/>
                                </svg>

                            </button>
                        </div>
                    </div>

                    <img src="@/assets/images/img/yr-lica-hero.png" alt="" class="info-hero-sec__bg">
                </div>

            </div>
        </section>


        <section class="info-advantages-sec" v-if="pageData[0].acf['sekcziya_-_chto_poluchaete']?.zagolovok">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf['sekcziya_-_chto_poluchaete'].zagolovok"></h2>

                <div class="info-advantages-sec__wrapper">

                    <div class="info-advantages-sec__element" v-for="item in pageData[0].acf['sekcziya_-_chto_poluchaete'].spisok" :key="item">
                        <div class="info-advantages-sec__element-wrapper">
                            <div class="info-advantages-sec__element-header">
                                <img :src="item.ikonka.url" :alt="item.ikonka.url" class="info-advantages-sec__element-icon">
                                <p class="info-advantages-sec__element-title" v-html="item.zagolovok"></p>
                            </div>
                            <p class="info-advantages-sec__element-text" v-html="item.opisanie"></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>



        <section class="info-dirrections-sec" v-if="pageData[0].acf.sekcziya_napravleniya?.zagolovok">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf.sekcziya_napravleniya.zagolovok"></h2>



                <div class="info-dirrections-sec__row">

                    <swiper-container 
                    ref="coorpDirrectionsSlider" 
                    class="coorp-dirrections-slider"
                    :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }"
                    >
                    

                    <swiper-slide v-for="(item, index) in ytpList" :key="index">
                    <div class="info-dirrections-sec__element" @mouseenter="curentIndexProcess = index" 
                    :class="{'info-dirrections-sec__element--activ': curentIndexProcess == index}">
                        <img :src="item.acf.fonovoe_izobrazhenie.url" :alt="item.acf.fonovoe_izobrazhenie.alt" class="info-dirrections-sec__element-img">
                        <div class="info-dirrections-sec__element-wrapper">
                            <div class="info-dirrections-sec__element-text-box">
                                <!-- <div class="info-dirrections-sec__element-tag">Шаг {{index + 1}}</div> -->
                                <p class="info-dirrections-sec__element-title" v-html="item.acf.zagolovok_kartochki"></p>
                                <p class="info-dirrections-sec__element-text">Нажмите, чтобы узнать подробнее</p>
                                <p class="info-dirrections-sec__element-description" v-html="item.acf.korotkoe_opisanie_kartochki"></p>
                                <div class="info-dirrections-sec__element-btn-wrapper">
                                    <div @click="openPost(item)" class="info-dirrections-sec__element-btn">
                                        Подробнее
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.74 22.0795C12.44 22.0795 12.14 22.0095 11.89 21.8695C10.02 20.8495 6.73999 19.7695 4.67999 19.4995L4.39001 19.4595C3.08001 19.2995 2 18.0695 2 16.7395V4.6595C2 3.8695 2.31 3.14953 2.88 2.62953C3.45 2.10953 4.18997 1.85952 4.96997 1.92952C7.15997 2.10952 10.48 3.20953 12.36 4.37953L12.6 4.51955C12.67 4.54955 12.82 4.55955 12.88 4.51955L13.04 4.41951C13.71 3.99951 14.55 3.5895 15.47 3.2195C15.7 3.1295 15.96 3.15951 16.17 3.29951C16.38 3.43951 16.5 3.66951 16.5 3.91951V6.5995L17.33 6.04951C17.58 5.87951 17.91 5.87951 18.16 6.04951L18.99 6.5995V2.77956C18.99 2.41956 19.25 2.1095 19.6 2.0395C19.89 1.9895 20.18 1.94952 20.44 1.92952C20.46 1.92952 20.54 1.92952 20.56 1.92952C21.29 1.86952 22.04 2.11954 22.6 2.63954C23.17 3.15954 23.48 3.87951 23.48 4.66951V16.7395C23.48 18.0795 22.4 19.2995 21.08 19.4595L20.75 19.4995C18.69 19.7695 15.39 20.8595 13.56 21.8695C13.34 22.0095 13.04 22.0795 12.74 22.0795ZM4.71997 3.4095C4.39997 3.4095 4.11 3.51951 3.88 3.72951C3.63 3.95951 3.48999 4.2895 3.48999 4.6595V16.7395C3.48999 17.3295 4.00001 17.8995 4.57001 17.9795L4.87 18.0195C7.12 18.3195 10.57 19.4495 12.57 20.5495C12.66 20.5895 12.79 20.5995 12.84 20.5795C14.85 19.4695 18.31 18.3296 20.57 18.0296L20.91 17.9895C21.48 17.9195 21.99 17.3395 21.99 16.7495V4.67952C21.99 4.30952 21.85 3.98953 21.6 3.74953C21.35 3.51953 21 3.40952 20.64 3.42952C20.61 3.42952 20.52 3.42952 20.5 3.42952V7.99953C20.5 8.27953 20.35 8.5295 20.1 8.6595C19.85 8.7895 19.56 8.77952 19.33 8.61952L17.75 7.56953L16.17 8.61952C15.94 8.76952 15.65 8.7895 15.4 8.6595C15.16 8.5295 15 8.27953 15 7.99953V5.06953C14.57 5.27953 14.18 5.48953 13.84 5.68953L13.68 5.7895C13.13 6.1295 12.35 6.12951 11.82 5.79951L11.58 5.64955C9.89002 4.58955 6.80998 3.5695 4.84998 3.4095C4.79998 3.4095 4.75997 3.4095 4.71997 3.4095Z" fill="#1B3762"/>
                                        <path d="M12.7422 21.2402C12.3322 21.2402 11.9922 20.9002 11.9922 20.4902V5.49023C11.9922 5.08023 12.3322 4.74023 12.7422 4.74023C13.1522 4.74023 13.4922 5.08023 13.4922 5.49023V20.4902C13.4922 20.9102 13.1522 21.2402 12.7422 21.2402Z" fill="#1B3762"/>
                                        <path d="M19.7422 8.75048C19.5922 8.75048 19.4522 8.71047 19.3222 8.62047L17.7422 7.57048L16.1622 8.62047C15.9322 8.77047 15.6422 8.79045 15.3922 8.66045C15.1522 8.53045 14.9922 8.28048 14.9922 8.00048V3.92046C14.9922 3.61046 15.1822 3.34045 15.4622 3.22045C16.8422 2.67045 18.3522 2.24046 19.6222 2.04046C19.8422 2.00046 20.0622 2.0705 20.2322 2.2105C20.4022 2.3505 20.4922 2.56051 20.4922 2.78051V8.00048C20.4922 8.28048 20.3422 8.53045 20.0922 8.66045C19.9822 8.72045 19.8622 8.75048 19.7422 8.75048ZM17.7422 5.92046C17.8822 5.92046 18.0322 5.96046 18.1622 6.05046L18.9922 6.60045V3.69048C18.1922 3.87048 17.3222 4.13048 16.4922 4.44048V6.60045L17.3222 6.05046C17.4522 5.96046 17.6022 5.92046 17.7422 5.92046Z" fill="#1B3762"/>
                                        </svg>

                                    </div >

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </swiper-slide>
                    
                    </swiper-container>

                    <div class="coorp-dirrections-prev custom-nav-v1" @click="swiperDirrections.prev()" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.09 20.67C15.28 20.67 15.47 20.6 15.62 20.45C15.91 20.16 15.91 19.68 15.62 19.39L9.09999 12.87C8.61999 12.39 8.61999 11.61 9.09999 11.13L15.62 4.61002C15.91 4.32002 15.91 3.84002 15.62 3.55002C15.33 3.26002 14.85 3.26002 14.56 3.55002L8.03999 10.07C7.52999 10.58 7.23999 11.27 7.23999 12C7.23999 12.73 7.51999 13.42 8.03999 13.93L14.56 20.45C14.71 20.59 14.9 20.67 15.09 20.67Z" fill="#1B3762"/>
                        </svg>
                    </div>

                    <div class="coorp-dirrections-next custom-nav-v1" @click="swiperDirrections.next()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.90998 20.67C8.71998 20.67 8.52998 20.6 8.37998 20.45C8.08998 20.16 8.08998 19.68 8.37998 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37998 4.61002C8.08998 4.32002 8.08998 3.84002 8.37998 3.55002C8.66998 3.26002 9.14998 3.26002 9.43998 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43998 20.45C9.28998 20.59 9.09998 20.67 8.90998 20.67Z" fill="#1B3762"/>
                        </svg>
                    </div>

                </div>
                
              
            </div>
        </section>




        <section class="info-close-sec " v-if="pageData[0].acf.sekcziya_4_o_tovarah">
            <div class="container">

                <h2 class="info-sec-title">Продукт, который закрывает потребности клиентов</h2>

                <div class="info-close-sec__row">

                    <div class="info-close-sec__element info-close-sec__element--anim" v-if="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah">
                        <img :src="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.fon.url" 
                        :alt="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.fon.alt" 
                        class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title" v-html="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.zagolovok"></p>
                            <p class="info-close-sec__element-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.tekst"></p>
                             <p class="info-close-sec__element-full-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.ekstrakty_v_stikah.polnoe_opisanie"></p>
                        </div>
                        <!-- <NuxtLink to="/extract-chagi"  class="info-close-sec__element-btn">
                            <span>Узнать подробнее</span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4998 22.58C12.1998 22.58 11.8998 22.51 11.6498 22.37C9.77978 21.35 6.49976 20.27 4.43976 20L4.14978 19.96C2.83978 19.8 1.75977 18.57 1.75977 17.24V5.15999C1.75977 4.36999 2.06977 3.65002 2.63977 3.13002C3.20977 2.61002 3.94974 2.36001 4.72974 2.43001C6.91974 2.61001 10.2398 3.71002 12.1198 4.88002L12.3597 5.02003C12.4297 5.05003 12.5798 5.06003 12.6398 5.02003L12.7997 4.92C13.4697 4.5 14.3097 4.08999 15.2297 3.71999C15.4597 3.62999 15.7197 3.66 15.9297 3.8C16.1397 3.94 16.2598 4.17 16.2598 4.42V7.09999L17.0898 6.55C17.3398 6.38 17.6697 6.38 17.9197 6.55L18.7498 7.09999V3.28004C18.7498 2.92004 19.0097 2.60999 19.3597 2.53999C19.6497 2.48999 19.9398 2.45001 20.1998 2.43001C20.2198 2.43001 20.2998 2.43001 20.3198 2.43001C21.0498 2.37001 21.7997 2.62003 22.3597 3.14003C22.9297 3.66003 23.2397 4.38 23.2397 5.17V17.24C23.2397 18.58 22.1598 19.8 20.8398 19.96L20.5098 20C18.4498 20.27 15.1498 21.36 13.3198 22.37C13.0998 22.51 12.7998 22.58 12.4998 22.58ZM4.47974 3.90999C4.15974 3.90999 3.86977 4.01999 3.63977 4.23C3.38977 4.46 3.24976 4.78999 3.24976 5.15999V17.24C3.24976 17.83 3.75977 18.4 4.32977 18.48L4.62976 18.52C6.87976 18.82 10.3298 19.95 12.3298 21.05C12.4198 21.09 12.5497 21.1 12.5997 21.08C14.6097 19.97 18.0698 18.83 20.3298 18.53L20.6697 18.49C21.2397 18.42 21.7498 17.84 21.7498 17.25V5.18001C21.7498 4.81001 21.6097 4.49001 21.3597 4.25001C21.1097 4.02001 20.7598 3.91001 20.3998 3.93001C20.3698 3.93001 20.2798 3.93001 20.2598 3.93001V8.50001C20.2598 8.78001 20.1097 9.02999 19.8597 9.15999C19.6097 9.28999 19.3198 9.28001 19.0898 9.12001L17.5098 8.07002L15.9297 9.12001C15.6997 9.27001 15.4097 9.28999 15.1597 9.15999C14.9197 9.02999 14.7598 8.78001 14.7598 8.50001V5.57002C14.3298 5.78002 13.9397 5.99002 13.5997 6.19002L13.4398 6.28999C12.8898 6.62999 12.1098 6.63 11.5798 6.3L11.3398 6.15004C9.64978 5.09004 6.56974 4.06999 4.60974 3.90999C4.55974 3.90999 4.51974 3.90999 4.47974 3.90999Z" fill="#1B3762"/>
                            <path d="M12.5 21.74C12.09 21.74 11.75 21.4 11.75 20.99V5.98999C11.75 5.57999 12.09 5.23999 12.5 5.23999C12.91 5.23999 13.25 5.57999 13.25 5.98999V20.99C13.25 21.41 12.91 21.74 12.5 21.74Z" fill="#1B3762"/>
                            <path d="M19.5 9.24999C19.35 9.24999 19.21 9.20998 19.08 9.11998L17.5 8.07L15.92 9.11998C15.69 9.26998 15.4 9.28996 15.15 9.15996C14.91 9.02996 14.75 8.77999 14.75 8.49999V4.41997C14.75 4.10997 14.94 3.83996 15.22 3.71996C16.6 3.16996 18.11 2.73997 19.38 2.53997C19.6 2.49997 19.82 2.57001 19.99 2.71001C20.16 2.85001 20.25 3.06002 20.25 3.28002V8.49999C20.25 8.77999 20.1 9.02996 19.85 9.15996C19.74 9.21996 19.62 9.24999 19.5 9.24999ZM17.5 6.41997C17.64 6.41997 17.79 6.45998 17.92 6.54998L18.75 7.09996V4.18999C17.95 4.36999 17.08 4.62999 16.25 4.93999V7.09996L17.08 6.54998C17.21 6.45998 17.36 6.41997 17.5 6.41997Z" fill="#1B3762"/>
                            </svg>
                        </NuxtLink> -->
               
                    </div>


                    <div class="info-close-sec__element info-close-sec__element--anim" v-if="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai">
                        <img :src="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.fon.url" 
                        :alt="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.fon.alt" 
                        class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title" v-html="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.zagolovok"></p>
                            <p class="info-close-sec__element-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.tekst"></p>
                            <p class="info-close-sec__element-full-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.premialnye_chai.polnoe_opisanie"></p>
                        </div>
                        <!-- <NuxtLink to="/premium-teas"  class="info-close-sec__element-btn">
                            <span>Узнать подробнее</span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4998 22.58C12.1998 22.58 11.8998 22.51 11.6498 22.37C9.77978 21.35 6.49976 20.27 4.43976 20L4.14978 19.96C2.83978 19.8 1.75977 18.57 1.75977 17.24V5.15999C1.75977 4.36999 2.06977 3.65002 2.63977 3.13002C3.20977 2.61002 3.94974 2.36001 4.72974 2.43001C6.91974 2.61001 10.2398 3.71002 12.1198 4.88002L12.3597 5.02003C12.4297 5.05003 12.5798 5.06003 12.6398 5.02003L12.7997 4.92C13.4697 4.5 14.3097 4.08999 15.2297 3.71999C15.4597 3.62999 15.7197 3.66 15.9297 3.8C16.1397 3.94 16.2598 4.17 16.2598 4.42V7.09999L17.0898 6.55C17.3398 6.38 17.6697 6.38 17.9197 6.55L18.7498 7.09999V3.28004C18.7498 2.92004 19.0097 2.60999 19.3597 2.53999C19.6497 2.48999 19.9398 2.45001 20.1998 2.43001C20.2198 2.43001 20.2998 2.43001 20.3198 2.43001C21.0498 2.37001 21.7997 2.62003 22.3597 3.14003C22.9297 3.66003 23.2397 4.38 23.2397 5.17V17.24C23.2397 18.58 22.1598 19.8 20.8398 19.96L20.5098 20C18.4498 20.27 15.1498 21.36 13.3198 22.37C13.0998 22.51 12.7998 22.58 12.4998 22.58ZM4.47974 3.90999C4.15974 3.90999 3.86977 4.01999 3.63977 4.23C3.38977 4.46 3.24976 4.78999 3.24976 5.15999V17.24C3.24976 17.83 3.75977 18.4 4.32977 18.48L4.62976 18.52C6.87976 18.82 10.3298 19.95 12.3298 21.05C12.4198 21.09 12.5497 21.1 12.5997 21.08C14.6097 19.97 18.0698 18.83 20.3298 18.53L20.6697 18.49C21.2397 18.42 21.7498 17.84 21.7498 17.25V5.18001C21.7498 4.81001 21.6097 4.49001 21.3597 4.25001C21.1097 4.02001 20.7598 3.91001 20.3998 3.93001C20.3698 3.93001 20.2798 3.93001 20.2598 3.93001V8.50001C20.2598 8.78001 20.1097 9.02999 19.8597 9.15999C19.6097 9.28999 19.3198 9.28001 19.0898 9.12001L17.5098 8.07002L15.9297 9.12001C15.6997 9.27001 15.4097 9.28999 15.1597 9.15999C14.9197 9.02999 14.7598 8.78001 14.7598 8.50001V5.57002C14.3298 5.78002 13.9397 5.99002 13.5997 6.19002L13.4398 6.28999C12.8898 6.62999 12.1098 6.63 11.5798 6.3L11.3398 6.15004C9.64978 5.09004 6.56974 4.06999 4.60974 3.90999C4.55974 3.90999 4.51974 3.90999 4.47974 3.90999Z" fill="#1B3762"/>
                            <path d="M12.5 21.74C12.09 21.74 11.75 21.4 11.75 20.99V5.98999C11.75 5.57999 12.09 5.23999 12.5 5.23999C12.91 5.23999 13.25 5.57999 13.25 5.98999V20.99C13.25 21.41 12.91 21.74 12.5 21.74Z" fill="#1B3762"/>
                            <path d="M19.5 9.24999C19.35 9.24999 19.21 9.20998 19.08 9.11998L17.5 8.07L15.92 9.11998C15.69 9.26998 15.4 9.28996 15.15 9.15996C14.91 9.02996 14.75 8.77999 14.75 8.49999V4.41997C14.75 4.10997 14.94 3.83996 15.22 3.71996C16.6 3.16996 18.11 2.73997 19.38 2.53997C19.6 2.49997 19.82 2.57001 19.99 2.71001C20.16 2.85001 20.25 3.06002 20.25 3.28002V8.49999C20.25 8.77999 20.1 9.02996 19.85 9.15996C19.74 9.21996 19.62 9.24999 19.5 9.24999ZM17.5 6.41997C17.64 6.41997 17.79 6.45998 17.92 6.54998L18.75 7.09996V4.18999C17.95 4.36999 17.08 4.62999 16.25 4.93999V7.09996L17.08 6.54998C17.21 6.45998 17.36 6.41997 17.5 6.41997Z" fill="#1B3762"/>
                            </svg>
                        </NuxtLink> -->
               
                    </div>




                    <div class="info-close-sec__element info-close-sec__element--anim" v-if="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory">
                        <img :src="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.fon.url" 
                        :alt="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.fon.alt" 
                        class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title" v-html="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.zagolovok"></p>
                            <p class="info-close-sec__element-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.tekst"></p>
                            <p class="info-close-sec__element-full-text" v-html="pageData[0].acf.sekcziya_4_o_tovarah.podarochnye_nabory.polnoe_opisanie"></p>
                        </div>
                        <!-- <NuxtLink to="/gift-sets"  class="info-close-sec__element-btn">
                            <span>Узнать подробнее</span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4998 22.58C12.1998 22.58 11.8998 22.51 11.6498 22.37C9.77978 21.35 6.49976 20.27 4.43976 20L4.14978 19.96C2.83978 19.8 1.75977 18.57 1.75977 17.24V5.15999C1.75977 4.36999 2.06977 3.65002 2.63977 3.13002C3.20977 2.61002 3.94974 2.36001 4.72974 2.43001C6.91974 2.61001 10.2398 3.71002 12.1198 4.88002L12.3597 5.02003C12.4297 5.05003 12.5798 5.06003 12.6398 5.02003L12.7997 4.92C13.4697 4.5 14.3097 4.08999 15.2297 3.71999C15.4597 3.62999 15.7197 3.66 15.9297 3.8C16.1397 3.94 16.2598 4.17 16.2598 4.42V7.09999L17.0898 6.55C17.3398 6.38 17.6697 6.38 17.9197 6.55L18.7498 7.09999V3.28004C18.7498 2.92004 19.0097 2.60999 19.3597 2.53999C19.6497 2.48999 19.9398 2.45001 20.1998 2.43001C20.2198 2.43001 20.2998 2.43001 20.3198 2.43001C21.0498 2.37001 21.7997 2.62003 22.3597 3.14003C22.9297 3.66003 23.2397 4.38 23.2397 5.17V17.24C23.2397 18.58 22.1598 19.8 20.8398 19.96L20.5098 20C18.4498 20.27 15.1498 21.36 13.3198 22.37C13.0998 22.51 12.7998 22.58 12.4998 22.58ZM4.47974 3.90999C4.15974 3.90999 3.86977 4.01999 3.63977 4.23C3.38977 4.46 3.24976 4.78999 3.24976 5.15999V17.24C3.24976 17.83 3.75977 18.4 4.32977 18.48L4.62976 18.52C6.87976 18.82 10.3298 19.95 12.3298 21.05C12.4198 21.09 12.5497 21.1 12.5997 21.08C14.6097 19.97 18.0698 18.83 20.3298 18.53L20.6697 18.49C21.2397 18.42 21.7498 17.84 21.7498 17.25V5.18001C21.7498 4.81001 21.6097 4.49001 21.3597 4.25001C21.1097 4.02001 20.7598 3.91001 20.3998 3.93001C20.3698 3.93001 20.2798 3.93001 20.2598 3.93001V8.50001C20.2598 8.78001 20.1097 9.02999 19.8597 9.15999C19.6097 9.28999 19.3198 9.28001 19.0898 9.12001L17.5098 8.07002L15.9297 9.12001C15.6997 9.27001 15.4097 9.28999 15.1597 9.15999C14.9197 9.02999 14.7598 8.78001 14.7598 8.50001V5.57002C14.3298 5.78002 13.9397 5.99002 13.5997 6.19002L13.4398 6.28999C12.8898 6.62999 12.1098 6.63 11.5798 6.3L11.3398 6.15004C9.64978 5.09004 6.56974 4.06999 4.60974 3.90999C4.55974 3.90999 4.51974 3.90999 4.47974 3.90999Z" fill="#1B3762"/>
                            <path d="M12.5 21.74C12.09 21.74 11.75 21.4 11.75 20.99V5.98999C11.75 5.57999 12.09 5.23999 12.5 5.23999C12.91 5.23999 13.25 5.57999 13.25 5.98999V20.99C13.25 21.41 12.91 21.74 12.5 21.74Z" fill="#1B3762"/>
                            <path d="M19.5 9.24999C19.35 9.24999 19.21 9.20998 19.08 9.11998L17.5 8.07L15.92 9.11998C15.69 9.26998 15.4 9.28996 15.15 9.15996C14.91 9.02996 14.75 8.77999 14.75 8.49999V4.41997C14.75 4.10997 14.94 3.83996 15.22 3.71996C16.6 3.16996 18.11 2.73997 19.38 2.53997C19.6 2.49997 19.82 2.57001 19.99 2.71001C20.16 2.85001 20.25 3.06002 20.25 3.28002V8.49999C20.25 8.77999 20.1 9.02996 19.85 9.15996C19.74 9.21996 19.62 9.24999 19.5 9.24999ZM17.5 6.41997C17.64 6.41997 17.79 6.45998 17.92 6.54998L18.75 7.09996V4.18999C17.95 4.36999 17.08 4.62999 16.25 4.93999V7.09996L17.08 6.54998C17.21 6.45998 17.36 6.41997 17.5 6.41997Z" fill="#1B3762"/>
                            </svg>
                        </NuxtLink> -->
               
                    </div>

                </div>
            </div>
        </section>




        <!-- <section class="info-close-sec">
            <div class="container">
                <h2 class="info-sec-title">Продукт, который закрывает потребности клиентов</h2>

                <div class="info-close-sec__row">
                    <div class="info-close-sec__element">
                        <img src="@/assets/images/img/close1.jpg" alt="" class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title">Экстракты в стиках</p>
                            <p class="info-close-sec__element-text">высокая проходимость, минимальный чек, мгновенная подача в баре, spa или корпоративной зоне</p>
                        </div>
                    </div>

                    <div class="info-close-sec__element">
                        <img src="@/assets/images/img/close2.jpg" alt="" class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title">Премиальные чаи</p>
                            <p class="info-close-sec__element-text">для полок с чеком от 800 ₽, где важно выделиться визуально и дать "здоровый" повод купить</p>
                        </div>
                    </div>

                    <div class="info-close-sec__element">
                        <img src="@/assets/images/img/close3.jpg" alt="" class="info-close-sec__element-bg">
                        <div class="info-close-sec__element-text-wrapper">
                            <p class="info-close-sec__element-title">Подарочные наборы</p>
                            <p class="info-close-sec__element-text">универсальные решения под корпоратив, сувенирку, розницу с быстрой оборачиваемостью</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        
        <section class="info-how-take-sec" v-if="pageData[0].acf['sekcziya_-_kak_poluchit_obrazczy']?.zagolovok">
            <div class="container">
                <h2 class="info-sec-title" v-html="pageData[0].acf['sekcziya_-_kak_poluchit_obrazczy'].zagolovok"></h2>
                <p class="info-how-take-sec__subtitle" v-html="pageData[0].acf['sekcziya_-_kak_poluchit_obrazczy'].podzagolovok"></p>
                <div class="info-how-take-sec__row">

                    <div class="info-how-take-sec__element" v-for="item in pageData[0].acf['sekcziya_-_kak_poluchit_obrazczy'].usloviya" :key="item">
                        <div class="info-how-take-sec__element-icon">
                            <img :src="item.ikonka.url" :alt="item.ikonka.alt">
                        </div>
                        <p class="info-how-take-sec__element-text" v-html="item.tekst"></p>
                    </div>

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

        
        <!-- Подключаем компонент модалки -->
        <PostModal
        v-if="showModal"
        :postData="selectedPost"
        @close="closeModal"
        />
        
    </main>

    
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import formTypeAbout from '@/components/forms/form-type-about.vue'

import PostModal from '@/components/PostModal.vue'





//DATA
const coorpDirrectionsSlider = ref(null)

const store = useCounterStore()

const route = useRoute()

const router = useRouter()

const curentIndexProcess = ref(null)

const ytpList = ref([])

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=yur-litsam`)

// получаем УТП
try {
  const mainPost = pageData.value?.[0]
  const chitatTakzhe = mainPost?.acf?.sekcziya_napravleniya?.utp

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/offer?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    ytpList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}

console.log('pageData', pageData)

console.log('ytpList', ytpList)


const selectedPost = ref(null)

const showModal = ref(false)




//METHODS 

function openPost(post) {
  selectedPost.value = post
  showModal.value = true
  window.history.pushState({}, '', `/yur-litsam/${post.slug}`)
}

// function openPost(post) {
//   selectedPost.value = post
//   showModal.value = true
//   router.push(`/yur-litsam/post`)
// }

function closeModal() {
  showModal.value = false
  selectedPost.value = null
//   window.history.pushState({}, '', `/yur-litsam`)
}



function openForm(){
 
    store.changeTrigerButtonForm('Кнопка в первой секции страницы')
    store.changePopupCurrent('popup-form')
    
}

//banner gallery
const swiperDirrections = useSwiper(coorpDirrectionsSlider, {
   loop: true,
   slidesPerView: 6,
   spaceBetween: 10,   
   speed: 700,
   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1220: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1520: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1750: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  }
})





//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});


// definePageMeta({
//   pageTransition: false
// })


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
        { rel: 'canonical', href: `${store.domainUrlCurrent}/${pageData.value[0].acf.canonical || route.name}` }
    ]
})
</script>