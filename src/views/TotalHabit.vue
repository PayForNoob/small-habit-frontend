<template>
  <div>
    <habit-header class="header"></habit-header>
    <div class="container">
      <div class="목표목록_박스">
        <div class="목표목록_목표갯수">목표{{ habitItems.length }}</div>
        <div v-if="habitItems.length">
          <habit-list
            v-for="(habitItem) in habitItems"
            :habitItem="habitItem"
            :key="habitItem.id"
          >
          </habit-list>
        </div>
        <div v-else>오늘의 목표 없음</div>
        <!-- 없음 디자인 추가할 예정-->
      </div>
      <div class="습관_생성">
        새 습관 생성
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
  data() {
    return {
      habitItems: [],
    }
  },
  async created() {
    try {
      let { data } = await this.axios({
        method: "get",
        url: "/api/objectives",
        params: {
          schedule: "0, 1, 2, 3, 4, 5, 6",
        },
      });
      this.habitItems = data;
      console.log(this.habitItems)
    } catch (err) {
      console.log(err);
    }
  },

}
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
  height: calc(100vh - 200px);
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
.습관_생성 {
  height: 40px;
  margin-bottom: 10px;
  line-height: 40px;
  background-color: #BEBEBE;
  color: #fff;
}
</style>