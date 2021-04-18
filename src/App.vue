<template>
  <div id="app">
    <div class="nav">
       <img class="brand" src="./assets/images/brand.jpeg" alt="logo" />
       <button class="nav-button">
         Run
       </button>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #DCDCDC;
}
.brand {
  height: 40px;
}
.nav-button {
  cursor: pointer;
  background: transparent;
  padding: 15px 7px;
  border-radius: 0.25rem;
  border: 1px solid #DCDCDC;

}
.nav-button:hover {
    background: #606060;
    color: #ffF;
}
</style>
