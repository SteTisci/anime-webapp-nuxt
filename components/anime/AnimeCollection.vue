<script setup lang="ts">
import type { Anime } from '~/types'

const props = defineProps<{ name: string; card: 'normal' | 'small'; data: Anime[] }>()

const name = computed(() => props.name.charAt(0).toUpperCase() + props.name.slice(1))
</script>

<template>
  <div v-if="props.card === 'normal'" class="anime-container">
    <h1>{{ name }}</h1>

    <div class="anime-card-wrapper">
      <AnimeCard
        v-for="anime in props.data"
        :id="anime.id"
        :key="String(anime.id)"
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
    <h1>{{ name }}</h1>

    <div class="anime-card-wrapper-small">
      <AnimeCardSmall
        v-for="anime in props.data"
        :id="anime.id"
        :key="String(anime.id)"
        :title="anime.title"
        :type="anime.type"
        :thumbnail="anime.thumbnail"
        :release-year="anime.releaseYear!"
        :tags="anime.tags!"
        :number-of-episodes="anime.numberOfEpisodes!"
        :duration="anime.duration!"
      />
    </div>

    <AnimeButton />
  </div>
</template>

<style scoped>
.anime-container,
.anime-container-small {
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 5px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.anime-container {
  width: 840px;
  margin-right: 10px;
}

.anime-container h1,
.anime-container-small h1 {
  color: white;
  font-size: 2.4rem;
  padding-bottom: 20px;
  cursor: default;
  line-height: normal;
}

.anime-container h1 {
  height: 60px;
}

.anime-container-small h1 {
  height: 58px;
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
