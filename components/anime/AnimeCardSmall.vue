<script setup lang="ts">
interface Props {
  id: string
  title: string
  type: string
  thumbnail: string
  releaseYear: number
  tags: string[]
  episodes: number
  duration: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="card">
    <NuxtLink :to="`/anime/${props.id}`">
      <div class="card-info">
        <img :src="props.thumbnail" :alt="props.title" />
        <div class="info">
          <h4>{{ props.title }}</h4>
          <p>{{ props.type }} - {{ props.releaseYear }}</p>
          <p class="tags">{{ props.tags.slice(0, 5).toString().replace(/,/g, ', ') }}</p>
          <p>{{ props.duration }} min / {{ props.episodes }} episodi</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
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
  margin: 0 0 10px;
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
