<template>
    <section class="content-not-translated">
        <div class="container">
            <p class="content-not-translated__text">{{ $t('common.pageNotTranslated') }}</p>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.content-not-translated {
    padding-top: 120px;
    text-align: center;

    &__text {
        font-size: 18px;
        color: #1B3762;
        opacity: 0.8;
        margin: 0;
    }
}
</style>
