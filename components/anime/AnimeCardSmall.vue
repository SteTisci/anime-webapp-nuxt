<script setup lang="ts">
import type { AnimeCard } from '~/types'

const props = defineProps<AnimeCard>()
</script>

<template>
  <div class="card">
    <NuxtLink :to="`/anime/${props.id}`">
      <div class="card-info">
        <img :src="props.thumbnail" :alt="props.title" />
        <div class="info">
          <h4>{{ props.title }}</h4>
          <p>{{ props.type }} - {{ props.releaseYear }}</p>
          <p class="tags">{{ props.tags!.slice(0, 5).toString().replace(/,/g, ', ') }}</p>
          <p>{{ props.duration }} min / {{ props.episodes }} episodi</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.card {
  border-radius: 5px;
  transition: background-color 0.15s ease-in-out;
}

.card:hover {
  background-color: rgba(107, 107, 107, 0.582);
}

.card a {
  text-decoration: none;
}

.card-info {
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.card img {
  border-radius: 5px;
  padding: 0;
}

.info {
  width: calc(100% - 80px);
  line-height: normal;
}

.info h4 {
  margin: 5px 0 10px;
  max-height: 30px;
  overflow: hidden;
  color: white;
  font-size: 0.93rem;
}

.info p {
  margin-bottom: 4px;
  font-size: 0.72rem;
  color: rgb(212, 212, 212);
}
</style>
