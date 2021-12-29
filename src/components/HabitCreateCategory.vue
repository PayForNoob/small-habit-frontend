<template>
  <div class="습관박스" :style="{ backgroundColor: category.color }" @click="createHabit">
    <div class="습관이름">{{category.name}}</div>
    <img :src="habitIcon" alt="습관 아이콘">
  </div>
</template>

<script>
export default {
  props: {
    categoryId:{
      type: Number,
      required: true
    }
  },
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
        path: `/create/${this.categoryId}`
      });
    },
  },
}
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
.습관박스 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 160px;
  height: 160px;
  padding-top: 10px;
  align-items: center; 
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px 30px 30px 30px;
}
.습관이름 {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  width: 100%;
}
</style>