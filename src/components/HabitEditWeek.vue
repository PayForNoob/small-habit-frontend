<template>
  <div class="흰배경_박스">
    <div class="반복_박스">
      <img class="반복_이미지" src="@/assets/img_clapping.png" />
      <div class="반복_버튼">매주 (주에 {{ number }}번)</div>
    </div>
    <div class="요일_박스">월화수목금토일</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 3,
    };
  },
};
</script>

<style>
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
}
.반복_이미지 {
  margin-right: 40px;
}
.반복_버튼 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;

  color: #000000;
}
.요일_박스 {
  min-height: 50px;
}
</style>