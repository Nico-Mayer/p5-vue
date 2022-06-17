<script setup>
import { ref, onMounted, defineProps } from "vue"
import p5 from "p5"
const canvas = ref()
const { sketch } = defineProps(["sketch"])

onMounted(() => {
  const newP5 = new p5(sketch, canvas.value)
})
</script>

<template>
  <div ref="canvas"></div>
</template>
