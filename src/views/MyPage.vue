<template>
  <div>
    <habit-header class="header"></habit-header>
    <div class="container" v-if="!confirm">
      <div class="userInfo" :style="{ backgroundColor: nicknamesBackgroundColor }">
        <div class="nickname">
          닉네임
        </div>
        <div>
          {{ user.nickname }}
        </div>
      </div>
      <div class="userInfo" :style="{ backgroundColor: emailsBackgroundColor }">
        <div class="email">
          이메일
        </div>
        <div>
          {{ user.email }}
        </div>
      </div>
      <div class="withdrawal_btn" @click="activeConfirm">
        탈퇴하기
      </div>
    </div>
    <habit-confirm v-if="confirm">
      <template v-slot:header>
        <div class="confirm_header">정말 탈퇴하시겠습니까?</div>
      </template>
      <template v-slot:contents>
        <div class="confirm_contents">
          <p>탈퇴하실 경우 회원님의 모든 정보가</p>
          <p>사라지고 복구할 수 없습니다.</p>
        </div>
      </template>
      <template v-slot:confirm>
        <div class="dual_button">
          <div class="button_left">확인</div>
          <div class="button_right" @click="activeConfirm">취소</div>
        </div>
      </template>
    </habit-confirm>
  </div>
</template>

<script>
import HabitHeader from '../components/HabitHeader.vue'
import HabitConfirm from '@/components/HabitConfirm.vue'

export default {
  components: {
    HabitHeader,
    HabitConfirm,

  },
  data() {
    return {
      user: this.$store.state.user,
      backgroundColor: [
        "#B8B1F0", "#EAA2A6", "#A8DDAD", "#FFD98E", 
        "#AFC2FF", "#95DFD2", "#FFBAAA", "#FFB6F2"
      ],
      nicknamesBackgroundColor: "#000",
      emailsBackgroundColor: "#000",
      confirm: true
    }
  },
  methods: {
    activeConfirm() {
      this.confirm = !this.confirm
    },
  },
  created() {
    let nickname = Math.floor(Math.random() * 8)
    let email = Math.floor(Math.random() * 8)

    while(nickname == email) {
      email = Math.floor(Math.random() * 8)
    }
    this.nicknamesBackgroundColor = this.backgroundColor[nickname]
    this.emailsBackgroundColor = this.backgroundColor[email]
    console.log('tag', email, nickname)
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 672px;
  padding-top: 30px;
  margin: 0 auto;
}
.userInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100px;
  padding-left: 50px;
  margin-bottom: 10px;
  background-color: crimson;
  border-radius: 15px;
  color: #fff;
  font-size: 20px;
}
.nickname, .email {
  margin-bottom: 10px;
  font-weight: bold;
}
.withdrawal_btn {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #FF5757;
  border-radius: 100px;
  color: #fff;
  font-size: 20px;
}

.confirm_header {
  font-size: 30px;
  font-weight: bold;
}
.confirm_contents {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
}
.dual_button {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.dual_button div {
  width: 25%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  border-radius: 100px;
}
.button_left {
  background-color: #ff545e;
}
.button_right {
  background-color: #5e5e5e;
}
</style>