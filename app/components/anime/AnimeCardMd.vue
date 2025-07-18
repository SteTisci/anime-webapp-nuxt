<script setup lang="ts">
const props = defineProps<{ data: Anime }>()
</script>

<template>
  <div class="card">
    <NuxtLink :to="`/anime/${props.data.id}`">
      <div class="card-info">
        <img :src="props.data.thumbnail" :alt="props.data.title" />
        <div class="info">
          <h4>{{ props.data.title }}</h4>
          <p>{{ props.data.type }} - {{ props.data.releaseYear }}</p>
          <p class="tags">{{ props.data.tags!.slice(0, 5).toString().replace(/,/g, ', ') }}</p>
          <p>{{ props.data.duration }} min / {{ props.data.numberOfEpisodes }} episodi</p>
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
  height: 103px;
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
