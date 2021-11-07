<template>
  <habitToday></habitToday>
  <habitTotal></habitTotal>
  <app-input></app-input>
  <app-list></app-list>
  <app-footer></app-footer>
</template>

<script>
import habitToday from "./views/habitToday.vue"; // eslint-disable-line no-unused-vars
import habitTotal from "./views/habitTotal.vue"; // eslint-disable-line no-unused-vars
import appList from "./components/appList.vue";
import appInput from "./components/appInput.vue";
import appFooter from "./components/appFooter.vue";

export default {
  components: {
    habitToday: habitToday,
    habitTotal: habitTotal,
    "app-list": appList,
    "app-input": appInput,
    "app-footer": appFooter,
  },
};
</script>

<style>
</style>