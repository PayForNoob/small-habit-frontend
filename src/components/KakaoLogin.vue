<template>
  <div class="container">
    <header>
      <img src="../assets/KakaoTalk_20211031_004210593_01.png" alt="로고" class="small_habit_logo">
    </header>
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
  data() {
    return {

    }
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:8080/main'
      });
    },
  },
  mounted() {
    window.Kakao.init('fdca4725465aabcee10a91e15f7307e1');

    console.log(window.Kakao.isInitialized());
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 80px;
}
.small_habit_logo {
  width: auto;
  height: 80px;
}
.login {
  flex-basis: 300px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 300px;
}
</style>