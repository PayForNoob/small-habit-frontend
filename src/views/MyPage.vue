<template>
  <div>
    <habit-header class="header"></habit-header>
    <div class="container">
      <div class="userInfo">
        <div class="infoBox" :style="{ backgroundColor: nicknamesBackgroundColor }">
          <div class="nickname">
            닉네임
          </div>
          <div>
            {{ user.nickname }}
          </div>
        </div>
        <div class="infoBox" :style="{ backgroundColor: emailsBackgroundColor }">
          <div class="email">
            이메일
          </div>
          <div>
            {{ user.email }}
          </div>
        </div>
      </div>
      <div class="withdrawal_btn" @click="activeConfirm" v-if="!confirm">
        탈퇴하기
      </div>
      <div class="bg" v-if="confirm"></div>
      <habit-modal v-if="confirm" class="confirm">
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
            <div class="button_left" @click="authWithdrawal">확인</div>
            <div class="button_right" @click="activeConfirm">취소</div>
          </div> 
        </template>
      </habit-modal>
    </div>

  </div>
</template>

<script>
import HabitHeader from '../components/HabitHeader.vue'
import HabitModal from '@/components/HabitModal.vue'

export default {
  components: {
    HabitHeader,
    HabitModal,

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
      confirm: false
    }
  },
  methods: {
    activeConfirm() {
      this.confirm = !this.confirm
    },
    async authWithdrawal() {
      try {
        await this.axios({
          method: 'delete',
          url: '/api/withdrawal',
        })
        // this.$store.state.user = null
        location.href = '/main'
      }
      catch (err) {
        console.log(err.data);
      } 
    }
    
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
  justify-content: space-between;
  align-items: center;
  width: 720px;
  height: calc(100vh - 150px);
  margin: 0 auto;
}
.userInfo {
  display: flex;
  flex-direction: column;
  padding: 30px 24px 0px;
  width: 100%;
}
.infoBox {
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
  height: 60px;
  line-height: 60px;
  margin-bottom: 4px;
  background-color: #FF5757;
  color: #fff;
  font-size: 20px;
}
@keyframes modal {

  from { 
    margin-top: 360px; 
    opacity: 0;
  }

  to {
    margin-top: 0px; 
    opacity: 100%;
  }

}
.confirm {
  animation-name: modal;
  animation-duration: 1.5s;
  background-color: #fff;
  margin-bottom: 4px;
  z-index: 10000;
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
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
}
.button_left {
  background-color: #ff545e;
}
.button_right {
  background-color: #5e5e5e;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 50%;
}
</style>