<template>
  <div class="습관설정" :style="{ backgroundColor: category.color }">
    <div class="뒤로가기">
      <div class="뒤로가기_버튼" @click="previousPage">
        <img src="@/assets/Previous-white.png" alt="뒤로가기" />
      </div>
      <div>
        {{ $route.params.id ? "습관 수정" : "습관 생성" }}
      </div>
    </div>
    <div class="습관내용_박스">
      <div class="습관내용">
        <div class="습관종류" :style="{ color: category.color }">
          {{ category.name }}
        </div>
        <div class="습관명_박스">
          <div class="습관명" 
          :contenteditable="true"
          @input="inputHabitName" 
          @focus="placeholder = ''" 
          @blur="placeholder = '습관명을 입력해주세요.'">
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
      placeholder: "습관을 입력해주세요.",
    }
  },
  methods: {
    previousPage() {
      this.$router.go(-1);
    },
    inputHabitName(event) {
      let newHabit = event.currentTarget.innerText
      if(newHabit.length > 11) {
        alert('최대 글자수를 초과했습니다.')
        newHabit = newHabit.substring(0, 11)
      }
      // console.log(newHabit)
      this.$emit('editHabitName', newHabit);
    }
  },
  
};
</script>

<style scoped>
input::placeholder {
  color: #fff;
}
.습관설정 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 0px 0px 30px 30px;
}
.뒤로가기 {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
.뒤로가기 div {
  display: flex;
  align-items: center;
  height: 100%;
}
.뒤로가기 img {
  width: 26px;
  height: 26px;
}
.뒤로가기 div:first-child {
  cursor: pointer;
}

.습관내용_박스 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 130px;
  padding: 0px 20px;
}
.습관내용 {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 10px;
  width: max-content;
}
.습관종류 {
  display: flex;
  justify-content: center;
  width: max-content;
  min-width: 80px;
  height: 40px;
  line-height: 40px;
  padding: 0px 10px;
  background: #fff;
  opacity: 50%;
  border-radius: 30px;
  font-family: Noto Sans KR;
  font-size: 20px;
}
.습관명_박스 {
  display: flex;
  height: 30px;
}
.습관명 {
  width: max-content;
  min-width: 30px;
  overflow: hidden;
  font-size: 20px;
  color: #fff;
  border-bottom: 2px solid #fff;
  outline: none;
  overflow: hidden;
}
.습관명_수정_아이콘 img {
  height: 30px;
  width: 30px;
}

.습관이미지_박스 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10px;
}

.습관_아이콘 {
  width: 80px;
  height: 80px;
}

.글자편집_이미지박스 {
  width: 52px;
  height: 52px;
  display: flex;
  flex-flow: column-reverse;
}

</style>