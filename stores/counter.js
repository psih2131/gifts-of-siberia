import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
    const router = useRouter();

    const serverUrlDomainRequest = ref('http://syberia.gearsdpz.beget.tech')
    const domainUrlCurrent = ref('http://test.tech')





    // doubleCount, increment 
    return {
        serverUrlDomainRequest,
        domainUrlCurrent
    }
})
