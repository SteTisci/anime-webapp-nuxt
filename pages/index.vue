<script setup lang="ts">
const { data: popolari } = await useFetch('/api/anime?limit=30')
const { data: recenti } = await useFetch('/api/anime?releaseYear=2025&limit=12')
</script>

<template>
  <div class="content">
    <Carousel />
    <div class="content-bottom">
      <AnimeCollection v-if="popolari?.success" name="popolari" card="normal" :data="popolari?.data" />
      <AnimeCollection v-if="recenti?.success" name="recenti" card="small" :data="recenti?.data" />
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-top: 80px;
}

.content-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}
</style>
