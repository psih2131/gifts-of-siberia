<template>
    <div class="prod-video-popup-wrapper" @click.self="closePopup()">

        <div class="prod-video-popup">
            <div class="prod-video-popup__close" @click="closePopup()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0D0D0D"/>
                </svg>
            </div>


             <!-- :controls="statusVideo" -->
            <video ref="prodVideo"
            controls
            
            >
            <source :src="videoUrl" type="video/mp4" />
            Ваш браузер не поддерживает видео.
            </video>
        </div>

    </div>
</template>


<script setup>
    //IMPORT
    // import { useCounterStore } from '@/stores/counter'

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
    


    //DATA
    const emit = defineEmits(['closePopup'])

    const prodVideo = ref(null)

    const props = defineProps({
        videoUrl: String,
    })


    //METHODS
    function playVideo(){
        prodVideo.value.play()
    }

    function closePopup(){
        emit('closePopup')
    }


    //HOOKS
    onMounted(() => {
    // Добавляем обработчик события scroll
    playVideo()

    });

    onBeforeUnmount(() => {

    });

  

</script>demo-2