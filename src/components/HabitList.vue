<template>
  <div class="습관카드_상위박스">
    <div
      class="습관카드_박스 습관카드_미달성"
      v-if="habitItem.activated === false"
    >
      <div class="습관카드_내용카드">
        <img
          @click="recieveHabitItem.activated = true"
          src="@/assets/img_check_unexecuted.png"
        />

        <div class="내용카드_습관이름">
          [{{ habitItem.field }}]{{ habitItem.objective }}
        </div>
        <img src="@/assets/img_edit.png" />
      </div>
    </div>
    <div
      class="습관카드_박스"
      :class="[
        { 습관카드_달성색상1: habitItem.field == '회사생활' },
        { 습관카드_달성색상2: habitItem.field == '생활습관' },
        { 습관카드_달성색상3: habitItem.field == '학습' },
        { 습관카드_달성색상4: habitItem.field == '취미' },
        { 습관카드_달성색상5: habitItem.field == '운동' },
        { 습관카드_달성색상6: habitItem.field == '독서' },
        { 습관카드_달성색상7: habitItem.field == '돈관리' },
        { 습관카드_달성색상8: habitItem.field == '나를 위한 시간' },
      ]"
      v-if="habitItem.activated === true"
    >
      <div class="습관카드_내용카드">
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '회사생활'"
          src="@/assets/img_check_business_life.png"
        />
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '생활습관'"
          src="@/assets/img_check_lifestyle.png"
        />
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '학습'"
          src="@/assets/img_check_learning.png"
        />
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '취미'"
          src="@/assets/img_check_hobby.png"
        />
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '운동'"
          src="@/assets/img_check_exercise.png"
        />
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '독서'"
          src="@/assets/img_check_reading.png"
        />
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '돈관리'"
          src="@/assets/img_check_money_management.png"
        />
        <img
          @click="recieveHabitItem.activated = false"
          v-if="habitItem.field == '나를 위한 시간'"
          src="@/assets/img_check_time_for_me.png"
        />
        <div class="내용카드_습관이름">
          [{{ habitItem.field }}]{{ habitItem.objective }}
        </div>
        <img class="수정버튼" src="../assets/img_edit.png" />
      </div>
      <div class="내용카드_구분선"></div>
      <div class="달성목표_실천박스">
        <div class="내용카드_실천횟수">{{ 0 }}째 실천중!!!</div>
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

<style scoped>
.습관카드_상위박스 {
  width: max-content;
  height: max-content;
}

.습관카드_박스 {
  position: relative;
  display: flex;
  flex-flow: column;
  width: 672px;
  height: 160px;
  padding: 10px 5px 14px 20px;
  margin-bottom: 10px;
  border-radius: 15px;
}
.습관카드_미달성 {
  background: #dddddd;
  height: 100px;
  padding: 25px 5px 25px 20px;
  font-weight: bold;
}
.습관카드_달성색상1 {
  background: #95dfd2;
}
.습관카드_달성색상2 {
  background: #ffb6f2;
}
.습관카드_달성색상3 {
  background: #ffd98e;
}
.습관카드_달성색상4 {
  background: #eaa2a6;
}
.습관카드_달성색상5 {
  background: #b8b1f0;
}
.습관카드_달성색상6 {
  background: #a8ddad;
}
.습관카드_달성색상7 {
  background: #afc2ff;
}
.습관카드_달성색상8 {
  background: #ffbaaa;
}
.습관카드_내용카드 {
  display: flex;
  flex-flow: row;
  height: 54px;
  margin-bottom: 14px;
  border-radius: 5px 5px 0% 0%;
}
.체크버튼 {
  margin-top: 4px;
}
.습관카드_내용카드 img {
  margin-top: 4px;
}
.습관카드_미달성 img {
  margin: 0;
}
.습관카드_미달성 .습관카드_내용카드 {
  height: 50px;
  margin: 0;
}
.달성목표_실천박스 {
  display: flex;
  flex-flow: row;
  height: 30px;
  margin: auto 0;

  justify-content: flex-start;
  border-radius: 0% 0% 5px 5px;
  /* border-top: solid 1px white; */
}
.내용카드_습관이름 {
  font-weight: bold;
  font-size: 24px;
  line-height: 54px;
  flex-grow: 1;
  color: #000000;
  text-align: left;
  padding-left: 30px;
}
.습관카드_미달성 .내용카드_습관이름 {
  line-height: 50px;
}
.내용카드_실천횟수 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #666666;
  flex-grow: 0;

  margin: 0 18px 0 80px;
}
.check아이콘 {
  width: 50px;
  height: 50px;
}

.내용카드_구분선 {
  border-top: 2px solid #fff;
  width: 540px;
  height: 0;
  margin-left: 80px;
}
img {
  width: 50px;
  height: 50px;
}
</style>