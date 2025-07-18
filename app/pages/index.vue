<script setup lang="ts">
const { popolari, archivio, recenti, loading, error } = useAnimeData()
</script>

<template>
  <div class="content">
    <Carousel />

    <div class="content-bottom">
      <div class="content-bottom-left">
        <AnimeCollection v-if="popolari?.success" name="popolari" size="large" :data="popolari.data" />
        <p v-else-if="loading.popolari">Caricamento popolari...</p>
        <p v-else-if="error.popolari">Errore nel caricamento dei popolari.</p>

        <AnimeCollection v-if="archivio?.success" name="archivio" size="large" :data="archivio.data" />
        <p v-else-if="loading.archivio">Caricamento archivio...</p>
        <p v-else-if="error.archivio">Errore nel caricamento dell'archivio.</p>
      </div>

      <div class="content-bottom-right">
        <AnimeCollection v-if="recenti?.success" name="recenti" size="medium" :data="recenti.data" />
        <p v-else-if="loading.recenti">Caricamento recenti...</p>
        <p v-else-if="error.recenti">Errore nel caricamento dei recenti.</p>
      </div>
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

.content-bottom-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
