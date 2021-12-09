<template>
  <div class="container">
    <div class="contents">
      <habit-edit-header :habitItem="habitItem" />
      <habit-edit-week :schedule="schedule" />
      <habit-edit-detail :detailHabitItems="detailedObjectives" />
      <habit-edit-del-save class="삭제박스" />
    </div>
  </div>
</template>

<script>
import HabitEditHeader from "@/components/HabitEditHeader.vue";
import HabitEditWeek from "@/components/HabitEditWeek.vue";
import HabitEditDetail from "@/components/HabitEditDetail.vue";
import HabitEditDelSave from "@/components/HabitEditDelSave.vue";

export default {
  components: {
    HabitEditHeader,
    HabitEditWeek,
    HabitEditDetail,
    HabitEditDelSave
  },
  data() {
    return {
      message: "습관명입력",
      habitItem: null,
      schedule: [],
      detailedObjectives: [],
    };
  },
  async created() {
    if(this.$route.params.id) {
      try {
        let { data } = await this.axios({
          method: "get",
          url: `/api/objectives/${this.$route.params.id}`,
        });
        // console.log(data);
        this.habitItem = data;
        this.schedule = data.schedule;
      } catch (err) {
        console.log(err);
      }
      try {
        let { data } = await this.axios({
          method: "get",
          url: `/api/detailedObjectives/${this.$route.params.id}`,
        });
        // console.log(data);
        this.detailedObjectives = data;
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.contents {
  display: flex;
  flex-flow: column;
  width: 720px;
  height: 100vh;
  background-color: #e1e1e1;
}
.삭제박스 {
  position: absolute;
  bottom: 0%;
}
</style>