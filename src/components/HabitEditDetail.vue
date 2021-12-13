<template>
  <div class="container">
    <div class="contents">
      <div class="세부습관_머릿글">
        <div>
          <img src="@/assets/img_detail_point.png" />
          <div class="bold">세부습관</div>
        </div>
        <div
          class="추가버튼_이미지"
          :style="{ backgroundColor: categoryColor }"
          @click="emitToParent"
        >
          <img src="@/assets/add-detailHabit.png" alt="세부습관 추가 버튼" />
        </div>
      </div>
      <div class="스크롤_영역">
        <div class="세부습관_목록_박스">
          <div
            class="세부습관_목록"
            v-for="(detailHabitItem, index) in detailHabitItemsPlus"
            :key="index"
          >
            <div class="세부습관_이름 미작성">
              <img src="@/assets/dot.png" alt="" />
              <div contenteditable="true">세부습관을 작성해주세요.</div>
            </div>
            <img
              class="세부습관_삭제"
              src="@/assets/img_detail_del.png"
              @click="detailDel(index)"
            />
          </div>
          <div
            class="세부습관_목록"
            v-for="(detailHabitItem, index) in detailHabitItems"
            :key="index"
          >
            <div class="세부습관_이름">
              <img src="@/assets/dot.png" alt="" />
              <div contenteditable="true">
                {{ detailHabitItem.objective }}
              </div>
            </div>
            <img
              class="세부습관_삭제"
              src="@/assets/img_detail_del.png"
              @click="SavedDetailDel(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detailHabitItems", "SaveProps", "id", "categoryColor"],
  data() {
    return {
      detailHabitItemsPlus: [],
      text: [],
    };
  },
  methods: {
    async editSave() {
      if (this.SaveProps) {
        console.log("세부내역 저장");
        // console.log(this.detailHabitItems[0].id);
        // console.log(this.detailHabitItems.length);
        // console.log(this.detailHabitItemsPlus.length);
        for (
          let i = this.detailHabitItems[0].id + this.detailHabitItems.length;
          i <
          this.detailHabitItems[0].id +
            this.detailHabitItems.length +
            this.detailHabitItemsPlus.length;
          i++
        ) {
          console.log(i);
          // try {
          //   await this.axios({
          //     method: "post",
          //     url: `/api/detailedObjectives/${this.i}`,
          //     params: {},
          //     data: {
          //       objective: "dasd",
          //       objectiveId: this.id,
          //       userId: this.detailHabitItems.userId,
          //     },
          //   });
          // } catch (err) {
          //   console.log(err);
          // }
        }
      }
    },
    emitToParent() {
      this.detailHabitItemsPlus.push("");
      console.log(this.detailHabitItemsPlus);
      this.$emit("emitToParent", this.detailHabitItemsPlus);
    },
    detailPlus() {},
    async SavedDetailDel(index) {
      try {
        await this.axios({
          method: "DELETE",
          url: `/api/detailedObjectives/${this.detailHabitItems[index].id}`,
          params: {},
        });
      } catch (err) {
        console.log(err);
      }
      // this.detailHabitItems.splice(index);
    },
    detailDel(index) {
      this.detailHabitItemsPlus.splice(index, 1);
    },
  },
  created() {
    console.log(this.categoryColor);
  },
  async updated() {
    this.editSave();
    // console.log("this.detailHabitItems");
    // console.log(this.detailHabitItems);
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
.bold {
  font-weight: bold;
}
.container {
  display: flex;
  flex-flow: column;
  align-items: center;
  line-height: 50px;
}
.contents {
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