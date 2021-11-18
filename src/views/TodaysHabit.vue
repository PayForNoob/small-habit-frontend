<template>
<div>
  <div class="container">
    <div class="목표목록_박스">
      <div class="목표목록_목표갯수">목표{{ habitTotalNum }}</div>
      <habit-list
        v-for="(habitItem, index) in habitItems"
        v-bind:habitItem="habitItem"
        v-bind:key="index"
      >
      </habit-list>
    </div>
  </div>
</div>

</template>

<script>
import HabitList from "@/components/HabitList.vue";
import { store } from '../store/index.js'

export default {
  components: {
    "habit-list": HabitList,
  },
  methods: {
    log(item) {
      console.log(item);
    },
  },
  async beforeCreate() {
    // console.log('tag', store.state.user.data[0].id)
    let obj = {
      userId: store.state.user.data[0].id,
      schedule: 7,
      activated: true
    }
    let response = await this.axios({
      method: 'get',
      url: '/api/objectives',
      params: {
        userId: obj.userId,
        schedule: obj.schedule,
        activated: obj.activated
      }
    })
    console.log('res', response.data)
  },
  data: function () {
    return {
      LogoData: "Logo",

      actionButtonClick: 0,
      habitItems: [
        {
          userId: 1,
          category: "돈관리",
          objective: "매일 커피 1잔 덜마시기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          category: "운동",
          objective: "달리기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          category: "생활습관",
          objective: "숨쉬기",
          schedule: {
            everyday: true,
          },
          activated: false,
        },
        {
          userId: 1,
          category: "학습",
          objective: "코딩공부",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          category: "생활습관",
          objective: "숨쉬기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          category: "회사생활",
          objective: "출근 5분 빨리하기",
          schedule: {
            everyday: true,
          },
          activated: false,
        },
        {
          userId: 1,
          category: "독서",
          objective: "한달에 1권 읽기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          category: "취미",
          objective: "게임",
          schedule: {
            everyday: true,
          },
          activated: false,
        },
        {
          userId: 1,
          category: "나를 위한 시간",
          objective: "맛있는거 먹기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
      ]
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