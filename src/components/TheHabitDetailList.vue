<template>
  <div class="컨테이너">
    <div class="내용">
      <div class="세부습관_머릿글">
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
      <div class="스크롤_영역">
        <div class="세부습관_목록_박스">
          <div
            class="세부습관_목록"
            v-for="(detailHabitItem, index) in detailHabitItems"
            :key="index"
          >
            <div class="세부습관_이름">
              <img src="@/assets/dot.png" alt="" />
              <div contenteditable="true" @input="editDetailHabit(index, $event.currentTarget.innerHTML)">
                {{ detailHabitItem.objective ? detailHabitItem.objective : "세부습관을 입력해주세요."  }}
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
  props: ["detailHabitItems", "category"],
  data() {
    return {
      detailHabitItemsPlus: [],
    };
  },
  methods: {
    addDetailHabit() {
      this.$emit('addDetailHabitItem')
    },
    editDetailHabit(ind, newValue) {
      this.$emit('editDetailHabitItem', ind, newValue);
    },
    deleteDetailHabit(ind) {
      this.$emit('deleteDetailHabitItem', ind)
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
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
.컨테이너 {
  display: flex;
  flex-flow: column;
  align-items: center;
  line-height: 50px;
}
.내용 {
  display: flex;
  flex-flow: column;
  justify-content: start;
  gap: 20px;
  width: 672px;
  min-height: 110px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 26px;
}
/* 세부습관 머릿글 */
.세부습관_머릿글 {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 20px;
}
.세부습관_머릿글 > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.추가버튼_이미지 {
  height: 50px;
  width: 50px;
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
  max-height: 220px;
  padding-left: 20px;
  padding-right: 10px;
  margin: 0 10px;
  overflow: scroll;
}
.세부습관_목록_박스 {
  display: flex;
  flex-flow: column;
  gap: 10px;
}
.세부습관_목록 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 452px;
  height: 50px;
  line-height: 50px;
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