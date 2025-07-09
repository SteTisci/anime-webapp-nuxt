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
          <li><NuxtLink active-class="active" to="/anime">Anime</NuxtLink></li>
          <li><NuxtLink active-class="active" to="/popular">Popolari</NuxtLink></li>
          <li><NuxtLink active-class="active" to="/archive">Archivio</NuxtLink></li>
        </ul>
      </nav>
      <div class="search-bar">
        <input id="search" type="text" autocomplete="off" placeholder="Cerca un anime..." />
        <img src="/search.svg" alt="search glass" width="25px" height="25px" />
      </div>
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
  width: 1000px;
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
  font-family: jersey;
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
  font-family: jersey;
  font-size: 1.3rem;
  line-height: normal;
}

.nav-links a.active,
.nav-links a:hover {
  color: #c5c5c5;
}

.search-bar {
  display: inherit;
  align-items: center;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  background-color: #202020;
}

.search-bar input {
  outline: none;
  border: none;
  padding: 5px;
  margin: 4px 0 4px 5px;
  color: #ffffff;
  background-color: transparent;
}

.search-bar img {
  margin-right: 5px;
}
</style>
