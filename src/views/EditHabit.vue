<template>
  <div class="row">
    <div class="container">
      <HabitEditHeader :message="message" :category="category" :name="name">
      </HabitEditHeader>
      <HabitEditWeek> </HabitEditWeek>
    </div>
  </div>
</template>

<script>
import HabitEditHeader from "@/components/HabitEditHeader.vue";
import HabitEditWeek from "@/components/HabitEditWeek.vue";
export default {
  props: ["category", "name"],
  components: {
    HabitEditHeader,
    HabitEditWeek,
  },
  created() {
    console.log(name);
  },
  data() {
    return {
      message: "습관명입력",
      habitItems: [],
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: row;

  justify-content: center;
}

.container {
  display: flex;
  flex-flow: column;
  width: 720px;
  height: 1280px;
  /* 높이삭제해야함 */
  border: 1px solid rgb(224, 218, 218);

  background-color: #e1e1e1;
  /* justify-content: center; */
}
</style>