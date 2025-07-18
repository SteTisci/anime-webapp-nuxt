<script setup lang="ts">
const { data: response } = await useFetch<{ success: boolean; data: Anime[] }>('/api/anime/slides', {
  transform: data => {
    return {
      success: data.success,
      data: data.data.filter(slide => slide.bannerImage),
    }
  },
})

const slides = computed(() => response.value?.data ?? [])

const { prev, next, current, start, stop } = useCarousel(slides.value.length)
</script>

<template>
  <div class="carousel" @mouseenter.prevent="stop" @mouseleave.prevent="start">
    <CarouselButton class="prev" src="/prevIcon.svg" alt="previous slide icon" @click.prevent="prev" />
    <CarouselButton class="next" src="/nextIcon.svg" alt="next slide icon" @click.prevent="next" />

    <NuxtLink v-if="slides.length > 0" :to="`/anime/${slides[current]!.id}`">
      <Transition name="fade" mode="in-out">
        <CarouselSlide
          :id="slides[current]!.id"
          :key="slides[current]!.id"
          :banner="slides[current]!.bannerImage!"
          :title="slides[current]!.title!"
        />
      </Transition>
    </NuxtLink>

    <CarouselDots :length="slides.length" :current="current" @update-current="index => (current = index)" />
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 450px;
  margin-top: 80px;
  overflow: hidden;
  user-select: none;
  opacity: 0.9;
}

.prev {
  top: 0;
  left: 0;
  z-index: 1;
}

.next {
  top: 0;
  right: 0;
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}
</style>
