<template>
  <div class="circle-bar">
    <svg id="svg" :width="size" :height="size" :viewPort="`0 0 ${size/2} ${size/2}`" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle :r="size/2-thin/2" :cx="`${size/2}`" :cy="`${size/2}`" fill="transparent" :stroke-width="`${thin}px`"  :stroke-dasharray="dashArray" stroke-dashoffset="0"></circle>
      <circle id="bar" :r="size/2-thin/2" :cx="`${size/2}`" :cy="`${size/2}`" fill="transparent" :stroke-width="`${thin}px`" :stroke-dasharray="dashArray" :stroke-dashoffset="`${dashOffset}px`"></circle>
    </svg>
    <div class="legend" :style="`font-size: ${props.fontSize}px`">
      {{timeFormat}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  /**
   * value 0-1
   */
  value: number
  seconds: number
  /**
   * at px
   */
  size: number
  /**
   * thin of circle (px)
   */
  thin: number
  /**
   * font-size in px
   */
  fontSize: number
}

const props = withDefaults(defineProps<Props>(), {
  value: 0.25,
  seconds: 125,
  size: 200,
  thin: 16,
  fontSize: 16
})
// const value = ref(0)
const dashArray = computed(() => {
  return Math.PI * props.size
})
const dashOffset = computed(() => {
  return ((1 - props.value)) * dashArray.value
})

const timeFormat = computed(() => {
  return correctLength(Math.floor(props.seconds / 60) )+ ':' + correctLength(Math.round(props.seconds % 60))
})

function correctLength(value: number) {
  return value < 10 ? `0${value}` : value
}
</script>

<style scoped>
.circle-bar {
  position: relative;
  width: min-content;
  /* border:  1px solid red; */
  /* padding: 10px; */
}
.circle-bar .legend {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--yellow);
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 0 0 5px black;
}

#svg circle {
  transition: stroke-dashoffset 1s linear;
  stroke: #666;
  /* stroke-width: 1em; */
}
#svg #bar {
  stroke: #FF9F1E;
}
</style>
