<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import p5 from "p5"
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
  <P5 :sketch="sketch" />
</template>
