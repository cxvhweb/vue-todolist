<template>
  <div id="app">
    <router-link to="/">首页</router-link>>
    <router-link to="/form">Form</router-link>
    <router-link to="/table">Table</router-link>


    <router-link to="/todolist">todolist</router-link>
    <router-link to="/404">404</router-link>
    <router-link to="/test">Testrouter</router-link>
    <router-link to="/a">a</router-link>
    <router-link to="/b">b</router-link>
    <router-link to="/c">c 路由守卫拦截</router-link>
    <router-link to="/vuex">Vuex</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
