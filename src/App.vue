<template>
  <div id="app">
   <todos-page></todos-page>
  </div>
</template>

<script>
import todoPage from './components/todos-page.vue'

export default {
  name: 'app',
  components: {
    'todos-page':todoPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
