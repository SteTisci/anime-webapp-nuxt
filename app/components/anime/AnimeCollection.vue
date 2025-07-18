<script setup lang="ts">
const props = defineProps<{ name: string; size: 'large' | 'medium' | 'small'; data: Anime[] }>()

const name = computed(() => props.name.charAt(0).toUpperCase() + props.name.slice(1))
</script>

<template>
  <div v-if="props.size === 'large'" class="anime-container">
    <h1>{{ name }}</h1>

    <div class="anime-card-wrapper">
      <AnimeCardLg v-for="(anime, index) in props.data" :key="index" :data="anime" />
    </div>

    <NuxtLink :to="`/${props.name}`">
      <AnimeButton />
    </NuxtLink>
  </div>

  <div v-if="props.size === 'medium'" class="anime-container-medium">
    <h1>{{ name }}</h1>

    <div class="anime-card-wrapper-medium">
      <AnimeCardMd v-for="(anime, index) in props.data" :key="index" :data="anime" />
    </div>

    <AnimeButton />
  </div>
</template>

<style scoped>
.anime-container,
.anime-container-medium {
  background-color: #262626;
  padding: 20px;
  border-radius: 3px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.anime-container {
  width: 840px;
  margin-right: 10px;
}

.anime-container h1,
.anime-container-medium h1 {
  color: white;
  font-size: 2.4rem;
  padding-bottom: 20px;
  cursor: default;
  line-height: normal;
}

.anime-container h1 {
  height: 60px;
}

.anime-container-medium h1 {
  height: 58px;
}

.anime-card-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 10px;
}

.anime-card-wrapper-medium {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
