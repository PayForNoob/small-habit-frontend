<template>
  <div class="세부습관설정">
    <div class="내용">
      <div class="세부습관">
        <div>
          <img src="@/assets/img_detail_point.png" />
          <div class="굵은글씨">세부습관</div>
        </div>
        <div
          class="추가버튼_이미지"
          :style="{ backgroundColor: category.color }"
          @click="addDetailHabit"
        >
          <img src="@/assets/add-detailHabit.png" alt="세부습관 추가 버튼" />
        </div>
      </div>
      <div 
      v-if="detailHabitItems[0]"
      class="스크롤_영역">
        <div class="세부습관_목록_박스">
          <div
            class="세부습관_목록"
            v-for="(detailHabitItem, index) in detailHabitItems"
            :key="index"
          >
            <div class="세부습관_이름">
              <img src="@/assets/dot.png" alt="" />
              <div contenteditable="true" 
              @input="editDetailHabit(index, $event.currentTarget.innerText)"
              @focus="placeholder = ''" 
              @blur="placeholder = '세부습관을 입력해주세요.'"              
              >
                {{ detailHabitItem.objective ? detailHabitItem.objective : placeholder  }}
              </div>
            </div>
            <img
              class="세부습관_삭제"
              src="@/assets/img_detail_del.png"
              @click="deleteDetailHabit(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailHabitItems: {
      type: Array
    },
    category: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      placeholder: "세부습관을 입력해주세요.",
    };
  },
  methods: {
    addDetailHabit() {
      this.$emit('addDetailHabitItem')
    },
    editDetailHabit(ind, newValue) {
      let newDetailHabit = newValue
      if(newDetailHabit.length > 11) {
        alert('최대 글자수를 초과했습니다.')
        newDetailHabit = newDetailHabit.substring(0, 11)
        event.currentTarget.innerHTML = newDetailHabit
      }
      // console.log(newDetailHabit)
      this.$emit('editDetailHabitItem', ind, newDetailHabit);
    },
    deleteDetailHabit(ind) {
      this.$emit('deleteDetailHabitItem', ind)
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb {
  background-color: #9b9b9b;
  border-radius: 5px;
}
img {
  width: 30px;
  height: 30px;
}
.굵은글씨 {
  font-weight: bold;
}
.세부습관설정 {
  padding: 0px 5px;
}
.내용 {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  min-height: 80px;
  max-height: 210px;
  padding-top: 25px;
  padding-bottom: 25px;  
  background-color: #ffffff;
  border-radius: 15px;
}
/* 세부습관 머릿글 */
.세부습관 {
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}
.세부습관 > div:first-child {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #000000;
}
.세부습관 > div:first-child img {
  width: 20px;
  height: 20px;
}
.추가버튼_이미지 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border-radius: 100%;
}
.추가버튼_이미지 img {
  width: 70%;
  height: 70%;
}

/* 세부습관 목록 */
.스크롤_영역 {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-height: calc(100% - 75px);
  overflow-y: auto;
}
.세부습관_목록_박스 {
  min-width: 250px;
  display: flex;
  flex-flow: column;
  gap: 8px;
}
.세부습관_목록 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.미작성 {
  opacity: 50%;
}
.세부습관_이름 {
  display: flex;
  align-items: center;
  gap: 20px;
}
.세부습관_이름 div {
  outline: none;
  min-width: 20px;
}
.세부습관_이름 img {
  width: 10px;
  height: 10px;
}
.세부습관_삭제 {
  height: 24px;
  width: 24px;
  cursor: pointer;
}
</style>