<template>
  <div class="컨테이너">
    <div class="내용" v-if="getData">
      <TheHabitHeader
        :habitName="habitItem.objective"
        :category="habitCategory"
        @editHabitName="editHabitName"
      />
      <TheSelectSchedule
        :schedules="habitItem.schedule"
        :category="habitCategory"
        @editSchedule="editSchedule"
      />
      <TheHabitDetailList
        :detailHabitItems="detailHabitItems"
        :category="habitCategory"
        @addDetailHabitItem="addDetailHabitItem"
        @editDetailHabitItem="editDetailHabitItem"
        @deleteDetailHabitItem="deleteDetailHabitItem"
      />
      <HabitEditButtonSet
        @EditSave="EditSave"
        :habitItem="habitItem"
        :category="habitCategory"
        :edit="edit"
      />
    </div>
  </div>
</template>

<script>
import TheHabitHeader from "@/components/TheHabitHeader.vue";
import TheSelectSchedule from "@/components/TheSelectSchedule.vue";
import TheHabitDetailList from "@/components/TheHabitDetailList.vue";
import HabitEditButtonSet from "@/components/HabitEditButtonSet.vue";

export default {
  props: {
    id: {
      type: Number
    },
    category: {
      type: Number,
    }
  },
  components: {
    TheHabitHeader,
    TheSelectSchedule,
    TheHabitDetailList,
    HabitEditButtonSet,
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
      edit: false,
      getData: this.id ? false : true
    };
  },
  methods: {
    editHabitName(newValue) {
      this.habitItem.objective = newValue;
      // console.log(this.habitItem.objective)
    },
    editSchedule(newValue) {
      this.habitItem.schedule = newValue;
      // console.log(this.habitItem.schedule)
    },
    addDetailHabitItem() {
      this.detailHabitItems.push({objective: ""});
      // console.log(this.detailHabitItems)
    },
    editDetailHabitItem(ind, newValue) {
      this.detailHabitItems[ind].objective = newValue;
      // console.log(this.detailHabitItems[ind])
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
        this.habitCategory = this.$store.state.habitCategory[data.category];
        this.getData = true
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
    async editHabit() {
      try {
        let { data } = await this.axios({
          method: this.id ? "put" : "post",
          url: this.id ? `/api/objectives/${this.id}` : "/api/objectives",
          data: { ...this.habitItem },
        });
        // console.log(data)
        if (this.detailHabitItems.length > 0) {
          this.detailHabitItems.forEach(async (el) => {
            if(el.objective.length > 0) {
              if (el.id) {
                await this.editDetailHabit(el.id, el.objective);
              } else {
                await this.createDetailHabit(data.id, el.objective);
              }
            }
          });
          this.edit = !this.edit;
        } else {
          this.edit = !this.edit;
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
            objective: newDetailHabit,
          },
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
            objective: editDetailHabit,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },

    // 세부습관 삭제
    async deleteDetailHabitItem(ind) {
      if (this.detailHabitItems[ind].id) {
        try {
          await this.axios({
            method: "DELETE",
            url: `/api/detailedObjectives/${this.detailHabitItems[ind].id}`,
          });
        } catch (err) {
          console.log(err);
        }
        this.detailHabitItems.splice(ind, 1);
      } else {
        this.detailHabitItems.splice(ind, 1);
      }
    },

    // 습관 저장
    async EditSave() {
      if (this.id) {
        await this.editHabit();
        this.$router.go(-1);
      } else {
        await this.editHabit();
      }
    },
  },
  async created() {
    if (this.id) {
      await this.getHabitItems();

      await this.getDetailHabitItems();
    } else {
      this.habitCategory = this.$store.state.habitCategory[this.category];
    }
  },
};
</script>

<style scoped>
.내용 {
  height: 100vh;
  background-color: #e1e1e1;
}
.배경 {
  height: calc(100vh - 360px);
}
</style>