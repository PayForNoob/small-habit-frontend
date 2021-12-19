<template>
  <div class="컨테이너">
    <div class="내용">
      <div class="제목">
        <div @click="previousPage">
          <img src="@/assets/Previous-black.png" alt="뒤로가기">
        </div>
        <div>
          습관생성
        </div>
      </div>
      <div class="설명">
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
.제목 {
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100px;
  padding-left: 24px;
  font-size: 30px;
}
.제목 div {
  display: flex;
  align-items: center;
  height: 100%;
}
.제목 div:first-child {
  cursor: pointer;
}
.제목 img {
  width: 26px;
  height: 26px;
}
.설명 {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  margin-bottom: 70px;
}
.설명 div {
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