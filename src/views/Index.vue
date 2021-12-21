<template>
  <div class="컨테이너">
    <Header />
    <div class="컨테이너_내용">
      <div class="문자열">
        <div class="문자열_머릿말">
          <p>소소한 습관이</p>
          <p>당신의 삶을 바꿉니다.</p>
        </div>
        <div class="문자열_내용">
          <p>
            <span class="문자열_강조">"소소한 습관"</span>은 다양한 분야별로
            습관을 설정할 수 있으며
          </p>
          <p>
            세부습관 설정을 통해 삶에 도움이 되는 습관을 효과적으로 관리할 수
            있습니다.
          </p>
        </div>
      </div>
      <div class="이미지">
        <img src="@/assets/main.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.컨테이너 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.컨테이너_내용 {
  max-width: 720px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.문자열 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  padding: 50px;
}
.문자열_머릿말 {
  font-size: 30px;
  font-weight: bold;
}
.문자열_내용 {
  font-size: 16px;
  margin-top: 20px;
}
.문자열_강조 {
  font-weight: bold;
}
.이미지 {
  width: 720px;
  height: 500px;
}
@media (max-width: 750px) {
  .이미지 {
    width: 100vw;
    height: auto;
  }
  img {
    width: 100vw;
    height: auto;
  }
  .문자열 {
    padding: 20px;
  }
  .문자열_머릿말 {
    font-size: 24px;
  }
  .문자열_내용 {
    font-size: 12px;
  }
}
</style>