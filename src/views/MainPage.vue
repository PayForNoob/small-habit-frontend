<template>
  <div class="container">
    <habit-header class="header"></habit-header>
    <div class="contents">
      <div class="text">
        <div class="text_header">
          <p>
            소소한 습관이
          </p>
          <p>
            당신의 삶을 바꿉니다.
          </p>
        </div>
        <div class="text_main">
          <p>
            <span class="emphasis">"소소한 습관"</span>은 다양한 분야별로 습관을 설정할 수 있으며
          </p>
          <p>
            세부습관 설정을 통해 삶에 도움이 되는 습관을 효과적으로 관리할 수 있습니다.
          </p>
        </div>
      </div>
      <div class="img">
        <img src="@/assets/main.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import HabitHeader from '../components/HabitHeader.vue'

export default {
  components: {
    HabitHeader
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header img {
  width: 50px;
  height: 50px;
}
.contents {
  width: 720px;
  margin-top: calc((100vh - 846px)/4  );
  display: flex;
  flex-direction: column;
}
.text {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 50px;
}
.text_header {
  font-size: 30px;
  font-weight: bold;
}
.text_main {
  font-size: 16px;
  margin-top: 20px;
}
.emphasis {
  font-weight: bold;
}
.img {
  margin-top: 20px;
}
.img img {
  width: 720px;
  height: 500px;
}
</style>