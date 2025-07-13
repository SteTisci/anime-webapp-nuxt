<script setup lang="ts">
const props = defineProps<{ id: string; title: string; banner: string }>()
</script>

<template>
  <div class="carousel-slide">
    <img :id="props.id" :src="props.banner" :alt="props.title" draggable="false" />
    <h1>{{ props.title }}</h1>
  </div>
</template>

<style scoped>
.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  position: absolute;
  top: 82%;
  left: 50%;
  width: 1100px;
  max-height: 50px;
  overflow: hidden;
  color: white;
  text-align: center;
  line-height: normal;
  font-size: 2.4rem;
  text-shadow: 3px 3px 5px black;
  transform: translateX(-50%);
  cursor: pointer;
}
</style>
