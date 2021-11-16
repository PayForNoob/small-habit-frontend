<template>
  <div class="contents">
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
      try {
        await this.axios({
          method: 'delete',
          url: '/api/auth/logout',
        })
        // this.$router.go();
      }
      catch (err) {
        console.log(err.data);
      } 
    },
  },
  mounted() {
    console.log('url', new URL(window.location.href).pathname)
  }
}
</script>

<style scoped>

</style>