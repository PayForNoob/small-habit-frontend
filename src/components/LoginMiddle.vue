<template>
  <div>
    middle
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async mounted() {
    let response;
    async function getUserAuth() {
      const url = new URL(window.location.href)
      try {
        const code = url.searchParams.get('code');
        response = await axios({
          method: 'get',
          url: 'http://localhost:3000/login/kakao',
          params: {
            code
          }
        })
        console.log('res', response)
      }
      catch (err) {
        console.log(err);
      } 
    }
    await getUserAuth()
  }
}
</script>

<style>

</style>