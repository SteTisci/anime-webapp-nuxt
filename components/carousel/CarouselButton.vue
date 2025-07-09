<script setup lang="ts">
interface Props {
  src: string
  alt: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="container">
    <img :src="props.src" :alt="props.alt" height="60px" width="60px" />
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  width: 200px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
