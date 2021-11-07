<template>
  <app-habit></app-habit>
  <app-input></app-input>
  <app-list></app-list>
  <app-footer></app-footer>
</template>

<script>
import appHabit from "./components/appHabit.vue"; // eslint-disable-line no-unused-vars
import appList from "./components/appList.vue";
import appInput from "./components/appInput.vue";
import appFooter from "./components/appFooter.vue";

export default {
  components: {
    "app-habit": appHabit,
    "app-list": appList,
    "app-input": appInput,
    "app-footer": appFooter,
  },
};
</script>

<style>
</style>