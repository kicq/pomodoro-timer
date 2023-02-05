<template>
  <div class="card" :class="{showGif: !isBreakTime && state === 'running'}">
    <div class="info">
      <section>
        <h2>{{title}}</h2>
        <TipComponent v-if="state !== 'running' && state !== 'prepare'" :key="props.state" />
      </section>
      
      <CircleBar :radius="20" :thin="10" :size="100" :fontSize="24" :seconds="seconds" :value="value"  />
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import loc from '@/locales';
import { State } from '@/timer';
import { computed } from 'vue';
import CircleBar from './CircleBar.vue';
import TipComponent from './TipComponent.vue';


interface Props{
  seconds: number
  value: number
  isBreakTime: boolean
  state: State
}
const props = defineProps<Props>()

const title = computed(() => {
  if(props.state === 'running') {
    if(props.isBreakTime) {
      return loc.locales.value.titles.break
    } else return loc.locales.value.titles.focus
  } else if(props.state === 'suspended') {
    return loc.locales.value.titles.pause
  } else if(props.state === 'prepare') return loc.locales.value.titles.prepare
  else return loc.locales.value.titles.common
})

</script>

<style scoped>
.card {
  width: 500px;
  height: 300px;
  border-radius: 2rem;
  
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 10;
  
}

.card .info {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 15px;
  z-index: 2;
}

.card .info h2 {
  font-size: 2rem;
  text-shadow: 0 0 5px black;
  color: var(--yellow);
  margin: 0;
  /* width: 90%; */
  text-align: left;
}



.card::after {
  z-index: 0;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../assets/break.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  filter: grayscale(0.5);
}
.card::before {
  z-index: 1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../assets/work.gif);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  opacity: 0;
  transition: 2.5s ease;
}
.showGif::before {
  opacity: 1;
  filter: drop-shadow(1px 1px 20px rgb(0, 0, 0));
}

@keyframes hiding {
  0% {
    opacity: 0.1;
  }
  60% {
    opacity: 0.7;
    filter: blur(0.5);
  }
  100% {
    opacity: 0.1;
  }
}

@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
    min-height: auto;
  }
}
</style>
