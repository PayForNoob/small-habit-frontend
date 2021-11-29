<template>
  <div class="흰배경_박스">
    <div class="반복_박스">
      <img class="반복_이미지" src="@/assets/img_dayCircle_circle.png" />
      <!-- <div class="반복_버튼">◎매주 (주 {{ schedules.length }}번)</div>  -->
      <div class="반복_횟수">
        <img class="반복_버튼" src="@/assets/img_dayCircle_button.png" /> 매주
        (주 7번)
      </div>
    </div>
    <div class="요일_박스">
      <div v-for="(schedule, index) in schedules" :key="index">
        <div v-if="schedule == index" class="요일_선택">{{ week[index] }}</div>
        <div v-else class="요일_미선택"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["schedules"],
  data() {
    return {
      number: null,
      dayCircleImgUrl: null,
      week: ["월", "화", "수", "목", "금", "토", "일"],
    };
  },
  computed: {
    dayImg() {
      console.log(1);
      return require(`@/assets/img_dayCircle_btn_white.png`);
    },
  },
  created() {
    console.log(this.schedules);
    // this.schedulele.inclued();
  },
};
</script>

<style scoped>
.흰배경_박스 {
  margin: 0px 24px 10px 24px;
  min-height: 30px;
  background-color: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-flow: column;
  padding: 35px 59px 30px 40px;
}
.반복_박스 {
  display: flex;
  flex-flow: row;
  margin-bottom: 35px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;

  color: #000000;
}
.반복_이미지 {
  height: 40px;
  width: 40px;
  margin-right: 40px;
}
.반복_횟수 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 40px;

  color: #000000;
}
.반복_버튼 {
  width: 30px;
  height: 30px;
  padding-top: 5px;
}
.요일_박스 {
  min-height: 50px;
  display: flex;
  flex-flow: row;
}
.요일_선택 {
  width: 50px;
  height: 50px;
  background: #887de5;
  border-radius: 30px;
  margin-left: 19px;
  margin-right: 15px;
  line-height: 50px;
  display: block;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;

  color: #ffffff;
}
.요일_미선택 {
  width: 50px;
  height: 50px;
  background: #ffffff;
  border: 2px solid #dedede;
  box-sizing: border-box;
  border-radius: 30px;
  display: block;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 50px;

  color: #000000;
}
</style>