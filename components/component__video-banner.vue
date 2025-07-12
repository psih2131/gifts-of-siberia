<template>
    <div class="video-wrapper"  @click="playVideo">

        <div class="video-wrapper__play-icon" v-if="statusVideo == false">
            <svg width="85" height="75" viewBox="0 0 85 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.4325 37.5L0.533745 74.3061V0.69392L84.4325 37.5Z" fill="white"/>
            </svg>
        </div>

        <video ref="myVideo"
        :controls="statusVideo"
        
        >
        <source :src="videoUrl" type="video/mp4" />
        Ваш браузер не поддерживает видео.
        </video>
    </div>
</template>

<script setup>
    // import { useCounterStore } from '@/stores/counter'
    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
    // import component__user_panel from '@/components/user-panel.vue'

    const statusVideo = ref(false)

    const myVideo = ref(null)

    function playVideo(){
        statusVideo.value = !statusVideo.value

        if (!myVideo.value.paused) {
        console.log('Видео воспроизводится')
        myVideo.value.pause()
        } else {
        console.log('Видео на паузе')
        myVideo.value.play()
        }

         
    }



    // props
    const props = defineProps({
        videoUrl: String,
    })

    

</script>