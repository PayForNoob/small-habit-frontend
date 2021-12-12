<template>
  <div class="상단메뉴_박스" :style="{ backgroundColor: colorCode }">
    <div>
      <div class="뒤로가기_박스">
        <div class="뒤로가기_버튼" @click="previousPage">
          <img src="@/assets/Previous-white.png" alt="뒤로가기" />
        </div>
        <div>
          {{ $route.params.id ? "습관 수정" : "습관 생성" }}
        </div>
      </div>
    </div>
    <div>
      <div class="습관정보_박스">
        <div class="습관_정보">
          <div class="습관종류" :style="{ color: colorCode }">
            {{ categoryName }}
          </div>
          <div class="습관명_박스">
            <div class="습관명" contenteditable="true">
              {{
                habitItem.objective
                  ? habitItem.objective
                  : "습관명을 입력해주세요."
              }}
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
    };
  },
  computed: {
    habitIcon() {
      return require(`@/assets/habitIcon/img_habit_${this.category.imgUrl}.png`);
    },
    categoryName() {
      return this.category.name;
    },
    colorCode() {
      return this.category.color;
    },
  },
  methods: {
    previousPage() {
      this.$router.go(-1);
    },
    editHabitName(value) {
      if (value.length > 12) {
        return;
      } else {
        this.objective = value;
      }
    },
  },
  created() {
    if (this.habitItem) {
      this.category = this.$store.state.habitCategory[this.habitItem.category];
      this.objective = this.habitItem.objective;
    } else {
      this.category =
        this.$store.state.habitCategory[this.$route.params.category];
      this.objective = "습관명을 입력해주세요.";
    }
  },
};
</script>

<style scoped>
.상단메뉴_박스 {
  display: flex;
  flex-direction: column;
  height: 29vw;
  padding-bottom: 2.5vw;
  max-height: 340px;
  border-radius: 0px 0px min(2vw, 30px) min(2vw, 30px);
  margin-bottom: min(2vw, 20px);
}

.뒤로가기_박스 {
  display: flex;
  align-items: center;
  gap: min(2.5vw, 30px);
  height: 8.5vw;
  max-height: 100px;
  padding-left: min(2vw, 24px);
  color: #fff;
  font-size: min(2vw, 25px);
}
.뒤로가기_박스 div {
  display: flex;
  align-items: center;
  height: 100%;
}
.뒤로가기_박스 img {
  width: 2vw;
  max-width: 26px;
  height: 2vw;
  max-height: 26px;
}
.뒤로가기_박스 div:first-child {
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
  width: 57vw;
  max-width: 672px;
  height: 18vw;
  max-height: 210px;
  padding: 0px min(3.5vw, 40px);
}
.습관_정보 {
  display: flex;
  flex-flow: column;
  align-content: flex-start;
  gap: min(1vw, 10px);
  width: max-content;
}
.습관종류 {
  background: #fff;
  opacity: 50%;
  border-radius: 30px;
  font-family: Noto Sans KR;
  font-size: min(2vw, 26px);
  width: min(8vw, 100px);
  height: min(4vw, 50px);
  line-height: min(4vw, 50px);
}
.습관명_박스 {
  display: flex;
  flex-flow: row;
  text-align: left;
  height: min(4.5vw, 52px);
  line-height: min(4.5vw, 52px);
  font-size: min(3vw, 36px);
}
.습관명 {
  min-width: 1vw;
  color: #fff;
  border-bottom: 0.4vw solid #fff;
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
.습관명_수정_아이콘 img {
  height: 2vw;
  max-height: 26px;
  width: 2vw;
  max-width: 26px;
}

.습관이미지_박스 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.습관_아이콘 {
  width: min(14vw, 160px);
  height: min(14vw, 160px);
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