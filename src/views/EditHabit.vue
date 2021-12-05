<template>
  <div class="row">
    <div class="container">
      <HabitEditHeader :message="message" :habitItems="habitItems" :id="id" />
      <HabitEditWeek :schedules="habitItems.schedule" />
      <HabitEditDetail :detailHabitItems="detailHabitItems" />
      <HabitEditDelSave class="삭제박스" />
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
  position: absolute;
  bottom: 0%;
}
</style>