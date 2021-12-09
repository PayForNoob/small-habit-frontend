<template>
  <div class="container">
    <div class="contents">
      <habit-edit-header :habitItem="habitItem" />
      <habit-edit-week :schedule="schedule" :SaveProps="SaveProps"/>
      <habit-edit-detail :detailedHabitItems="detailedHabitItems" 
        :SaveProps="SaveProps"
        @emitToParent="emitToParent"
      />
      <habit-edit-del-save @EditSave="EditSave"/>
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
    HabitEditDelSave,
  },
  data() {
    return {
      habitItem: null,
      schedule: [],
      detailHabitItems: [],
      SaveProps: false,
    };
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
        this.detailedHabitItems = data;
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


</style>