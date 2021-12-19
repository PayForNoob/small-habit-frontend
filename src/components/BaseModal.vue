<template>
  <div>
    <div class="bg"></div>
    <div class="confirm" >
      <slot name="header"></slot>
      <slot name="contents"></slot>
      <slot name="confirm"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes modal {
  from {
    bottom: -360px;
    opacity: 0;
  }

  to {
    bottom: 0px;
    opacity: 100%;
  }
}
.confirm {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation-name: modal;
  animation-duration: 0.25s;
  position: absolute;
  bottom: 0px;
  width: 720px;
  height: 360px;
  padding: 50px 0px 0px;
  border-radius: 30px;
  background-color: #fff;
}
@keyframes bg {
  from {
    opacity: 0;
  }

  to {
    opacity: 50%;
  }
}
.bg {
  animation-name: bg;
  animation-duration: 0.75s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 50%;
}
</style>