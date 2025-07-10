<script setup lang="ts">
import type { AnimeData } from '~/types'

const props = defineProps<AnimeData>()
</script>

<template>
  <div v-if="props.card === 'normal'" class="anime-container">
    <h1>{{ props.name.charAt(0).toUpperCase() + props.name.slice(1) }}</h1>
    <div class="anime-card-wrapper">
      <AnimeCard
        v-for="anime in props.data"
        :id="String(anime._id)"
        :key="String(anime._id)"
        :title="anime.title"
        :thumbnail="anime.thumbnail"
        :lang="anime.lang!"
        :type="anime.type"
      />
    </div>

    <NuxtLink :to="`/${props.name}`">
      <AnimeButton />
    </NuxtLink>
  </div>

  <div v-if="props.card === 'small'" class="anime-container-small">
    <h1>{{ props.name.charAt(0).toUpperCase() + props.name.slice(1) }}</h1>
    <div class="anime-card-wrapper-small">
      <AnimeCardSmall
        v-for="anime in props.data"
        :id="String(anime._id)"
        :key="String(anime._id)"
        :title="anime.title"
        :type="anime.type"
        :thumbnail="anime.thumbnail"
        :release-year="anime.releaseYear!"
        :tags="anime.tags!"
        :episodes="anime.numberOfEpisodes!"
        :duration="anime.duration!"
      />
    </div>

    <AnimeButton />
  </div>
</template>

<style scoped>
.anime-container {
  width: 840px;
  background-color: #2c2c2c;
  padding: 20px;
  margin-right: 10px;
  border-radius: 5px;
}

.anime-container-small {
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

.anime-container-small h1 {
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

.anime-card-wrapper-small {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
