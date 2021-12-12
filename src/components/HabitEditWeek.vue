<template>
  <div class="container">
    <div class="contents">
      <div class="반복_주기">
        <img src="@/assets/img_dayCircle_circle.png" />
        <div><span class="bold">반복주기</span> (주 {{ number }}회)</div>
      </div>
      <div class="요일_박스">
        <div v-for="(schedule, index) in week" :key="index">
          <div
            :style="{
              backgroundColor: schedulesTemp.includes(index)
                ? categoryColor
                : '#dedede',
            }"
            :class="schedulesTemp.includes(index) ? '요일_선택' : '요일_미선택'"
            class="요일"
            @click="ButtonDay(index)"
          >
            {{ schedule }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["schedules", "SaveProps", "categoryColor"],
  data() {
    return {
      week: ["일", "월", "화", "수", "목", "금", "토"],
      schedulesTemp: [],
    };
  },
  methods: {
    editSave() {
      if (this.SaveProps) {
        // console.log("주 일정 저장");
      }
    },
    ButtonDay(id) {
      if (this.schedulesTemp.includes(id)) {
        this.schedulesTemp = this.schedulesTemp.filter((item) => item !== id);
      } else {
        this.schedulesTemp = [...this.schedulesTemp, id];
      }

      // console.log(this.schedulesTemp)
      this.$forceUpdate();
    },
  },
  computed: {
    number() {
      return this.schedulesTemp.length;
    },
  },
  created() {
    // console.log(this.schedules)
    this.schedulesTemp = this.schedules;
  },
  updated() {
    this.editSave();
  },
};
</script>

<style scoped>
.contents {
  display: flex;
  flex-flow: column;
  justify-content: start;
  gap: min(4vw, 40px);
  width: 57vw;
  max-width: 672px;
  height: 16vw;
  max-height: 180px;
  padding-top: min(2.5vw, 30px);
  margin-bottom: min(1vw, 10px);
  background-color: #ffffff;
  border-radius: min(1.5vw, 20px);
}
img {
  width: 2vw;
  max-width: 30px;
  height: 2vw;
  max-height: 30px;
}
.bold {
  font-weight: bold;
}
.반복_주기 {
  display: flex;
  gap: min(2vw, 40px);
  height: 2vw;
  max-height: 30px;
  line-height: min(2vw, 30px);
  padding-left: min(3vw, 40px);
  font-size: min(2vw, 26px);
  color: #000000;
}

.요일_박스 {
  display: flex;
  justify-content: center;
  gap: min(3.5vw, 40px);
}
.요일 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vw;
  height: 4vw;
  max-width: 50px;
  max-height: 50px;
  border-radius: 100%;
  font-size: min(1.7vw, 24px);
  color: #000;
  cursor: pointer;
  transition: all 0.15s;
  animation-duration: 0.15s;
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
  color: #ffffff;
}
.요일_선택:active {
  background: #6b63b6;
  color: #ffffff;
}
@keyframes 요일_선택에서_미선택으로 {
  from {
    background-color: #1d184d;
  }

  to {
    background: #ffffff;
  }
}
.요일_미선택:active {
  background: #b8b6c9;
  color: #ffffff;
}
</style>