<template>
  <header>
    <div  class="로고">
      <img src="../assets/logo.png" alt="">
    </div>
    <router-link to="/login" class="로그인" v-if="!user">
      로그인
    </router-link>
    <div class="로그아웃" @click="logout" v-else>
      로그아웃
    </div>
    <div class="상단메뉴" v-if="user">
      <router-link to="t/total" >
        <div :class="{ 'active': $route.path == '/total' }">
          전체습관
        </div>
      </router-link>
      <router-link to="/today" >
        <div :class="{ 'active': $route.path == '/today' }">
          오늘 실천
        </div>
      </router-link>
      <router-link to="/mypage" >
        <div :class="{ 'active': $route.path == '/mypage' }">
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
      return this.$store.state.user
    },
  },
  methods: {
    async logout() {
      // console.log('tag', this.$store.state.user)
      try {
        await this.axios({
          method: 'delete',
          url: '/api/auth',
        })

        // this.$store.state.user = null
        location.href = '/main'
      }
      catch (err) {
        console.log(err.data);
      } 
    },
  },
}
</script>

<style lang="css" scoped>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.로고 {
  height: 80px;
}
img {
  width: 80px;
  height: 80px;
}
.로그인, .로그아웃 {
  position: fixed;
  top: 0;
  right: 0;
  flex-shrink: 0;
  width: 100px;
  height: 80px;
  line-height: 80px;
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
.active {
  border-bottom: 4px solid #000;
  color: #2c3e50;
}

</style>