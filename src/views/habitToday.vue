<template>
  <div class="row">
    <div class="container">
      <div class="로고">{{ LogoData }}</div>
      <div class="상단메뉴">
        <div class="상단메뉴텍스트" id="전체목표_마이페이지">전체목표</div>
        <div class="상단메뉴텍스트" id="오늘실천">오늘실천</div>
        <div class="상단메뉴텍스트" id="전체목표_마이페이지">마이페이지</div>
      </div>
      <div class="상단메뉴라인"></div>
      <div class="목표목록박스">
        <div class="목표숫자표시박스">목표5</div>
        <div class="달성전목표박스">
          <i class="far fa-check-circle fa-2x"></i>
          <div class="달성목표이름">[운동]걷기</div>
          <i class="far fa-edit fa-2x"></i>
        </div>
        <div style="display: flex; flex-flow: column; padding: 25px; background-color: #ffce85;">
          <div class="달성후목표박스윗부분">
            <i class="far fa-check-circle fa-2x"></i>
            <div class="달성목표이름">[운동]뛰기</div>
            <i class="far fa-edit fa-2x"></i>
          </div>
          <div class="구분선"></div>
          <div class="달성후목표박스아랫부분">
            <div class="달성실천횟수">11회 실천중</div>
            <i class="far fa-grin-alt fa-2x"></i>
            <i class="far fa-grin-alt fa-2x"></i>
            <i class="far fa-grin-alt fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      LogoData: "Logo",
    };
  },
};
</script>

<style>
.row {
  display: flex;
  flex-flow: row;
  height: 1260px;
  justify-content: center;
}
.container {
  display: flex;
  flex-flow: column;
  width: 720px;
  border: 1px solid rgb(224, 218, 218);

  /* justify-content: center; */
}

.로고 {
  display: flex;
  flex-flow: column;
  font-family: Blinker;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 48px;
  line-height: 58px;
}
.상단메뉴 {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 640px;
  /* height: 70px; */
  padding: 21px 40px 21px 40px;
}
.상단메뉴텍스트 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
}
#오늘실천 {
  color: black;
  width: 120px;
  text-align: center;
}
#전체목표_마이페이지 {
  color: grey;
  width: 120px;
  text-align: center;
}
.상단메뉴라인 {
  border-top: 2px solid gray;
}
.목표목록박스 {
  display: flex;
  flex-direction: column;
}
.목표숫자표시박스 {
  display: flex;
  flex-flow: row-reverse;
  margin: 10px 24px 10px 24px;
  padding: 11px 20px 11px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: right;

  color: #000000;
}
.달성전목표박스 {
  display: flex;
  flex-flow: row;
  /* height: 100px; */
  margin: 0px 24px 10px 24px;
  padding: 25px;
  background-color: #dddddd;
  justify-content: space-between;
  border-radius: 5px;
}
.달성후목표박스윗부분 {
  display: flex;
  flex-flow: row;
  /* height: 100px; */
  margin: 0px 24px 0px 24px;
  padding: 25px;
  background-color: #ffce85;
  justify-content: space-between;
  border-radius: 5px 5px 0% 0%;
}
.달성후목표박스아랫부분 {
  display: flex;
  flex-flow: row;
  /* height: 100px; */
  margin: 0px 24px 0px 24px;
  padding: 25px;
  background-color: #ffce85;
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
  margin: 0 0 0 30px;
}
.달성실천횟수 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #666666;
  flex-grow: 0;

  margin: 0 0 0 62px;
}
.목표윗border {
}
.check아이콘 {
  width: 50px;
  height: 50px;
}

.구분선 {
  border-top: 1px solid #fff;
  height: 0;
  width: 100%;
}
</style>