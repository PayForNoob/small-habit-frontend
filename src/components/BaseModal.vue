<template>
  <div class="모달">
    <div class="배경"></div>
    <div class="모달영역">
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
@keyframes bg {
  from {
    opacity: 0;
  }

  to {
    opacity: 50%;
  }
}
.배경 {
  animation-name: bg;
  animation-duration: 0.25s;
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 50%;
}

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
.모달 {
  position: relative;
  width: 100%;
  background-color: #fff;
}
.모달영역 {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 200px;
  padding-bottom: 40px;

  animation-name: modal;
  animation-duration: 0.25s;  
  border-radius: 15px;
  background-color: #fff;
  text-align: center;
}
</style>