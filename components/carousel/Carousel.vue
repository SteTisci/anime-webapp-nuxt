<script setup lang="ts">
const slidesRaw = await $fetch('/api/anime/slides')

const slides = computed(() => slidesRaw.data.filter(slide => slide.bannerImage))

const { prev, next, current, start, stop } = useCarousel()
</script>

<template>
  <div class="carousel" @mouseenter.prevent="stop" @mouseleave.prevent="start">
    <CarouselButton class="prev" src="/prevIcon.svg" alt="previous slide icon" @click.prevent="prev" />
    <CarouselButton class="next" src="/nextIcon.svg" alt="next slide icon" @click.prevent="next" />

    <Transition name="fade" mode="in-out">
      <CarouselSlide
        :id="slides[current]._id"
        :key="slides[current]._id"
        :banner="slides[current].bannerImage!"
        :title="slides[current].title"
      />
    </Transition>
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
  transition: opacity 1.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}
</style>
