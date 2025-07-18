<script setup lang="ts">
const names = {
  author: 'Studio',
  releaseYear: 'Anno',
  status: 'Stato',
  lang: 'Lingua',
  type: 'Tipo',
  numberOfEpisodes: 'Episodi',
  rating: 'Valutazione',
} as const

type NameKey = keyof typeof names

const props = defineProps<{ name: NameKey; value: string | number | undefined }>()
</script>

<template>
  <div class="info-item">
    <h2>{{ names[props.name] }}</h2>
    <p>{{ props.value }}</p>
  </div>
</template>

<style scoped>
.info-item {
  width: 135px;
  height: 40px;
  text-align: center;
  align-self: center;
}

.info-item h2 {
  margin-bottom: 6px;
  font-size: 1.2rem;
}

.info-item p {
  color: #c5c5c5;
}
</style>
