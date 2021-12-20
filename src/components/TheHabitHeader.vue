<template>
  <div class="컨테이너" :style="{ backgroundColor: category.color }">
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
          <div class="습관종류" :style="{ color: category.color }">
            {{ category.name }}
          </div>
          <div class="습관명_박스">
            <div class="습관명" contenteditable="true" ref="habitName" 
            
            @input="inputHabitName" 
            @focus="this.placeholder = ''" 
            @blur="this.placeholder = '습관명을 입력해주세요.'">
              {{
                habitName ? habitName : placeholder
              }}
            </div>
            <div class="습관명_수정_아이콘">
              <img src="@/assets/img_edit_text.png" />
            </div>
          </div>
        </div>
        <div class="습관이미지_박스" v-if="category && category.imgUrl">
          <img class="습관_아이콘" :src="require(`@/assets/habitIcon/img_habit_${category.imgUrl}.png`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    habitName: {
      type: String,
    }, 
    category: {
      type: Object,
      required: true
    }
    },
  data() {
    return {
      placeholder: "습관명을 입력해주세요.",
    }
  },
  methods: {
    previousPage() {
      this.$router.go(-1);
    },
    inputHabitName() {
      let newHabit = this.$refs.habitName.innerHTML.replace('&nbsp;', ' ')
      console.log(newHabit)
      this.$emit('editHabitName', newHabit);
    }
  },
};
</script>

<style scoped>
.컨테이너 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 340px;
  border-radius: 0px 0px 30px 30px;
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
.뒤로가기_박스 div:first-child {
  cursor: pointer;
}

.컨테이너 > div:nth-child(2) {
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
  align-content: flex-start;
  gap: 10px;
  width: max-content;
}
.습관종류 {
  min-width: 120px;
  min-height: 50px;
  padding: 0px 20px;
  margin-bottom: 10px;
  background: #fff;
  opacity: 50%;
  border-radius: 30px;
  font-family: Noto Sans KR;
  font-size: 26px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
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
  min-width: 30px;
  color: #fff;
  border-bottom: 2px solid #fff;
  outline: none;
  overflow: hidden;
}
.습관명_수정_아이콘 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.습관명_수정_아이콘 img {
  height: 26px;
  width: 26px;
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

</style>