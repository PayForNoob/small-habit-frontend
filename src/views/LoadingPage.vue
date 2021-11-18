<template>
  <div>
    
  </div>
</template>

<script>
import { store } from '../store/index.js'

export default {
  async mounted() {
    console.log('router', this.$route.query.code)
    let response;
    let code = this.$route.query.code
    if(code) {
      try {
        response = await this.axios({
          method: 'post',
          url: '/api/auth',
          params: {
            code
          }
        })
        // console.log('res', response.data[0])
        store.state.user = response.data[0]
        console.log('user', store.state.user)
        this.$router.push('/habit/today')
      }
      catch (err) {
        console.log(err.data);
        this.$router.push('/login');
      } 
    }
  },
}
</script>

<style>

</style>