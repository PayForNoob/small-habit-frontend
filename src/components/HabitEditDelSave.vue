<template>
  <div class="삭제저장_박스">
    <div class="삭제_박스">삭제</div>
    <div class="저장_박스">저장</div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.삭제저장_박스 {
  display: flex;
  flex-flow: row;
  height: 100px;
  margin-top: auto;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 100px;
  text-align: center;

  color: #ffffff;
}
.삭제_박스 {
  width: 360px;
  background: #ff5757;
}
.저장_박스 {
  width: 360px;
  background: #887de5;
}
</style>