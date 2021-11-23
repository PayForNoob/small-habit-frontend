<template>
  <div>
    <habit-header class="header"></habit-header>
    <div class="container">
      <div class="목표목록_박스">
        <div class="목표목록_목표갯수">목표{{ habitTotalNum }}</div>
        <div v-if="habitTotalNum != 0">
          <habit-list
            v-for="(habitItem, index) in habitItems"
            :habitItem="habitItem"
            :key="index"
          >
          </habit-list>
        </div>
        <div v-else>오늘의 목표 없음</div>
        <!-- 없음 디자인 추가할 예정-->
      </div>
    </div>
  </div>
</template>

<script>
import HabitList from "@/components/HabitList.vue";
import HabitHeader from "../components/HabitHeader.vue";

export default {
  components: {
    HabitList,
    HabitHeader,
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
        url: "/api/objectives",
        params: {
          ...todaysObjectives,
        },
      });
      console.log(data);
      this.habitItems = data;
      this.habitTotalNum = this.habitItems.length;
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      LogoData: "Logo",
      actionButtonClick: 0,
      habitItems: [],
      habitTotalNum: "",
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #9b9b9b;
  border-radius: 5px;
}
.container {
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  width: 720px;
}
.목표목록_박스 {
  display: flex;
  flex-direction: column;
  padding: 10px 14px 0 24px;
  height: calc(100vh - 150px);
  overflow: auto;
}
.목표목록_목표갯수 {
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: right;
  color: #000000;
}
</style>