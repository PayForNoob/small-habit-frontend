<template>
  <div class="content">
    <router-link to="/login">로그인</router-link>
    <button @click="logout">로그아웃</button>
    <div>
      Main
    </div>
    <div>
    </div>
  </div>
</template>

<script>


export default {
  methods: {
    async logout() {
      await window.Kakao.Auth.logout();
      try {
        await this.axios({
          method: 'delete',
          url: '/api/auth/logout',
        })
        this.$router.go();
      }
      catch (err) {
        console.log(err.data);
      } 
    },
  },
}
</script>

<style scoped>
.content {
  margin-top: 80px;
}
</style>