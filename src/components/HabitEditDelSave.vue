<template>
  <div>
    <div class="삭제저장_박스" v-if="!deleteClick">
      <div class="삭제_박스" @click="DeleteClick">삭제</div>
      <div class="저장_박스" @click="Edit">저장</div>
    </div>
    <div class="bg" v-if="deleteClick"></div>
    <habit-modal v-if="deleteClick" class="confirm">
      <template v-slot:header>
        <div class="confirm_header">삭제 하시겠습니까?</div>
      </template>
      <template v-slot:contents>
        <div class="confirm_contents">
          <p>삭제하실 경우 모든 습관 정보가가</p>
          <p>사라지고 복구할 수 없습니다.</p>
        </div>
      </template>
      <template v-slot:confirm>
        <div class="dual_button">
          <div class="button_left" @click="deleteObjective">확인</div>
          <div class="button_right" @click="DeleteClick">취소</div>
        </div>
      </template>
    </habit-modal>
  </div>
</template>

<script>
import HabitModal from "@/components/HabitModal.vue";
export default {
  components: {
    HabitModal,
  },
  data() {
    return {
      deleteClick: false,
    };
  },
  methods: {
    async deleteObjective() {
      try {
        await this.axios({
          method: 'delete',
          url: `/api/objective/${this.$route.params.id}`,
        })
        console.log('성공')
        location.href = '/today'
      }
      catch (err) {
        console.log(err.data);
      } 
    },
    DeleteClick() {
      this.deleteClick = !this.deleteClick;
    },
    Edit() {
      console.log("Edit함수");
      this.$emit("EditSave");
    },
  },
};
</script>

<style scope>
.삭제저장_박스 {
  position: fixed;
  bottom: 0%;
  display: flex;
  flex-flow: row;
  height: 60px;
  line-height: 60px;
  margin-top: auto;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;
}
.삭제_박스 {
  width: 360px;
  background: #ff5757;
  cursor: pointer;
}
.저장_박스 {
  width: 360px;
  background: #887de5;
  cursor: pointer;
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
.confirm {
  position: absolute;
  bottom: 0px;
  animation-name: modal;
  animation-duration: 0.25s;
  background-color: #fff;
  z-index: 10000;
}
@keyframes bg {
  from {
    opacity: 0;
  }

  to {
    opacity: 50%;
  }
}
.bg {
  animation-name: bg;
  animation-duration: 0.75s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 50%;
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
  cursor: pointer;
  background-color: #ff545e;
}
.button_right {
  cursor: pointer;
  background-color: #5e5e5e;
}
</style>