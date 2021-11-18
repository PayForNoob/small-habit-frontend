<template>
  <header>
    <div  class="로고">
      <img src="../assets/logo.png" alt="">
    </div>
    <router-link to="/login" class="로그인" v-if="!login">
      로그인
    </router-link>
    <div class="로그아웃" v-if="login" @click="logout">
      로그아웃
    </div>
    <div class="상단메뉴">
      <div :class="{ 'active': pathname == '/habit/total' }" @click="nowPath">
        <router-link to="/habit/total" >전체습관</router-link>
      </div>
      <div :class="{ 'active': pathname == '/habit/today' }" @click="nowPath">
        <router-link to="/habit/today" >오늘 실천</router-link>
      </div>
      <div :class="{ 'active': pathname == '/mypage' }" @click="nowPath">
        <router-link to="/mypage" >마이페이지</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { store } from '../store/index.js'

export default {
  data() {
    return {
      pathname: '/'
    }
  },
  computed: {
    login() {
      return store.state.login
    },
  },
  methods: {
    async logout() {
      try {
        await this.axios({
          method: 'delete',
          url: '/api/auth/logout',
        })
        store.state.login = false
      }
      catch (err) {
        console.log(err.data);
      } 
    },
    nowPath() {
      let url = new URL(window.location.href)
      let path = url.pathname
      this.pathname = path
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
}
.active a {
  color: #2c3e50;
}

</style>