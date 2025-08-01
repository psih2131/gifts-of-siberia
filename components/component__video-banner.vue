<template>
    <div class="video-wrapper"  @click="playVideo">

        <div class="video-wrapper__play-icon" v-if="statusVideo == false">
            <svg width="85" height="75" viewBox="0 0 85 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.4325 37.5L0.533745 74.3061V0.69392L84.4325 37.5Z" fill="white"/>
            </svg>
        </div>

        <video ref="myVideo"
        :controls="statusVideo"
        muted 
        playsinline
        webkit-playsinline
        
        >
        <source :src="videoUrl" type="video/mp4" />
        Ваш браузер не поддерживает видео.
        </video>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const statusVideo = ref(false)
const myVideo = ref(null)
let observer = null
let wasPlaying = false

const props = defineProps({
  videoUrl: String,
})

function playVideo() {
  statusVideo.value = !statusVideo.value

  if (!myVideo.value.paused) {
    myVideo.value.pause()
  } else {
    myVideo.value.play()
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Видео видно на экране
          if (!myVideo.value.paused) return
          myVideo.value.play()
          statusVideo.value = true
          wasPlaying = true
        } else {
          // Видео ушло с экрана
          if (!myVideo.value.paused) {
            myVideo.value.pause()
            wasPlaying = true
          } else {
            wasPlaying = false
          }
        }
      })
    },
    {
      threshold: 0.5, // Воспроизведение, когда видно хотя бы 50%
    }
  )

  if (myVideo.value) {
    observer.observe(myVideo.value)
  }
})

onBeforeUnmount(() => {
  if (observer && myVideo.value) {
    observer.unobserve(myVideo.value)
    observer.disconnect()
  }
})
</script>
