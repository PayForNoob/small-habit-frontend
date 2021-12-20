<template>
  <div class="컨테이너">
    <Header class="header"></Header>
    <pulse-loader v-if="loading == true" class="로딩중"></pulse-loader>
    <div class="컨테이너_내용" v-if="loading == false">
      <div class="습관목록_박스">
        <div class="습관목록_습관갯수">목표{{ habitItems.length }}</div>
        <div v-if="habitItems.length != 0" class="습관목록">
          <habit-list
            v-for="habitItem in habitItems"
            :habitItem="habitItem"
            :key="habitItem.id"
          >
          </habit-list>
        </div>
        <div v-else class="습관없음">오늘의 습관 없음</div>
        <!-- 없음 디자인 추가할 예정-->
      </div>
      <router-link to="/create" class="습관_생성"> 새 습관 생성 </router-link>
    </div>
  </div>
</template>

<script>
import HabitList from "@/components/HabitList.vue";
import Header from "../components/Header.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    HabitList,
    Header,
    PulseLoader,
  },
  data() {
    return {
      habitItems: [],
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
  beforeCreate() {
    this.$store.commit("loadingStart");
  },
  async created() {
    let today = new Date().getDay();
    try {
      let { data } = await this.axios({
        method: "get",
        url: "/api/objectives",
        params: {
          schedule: today,
        },
      });
      this.habitItems = data;
      this.$store.commit("loadingEnd");
      // console.log(this.habitItems)
    } catch (err) {
      console.log(err);
    }
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
.로딩중 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 150px);
}
.컨테이너 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.컨테이너_내용 {
  display: flex;
  flex-flow: column;
  width: 720px;
}
.습관목록_박스 {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  height: calc(100vh - 210px);
}
.습관목록_습관갯수 {
  height: 50px;
  line-height: 50px;
  padding-right: 24px;
  margin-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: right;
  color: #000000;
}
.습관없음 {
  text-align: center;
}
.습관목록 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  overflow: auto;
}
.습관_생성 {
  cursor: pointer;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #777777;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>