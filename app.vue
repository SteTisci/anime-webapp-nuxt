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
  font-family: jersey;
}

#page {
  flex: 1;
}
</style>
