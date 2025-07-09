<script setup lang="ts">
interface Anime {
  id: string
  title: string
  thumbnail: string
  lang: string
  type: string
}

const props = defineProps<Anime>()
</script>

<template>
  <div class="card" :style="{ backgroundImage: `url(${props.thumbnail})` }">
    <NuxtLink :to="`anime/${props.id}`">
      <div class="info">
        <h3>{{ props.title }}</h3>
        <div class="b-info">
          <p class="type">{{ props.type }}</p>
          <p class="lang">{{ props.lang }}</p>
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
  transition:
    box-shadow 0.3s ease,
    transform 0.2s ease;
}

.card:hover {
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 10px 8px,
    rgba(0, 0, 0, 0.09) 0px 12px 16px;
  transform: translateY(-10px);
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
