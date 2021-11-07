<template>
  <div>
    <router-view></router-view>
    <spinner :loading = 'loadingStatus'></spinner>
  </div>

</template>

<script>
import Spinner from './components/Spinner.vue'

export default {
  name: 'App',
  components: {
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
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
</style>
