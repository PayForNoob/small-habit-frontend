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
        <div class="달성후목표박스윗부분">
          <i class="far fa-check-circle fa-2x"></i>
          <div class="달성목표이름">[운동]뛰기</div>
          <i class="far fa-edit fa-2x"></i>
        </div>
        <div class="달성후목표박스아랫부분">
          <div class="달성실천횟수">11회 실천중</div>
          <i class="far fa-grin-alt fa-2x"></i>
          <i class="far fa-grin-alt fa-2x"></i>
          <i class="far fa-grin-alt fa-2x"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style>
</style>