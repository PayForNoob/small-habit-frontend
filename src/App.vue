<template>
  <div>
    <habit-header class="header"></habit-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HabitHeader from './components/HabitHeader.vue'


export default {
  comments: {
    HabitHeader
  }
}
</script>

<style> 
* {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
