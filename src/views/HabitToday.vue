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
        <div v-else class="습관없음">습관 없음</div>
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
    console.log(this.$route)
    let today = new Date().getDay();
    try {
      let { data } = await this.axios({
        method: "get",
        url: "/api/objectives",
        params: {
          schedule: this.$route.path == '/today' ? today : "0, 1, 2, 3, 4, 5, 6",
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
  width: 4px;
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
.습관목록_박스 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: calc(100vh - 150px);
  padding-top: 10px;
}
.습관목록_습관갯수 {
  width: 100%;
  padding-right: 24px;
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
  padding-left: 4px;
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