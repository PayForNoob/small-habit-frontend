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
      <div class="세부습관_목록_박스">
        <div class="스크롤_영역">
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
      <!-- <div
        v-for="(detailHabitItemsPl, index) in detailHabitItemsPlus"
        :key="index"
        class="세부습관_목록_박스"
      >
        <div class="세부습관_목록">
          <input
            style="width: 300px"
            v-model="text[index]"
            placeholder="내용을 적어주세요"
          />
          <img
            class="세부습관_삭제"
            src="@/assets/img_detail_del.png"
            @click="detailDel(index)"
          />
        </div>
      </div> -->
    </div>
    <!-- 내용 추가되는거에도 삭제 이미지추가 기존 추가된 세부내역에도 수정할수있게 추가. -->
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
  max-width: 30px;
  width: 2.5vw;
  max-height: 30px;
  height: 2.5vw;
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
  gap: min(1.5vw, 20px);
  width: 57vw;
  max-width: 672px;
  min-height: 110px;
  max-height: 300px;
  padding-top: min(2.5vw, 30px);
  padding-bottom: min(2.5vw, 30px);
  margin-bottom: min(1vw, 10px);
  background-color: #ffffff;
  border-radius: min(2vw, 20px);
  font-size: min(2vw, 26px);
}
/* 세부습관 머릿글 */
.세부습관_머릿글 {
  display: flex;
  height: 5vw;
  max-height: 50px;
  justify-content: space-between;
  align-items: center;
  padding-left: min(3.5vw, 40px);
  padding-right: min(1.5vw, 20px);
}
.세부습관_머릿글 > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: min(3.5vw, 40px);
}
.추가버튼_이미지 {
  height: min(4.5vw, 50px);
  width: min(4.5vw, 50px);
  cursor: pointer;
  border-radius: 100%;
}
.추가버튼_이미지 img {
  width: 70%;
  height: 70%;
}

/* 세부습관 목록 */
.세부습관_목록_박스 {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.스크롤_영역 {
  display: flex;
  flex-flow: column;
  gap: min(1.5vw, 20px);
  max-height: 200px;
  padding-left: min(1.5vw, 20px);
  padding-right: min(1vw, 10px);
  padding-bottom: 0px;
  overflow: scroll;
}
.세부습관_목록 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 452px;
  width: 45vw;
  height: 3.5vw;
  max-height: 50px;
  line-height: min(4.5vw, 50px);
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
}
.세부습관_이름 img {
  max-width: 10px;
  width: 1vw;
  max-height: 10px;
  height: 1vw;
}
.세부습관_삭제 {
  height: 2vw;
  max-height: 24px;
  max-width: 24px;
  width: 2vw;
  cursor: pointer;
}
</style>