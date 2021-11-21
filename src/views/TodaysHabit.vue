<template>
<div>
  <div class="container">
    <div class="목표목록_박스">
      <div class="목표목록_목표갯수">목표{{ habitTotalNum }}</div>
      <habit-list
        v-for="(habitItem, index) in habitItems"
        :habitItem="habitItem"
        :key="index"
      >
      </habit-list>
    </div>
  </div>
</div>

</template>

<script>
import HabitList from "@/components/HabitList.vue";

export default {
  components: {
    "habit-list": HabitList,
  },
  async created() {
    let today = new Date().getDay()
    let todaysObjectives = {
      schedule: today,
      activated: true
    }
    try {
      let { data } = await this.axios({
        method: 'get',
        url: '/api/objectives',
        params: {
          ...todaysObjectives
        }
      })
      console.log(data)
      this.habitItems = data
    }catch(err) {
      console.log(err)
    }
  },
  data: function () {
    return {
      LogoData: "Logo",
      actionButtonClick: 0,
      habitItems: []
    };
  },
};
</script>

<style scoped>

.contents {
  width: 100%;

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
  padding: 10px 24px;
  height: 86vh;
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