<script setup lang="ts">
// Questi dati non sono aggiornati
const { data } = await useFetch('/api/anime?limit=30')
</script>

<template>
  <div class="anime-container">
    <h1>Popolari</h1>
    <div class="anime-card-wrapper">
      <AnimeCard
        v-for="anime in data?.data"
        :id="anime._id"
        :key="anime._id"
        :title="anime.title"
        :thumbnail="anime.thumbnail"
        :lang="anime.lang"
        :type="anime.type"
      />
    </div>

    <NuxtLink to="/popular">
      <AnimeButton />
    </NuxtLink>
  </div>
</template>

<style scoped>
.anime-container {
  display: flex;
  flex-direction: column;
  width: 840px;
  background-color: #2c2c2c;
  padding: 20px;
  margin: 40px 10px 40px 0;
  border-radius: 5px;
}

h1 {
  color: white;
  font-size: 2.4rem;
  padding-bottom: 20px;
  cursor: default;
  line-height: normal;
}

.anime-card-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 10px;
}
</style>
