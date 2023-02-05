<template>
  <p>{{loc.locales.value.tipName}}: {{loc.locales.value.tips[variable]}}</p>
</template>

<script lang="ts" setup>
import loc from '@/locales';
import { onMounted, onUpdated, ref } from 'vue';

const variable = ref(0)

function getRandomTip(){
  return Math.floor(Math.random() * loc.locales.value.tips.length)
}

onMounted(() => {
  variable.value = getRandomTip()
})
</script>

<style scoped>

p {
  font-size: 0.8rem;
  text-shadow: 0 0 5px black;
  color: white;
  margin: 0;
  width: 90%;
  text-align: left;
  backdrop-filter: blur(2px);
  padding: 2px;
  border-radius: 0.5rem;
}
</style>
