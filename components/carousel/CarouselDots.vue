<script setup lang="ts">
import type { CarouselDots } from '~/types'

const props = defineProps<CarouselDots>()
const emit = defineEmits(['update-current'])
</script>

<template>
  <div class="dots-container">
    <span
      v-for="(_, index) in props.length"
      :key="index"
      :class="index === props.current ? 'active' : ''"
      @click="emit('update-current', index)"
    ></span>
  </div>
</template>

<style scoped>
.dots-container {
  position: absolute;
  top: 92%;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
  transform: translateX(-50%);
  height: 35px;
}

span {
  width: 28px;
  height: 5px;
  background-color: #ffffff7e;
  opacity: 0.8;
  border-radius: 5px;
  cursor: pointer;
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition:
    background-color 0.4s ease-in-out,
    opacity 0.4s ease-in-out,
    transform 0.3s ease;
}

span.active {
  background-color: #36d5fdea;
  opacity: 1;
  transform: scale(1.1) translateY(-0.5px);
}
</style>
