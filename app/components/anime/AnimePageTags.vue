<script setup lang="ts">
const props = defineProps<{ tags: string[] | undefined }>()
</script>

<template>
  <div class="tags">
    <h2>Generi</h2>
    <div class="tags-links">
      <template v-for="(tag, index) in props.tags" :key="index">
        <NuxtLink v-if="index < props.tags?.length! - 1" :to="`/archivio?tag=${tag}`">{{ tag }}, </NuxtLink>
        <NuxtLink v-else :to="`/archivio?tag=${tag}`"> {{ tag }}</NuxtLink>
      </template>
    </div>
  </div>
</template>

<style scoped>
.tags {
  width: 220px;
  height: 140px;
  background-color: #262626;
  border-radius: 3px;
  padding: 20px;
  line-height: normal;
  margin-right: 10px;
}

.tags-links {
  width: 180px;
  height: 58px;
  text-wrap: wrap;
}

.tags h2,
.tags a {
  color: #ffffff;
}

.tags h2 {
  margin-bottom: 10px;
  font-size: 1.6rem;
}

.tags a {
  color: #0556a7;
  font-size: 1.1rem;
  text-decoration: none;
}

.tags a:hover {
  color: #2984df;
}
</style>
