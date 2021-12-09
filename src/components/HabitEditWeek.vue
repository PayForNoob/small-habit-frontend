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
            :class="schedulesTemp.includes(index) ? '요일_선택' : '요일_미선택'"
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
  props: ["schedules", "SaveProps"],
  data() {
    return {
      week: ["일", "월", "화", "수", "목", "금", "토"],
      schedulesTemp: [],
    };
  },
  methods: {
    editSave() {
      if (this.SaveProps) {
        console.log("주 일정 저장");
      }
    },
    ButtonDay(id) {
      if (this.schedulesTemp.includes(id)) {
        this.schedulesTemp = this.schedulesTemp.filter((item) => item !== id);
      } else {
        this.schedulesTemp = [...this.schedulesTemp, id];
      }

      console.log(this.schedulesTemp)
      this.$forceUpdate();
    },
  },
  computed: {
    number() {
      return this.schedulesTemp.length
    }
  },
  created() {
    console.log(this.schedules)
    this.schedulesTemp = this.schedules;
  },
  updated() { 
    this.editSave();
  }
};
</script>

<style scoped>
.contents {
  display: flex;
  flex-flow: column;
  justify-content: start;
  gap: 40px;
  width: 672px;
  height: 180px;
  padding-top: 30px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 20px;
}
img {
  width: 30px;
  height: 30px;
}
.bold {
  font-weight: bold;
}
.반복_주기 {
  display: flex;
  gap: 40px;
  height: 30px;
  line-height: 30px;
  padding-left: 40px;
  font-size: 26px;
  color: #000000;
}

.요일_박스 {
  display: flex;
  justify-content: center;
  gap: 40px;

}
.요일 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid #dedede;
  border-radius: 100%;
  font-size: 24px;
  color: #000;
  transition: all 0.15s;
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

.요일_미선택:hover {
  cursor: pointer;
}
.요일_미선택:active {
  background: #b8b6c9;
  color: #ffffff;
}
</style>