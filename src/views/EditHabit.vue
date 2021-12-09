<template>
  <div class="container">
    <div class="contents">
      <HabitEditHeader :habitItem="habitItem" />
      <HabitEditWeek :schedules="habitItem.schedule" :SaveProps="SaveProps" />
      <HabitEditDetail
        :detailHabitItems="detailHabitItems"
        :SaveProps="SaveProps"
        :id="id"
        @emitToParent="emitToParent"
      />
      <HabitEditDelSave class="삭제박스" @EditSave="EditSave"/>
    </div>
  </div>
</template>

<script>
import HabitEditHeader from "@/components/HabitEditHeader.vue";
import HabitEditWeek from "@/components/HabitEditWeek.vue";
import HabitEditDetail from "@/components/HabitEditDetail.vue";
import HabitEditDelSave from "@/components/HabitEditDelSave.vue";

export default {
  props: ['id', 'category'],
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
      
      if(this.id) {
        // 수정
      } else {
        // 생성
      }

      this.SaveProps = true;
      console.log("view 함수 일정 저장");
    },
  },
  async created() {
    let today = new Date().getDay();
    let todaysObjectives = {
      schedule: today,
      activated: true,
    };

    if(this.id) {
      try {
        let { data } = await this.axios({
          method: "get",
          url: `/api/objectives/${this.id}`,
          params: {
            ...todaysObjectives,
          },
        });
        console.log(data);
        this.habitItem = data;
      } catch (err) {
        console.log(err);
      }

      try {
        let { data } = await this.axios({
          method: "get",
          url: `/api/detailedObjectives/${this.id}`,
        });
        console.log(data);
        this.detailHabitItems = data;
      } catch (err) {
        console.log(err);
      }
    }
  },
  data() {
    return {
      message: "습관명입력",
      detailHabitItems: [],
      detailHabitItemsPlus: [],
      SaveProps: false,
      habitItem: {
        schedule: [],
        objective: '',
        category: this.category,
      },
      schedule: [],
      detailedObjectives: [],
    };
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
}
</style>