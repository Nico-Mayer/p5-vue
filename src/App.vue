<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import p5 from "p5"
import { ref } from "vue"
let mounted = ref(true)

function unmountSketch() {
  mounted.value = false
}

const sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(500, 500)
  }
  p5.draw = () => {
    p5.background(100)
  }
}
</script>

<template>
  <button @click="unmountSketch">Unmount</button>
  <P5 :sketch="sketch" v-if="mounted" />
</template>
