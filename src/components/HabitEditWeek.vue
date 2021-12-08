<template>
  <div class="흰배경_박스">
    <div class="반복_박스">
      <img class="반복_이미지" src="@/assets/img_dayCircle_circle.png" />
      <!-- <div class="반복_버튼">◎매주 (주 {{ schedules.length }}번)</div>  -->
      <div class="반복_횟수">
        <img class="반복_버튼" src="@/assets/img_dayCircle_button.png" /> 매주
        (주 {{ number }}번)
      </div>
    </div>
    <div class="요일_박스">
      <div v-for="(schedule, index) in schedulesTemp" :key="index">
        <div
          v-if="schedulesTemp.includes(index)"
          class="요일_선택"
          @click="ButtonDay(index)"
        >
          {{ week[index] }}
        </div>
        <div v-else class="요일_미선택" @click="ButtonDay(index)">
          {{ week[index] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["schedules", "SaveProps"],
  data() {
    return {
      number: 7,
      dayCircleImgUrl: null,
      week: ["월", "화", "수", "목", "금", "토", "일"],
      schedulesTemp: {},
    };
  },
  methods: {
    editSave() {
      if (this.SaveProps) {
        console.log("주 일정 저장");
      }
    },
    ButtonDay(id) {
      console.log(this.schedulesTemp.includes(id));
      if (this.schedulesTemp[id] != null) {
        this.schedulesTemp[id] = null;
        this.number--;
      } else {
        this.schedulesTemp[id] = id;
        this.number++;
      }
      this.$forceUpdate;
      console.log(this.schedulesTemp.includes(id));
      console.log(this.schedulesTemp);
    },
    numberCount() {
      this.number++;
    },
  },
  computed: {
    dayImg() {
      return require(`@/assets/img_dayCircle_btn_white.png`);
    },
  },
  updated() {
    this.editSave();
    // for (let i = 0; i < this.schedules.length; i++) {
    //   if (this.schedules[i]) {
    //     this.number++;
    //   }
    // }
    this.schedulesTemp = this.schedules;

    console.log(this.schedulesTemp);
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
.반복_버튼:hover {
  cursor: pointer;
}
.요일_박스 {
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
}
@keyframes 요일_미선택에서_선택으로 {
  from {
    background: #b8b6c9;
  }

  to {
    background: #887de5;
  }
}
.요일_선택 {
  animation-name: 요일_미선택에서_선택으로;
  animation-duration: 0.15s;
  width: 50px;
  height: 50px;
  background: #887de5;
  border-radius: 30px;
  /* margin-left: 19px;
  margin-right: 15px; */
  line-height: 50px;
  display: block;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  transition: all 0.15s;
  user-select: none;
  color: #ffffff;
}
.요일_선택:hover {
  cursor: pointer;
}
.요일_선택:active {
  background: #6b63b6;
  color: #ffffff;
}
@keyframes 요일_선택에서_미선택으로 {
  from {
    background: #6b63b6;
  }

  to {
    background: #ffffff;
  }
}
.요일_미선택 {
  animation-name: 요일_선택에서_미선택으로;
  animation-duration: 0.15s;
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
  /* margin-left: 19px;
  margin-right: 15px; */
  line-height: 50px;
  transition: all 0.15s;
  user-select: none;
  color: #000000;
}
.요일_미선택:hover {
  cursor: pointer;
}
.요일_미선택:active {
  background: #b8b6c9;
  color: #ffffff;
}
</style>