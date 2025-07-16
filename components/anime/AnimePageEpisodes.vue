<script setup lang="ts">
const props = defineProps<{ numberOfEpisodes: number }>()

const { currentGroup, currentEpisode, groups, range, animeID, episodeData, episodePending } = useEpisodes(
  props.numberOfEpisodes,
)
</script>

<template>
  <div class="container">
    <div class="episode-link">
      <NuxtLink :to="episodeData?.data.videoUrl" target="_blank">
        <h2 v-if="episodePending">Caricamento episodio...</h2>
        <h2 v-else>Guarda Episodio {{ episodeData?.data.episodeNum }}</h2>
      </NuxtLink>
    </div>

    <div class="episodes-container">
      <div v-if="groups.length > 1" class="groups">
        <span
          v-for="(group, index) in groups"
          :key="index"
          :class="{ active: currentGroup === group.index }"
          @click="currentGroup = group.index"
        >
          {{ group.start }} - {{ group.end }}
        </span>
      </div>

      <div class="episodes">
        <template v-for="episode in range" :key="episode">
          <NuxtLink
            :to="`/anime/${animeID}?episode=${episode}`"
            :class="{ active: currentEpisode === episode }"
            @click="currentEpisode = episode"
          >
            {{ episode }}
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 960px;
  line-height: normal;
  color: #fff;
}

.episode-link,
.episodes-container {
  background-color: #262626;
  border-radius: 5px;
  justify-items: center;
  align-content: center;
}

.episode-link {
  margin-bottom: 10px;
  cursor: pointer;
  height: 55px;
}

.episode-link a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.episodes-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.groups {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

.groups span,
.episodes a {
  background-color: #3a3a3a;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}

.episodes {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));
  gap: 10px;
}

.episodes a,
.episode-link a {
  text-decoration: none;
  color: #fff;
}

.episode-link a {
  border-radius: 5px;
}

.groups span,
.episodes a,
.episode-link a {
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

span:hover:not(.active),
.episodes a:hover:not(.active),
.episode-link a:hover {
  background-color: #c5c5c5;
  color: #3a3a3a;
}

span.active,
a.active {
  background-color: #007bff;
}
</style>
