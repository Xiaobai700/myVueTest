<template>
  <div id="app">
    <img src="./assets/logo.png">
    <my-list></my-list>
    <router-view/>
  </div>
</template>

<script>
import myList from './components/vueList'
export default {
  name: 'App',
  components: {
    myList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
