<template>
  <div>
    <button>Mostra altro</button>
  </div>
</template>

<style scoped>
div {
  width: 150px;
  height: 35px;
  background-color: transparent;
  border: 2px solid #c5c5c5;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
}

button {
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
  font-family: jersey;
  font-size: 1rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  cursor: pointer;
}

button:hover {
  background-color: #c5c5c5;
  color: #2c2c2c;
}

button:active {
  background-color: transparent;
  color: white;
}
</style>
