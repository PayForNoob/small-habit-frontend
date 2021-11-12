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


export default {
  data() {
    return {
      user: {},
    }
  },
  methods: {
    console() {
      console.log(this)
    }
  },
  
}
</script>

<style scoped>
.content {
  margin-top: 80px;
}
</style>