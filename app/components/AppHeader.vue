<template>
  <header>
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img src="/logo.png" alt="site logo" width="60px" height="60px" />
        <h1>Site name</h1>
      </NuxtLink>
      <nav class="nav-links">
        <ul>
          <li><NuxtLink active-class="active" to="/">Home</NuxtLink></li>
          <li><NuxtLink active-class="active" to="/popolari">Popolari</NuxtLink></li>
          <li><NuxtLink active-class="active" to="/archivio">Archivio</NuxtLink></li>
        </ul>
      </nav>
      <AppHeaderSearchBar />
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  background-color: #121212;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.container {
  width: 1190px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

.logo {
  display: inherit;
  align-items: center;
  gap: 5px;
  color: #ffffff;
}

.logo h1 {
  font-size: 2.5rem;
}

.nav-links ul {
  display: flex;
  flex-direction: row;
  padding: 0;
  gap: 15px;
  list-style: none;
  margin-top: 3px;
}

.nav-links a {
  color: #ffffff;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: normal;
}

.nav-links a.active,
.nav-links a:hover {
  color: #c5c5c5;
}
</style>
