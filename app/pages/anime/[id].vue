<script setup lang="ts">
const route = useRoute()

const { data: anime } = await useFetch<{ success: boolean; data: Anime }>(`/api/anime/${route.params.id}`)
</script>

<template>
  <div>
    <AnimePage v-if="anime?.success" :data="anime.data" />
  </div>
</template>

<style scoped>
div {
  margin-top: 80px;
}
</style>
