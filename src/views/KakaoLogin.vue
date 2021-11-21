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

export default {
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:8080/loading'
      });
    },
  },
  created() {
    window.Kakao.init(process.env.VUE_APP_JAVASCRIPT_KEY);

    console.log(window.Kakao.isInitialized());
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.login {
  flex-basis: 300px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 300px;
}
</style>