<script setup lang="ts">
const { data } = await useFetch('/api/anime?releaseYear=2025&limit=13')
</script>

<template>
  <div class="anime-container">
    <h1>Recenti</h1>
    <div class="anime-card-wrapper">
      <AnimeCardSmall
        v-for="anime in data?.data"
        :id="anime._id"
        :key="anime._id"
        :title="anime.title"
        :type="anime.type"
        :thumbnail="anime.thumbnail"
        :release-year="anime.releaseYear"
        :tags="anime.tags"
        :episodes="anime.numberOfEpisodes"
        :duration="anime.duration"
      />
    </div>

    <AnimeButton />
  </div>
</template>

<style scoped>
.anime-container {
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 5px;
}

.anime-container h1 {
  color: white;
  font-size: 2.4rem;
  padding-bottom: 20px;
  cursor: default;
  line-height: normal;
}

.anime-card-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
