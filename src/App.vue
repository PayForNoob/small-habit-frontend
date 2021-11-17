<template>
  <div id="container">
    <habit-header class="header"></habit-header>
    <router-view class="contents"></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
  overflow: hidden;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
}
.contents {
  padding-top: 150px;
}
</style>
