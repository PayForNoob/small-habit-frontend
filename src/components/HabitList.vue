<template>
  <div class="목표container">
    <div
      class="목표box 목표달성_미달성색상"
      v-if="habitItem.activated === false"
    >
      <div class="달성목표_내용박스">
        <img
          @click="recieveHabitItem.activated = true"
          src="@/assets/img_check_unexecuted.png"
        />

        <div class="달성목표이름">
          [{{ habitItem.field }}]{{ habitItem.objective }}
        </div>
        <img src="@/assets/img_edit.png" />
      </div>
    </div>
    <div
      class="목표box"
      :class="[
        { 목표달성_달성색상1: habitItem.field == '회사생활' },
        { 목표달성_달성색상2: habitItem.field == '생활습관' },
        { 목표달성_달성색상3: habitItem.field == '학습' },
        { 목표달성_달성색상4: habitItem.field == '취미' },
        { 목표달성_달성색상5: habitItem.field == '운동' },
        { 목표달성_달성색상6: habitItem.field == '독서' },
        { 목표달성_달성색상7: habitItem.field == '돈관리' },
        { 목표달성_달성색상8: habitItem.field == '나를 위한 시간' },
      ]"
      v-if="habitItem.activated === true"
    >
      <div class="달성목표_내용박스">
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '회사생활'"
          src="@/assets/img_check_business_life.png"
        />
        <div class="달성목표이름">
          [{{ habitItem.field }}]{{ habitItem.objective }}
        </div>
        <img src="../assets/img_edit.png" />
      </div>
      <div class="구분선"></div>
      <div class="달성목표_실천박스">
        <div class="달성실천횟수">{{ 0 }}회 실천중</div>
        <img
          style="height: 30px; width: 30px"
          src="@/assets/img_clapping.png"
        />
        <img
          style="height: 30px; width: 30px"
          src="@/assets/img_clapping.png"
        />
        <img
          style="height: 30px; width: 30px"
          src="@/assets/img_clapping.png"
        />
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.habitItem.field);
  },
  props: ["habitItem"],
  data() {
    return {
      recieveHabitItem: this.habitItem,
      habitfields: {
        field1: "회사생활",
        field2: "생활습관",
        field3: "학습",
        field4: "취미",
        field5: "운동",
        field6: "독서",
        field7: "돈관리",
        field8: "나를 위한 시간",
      },
    };
  },
};
</script>

<style scope>
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
.목표달성_미달성색상 {
  background: #dddddd;
}
.목표달성_달성색상1 {
  background: #95dfd2;
}
.목표달성_달성색상2 {
  background: #ffb6f2;
}
.목표달성_달성색상3 {
  background: #ffd98e;
}
.목표달성_달성색상4 {
  background: #eaa2a6;
}
.목표달성_달성색상5 {
  background: #b8b1f0;
}
.목표달성_달성색상6 {
  background: #a8ddad;
}
.목표달성_달성색상7 {
  background: #afc2ff;
}
.목표달성_달성색상8 {
  background: #ffbaaa;
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