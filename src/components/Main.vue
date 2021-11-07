<template>
  <div>
    <router-link to="/login">로그인</router-link>
    <div @click="console">
      Main
    </div>
    <div>
      {{ user.nickname }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
      }
      catch (err) {
        console.log(err);
      } 
    }
    await getUserAuth()
    this.user = response.data.body[0]
    console.log('user', this.user)
  }
}
</script>

<style>

</style>