<template>
  <div id="app">
    <p>
      <router-link to="/webSocketDemo">001</router-link>
      <router-link to="/helloWorld">002</router-link>
    </p>
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
