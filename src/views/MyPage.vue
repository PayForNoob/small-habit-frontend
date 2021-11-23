<template>
  <div>
    <habit-header class="header"></habit-header>
    <div class="box">
      <div class="category">닉네임</div>
      <div>맥스</div>
    </div>
    <div class="box">
      <div class="category">이메일</div>
      <div>opa9904@naver.com</div>
    </div>
    <div class="withdrawal">탈퇴하기</div>
  </div>
</template>

<script>
import HabitHeader from '../components/HabitHeader.vue'

export default {
  components: {
    HabitHeader,
  },
  created() {},
};
</script>

<style scoped>
.contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: #fff;
  width: 720px;
  margin: 30px auto 0;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 672px;
  height: 100px;
  padding: 0 50px;
  margin-bottom: 14px;
  border-radius: 15px;
  text-align: left;
  background-color: violet;
}
.category {
  font-weight: bold;
  margin-bottom: 10px;
}
.withdrawal {
  width: 672px;
  color: crimson;
  text-align: right;
}
</style>