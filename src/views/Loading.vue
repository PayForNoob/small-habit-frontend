<template>
  <div>
    
  </div>
</template>

<script>


export default {
  async created() {
    let code = this.$route.query.code
    if(code) {
      try {
        await this.axios({
          method: 'post',
          url: '/api/auth',
          params: {
            code
          }
        })
        location.href = '/today'
      }
      catch (err) {
        location.href = '/'
      } 
    } else {
      location.href = '/'
    }
  },
}
</script>

<style>

</style>