<template>
  <div class="컨테이너">
    <Header class="header"></Header>
    <pulse-loader v-if="loading == true" class="로딩중"></pulse-loader>
    <div v-if="loading == false" class="컨테이너_내용">
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
      <div class="탈퇴_버튼" @click="activeConfirm" v-if="!confirm">
        탈퇴하기
      </div>
      <base-modal v-if="confirm" class="모달">
        <template v-slot:header>
          <div class="모달_헤더">정말 탈퇴하시겠습니까?</div>
        </template>
        <template v-slot:contents>
          <div class="모달_내용">
            <p>탈퇴하실 경우 회원님의 모든 정보가</p>
            <p>사라지고 복구할 수 없습니다.</p>
          </div>
        </template>
        <template v-slot:confirm>
          <div class="모달_버튼">
            <div class="모달_확인버튼" @click="authWithdrawal">확인</div>
            <div class="모달_삭제버튼" @click="activeConfirm">취소</div>
          </div>
        </template>
      </base-modal>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BaseModal from "@/components/BaseModal.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    Header,
    BaseModal,
    PulseLoader
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
  computed: {
    loading() {
      return this.$store.state.loading;
    },
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
.유저정보_컨테이너 {
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
  padding-top: 20px;
}
.유저정보_내용 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  height: 100px;
  padding: 0px 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  color: #fff;
  font-size: 16px;
}
.유저정보_내용 div {
  width: 100%;
}
.닉네임, .이메일 {
  font-weight: bold;
}
.탈퇴_버튼 {
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #ff5757;
  color: #fff;
  font-size: 16px;
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
.모달 {
  position: absolute;
  bottom: 0px;
  animation-name: modal;
  animation-duration: 0.25s;
  background-color: #fff;
}
.모달_헤더 {
  font-size: 30px;
  font-weight: bold;
}
.모달_내용 {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
}
.모달_버튼 {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.모달_버튼 div {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
}
.모달_확인버튼 {
  cursor: pointer;
  background-color: #ff545e;
}
.모달_삭제버튼 {
  cursor: pointer;
  background-color: #5e5e5e;
}
</style>