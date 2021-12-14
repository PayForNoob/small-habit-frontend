<template>
  <div class="container">
    <div class="contents">
      <HabitEditHeader 
      :habitItem="habitItem" 
      :category="habitCategory"
      @editHabitName="editHabitName"
      />
      <HabitEditWeek
        :schedules="habitItem.schedule"
        :category="habitCategory"
        @editSchedule="editSchedule"
      />
      <HabitEditDetail
        :detailHabitItems="detailHabitItems"
        :category="habitCategory"
        @addDetailHabitItem="addDetailHabitItem"
        @editDetailHabitItem="editDetailHabitItem"
        @deleteDetailHabitItem="deleteDetailHabitItem"
      />
      <HabitEditDelSave  
      @EditSave="EditSave" 
      :category="habitCategory"
      :editHabit="editHabit"
      />
    </div>
  </div>
</template>

<script>
import HabitEditHeader from "@/components/HabitEditHeader.vue";
import HabitEditWeek from "@/components/HabitEditWeek.vue";
import HabitEditDetail from "@/components/HabitEditDetail.vue";
import HabitEditDelSave from "@/components/HabitEditDelSave.vue";

export default {
  props: ["id", "category"],
  components: {
    HabitEditHeader,
    HabitEditWeek,
    HabitEditDetail,
    HabitEditDelSave,
  },
  data() {
    return {
      habitItem: {
        schedule: [],
        objective: "",
        category: this.category,
      },
      detailHabitItems: [],
      habitCategory: {},
      editHabit: false
    };
  },
  methods: {
    editHabitName(newValue) {
      this.habitItem.objective = newValue
      // console.log(this.habitItem.objective)
    },
    editSchedule(newValue) {
      this.habitItem.schedule = newValue
      // console.log(this.habitItem.schedule)
    },
    addDetailHabitItem() {
      this.detailHabitItems.push("");
      // console.log(this.detailHabitItems)
    },
    editDetailHabitItem(ind, newValue) {
      this.detailHabitItems[ind] = newValue
      // console.log(this.detailHabitItems)
    },

    // 습관 가져오기
    async getHabitItems() {
      try {
        let { data } = await this.axios({
          method: "get",
          url: `/api/objectives/${this.id}`,
        });
        // console.log(data);
        this.habitItem = data;
        this.habitCategory = this.$store.state.habitCategory[data.category]

      } catch (err) {
        console.log(err);
      }
    },
    // 세부습관들 가져오기
    async getDetailHabitItems() {
      try {
        let { data } = await this.axios({
          method: "get",
          url: `/api/detailedObjectives/${this.id}`,
        });
        // console.log(data);
        this.detailHabitItems = data;
      } catch (err) {
        console.log(err);
      }
    },


    // 습관 생성하기
    async createHabit() {
      try {
        let { data } = await this.axios({
          method: this.id ? "put" : "post",
          url:  this.id ? `/api/objectives/${this.id}` : '/api/objectives',
          data: {...this.habitItem}
        });
        // console.log(data)
        if(this.detailHabitItems.length > 0) {
          this.detailHabitItems.forEach(async (el) =>  {  
            if(el.id) {
              await this.editDetailHabit(el.id, el)
            } else {
              await this.createDetailHabit(data.id, el)
            }
          });
          this.editHabit = !this.editHabit
        } else {
          this.editHabit = !this.editHabit
        }
      } catch (err) {
        console.log(err);
      }
    },
    // 세부습관 생성
    async createDetailHabit(objectiveId, newDetailHabit) {
      try {
        await this.axios({
          method: "post",
          url: `/api/detailedObjectives/${objectiveId}`,
          data: {
            objective: newDetailHabit
          }
        });
      } catch (err) {
        console.log(err);
      }
    },
    // 세부습관 수정
    async editDetailHabit(id, editDetailHabit) {
      try {
        await this.axios({
          method: "put",
          url: `/api/detailedObjectives/${id}`,
          data: {
            objective: editDetailHabit
          }
        });
      } catch (err) {
        console.log(err);
      }
    },


    // 세부습관 삭제 
    async deleteDetailHabitItem(ind) {
      if(this.detailHabitItems[ind].id) {
        try {
          await this.axios({
            method: "DELETE",
            url: `/api/detailedObjectives/${this.detailHabitItems[ind].id}`
          });
        } catch (err) {
          console.log(err);
        }
        this.detailHabitItems.splice(ind, 1)
      } else {
        this.detailHabitItems.splice(ind, 1)
      }

    },


    // 습관 저장
    async EditSave() {
      if (this.id) {
        await this.createHabit()
        this.$router.push('/today')
      } else {
        await this.createHabit()
      }
    },
  },
  async created() {
    if (this.id) {
      await this.getHabitItems()

      await this.getDetailHabitItems()
    } else {
      this.habitCategory = this.$store.state.habitCategory[this.category]
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
  width: 61vw;
  max-width: 720px;
  height: 100vh;
  background-color: #e1e1e1;
}
</style>