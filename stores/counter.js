import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
    const router = useRouter();

    const serverUrlDomainRequest = ref('http://syberia.gearsdpz.beget.tech')
    const domainUrlCurrent = ref('http://test.tech')
    const popupCurrent = ref(null)



    //change view object switch
    function changePopupCurrent(newValue) {
        popupCurrent.value = newValue
        console.log('popupCurrent', popupCurrent.value)
    }



    // doubleCount, increment 
    return {
        serverUrlDomainRequest,
        domainUrlCurrent,
        popupCurrent,



        changePopupCurrent,
    }
})
