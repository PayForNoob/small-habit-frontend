<template>
  <div class="container">
    <div class="contents">
      <div class="세부습관">
        <div>
          <img src="@/assets/img_detail_point.png"/>
          <div><span class="bold">세부습관</span></div>
        </div>
        <img
          class="추가버튼"
          src="@/assets/img_detail_plus.png"
          @click="emitToParent"
        />
      </div>
      <div  class="세부습관_목록_박스">
        <div  class="세부습관_목록">
          <div v-for="(detailHabitItem, index) in 4"
          :key="index" 
          class="세부습관_내용">
            <div>
              <img src="@/assets/dot.png" alt="" class="dot">
              <div>
                {{detailHabitItem}}
              </div>
            </div>
            <img src="@/assets/img_detail_del.png" alt="세부습관 삭제"
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
  props: ["detailedHabitItems", "SaveProps", "id"],
  data() {
    return {
      detailedHabitItemsPlus: [],
      text: [],
    };
  },
  methods: {
    async editSave() {
      if (this.SaveProps) {
        console.log("세부내역 저장");
        // console.log(this.detailedHabitItems[0].id);
        // console.log(this.detailedHabitItems.length);
        // console.log(this.detailedHabitItemsPlus.length);
        for (
          let i = this.detailedHabitItems[0].id + this.detailedHabitItems.length;
          i <
          this.detailedHabitItems[0].id +
            this.detailedHabitItems.length +
            this.detailedHabitItemsPlus.length;
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
          //       userId: this.detailedHabitItems.userId,
          //     },
          //   });
          // } catch (err) {
          //   console.log(err);
          // }
        }
      }
    },
    emitToParent() {
      this.detailedHabitItemsPlus.push("");
      console.log(this.detailedHabitItemsPlus);
      this.$emit("emitToParent", this.detailedHabitItemsPlus);
    },
    detailPlus() {},
    async SavedDetailDel(index) {
      try {
        await this.axios({
          method: "DELETE",
          url: `/api/detailedObjectives/${this.detailedHabitItems[index].id}`,
          params: {},
        });
      } catch (err) {
        console.log(err);
      }
      // this.detailedHabitItems.splice(index);
    },
    detailDel(index) {
      this.detailedHabitItemsPlus.splice(index, 1);
    },
  },
  async updated() {
    this.editSave();
    // console.log("this.detailedHabitItems");
    // console.log(this.detailedHabitItems);
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
.contents {
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 672px;
  padding-top: 30px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 20px;
}
.bold {
  font-weight: bold;
}
.세부습관 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 40px;
  padding-right: 20px;
  font-size: 26px;
  color: #000000;
}
.세부습관 div {
  display: flex;
  align-items: center;
  gap: 40px;

}
.세부습관 img {
  width: 30px;
  height: 30px;
}
img.추가버튼 {
  width: 50px;
  height: 50px;
}

/* 내용 */
.세부습관_목록_박스 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  max-height: 190px;
  overflow: auto;
}
.세부습관_목록 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 452px;
  max-height: 190px;
  line-height: 50px;
}
.dot {
  width: 10px;
  height: 10px;
}
.세부습관_내용 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
}
div.세부습관_내용 > div {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>