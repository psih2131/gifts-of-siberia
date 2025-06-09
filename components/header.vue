<template>
    <header class="header">
        <div class="container">
            <a href="" class="header__logo">
                <img src="@/assets/images/img/logo.png" alt="" class="header__logo-img">
            </a>

            <nav class="header__nav header-nav">
                <ul class="header-nav__list">
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a href="" class="header-nav__list-element-link">Дары Сибири</a>

                        <ul class="sub-meny">
                            <li class="sub-meny__element">
                                <a href="" class="sub-meny__element-link">Дары Сибири 1</a>
                            </li>
                            <li class="sub-meny__element">
                                <a href="" class="sub-meny__element-link">Дары Сибири 2</a>
                            </li>
                            <li class="sub-meny__element">
                                <a href="" class="sub-meny__element-link">Дары Сибири 3</a>
                            </li>
                        </ul>
                    </li>
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a href="" class="header-nav__list-element-link">О продукции</a>

                        <ul class="sub-meny">
                            <li class="sub-meny__element">
                                <a href="" class="sub-meny__element-link">О продукции 1</a>
                            </li>
                            <li class="sub-meny__element">
                                <a href="" class="sub-meny__element-link">О продукции 2</a>
                            </li>
                        </ul>
                    </li>
                    <li class="header-nav__list-element">
                        <a href="" class="header-nav__list-element-link">Товары</a>
                    </li>
                    <li class="header-nav__list-element header-nav__list-element--have-children">
                        <a href="" class="header-nav__list-element-link">Сотрудничество</a>
                        <ul class="sub-meny">
                            <li class="sub-meny__element">
                                <a href="" class="sub-meny__element-link">Сотрудничество 1</a>
                            </li>
                            <li class="sub-meny__element">
                                <a href="" class="sub-meny__element-link">Сотрудничество 2</a>
                            </li>
                        </ul>
                    </li>
                    <li class="header-nav__list-element">
                        <a href="" class="header-nav__list-element-link">Блог</a>
                    </li>
                    <li class="header-nav__list-element">
                        <a href="" class="header-nav__list-element-link">Контакты</a>
                    </li>
                </ul>
            </nav>

        </div>
    </header>
    
</template>

<script setup>
    // import { useCounterStore } from '@/stores/counter'
    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
    // import component__user_panel from '@/components/user-panel.vue'

</script>