<template>
  <div class="row">
    <div class="container">
      <HabitEditHeader
        :message="message"
        :habitItems="habitItems"
        :id="id"
        :SaveProps="SaveProps"
      />
      <HabitEditWeek :schedules="habitItems.schedule" :SaveProps="SaveProps" />
      <HabitEditDetail
        :detailHabitItems="detailHabitItems"
        :SaveProps="SaveProps"
        :id="id"
        @emitToParent="emitToParent"
      />
      <HabitEditDelSave @EditSave="EditSave" />
    </div>
  </div>
</template>

<script>
import HabitEditHeader from "@/components/HabitEditHeader.vue";
import HabitEditWeek from "@/components/HabitEditWeek.vue";
import HabitEditDetail from "@/components/HabitEditDetail.vue";
import HabitEditDelSave from "@/components/HabitEditDelSave.vue";

export default {
  props: ["id"],
  components: {
    HabitEditHeader,
    HabitEditWeek,
    HabitEditDetail,
    HabitEditDelSave,
  },
  methods: {
    emitToParent(data) {
      this.detailHabitItemsPlus = data;
      // console.log(this.detailHabitItemsPlus);
    },
    async EditSave() {
      this.SaveProps = true;
      console.log("view 함수 일정 저장");

      //세부일정 저장
    },
  },
  async created() {
    let today = new Date().getDay();
    let todaysObjectives = {
      schedule: today,
      activated: true,
    };
    try {
      let { data } = await this.axios({
        method: "get",
        url: `/api/objectives/${this.id}`,
        params: {
          ...todaysObjectives,
        },
      });
      console.log(data);
      this.habitItems = data;
    } catch (err) {
      console.log(err);
    }
    try {
      let { data } = await this.axios({
        method: "get",
        url: `/api//detailedObjectives/${this.id}`,
        params: {
          //...todaysObjectives,
        },
      });
      console.log(data);
      this.detailHabitItems = data;
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      message: "습관명입력",
      habitItems: [],
      detailHabitItems: [],
      detailHabitItemsPlus: [],
      SaveProps: false,
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: row;

  justify-content: center;
}

.container {
  display: flex;
  flex-flow: column;
  width: 720px;
  height: 1280px;
  /* 높이삭제해야함 */
  border: 1px solid rgb(224, 218, 218);

  background-color: #e1e1e1;
  /* justify-content: center; */
}
.삭제박스 {
}
</style>