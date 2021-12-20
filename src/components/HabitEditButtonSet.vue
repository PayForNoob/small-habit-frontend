<template>
  <div>
    <!-- 습관 수정 -->
    <div class="버튼_박스" v-if="$route.params.id" >
      <div class="삭제_버튼" @click="confirm = !confirm">삭제</div>
      <div class="저장_버튼" @click="Edit" :style="{ backgroundColor: category.color }">저장</div>
    </div>
    <base-modal v-if="confirm && $route.params.id" class="confirm">
      <template v-slot:header>
        <div class="모달_헤더">삭제 하시겠습니까?</div>
      </template>
      <template v-slot:contents>
        <div class="모달_내용">
          <p>삭제하실 경우 모든 습관 정보가</p>
          <p>사라지고 복구할 수 없습니다.</p>
        </div>
      </template>
      <template v-slot:confirm>
        <div class="모달_버튼">
          <div class="삭제_버튼" @click="deleteObjective">확인</div>
          <div class="취소_버튼" @click="confirm = !confirm">취소</div>
        </div>
      </template>
    </base-modal>

    <!-- 습관 생성-내용 있음 -->
    <div class="버튼_박스" v-if="$route.params.category">
      <div class="모달_완료버튼" @click="Edit" :style="{ backgroundColor: category.color }" >완료</div>
    </div>
    <base-modal v-if="edit && $route.params.category">
      <template v-slot:header >
        <div class="모달_헤더">
          <img src="@/assets/confetti.png" alt="">
          <div>습관 생성을 완료했어요!</div>
          <img src="@/assets/confetti.png" alt="">
        </div>
      </template>
      <template v-slot:contents>
        <div class="모달_내용">
          <p>습관 생성이 완료되었습니다.</p>
          <p>꾸준한 실천을 응원하겠습니다.</p>
        </div>
      </template>
      <template v-slot:confirm>
        <div class="완료버튼" :style="{ backgroundColor: category.color }" @click="$router.go(-2)">
          확인
        </div>
      </template>
    </base-modal>
    <!-- 습관 생성-내용 없음 -->
    <base-modal v-if="confirm && $route.params.category">
      <template v-slot:header >
        <div class="모달_헤더">
          <div>습관 생성에 실패했습니다.</div>
        </div>
      </template>
      <template v-slot:contents>
        <div class="모달_내용">
          <p>작성하지 않은 내용이 있습니다.</p>
          <p>마저 작성해주시기 바랍니다.</p>
        </div>
      </template>
      <template v-slot:confirm>
        <div class="완료버튼" :style="{ backgroundColor: category.color }" @click="confirm = !confirm">
          확인
        </div>
      </template>
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";

export default {
  components: {
    BaseModal,
  },
  data() {
    return {
      confirm: false
    }
  },
  props: ["habitItem", "category", "edit"],
  methods: {
    async deleteObjective() {
      try {
        await this.axios({
          method: 'delete',
          url: `/api/objective/${this.$route.params.id}`,
        })
        // console.log('성공')
        this.$router.go(-1)
      }
      catch (err) {
        console.log(err.data);
      } 
    },
    Edit() {
      if(this.habitItem.objective && this.habitItem.schedule[0]) {
        this.$emit("EditSave");
      } else {
        this.confirm = !this.confirm
      }
      
    },
  },
};
</script>
<style scope>
.버튼_박스 {
  position: fixed;
  bottom: 0%;
  display: flex;
  flex-flow: row;
  width: 720px;
  height: 60px;
  line-height: 60px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
}
.삭제_버튼 {
  width: 50%;
  background: #ff5757;
  cursor: pointer;
}
.저장_버튼 {
  width: 50%;
  cursor: pointer;
}
.모달_완료버튼 {
  width: 100%;
  cursor: pointer;
}
.모달_헤더 {
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
}
.모달_헤더 img{
  width: 50px;
  height: 45px;
}
.모달_내용 {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
  align-items: center;
}
.모달_버튼 {
  display: flex;
  justify-content: space-evenly;
  font-size: 20px;
  width: 100%;
}
.완료버튼 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
.모달_버튼 div {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
  text-align: center;
}
.삭제_버튼 {
  cursor: pointer;
  background-color: #ff545e;
}
.취소_버튼 {
  cursor: pointer;
  background-color: #5e5e5e;
}
</style>