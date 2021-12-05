<template>
  <div class="흰배경_박스">
    <div class="세부일정머릿글_박스">
      <img
        class="_30px_이미지"
        id="느낌표_이미지"
        src="@/assets/img_detail_point.png"
      />
      <p class="머릿말글씨">세부내역</p>
      <img
        class="추가버튼_이미지"
        src="@/assets/img_detail_plus.png"
        @click="toggle"
      />
    </div>
    <li
      v-for="(detailHabitItem, index) in detailHabitItems"
      :key="index"
      class="세부일정내용_박스"
    >
      {{ detailHabitItem.objective }}
      <img
        class="세부일정삭제버튼_이미지"
        src="@/assets/img_detail_del.png"
        @click="detailDel"
      />
    </li>
    <input
      v-for="(detailHabitItemsPl, index) in detailHabitItemsPlus"
      :key="index"
      class="세부일정내용_박스"
      style="width: 300px"
      v-model="text[index]"
      placeholder="내용을 적어주세요"
    />
  </div>
</template>

<script>
export default {
  props: ["detailHabitItems"],
  data() {
    return {
      detailHabitItemsPlus: 0,
      text: [],
    };
  },
  methods: {
    toggle() {
      this.detailHabitItemsPlus++;
    },
    async detailDel() {
      try {
        await this.axios({
          method: "delete",
          url: `/api/detailedObjectives/${this.id}`,
          params: {},
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    console.log(this.detailHabitItems);
  },
};
</script>

<style scoped>
.흰배경_박스 {
  margin: 0px 24px 10px 24px;
  min-height: 30px;
  background-color: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-flow: column;
  padding: 20px 20px 32px 40px;
}
.세부일정머릿글_박스 {
  display: flex;
  flex-flow: row;
}
.세부일정내용_박스 {
  display: flex;
  flex-flow: row;
  margin-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: left;

  margin-left: 70px;
}
._30px_이미지 {
  height: 30px;
  width: 30px;
  margin-top: 10px;
}
#느낌표_이미지 {
  margin-right: 40px;
}
.추가버튼_이미지 {
  height: 50px;
  width: 50px;
  margin-left: auto;
  cursor: pointer;
}
.세부일정삭제버튼_이미지 {
  height: 24px;
  width: 24px;
  margin-right: 110px;
  margin-left: auto;
  margin-top: 3px;
  cursor: pointer;
}
.머릿말글씨 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 50px;

  color: #000000;
}
</style>