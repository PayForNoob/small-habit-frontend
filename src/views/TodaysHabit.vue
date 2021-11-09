<template>
  <div class="row">
    <div class="container">
      <div class="로고">{{ LogoData }}</div>
      <div class="상단메뉴">
        <div class="상단메뉴텍스트" id="전체목표_마이페이지">전체목표</div>
        <div class="상단메뉴텍스트" id="오늘실천">오늘실천</div>
        <div class="상단메뉴텍스트" id="전체목표_마이페이지">마이페이지</div>
      </div>
      <div class="상단메뉴라인"></div>
      <div class="목표목록박스">
        <div class="목표숫자표시박스">목표{{ habitTotalNum }}</div>

        <habit-list v-bind:habitItems="habitItems"></habit-list>
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
          field: "숨쉬기",
          objective: "숨쉬기",
          schedule: {
            everyday: true,
          },
          activated: false,
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

<style>
.row {
  display: flex;
  flex-flow: row;
  height: 1260px;
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
.상단메뉴 {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 640px;
  /* height: 70px; */
  padding: 21px 40px 21px 40px;
}
.상단메뉴텍스트 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
}
#오늘실천 {
  color: black;
  width: 120px;
  text-align: center;
}
#전체목표_마이페이지 {
  color: grey;
  width: 120px;
  text-align: center;
}
.상단메뉴라인 {
  border-top: 2px solid gray;
}
.목표목록박스 {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.목표숫자표시박스 {
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
.목표container {
}
.목표box {
  /* display: flex;
  flex-flow: row;
 
  margin: 0px 0px 10px 0px;
  padding: 25px;
  background-color: #dddddd;
  justify-content: space-between;
  border-radius: 5px; */
  display: flex;
  flex-flow: column;
  padding: 25px 20px;
  /* background-color: #ffce85; */
  margin-bottom: 10px;
  border-radius: 15px;
}
.목표미실행color {
  background: #dddddd;
}
.목표실행후color {
  background: #ffd98e;
}
.달성목표_내용박스 {
  display: flex;
  flex-flow: row;
  /* height: 100px; */
  /* margin: 0px 24px 0px 24px;
  padding: 25px; */

  justify-content: space-between;
  border-radius: 5px 5px 0% 0%;
}
.달성목표_실천박스 {
  display: flex;
  flex-flow: row;
  /* height: 100px; */
  /* margin: 0px 24px 0px 24px;
  padding: 25px; */

  justify-content: flex-start;
  border-radius: 0% 0% 5px 5px;
  /* border-top: solid 1px white; */
}
.달성목표이름 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  flex-grow: 1;
  color: #000000;
  text-align: left;
  margin: 5px 0 0 30px;
}
.달성실천횟수 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #666666;
  flex-grow: 0;

  margin: 0 0 0 80px;
}
.목표윗border {
}
.check아이콘 {
  width: 50px;
  height: 50px;
}

.구분선 {
  margin: 26px 30px 25px 80px;
  border-top: 1px solid #fff;
  height: 0;
  width: 87%;
}
img {
  width: 50px;
  height: 50px;
}
</style>