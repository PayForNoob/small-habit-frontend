<template>
  <div class="흰배경_박스">
    <div class="세부일정머릿글_박스">
      <img
        class="_30px_이미지"
        id="느낌표_이미지"
        src="@/assets/img_detail_point.png"
      />
      <p class="머릿말글씨">세부내역</p>
      <img class="추가버튼_이미지" src="@/assets/img_detail_plus.png" />
    </div>
    <li class="세부일정내용_박스">
      가나다라 20회
      <img class="세부일정삭제버튼_이미지" src="@/assets/img_detail_del.png" />
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.흰배경_박스 {
  margin: 0px 24px 10px 24px;
  min-height: 30px;
  background-color: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-flow: column;
  padding: 20px 20px 32px 40px;
}
.세부일정머릿글_박스 {
  display: flex;
  flex-flow: row;
}
.세부일정내용_박스 {
  display: flex;
  flex-flow: row;
  margin-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: left;

  margin-left: 70px;
}
._30px_이미지 {
  height: 30px;
  width: 30px;
  margin-top: 10px;
}
#느낌표_이미지 {
  margin-right: 40px;
}
.추가버튼_이미지 {
  height: 50px;
  width: 50px;
  margin-left: auto;
}
.세부일정삭제버튼_이미지 {
  height: 24px;
  width: 24px;
  margin-right: 110px;
  margin-left: auto;
  margin-top: 3px;
}
.머릿말글씨 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 50px;

  color: #000000;
}
</style>