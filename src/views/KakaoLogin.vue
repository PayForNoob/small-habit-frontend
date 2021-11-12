<template>
  <div class="container">
    <div class="login">
      로그인
    </div>
    <div class="login_btn">
      <img src="../assets/kakao_login_large_wide.png" 
      alt="kakao_login_button" class="login_btn" @click="kakaoLogin">
    </div>
  </div>
</template>

<script>
import {store} from '../store/index.js'

export default {
  data() {
    return {

    }
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:8080/login'
      });
    },
  },
  created() {
    window.Kakao.init('fdca4725465aabcee10a91e15f7307e1');

    console.log(window.Kakao.isInitialized());
  },
  async mounted() {
    let response;
    const url = new URL(window.location.href)
    let code = url.searchParams.get('code')
    try {
      response = await this.$axios({
        method: 'post',
        url: '/auth/kakao',
        params: {
          code
        }
      })
      console.log('res', response)
      store.state.user = response
    }
    catch (err) {
      console.log(err.data);
    } 
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}
.login {
  flex-basis: 300px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 300px;
}
</style>