<template>
  <router-link :to="{ name: 'habitCreate', params: { category: categoryId }}">
    <div class="습관박스" :style="{ backgroundColor: '#' + category.color }">
      <div class="습관이름">{{category.name}}</div>
      <img :src="habitIcon" alt="습관 아이콘">
    </div>
  </router-link>
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
      return require(`@/assets/habitIcon/img_habit_${this.category.iconUrl}.png`); 
    },
  },
  methods: {
    createHabit() {
      
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
a:nth-child(2n-1) .습관박스 {
  border-radius: 30px 0px 0px 30px;
}
a:nth-child(2n) .습관박스 {
  border-radius: 0px 30px 30px 0px;
}
a:nth-child(1) .습관박스 {
  border-radius: 30px 30px 0px 30px;
}
a:nth-child(2) .습관박스 {
  border-radius: 30px 30px 30px 0px;
}
a:nth-child(7) .습관박스 {
  border-radius: 30px 0px 30px 30px;
}
a:nth-child(8) .습관박스 {
  border-radius: 0px 30px 30px 30px;
}
.습관이름 {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 30px;
}
</style>