<template>
    <div class="news-card">
        <NuxtLink to="/blog/posts/test-post-1" class="news-card__img-wrapper">
            <img src="@/assets/images/img/news-card-1.jpg" alt="" class="news-card__img">
        </NuxtLink>

        <div class="news-card__header">
            <NuxtLink  class="news-card__teg" to="/blog/categories/health">#здоровье</NuxtLink>
            <p class="news-card__date-post">15 сентября 2024</p>
        </div>
        
        <p class="news-card__title">
            <NuxtLink to="/blog/posts/test-post-1">Чага: как она укрепляет иммунитет</NuxtLink>
        </p>

        <p class="news-card__description">Всё о том, как чага помогает поддерживать здоровье в холодное время года.</p>

        <NuxtLink class="news-card__mob-btn" to="/blog/posts/test-post-1">Читать статью</NuxtLink>
        
        
    </div>
</template>

<script setup>
    // import { useCounterStore } from '@/stores/counter'
    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
    // import component__user_panel from '@/components/user-panel.vue'

</script>