<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  name: 'App',
  store
}
</script>

<style>
#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
@media ( min-width: 640px ) {
  #app {
    display: flex;
    margin: 0 auto;
    width: 80vw;
  }
}
</style>
