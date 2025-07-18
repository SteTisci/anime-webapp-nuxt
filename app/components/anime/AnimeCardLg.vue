<script setup lang="ts">
const props = defineProps<{ data: Anime }>()
</script>

<template>
  <div class="card" :style="{ backgroundImage: `url(${props.data.thumbnail})` }">
    <NuxtLink :to="`/anime/${props.data.id}`">
      <div class="info">
        <h3>{{ props.data.title }}</h3>
        <div class="b-info">
          <p class="type">{{ props.data.type }}</p>
          <p class="lang">{{ props.data.lang }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.card {
  width: 150px;
  height: 220px;
  border-radius: 5px;
  margin: 50px;
  overflow: hidden;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  margin: 0;
  will-change: transform;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.card:hover {
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 8px,
    rgba(0, 0, 0, 0.2) 0px 6px 20px;
  transform: scale(0.97);
}

.card a {
  text-decoration: none;
  color: white;
}

.info {
  width: 150px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  background-color: rgba(0, 0, 0, 0.733);
  text-align: center;
  text-wrap: pretty;
  padding: 10px 5px;
  line-height: 1.1;
  font-size: 1.1rem;
}

.b-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  line-height: 1.3;
}

.type,
.lang {
  width: 55px;
  height: 18px;
  font-size: 0.9rem;
  text-shadow: 1px 1px 2px black;
}

.type {
  background: linear-gradient(#1d3181, #00b6f8);
}

.lang {
  background: linear-gradient(#5300f8, #9648a6);
}
</style>
