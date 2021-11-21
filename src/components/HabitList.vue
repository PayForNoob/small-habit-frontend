<template>
  <div class="습관카드_상위박스">
    <div
      class="습관카드_박스 습관카드_미달성"
      v-if="habitItem.activated === false"
    >
      <div class="습관카드_내용카드">
        <img
          @click="recieveHabitItem.activated = true"
          src="@/assets/img_check_unexecuted.png"
        />
        <div class="내용카드_습관이름">
          [{{ habitItem.category }}] {{ habitItem.objective }}
        </div>
        <img src="@/assets/img_edit.png" class="수정버튼" />
      </div>
    </div>
    <div
      class="습관카드_박스"
      :class="backgroundColor"
      v-if="habitItem.activated === true"
    >
      <div class="습관카드_내용카드">
        <img @click="recieveHabitItem.activated = false" :src="checkBtn" />
        <div class="내용카드_습관이름">
          [{{ categoryName }}]{{ habitItem.objective }}
        </div>
        <img class="수정버튼" src="@/assets/img_edit.png" />
      </div>
      <div class="내용카드_구분선"></div>
      <div class="달성목표_실천박스">
        <div class="내용카드_실천횟수">{{ 0 }}회째 실천중!!!</div>
        <img v-for="num in 3" :key="num" src="@/assets/img_clapping.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["habitItem"],
  data() {
    return {
      recieveHabitItem: this.habitItem,
      categoryName: null,
      checkBtnUrl: null,
    };
  },
  computed: {
    backgroundColor() {
      return "습관카드_달성색상" + this.habitItem.category;
    },
    checkBtn() {
      return require(`@/assets/img_check_${this.checkBtnUrl}.png`);
    },
  },
  created() {
    switch (this.habitItem.category) {
      case 0:
        this.checkBtnUrl = "exercise";
        this.categoryName = "운동";
        break;

      case 1:
        this.checkBtnUrl = "hobby";
        this.categoryName = "취미";
        break;

      case 2:
        this.checkBtnUrl = "reading";
        this.categoryName = "독서";
        break;

      case 3:
        this.checkBtnUrl = "learning";
        this.categoryName = "학습";
        break;

      case 4:
        this.checkBtnUrl = "money_management";
        this.categoryName = "자산관리";
        break;

      case 5:
        this.checkBtnUrl = "business_life";
        this.categoryName = "회사생활";
        break;

      case 6:
        this.checkBtnUrl = "time_for_me";
        this.categoryName = "나를 위한 시간";
        break;

      case 7:
        this.checkBtnUrl = "lifestyle";
        this.categoryName = "생활습관";
        break;

      default:
        this.checkBtnUrl = null;
        this.categoryName = null;
        break;
    }
  },
};
</script>

<style scoped>
.습관카드_달성색상0 {
  background: #b8b1f0;
}
.습관카드_달성색상1 {
  background: #eaa2a6;
}
.습관카드_달성색상2 {
  background: #a8ddad;
}
.습관카드_달성색상3 {
  background: #ffd98e;
}
.습관카드_달성색상4 {
  background: #afc2ff;
}
.습관카드_달성색상5 {
  background: #95dfd2;
}
.습관카드_달성색상6 {
  background: #ffbaaa;
}
.습관카드_달성색상7 {
  background: #ffb6f2;
}
.습관카드_상위박스 {
  width: max-content;
  height: max-content;
}
.습관카드_박스 {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  width: 672px;
  height: 160px;
  padding: 0 5px 0 20px;
  margin-bottom: 10px;
  border-radius: 15px;
}
.습관카드_미달성 {
  background: #dddddd;
  height: 100px;
  padding: 0 5px 0 20px;
  font-weight: bold;
}
.wraping {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.습관카드_내용카드 {
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 54px;
  border-radius: 5px 5px 0% 0%;
}
img.수정버튼 {
  margin: 0px;
  opacity: 40%;
}
.습관카드_미달성 img {
  margin: 0;
}
.습관카드_미달성 .습관카드_내용카드 {
  height: 50px;
}
.달성목표_실천박스 {
  display: flex;
  flex-flow: row;
  height: 54px;
  align-items: center;
  border-radius: 0% 0% 5px 5px;
}
.달성목표_실천박스 img {
  width: 30px;
  height: 30px;
}
.내용카드_습관이름 {
  font-weight: bold;
  font-size: 24px;
  line-height: 54px;
  flex-grow: 1;
  color: #000000;
  text-align: left;
  margin-left: 30px;
}
.습관카드_미달성 .내용카드_습관이름 {
  line-height: 50px;
}
.내용카드_실천횟수 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #666666;
  flex-grow: 0;

  margin: 0 18px 0 80px;
}
.check아이콘 {
  width: 50px;
  height: 50px;
}

.내용카드_구분선 {
  border-top: 2px solid #fff;
  width: 517px;
  height: 0;
  margin-left: 80px;
}
img {
  width: 50px;
  height: 50px;
}
</style>