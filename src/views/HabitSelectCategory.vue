<template>
  <div class="container">
    <div class="contents">
      <div>
        <div class="habitCreate">
          <div @click="previousPage">
            <img src="@/assets/Previous-black.png" alt="뒤로가기">
          </div>
          <div>
            습관생성
          </div>
        </div>
      </div>
      <div class="coment">
        <div>원하는 습관의 분야를</div>
        <div>선택해보세요!</div>
      </div>
      <div class="습관목록">
        <HabitCreateCategory
          v-for="(category, ind) in 8"
          :categoryId="ind"
          :key="ind"
        >
        </HabitCreateCategory>
      </div>
    </div>
  </div>
</template>

<script>
import HabitCreateCategory from '../components/HabitCreateCategory.vue'

export default {
  components: {
    HabitCreateCategory
  },
  methods: {
    previousPage() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #9b9b9b;
  border-radius: 5px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contents {
  width: 720px;
  display: flex;
  flex-direction: column;
}
.habitCreate {
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100px;
  padding-left: 24px;
  font-size: 30px;
}
.habitCreate div {
  display: flex;
  align-items: center;
  height: 100%;
}
.habitCreate div:first-child {
  cursor: pointer;
}
.habitCreate img {
  width: 26px;
  height: 26px;
}
.coment {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  margin-bottom: 70px;
}
.coment div {
  display: flex;
  width: 100%;
  font-size: 30px;
}
.습관목록 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  height: calc(100vh - 250px);
  padding-left: 10px;
  padding-bottom: 20px;
  overflow: auto;
}

</style>