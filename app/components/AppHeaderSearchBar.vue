<template>
  <div class="search-bar">
    <input id="search" type="text" autocomplete="off" placeholder="Cerca un anime..." />
    <img src="/search.svg" alt="search glass" width="25px" height="25px" />
  </div>
</template>

<style scoped>
.search-bar {
  display: inherit;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #5c5c5c;
  border-radius: 5px;
  background-color: transparent;
  width: 250px;
}

.search-bar input {
  outline: none;
  border: none;
  padding: 5px 10px;
  margin: 4px 0 4px 5px;
  color: #ffffff;
  background-color: transparent;
  line-height: normal;
  font-size: 1rem;
  width: 225px;
}

.search-bar input::placeholder {
  font-size: 1rem;
  color: #5c5c5c;
}

.search-bar img {
  margin-right: 10px;
}
</style>
