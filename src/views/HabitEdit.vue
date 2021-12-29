<template>
  <div class="컨테이너">
    <div class="내용" v-if="getData">
      <div class="습관정보">
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
      </div>
      <div class="버튼_박스" v-if="$route.params.id && !confirm" >
        <div class="삭제_버튼" @click="confirm = !confirm">삭제</div>
        <div class="저장_버튼" @click="EditSave" :style="{ backgroundColor: habitCategory.color }">저장</div>
      </div>
      <div class="버튼_박스" v-if="$route.params.category && !confirm">
        <div class="완료_버튼" @click="EditSave" :style="{ backgroundColor: habitCategory.color }" >완료</div>
      </div>

      <base-modal v-if="confirm" >
        <template v-slot:header>
          <div class="모달_헤더">
            <img v-if="habitItem.objective && habitItem.schedule.length > 0" 
            src="@/assets/confetti.png" alt="">
            {{ modalHeader }}
            <img v-if="habitItem.objective && habitItem.schedule.length > 0" 
            src="@/assets/confetti.png" alt="">
            </div>
        </template>
        <template v-slot:contents>
          <div class="모달_내용">
            <p>{{ modalContents[0] }}</p>
            <p>{{ modalContents[1] }}.</p>
          </div>
        </template>
        <template v-slot:confirm>
          <div class="모달_버튼" v-if="$route.params.id">
            <div class="삭제_버튼" @click="deleteObjective">확인</div>
            <div class="취소_버튼" @click="confirm = !confirm">취소</div>
          </div>
          <div class="모달_버튼" v-if="$route.params.category">
            <div
            :style="{ backgroundColor: habitCategory.color }"
            @click="habitItem.objective && habitItem.schedule.length > 0 ? $router.go(-2) : confirm = !confirm">확인</div>
          </div>
        </template>
      </base-modal>
    </div>
  </div>
</template>

<script>
import TheHabitHeader from "@/components/TheHabitHeader.vue";
import TheSelectSchedule from "@/components/TheSelectSchedule.vue";
import TheHabitDetailList from "@/components/TheHabitDetailList.vue";
import BaseModal from "@/components/BaseModal.vue";

export default {
  props: {
    id: {
      type: String
    },
    category: {
      type: String,
    }
  },
  components: {
    TheHabitHeader,
    TheSelectSchedule,
    TheHabitDetailList,
    BaseModal,
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
      confirm: false,
      getData: this.id ? false : true
    }
  },
  computed: {
    modalHeader() {
      if (this.id) {
        return "습관을 삭제 하시겠습니까?"
      } else if ( this.habitItem.objective && this.habitItem.schedule.length > 0 ) {
        return "습관 생성을 완료했어요!"
      } else {
        return "습관 생성에 실패했습니다."
      }
    },
    modalContents() {
      if (this.id) {
        return ["삭제하실 경우 모든 습관 정보가", "사라지고 복구할 수 없습니다."]
      } else if ( this.habitItem.objective && this.habitItem.schedule.length > 0 ) {
        return ["습관 생성이 완료되었습니다.", "꾸준한 실천을 응원하겠습니다."]
      } else {
        return ["작성하지 않은 내용이 있습니다.", "마저 작성해주시기 바랍니다."]
      }
    },
    modalButton() {
      if (this.id) {
        return ["삭제하실 경우 모든 습관 정보가", "사라지고 복구할 수 없습니다."]
      } else if ( this.habitItem.objective && this.habitItem.schedule.length > 0 ) {
        return ["습관 생성이 완료되었습니다.", "꾸준한 실천을 응원하겠습니다."]
      } else {
        return ["작성하지 않은 내용이 있습니다.", "마저 작성해주시기 바랍니다."]
      }
    }
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
        } else {
          this.confirm = !this.confirm;
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
      if(this.habitItem.objective && this.habitItem.schedule.length > 0) {
        if (this.id) {
          await this.editHabit();
          this.$router.go(-1);
        } else {
          await this.editHabit();
        }
      } else {
        this.confirm = !this.confirm
      }
    },
    // 습관 삭제
    async deleteObjective() {
      try {
        await this.axios({
          method: 'delete',
          url: `/api/objective/${this.$route.params.id}`,
        })
        // console.log('성공')
        this.$router.go(-1)
      }
      catch (err) {
        console.log(err.data);
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
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #e1e1e1;
  overflow: hidden;
}
.습관정보 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
/* 버튼세트 */
.버튼_박스 {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
}
.버튼_박스 div {
  cursor: pointer;
}
.삭제_버튼 {
  width: 50%;
  background: #ff5757;
}
.저장_버튼 {
  width: 50%;
}
.완료_버튼 {
  width: 100%;
}
/* 모달 */
.모달_헤더 {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
.모달_헤더 img{
  width: 25px;
  height: 25px;
}
.모달_내용 {
  font-size: 16px;
}
.모달_버튼 {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.모달_버튼 div {
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.취소_버튼 {
  background-color: #5e5e5e;
}
.모달_헤더 {
  font-size: 20px;
  font-weight: bold;
}
</style>