<template>
  <div class="confirm">
    <slot name="header"></slot>
    <slot name="contents"></slot>
    <slot name="confirm"> 확인 </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.confirm {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 720px;
  height: 360px;
  padding: 50px 20px 0px;
  margin: 0 auto;
  border-radius: 30px;
}
</style>