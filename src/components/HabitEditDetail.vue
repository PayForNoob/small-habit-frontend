<template>
  <div class="흰배경_박스">
    <div class="세부일정_박스">
      <img
        class="_30px이미지"
        id="느낌표이미지"
        src="@/assets/img_check_unexecuted.png"
      />
      <p class="머릿말글씨">세부내역</p>
      <img src="@/assets/img_check_unexecuted.png" />
    </div>
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
.세부일정_박스 {
  display: flex;
  flex-flow: row;
}
._30px이미지 {
  height: 30px;
  width: 30px;
}
#느낌표이미지 {
  margin-right: 40px;
}
.머릿말글씨 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;

  color: #000000;

  margin-right: 396px;
}
</style>