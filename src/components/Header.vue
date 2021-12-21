<template>
  <header>
    <div class="헤더">
      <div>
        <img src="../assets/kakao_login_medium_narrow.png" class="숨김">
      </div>
      <div class="로고">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="로그인" v-if="!user">
        <img
          src="../assets/kakao_login_medium_narrow.png"
          alt="kakao_login_button"
          class="login_btn"
          @click="kakaoLogin"
        />
      </div>
      <div class="로그아웃" @click="logout" v-else>
        <img src="@/assets/logout_btn.png" alt="로그아웃 버튼" />
      </div>
    </div>
    <div class="상단메뉴" v-if="user">
      <router-link to="/total" >
        <div :class="{ '현재페이지': $route.path == '/total' }">
          전체습관
        </div>
      </router-link>
      <router-link to="/today" >
        <div :class="{ '현재페이지': $route.path == '/today' }">
          오늘실천
        </div>
      </router-link>
      <router-link to="/myinfo" >
        <div :class="{ '현재페이지': $route.path == '/myinfo' }">
          마이페이지
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    kakaoLogin() {
      window.Kakao.init(process.env.VUE_APP_JAVASCRIPT_KEY);

      console.log(window.Kakao.isInitialized());

      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:8080/loading",
      });
    },
    async logout() {
      try {
        await this.axios({
          method: "delete",
          url: "/api/auth",
        });
        location.href = "/";
      } catch (err) {
        console.log(err.data);
      }
    },
  },
  props: ["isActived", "notActived"],
};
</script>

<style lang="css" scoped>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.숨김 {
  opacity: 0;
}
.헤더 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}
.헤더 div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
}
.로고 img {
  width: 80px;
  height: 80px;
}
.로그인,
.로그아웃 {
  cursor: pointer;
}
.상단메뉴 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #ddd;
}
.상단메뉴 div {
  width: 120px;
  font-size: 24px;
  font-weight: bold;
  line-height: 70px;
}
.상단메뉴 a {
  color: #9b9b9b;
}
.현재페이지 {
  border-bottom: 4px solid #000;
  color: #2c3e50;
  text-align: center;
} 

/* 반응형 */
@media (max-width: 750px) {
  header {
    max-width: 100vw;
    height: 40px;
  }
  .헤더 {
    height: 40px;
  }
  .로고 img {
    width: 40px;
    height: 40px;
  }
  .헤더 div:nth-child(2n-1) img {
    width: 92px;
    height: 22px;
  }
  .컨테이너_내용 {
    width: 100vw;
  }
}
</style>