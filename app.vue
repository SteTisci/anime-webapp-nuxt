<template>
  <div id="app">
    <AppHeader />
    <div id="page">
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#page {
  flex: 1;
}
</style>
