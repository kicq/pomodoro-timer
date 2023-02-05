<template>
  <div class="app">
    <div class="wrap">
      <section class="lang">
        <span :class="{active: loc.lang === 'en'}" @click="loc.setLocale('en')">English</span>
        <span :class="{active: loc.lang === 'ru'}" @click="loc.setLocale('ru')">Русский</span>
      </section>
      <Card :value="value" :seconds="Timer.currentCounter.value" :isBreakTime="Timer.isBreakTime" :state="Timer.state.value" />
      <div class="tag-list">
        <TagComponent v-for="(item, index) of intervals" @click="updateOptions(index)" :key="index">
          {{ item[0] }}/{{ item[1] }}
        </TagComponent>
      </div>
      
      <div class="manage">
        <PlaySVG v-if="Timer.state.value === 'stopping' || Timer.state.value === 'suspended'" @click="Timer.start()" fill="white" />
        <StopSVG v-else @click="Timer.stop()" fill="white" />
        <ResetSVG @click="Timer.reset()" fill="white" />
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted } from 'vue';
import PlaySVG from './components/svg/PlaySVG.vue'
import StopSVG from './components/svg/StopSVG.vue'
import ResetSVG from './components/svg/ResetSVG.vue'

import Timer from './timer'
import TagComponent from './components/TagComponent.vue';
import Card from './components/Card.vue'
import loc from './locales';

const intervals = [
  [20, 5],
  [25, 5],
  [30, 10],
  [40, 20],
  [45, 15]
]


function updateOptions(index: number) {
  Timer.options.workTime = intervals[index][0] * 60
  Timer.options.breakTime = intervals[index][1] * 60
  Timer.reset()
}

const value = computed(() => {
  const max = Timer.isBreakTime ? Timer.options.breakTime : Timer.options.workTime
  const current = Timer.currentCounter.value
  return 1 - Math.floor((current/max) * 100) / 100
})

onBeforeMount(() => {
  updateOptions(0)
})

</script>

<style>

:root {
  --yellow: rgb(255, 157, 0);
}
html, body, #app {
  height: 100%;
  overflow: hidden;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
}

.app .wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
}


.app .tag-list, manage {
  display: flex;
  gap: 0.2rem;
}

.app section.lang {
  display: flex;
  gap: 1rem;
}

.app section.lang span {
  cursor: pointer;
}
.app section.lang span.active {
  color: var(--yellow)
}
.app section.lang span:hover {
  text-decoration: underline;
}

.app section.lang {
  display: flex;
  gap: 1rem;
}

body {
  background: #212529;
}
</style>
