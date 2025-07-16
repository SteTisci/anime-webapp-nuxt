<script setup lang="ts">
const props = defineProps<{ bannerImage: string | undefined; title: string | undefined }>()
</script>

<template>
  <div class="banner-wrapper">
    <img v-if="props.bannerImage" class="banner" :src="props.bannerImage" :alt="props.title + 'banner'" />
    <img v-else class="banner" src="/default-banner.png" alt="default banner" />
  </div>
</template>

<style scoped>
img.banner {
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: center;
}
</style>
