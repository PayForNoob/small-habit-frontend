<template>
  <div id="컨테이너">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
}
* input {
  outline: none;
}
body {
  width: 100vw;
  height: 100vh;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
#app {
  display: flex;
  justify-content: center;
  height: 100%;
}
#컨테이너 {
  width: 100%;
  height: 100%;
  max-width: 420px;
}
.컨테이너 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.컨테이너_내용 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100% - 90px);
}
.내용 {
  display: flex;
  flex-direction: column;
}
</style>
