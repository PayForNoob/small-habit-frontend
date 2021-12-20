<template>
  <div class="컨테이너">
    <div class="내용">
      <div class="반복_주기">
        <img src="@/assets/img_dayCircle_circle.png" />
        <div><span class="굵은글씨">반복주기</span> (주 {{ number }}회)</div>
      </div>
      <div class="요일_박스" >
        <div v-for="(schedule, index) in week" :key="index">
          <div
            :style="{
              backgroundColor: schedulesTemp.includes(index)
                ? category.color
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
  props: {
    schedules: {
      type: Array,
    }, 
    category: {
      type: Object,
      required: true
    }},
  data() {
    return {
      week: ["일", "월", "화", "수", "목", "금", "토"],
      schedulesTemp: this.schedules,
    };
  },
  methods: {
    ButtonDay(ind) {
      if (this.schedulesTemp.includes(ind)) {
        this.schedulesTemp = this.schedulesTemp.filter((item) => item !== ind);
        this.schedulesTemp.sort();
      } else {
        this.schedulesTemp = [...this.schedulesTemp, ind];
        this.schedulesTemp.sort();
      }
      this.$emit("editSchedule", this.schedulesTemp);
      this.$forceUpdate();
    },
  },
  computed: {
    number() {
      return this.schedulesTemp.length;
    },
  },
};
</script>

<style scoped>
.내용 {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
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
.굵은글씨 {
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
  border-radius: 100%;
  font-size: 26px;
  color: #000;
  cursor: pointer;
  transition: all 0.15s;
}
.요일_선택 {
  color: #ffffff;
}
</style>