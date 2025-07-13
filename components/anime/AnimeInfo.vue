<script setup lang="ts">
import type { Anime } from '~/types'

const props = defineProps<{ data: Anime }>()
</script>

<template>
  <div :class="props.data.id">
    <img :src="props.data.bannerImage" :alt="props.data.title + 'banner'" />

    <div class="thumbnail">
      <img :src="props.data.thumbnail" :alt="props.data.title + 'thumbnail'" />
    </div>

    <div class="info-top">
      <h1>{{ props.data.title }}</h1>
      <p>{{ props.data.description }}</p>
    </div>

    <div class="info-bottom">
      <div class="info-item">
        <h3>Tipo</h3>
        <p>{{ props.data.type }}</p>
      </div>

      <div class="info-item">
        <h3>Studio</h3>
        <p>{{ props.data.author }}</p>
      </div>

      <div class="info-item">
        <h3>Episodi</h3>
        <p>{{ props.data.numberOfEpisodes }}</p>
      </div>

      <div class="info-item">
        <h3>Stato</h3>
        <p>{{ props.data.status!.charAt(0).toUpperCase() + props.data.status!.slice(1) }}</p>
      </div>

      <div class="info-item">
        <h3>Anno</h3>
        <p>{{ props.data.releaseYear }}</p>
      </div>

      <div class="info-item">
        <h3>Valutazione</h3>
        <p>{{ props.data.rating }}</p>
      </div>

      <div class="info-item">
        <h3>Lingua</h3>
        <p>{{ props.data.lang }}</p>
      </div>
    </div>
  </div>
</template>
