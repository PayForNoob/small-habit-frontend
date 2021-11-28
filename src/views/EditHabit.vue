<template>
  <div class="row">
    <div class="container">
      <HabitEditHeader :message="message" :habitItems="habitItems" :id="id">
      </HabitEditHeader>
      <HabitEditWeek> </HabitEditWeek>
      <HabitEditDetail></HabitEditDetail>
    </div>
  </div>
</template>

<script>
import HabitEditHeader from "@/components/HabitEditHeader.vue";
import HabitEditWeek from "@/components/HabitEditWeek.vue";
import HabitEditDetail from "@/components/HabitEditDetail.vue";
export default {
  props: ["id"],
  components: {
    HabitEditHeader,
    HabitEditWeek,
    HabitEditDetail,
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
  },
  data() {
    return {
      message: "습관명입력",
      habitItems: [],
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
</style>