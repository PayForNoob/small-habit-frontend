<template>
  <div class="습관박스" :style="{ backgroundColor: '#' + category.color }" @click="createHabit">
    <div class="습관이름">{{category.name}}</div>
    <img :src="habitIcon" alt="습관 아이콘">
  </div>
</template>

<script>
export default {
  props: ["categoryId"],
  data() {
    return {
      category: this.$store.state.habitCategory[this.categoryId]
    }
  },
  computed: {
    habitIcon() {
      return require(`@/assets/habitIcon/img_habit_${this.category.imgUrl}.png`); 
    },
  },
  methods: {
    createHabit() {
      this.$router.push({
        path: `/habitCreate/${this.categoryId}`,
      });
    },
  },
}
</script>

<style scoped>
img {
  width: 140px;
  height: 140px;
}
.습관박스 {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 260px;
  padding-top: 24px;
  gap: 16px;
  align-items: center; 
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
}
.습관박스:nth-child(2n-1) {
  border-radius: 30px 0px 0px 30px;
}
.습관박스:nth-child(2n) {
  border-radius: 0px 30px 30px 0px;
}
.습관박스:nth-child(1) {
  border-radius: 30px 30px 0px 30px;
}
.습관박스:nth-child(2) {
  border-radius: 30px 30px 30px 0px;
}
.습관박스:nth-child(7) {
  border-radius: 30px 0px 30px 30px;
}
.습관박스:nth-child(8) {
  border-radius: 0px 30px 30px 30px;
}
.습관이름 {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 30px;
}
</style>