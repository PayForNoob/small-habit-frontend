<template>
  <div class="row">
    <div class="container">
      <div class="로고">{{ LogoData }}</div>
      <div class="상단메뉴_박스">
        <div class="상단메뉴_글자 상단메뉴_회색글씨">전체목표</div>
        <div class="상단메뉴_글자" id="상단메뉴_검은색글씨">오늘실천</div>
        <div class="상단메뉴_글자 상단메뉴_회색글씨">마이페이지</div>
      </div>
      <div class="상단메뉴_구분선"></div>
      <div class="목표목록_박스">
        <div class="목표목록_목표갯수">목표{{ habitItems.length }}</div>

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
import axios from "axios";
export default {
  components: {
    "habit-list": HabitList,
  },
  methods: {
    log(item) {
      console.log(item);
    },
    beforeCreate() {
      axios.get("localhost:3000/objective/today").then((res) => {
        console.log(res);
        console.log("1");
      });
    },
  },
  data: function () {
    return {
      LogoData: "Logo",

      actionButtonClick: 0,
      habitItems: [
        {
          userId: 1,
          field: "돈관리",
          objective: "매일 커피 1잔 덜마시기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          field: "운동",
          objective: "달리기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          field: "생활습관",
          objective: "숨쉬기",
          schedule: {
            everyday: true,
          },
          activated: false,
        },
        {
          userId: 1,
          field: "학습",
          objective: "코딩공부",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          field: "생활습관",
          objective: "숨쉬기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          field: "회사생활",
          objective: "출근 5분 빨리하기",
          schedule: {
            everyday: true,
          },
          activated: false,
        },
        {
          userId: 1,
          field: "독서",
          objective: "한달에 1권 읽기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
        {
          userId: 1,
          field: "취미",
          objective: "게임",
          schedule: {
            everyday: true,
          },
          activated: false,
        },
        {
          userId: 1,
          field: "나를 위한 시간",
          objective: "맛있는거 먹기",
          schedule: {
            everyday: true,
          },
          activated: true,
        },
      ],
      habitTypes: "운동",
      habitName: "걷기",
      habitTotalNum: 0,
      habitExecutionCount: 0,
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: row;

  justify-content: center;
}
.container {
  display: flex;
  flex-flow: column;
  width: 720px;
  border: 1px solid rgb(224, 218, 218);
  margin-top: 80px;
  /* justify-content: center; */
}

.로고 {
  display: flex;
  flex-flow: column;
  font-family: Blinker;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 48px;
  line-height: 58px;
}
.상단메뉴_박스 {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 640px;
  /* height: 70px; */
  padding: 21px 40px 21px 40px;
}
.상단메뉴_글자 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  width: 120px;
}
#상단메뉴_검은색글씨 {
  color: black;
}
.상단메뉴_회색글씨 {
  color: grey;
}
.상단메뉴_구분선 {
  border-top: 2px solid gray;
}
.목표목록_박스 {
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
}
.목표목록_목표갯수 {
  display: flex;
  flex-flow: row-reverse;
  /* margin: 10px 24px 10px 24px; */
  padding: 0px 20px 11px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: right;

  color: #000000;
}
</style>