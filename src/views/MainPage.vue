<template>
  <div class="contents">
    <div>
      Main
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/index.js'

export default {
  async beforeCreate() {
    let response;
    const url = new URL(window.location.href)
    let code = url.searchParams.get('code')
    if(code) {
      try {
        response = await this.axios({
          method: 'post',
          url: '/api/auth/login',
          params: {
            code
          }
        })
        // console.log('res', response.data[0])
        store.state.user = response.data[0]
        store.state.login = true
        console.log('user', store.state.user)
        this.$router.push('/habit/today')
      }
      catch (err) {
        console.log(err.data);
      } 
    }
  },
}
</script>

<style scoped>

</style>