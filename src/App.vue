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
  overflow-x: hidden;
  min-height: 90vh;
}

@font-face {
  font-family: 'Montserrat';
  src: url('../static/fonts/Montserrat-Medium.ttf');
  font-weight: normal;
  font-style: normal;
}

::-webkit-scrollbar-track {
    background-color: #F8FAFB;
    border-radius: 20px;
  }
::-webkit-scrollbar {
  background-color: #F8FAFB;
  border-radius: 20px;
  height: 10px;
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #acacac;
  border-radius: 20px;
}

/* desktop */
@media ( min-width: 769px ) {
  body {
    background-color: #F8FAFB;
  }
  #app {
    display: flex;
    height: 100%;
  }
}
</style>
