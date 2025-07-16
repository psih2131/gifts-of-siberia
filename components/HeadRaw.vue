<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  html: { type: String, required: true }
})

onMounted(() => {
  if (process.client && props.html) {
    const container = document.createElement('div')
    container.innerHTML = props.html
    Array.from(container.children).forEach(el => {
      document.head.appendChild(el.cloneNode(true))
    })
  }
})
</script>

<template></template>