<script setup lang="ts">
const props = defineProps<{ src: string; alt: string }>()
</script>

<template>
  <div class="container">
    <img :src="props.src" :alt="props.alt" height="60px" width="60px" />
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  width: 190px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}

.container img {
  opacity: 0.6;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.container:hover img {
  transform: scale(1.05);
  opacity: 1;
}
</style>
