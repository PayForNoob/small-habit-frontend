<template>
  <div class="상단메뉴_박스">
    <div class="뒤로가기_박스">
      <button class="뒤로가기_글씨" @click="clickBackPage">◁ 습관수정</button>
    </div>
    <div class="습관및이미지_박스">
      <div class="습관_박스">
        <div class="습관종류">{{ categoryName }}</div>
        <select class="습관종류" v-model="selected">
          <option disabled value="">{{ categoryName }}</option>
          <option>{{ categoryName }}</option>
          <option>B</option>
          <option>C</option>
        </select>
        <div class="습관명_박스">
          <div class="습관명" placeholder="ddasda" contentEditable="true">
            {{ habitItems.objective }}
          </div>
          <div class="글자편집_이미지박스">
            <img class="글자편집_이미지" src="@/assets/img_edit_text.png" />
          </div>
        </div>
      </div>
      <div class="습관이미지_박스">
        <img v-if="categoryName" class="습관_이미지" :src="habitImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "id", "habitItems", "SaveProps"],
  data() {
    return { categoryName: null, habitImgUrl: null };
  },
  methods: {
    clickBackPage() {
      this.$router.push({
        path: `/today`,
        params: {},
      });
    },
    async editSave() {
      if (this.SaveProps) {
        console.log("제목, 카테고리 저장");
        // try {
        //   await this.axios({
        //     method: "put",
        //     url: `/api/Objectives/${this.id}`,
        //     params: {},
        //     data: {
        //       category: "dasd",
        //       id: this.id,
        //       objective: this.habitItems.objective,
        //       schedule: "주간일정",
        //       userId: this.habitItems.userId,
        //     },
        //   });
        // } catch (err) {
        //   console.log(err);
        // }
      }
    },
  },
  computed: {
    habitImg() {
      console.log(1);
      return require(`@/assets/habitIcon/img_habit_${this.habitImgUrl}.png`);
    },
  },
  updated() {
    console.log("updated");
    this.editSave();

    switch (this.habitItems.category) {
      case 0:
        this.habitImgUrl = "exercise";
        this.categoryName = "운동";
        console.log(this.habitImgUrl);
        break;

      case 1:
        this.habitImgUrl = "hobby";
        this.categoryName = "취미";
        break;

      case 2:
        this.habitImgUrl = "reading";
        this.categoryName = "독서";
        break;

      case 3:
        this.habitImgUrl = "learning";
        this.categoryName = "학습";
        break;

      case 4:
        this.habitImgUrl = "money_management";
        this.categoryName = "자산관리";
        break;

      case 5:
        this.habitImgUrl = "business_life";
        this.categoryName = "회사생활";
        break;

      case 6:
        this.habitImgUrl = "time_for_me";
        this.categoryName = "나를 위한 시간";
        break;

      case 7:
        this.habitImgUrl = "lifestyle";
        this.categoryName = "생활습관";
        break;

      default:
        this.habitImgUrl = null;
        this.categoryName = null;
        break;
    }
  },
};
</script>

<style scoped>
.상단메뉴_박스 {
  height: 340px;
  background: #887de5;
  border-radius: 0px 0px 0px 30px;
  padding: 33px 66px 0 24px;
  margin-bottom: 20px;
}

.뒤로가기_박스 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  margin-bottom: 81px;
  /* width: 120px; */
}

.뒤로가기_글씨 {
  background: #887de5;
  color: #e2e2e2;
}
.뒤로가기_글씨:hover {
  background: #887de5;
  color: #e5d1ee;
  cursor: pointer;
}
.습관및이미지_박스 {
  display: flex;
  flex-flow: row;
  padding: 0 0 0 40px;
}

.습관_박스 {
  display: flex;
  flex-flow: column;
  width: 300px;
}

.습관종류 {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 50px;
  color: #887de5;
  width: fit-content;
  text-align: center;
  /* identical to box height */
  height: 50px;
  padding: 0 26px;
  cursor: pointer;
}

.습관명_박스 {
  display: flex;
  flex-flow: row;
  text-align: left;
  width: auto;
}

.습관명 {
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  border-bottom: 2px solid #ffffff;
  /* text-decoration: underline; */
  color: #e2e2e2;
  min-width: 50px;
  height: 52px;
  outline: none;

  background-color: #887de5;
}

.습관이미지_박스 {
  width: 300px;
  display: flex;
  flex-flow: row-reverse;
  margin-top: 32px;
}

.습관_이미지 {
  width: 160px;
  height: 160px;
}

.글자편집_이미지박스 {
  width: 52px;
  height: 52px;
  display: flex;
  flex-flow: column-reverse;
}

.글자편집_이미지 {
  width: 30px;
  height: 30px;
  /* margin-left: 5px;
  margin-bottom: 8px; */
}

.흰배경_박스 {
  margin: 0px 24px 10px 24px;
  min-height: 30px;
  background-color: #ffffff;
  border-radius: 20px;
}
</style>