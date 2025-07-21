import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
    const router = useRouter();

    const serverUrlDomainRequest = ref('http://syberia.gearsdpz.beget.tech')
    // const serverUrlDomainRequest = ref('https://cy18281-wordpress-gre0n.tw1.ru')


    const domainUrlCurrent = ref('https://psih2131-gifts-of-siberia-34fa.twc1.net')
    const popupCurrent = ref(null)

    const trigerButtonForm = ref(null)

    const serteficatCurrent = ref(null)


    function changePopupCurrent(newValue) {
        popupCurrent.value = newValue
        console.log('popupCurrent', popupCurrent.value)
    }

    function changeTrigerButtonForm(newValue) {
        trigerButtonForm.value = newValue
        console.log('trigerButtonForm', trigerButtonForm.value)
    }


    function changeSerteficatCurrent(newValue) {
        serteficatCurrent.value = newValue
        console.log('changeSerteficatCurrent', serteficatCurrent.value)
    }


    return {
        serverUrlDomainRequest,
        domainUrlCurrent,
        popupCurrent,
        serteficatCurrent,
        trigerButtonForm,
        changePopupCurrent,
        changeSerteficatCurrent,
        changeTrigerButtonForm,
    }
})
