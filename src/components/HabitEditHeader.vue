<template>
  <div class="상단메뉴_박스" :style="{ backgroundColor: '#' + category.color }">
    <div>
      <div class="뒤로가기_박스">
        <div class="뒤로가기_버튼" @click="previousPage">
          <img src="@/assets/Previous-white.png" alt="뒤로가기">
        </div>
        <div>
          습관 수정
        </div>
      </div>
    </div>
    <div>
      <div class="습관정보_박스">
        <div class="습관_정보">
          <div class="습관종류" :style="{ color: '#' + category.color }">{{ categoryName }}</div>
          <div class="습관명_박스">
            <div class="습관명" :contenteditable="contenteditable" v-html="objective"
            @input ="editHabitName($event.target.innerHTML)">
            </div>
            <div class="습관명_수정_아이콘">
              <img src="@/assets/img_edit_text.png" />
            </div>
          </div>
        </div>
        <div class="습관이미지_박스">
          <img class="습관_아이콘" :src="habitIcon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["habitItem"],
  data() {
    return { 
      category: null, 
      objective: null,
      contenteditable: true
    };
  },
  computed: {
    habitIcon() {
      return require(`@/assets/habitIcon/img_habit_${this.category.imgUrl}.png`);
    },
    categoryName() {
      return this.category.name
    }
  },
  methods: {
    previousPage() {
      this.$router.go(-1)
    },
    editHabitName(value) {
      if(value.length > 12) {
        return
      } else {
        this.objective = value
      }
    },
  },
  created() {
    if(this.habitItem) {
      this.category = this.$store.state.habitCategory[this.habitItem.category]
      this.objective = this.habitItem.objective
    } else {
      this.category = this.$store.state.habitCategory[this.$route.params.category]
      this.objective = "습관명을 입력해주세요."
    }
  },
};
</script>

<style scoped>
.상단메뉴_박스 {
  display: flex;
  flex-direction: column;
  height: 340px;
  border-radius: 0px 0px 0px 30px;
  margin-bottom: 20px;
}

.뒤로가기_박스 {
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100px;
  padding-left: 24px;
  color: #fff;
  font-size: 30px;
}
.뒤로가기_박스 div {
  display: flex;
  align-items: center;
  height: 100%;
}
.뒤로가기_박스 img {
  width: 26px;
  height: 26px;
}
.뒤로가기_박스 div:first-child  {
  cursor: pointer;
}

.상단메뉴_박스 > div:nth-child(2) {
  display: flex;
  justify-content: center;
  width: 100%;
}
.습관정보_박스 {
  display: flex;
  justify-content: space-between;
  width: 672px;
  height: 210px;
  padding: 0px 40px;
}
.습관_정보 {
  display: flex;
  flex-flow: column;
  align-content: flex-start;
  gap: 10px;
  width: max-content;
}
.습관종류 {
  background: #fff;
  opacity: 50%;
  border-radius: 30px;
  font-family: Noto Sans KR;
  font-size: 26px;
  width: 100px;
  height: 50px;
  line-height: 50px;
}
.습관명_박스 {
  display: flex;
  flex-flow: row;
  text-align: left;
  height: 52px;
  line-height: 52px;
  font-size: 36px;
}
.습관명 {
  color: #fff;
  border-bottom: 2px solid #fff;
  outline: none;
  overflow: hidden;
}
/* .습관명 input[type=text] {
  max-width: 300px;


  border-bottom: 2px solid #fff;
  color: #fff;

} */
.습관명_수정_아이콘 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.습관이미지_박스 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.습관_아이콘 {
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