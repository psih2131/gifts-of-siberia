<template>
    <div class="lang-switcher" ref="rootRef">
        <button
            type="button"
            class="lang-switcher__trigger"
            :class="{ 'lang-switcher__trigger--open': isOpen }"
            @click.stop="toggle"
            aria-haspopup="listbox"
            :aria-expanded="isOpen"
        >
            <svg class="lang-switcher__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12H22" stroke="currentColor" stroke-width="2"/>
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="lang-switcher__current">{{ currentLocaleName }}</span>
            <svg class="lang-switcher__caret" width="12" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L7 7L1 0.999999" stroke="currentColor" stroke-width="2"/>
            </svg>
        </button>
        <Transition name="lang-dropdown">
            <ul v-show="isOpen" class="lang-switcher__list" role="listbox">
                <li
                    v-for="loc in locales"
                    :key="loc.code"
                    role="option"
                    :aria-selected="loc.code === locale"
                    class="lang-switcher__item"
                    :class="{ 'lang-switcher__item--active': loc.code === locale }"
                    @click="selectLocale(loc.code)"
                >
                    <span class="lang-switcher__radio" :class="{ 'lang-switcher__radio--checked': loc.code === locale }">
                        <span v-if="loc.code === locale" class="lang-switcher__radio-dot"></span>
                    </span>
                    {{ loc.code.toUpperCase() }}
                </li>
            </ul>
        </Transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const { locales, locale, setLocale } = useI18n()

const isOpen = ref(false)
const rootRef = ref(null)

const currentLocaleName = computed(() => {
    const code = locale?.value ?? locale ?? 'ru'
    return String(code).toUpperCase()
})

function toggle() {
    isOpen.value = !isOpen.value
}

function selectLocale(code) {
    setLocale(code)
    isOpen.value = false
}

function handleClickOutside(event) {
    if (rootRef.value && !rootRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})

defineExpose({
    close: () => { isOpen.value = false }
})
</script>
