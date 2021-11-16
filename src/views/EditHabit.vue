<template>
  <div class="row">
    <div class="container">
      <div class="상단메뉴_박스">
        <div class="뒤로가기_박스">
          <button class="뒤로가기_글씨">◁ 습관수정</button>
        </div>
        <div class="습관및이미지_박스">
          <div class="습관_박스">
            <div class="습관종류">운동</div>
            <div class="습관명">
              6글자제한
              <img class="" src="@/assets/img_edit.png" />
            </div>
          </div>
          <div class="습관이미지_박스">
            <img class="습관_이미지" src="@/assets/img_edit.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: row;

  justify-content: center;
}
.container {
  display: flex;
  flex-flow: column;
  width: 720px;
  border: 1px solid rgb(224, 218, 218);
  margin-top: 80px;
  padding: ;
  /* justify-content: center; */
}
.상단메뉴_박스 {
  height: 307px;
  background: #887de5;
  border-radius: 0px 0px 0px 30px;
  padding: 33px 66px 0 24px;
}
.뒤로가기_박스 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  margin-bottom: 82px;
  /* width: 120px; */
}
.뒤로가기_글씨 {
  background: #887de5;
  color: #e2e2e2;
}
.습관및이미지_박스 {
  display: flex;
  flex-flow: row;
  padding: 0 0 0 40px;
}
.습관_박스 {
  display: flex;
  flex-flow: column;
  width: 300px;
}
.습관종류 {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 50px;
  color: #887de5;
  width: fit-content;
  text-align: center;
  /* identical to box height */
  height: 50px;
  padding: 0 26px;
}
.습관명 {
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  /* border-bottom: 2px solid #ffffff; */
  text-decoration: underline;
  color: #e2e2e2;
  text-overflow: clip;
  width: fit-content;
}
.습관이미지_박스 {
  width: 300px;
}
.습관_이미지 {
  width: 160px;
  height: 160px;
}
</style>