<template>
  <div class="컨테이너">
    <Header class="header"></Header>
    <div class="내용">
      <div class="유저정보_컨테이너">
        <div
          class="유저정보_내용"
          :style="{ backgroundColor: nicknamesBackgroundColor }"
        >
          <div class="닉네임">닉네임</div>
          <div>
            {{ user.nickname }}
          </div>
        </div>
        <div
          class="유저정보_내용"
          :style="{ backgroundColor: emailsBackgroundColor }"
        >
          <div class="이메일">이메일</div>
          <div>
            {{ user.email }}
          </div>
        </div>
      </div>
      <div class="유저삭제버튼" @click="activeConfirm" v-if="!confirm">
        탈퇴하기
      </div>
      <base-modal v-if="confirm" class="재확인">
        <template v-slot:header>
          <div class="재확인_머릿말">정말 탈퇴하시겠습니까?</div>
        </template>
        <template v-slot:contents>
          <div class="재확인_내용">
            <p>탈퇴하실 경우 회원님의 모든 정보가</p>
            <p>사라지고 복구할 수 없습니다.</p>
          </div>
        </template>
        <template v-slot:confirm>
          <div class="이중버튼">
            <div class="이중버튼_좌측" @click="authWithdrawal">확인</div>
            <div class="이중버튼_우측" @click="activeConfirm">취소</div>
          </div>
        </template>
      </base-modal>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BaseModal from "@/components/BaseModal.vue";

export default {
  components: {
    Header,
    BaseModal,
  },
  data() {
    return {
      user: this.$store.state.user,
      backgroundColor: [
        "#B8B1F0",
        "#EAA2A6",
        "#A8DDAD",
        "#FFD98E",
        "#AFC2FF",
        "#95DFD2",
        "#FFBAAA",
        "#FFB6F2",
      ],
      nicknamesBackgroundColor: "#000",
      emailsBackgroundColor: "#000",
      confirm: false,
    };
  },
  methods: {
    activeConfirm() {
      this.confirm = !this.confirm;
    },
    async authWithdrawal() {
      try {
        await this.axios({
          method: "delete",
          url: "/api/withdrawal",
        });
        // this.$store.state.user = null
        location.href = "/main";
      } catch (err) {
        console.log(err.data);
      }
    },
  },
  created() {
    let nickname = Math.floor(Math.random() * 8);
    let email = Math.floor(Math.random() * 8);

    while (nickname == email) {
      email = Math.floor(Math.random() * 8);
    }
    this.nicknamesBackgroundColor = this.backgroundColor[nickname];
    this.emailsBackgroundColor = this.backgroundColor[email];
    // console.log('tag', email, nickname)
  },
};
</script>

<style scoped>
.컨테이너 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.내용 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 720px;
  height: calc(100vh - 150px);
}
.유저정보_컨테이너 {
  display: flex;
  flex-direction: column;
  padding: 30px 24px 0px;
  width: 100%;
}
.유저정보_내용 {
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
.닉네임,
.이메일 {
  margin-bottom: 10px;
  font-weight: bold;
}
.유저삭제버튼 {
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #ff5757;
  color: #fff;
  font-size: 20px;
}
@keyframes modal {
  from {
    bottom: -360px;
    opacity: 0;
  }

  to {
    bottom: 0px;
    opacity: 100%;
  }
}
.재확인 {
  position: absolute;
  bottom: 0px;
  animation-name: modal;
  animation-duration: 0.25s;
  background-color: #fff;
}
.재확인_머릿말 {
  font-size: 30px;
  font-weight: bold;
}
.재확인_내용 {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
}
.이중버튼 {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.이중버튼 div {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
}
.이중버튼_좌측 {
  cursor: pointer;
  background-color: #ff545e;
}
.이중버튼_우측 {
  cursor: pointer;
  background-color: #5e5e5e;
}
</style>