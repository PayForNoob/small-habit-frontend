<template>
  <div class="content">
    <router-link to="/login">로그인</router-link>
    <div @click="console">
      Main
    </div>
    <div>
      {{ user }}
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      user: {},
    }
  },
  methods: {
    console() {
      console.log(this.userAuth)
    }
  },
}
</script>

<style scoped>
.content {
  margin-top: 80px;
}
</style>