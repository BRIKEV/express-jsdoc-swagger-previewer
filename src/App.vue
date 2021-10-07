<template>
  <div id="app">
    <router-view />
    <notifications
      group="notify"
      position="bottom right"
      :closeOnClick="false"
    />
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
</style>
