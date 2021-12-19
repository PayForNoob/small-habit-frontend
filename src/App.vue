<template>
  <div>
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
a {
  text-decoration: none;
  color: #2c3e50;
}

.컨테이너 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.내용 {
  width: 720px;
  display: flex;
  flex-direction: column;
}
</style>
