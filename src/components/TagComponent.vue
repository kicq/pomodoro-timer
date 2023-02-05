<template>
  <button @click="emit('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Emits {
  (name: 'click', payload: MouseEvent): void
}

const emit = defineEmits<Emits>()
</script>

<style scoped>
button {
  padding: 0 0.5rem;
  height: 1.5rem;
  background: rgb(255, 157, 0);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  font-family:'Segoe UI';
}
button:active {
  box-shadow: 0 0 5px 0px rgb(255, 157, 0);
}

</style>