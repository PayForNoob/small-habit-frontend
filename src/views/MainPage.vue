<template>
  <div class="contents">
    <habit-header class="header"></habit-header>
    Main
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
header img {
  width: 50px;
  height: 50px;
}
</style>