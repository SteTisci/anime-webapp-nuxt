<script setup lang="ts">
interface Props {
  id: string
  title: string
  banner: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="carousel-slide">
    <img :id="props.id" :src="props.banner" :alt="props.title" />
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
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-family: jersey;
  font-size: 2.4rem;
  text-shadow: 3px 3px 5px black;
  cursor: pointer;
  text-align: center;
}
</style>
