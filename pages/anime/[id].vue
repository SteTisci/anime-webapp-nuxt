<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>page anime/{{ route.params.id }}</h1>
  </div>
</template>

<style scoped>
div {
  margin-top: 80px;
}
</style>
