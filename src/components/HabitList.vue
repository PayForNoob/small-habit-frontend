<template>
<div v-for="(habitItem, index) in habitItems" v-bind:key="index" class="목표container" >
        <div  class="목표box 목표미실행color" v-if="habitItem.activated === false" :load="log(habitItem)"  >
          <div class="달성목표_내용박스">
            <img @click=" habitItem.activated=true "  src='../assets/check-mark1.png'>
            <div class="달성목표이름">[{{habitItem.field}}]{{habitItem.objective}}</div>
            <img src='../assets/edit.png'>
          </div>
        </div>

        <div class="목표box 목표실행후color" v-if="habitItem.activated === true "> 
          <div class="달성목표_내용박스">
            <img @click=" habitItem.activated=false"  src='../assets/check-mark2.png'>
            <div class="달성목표이름">[{{habitItem.field}}]{{habitItem.objective}}</div>
            <img src='../assets/edit.png'>
          </div>
          <div class="구분선"></div>
          <div class="달성목표_실천박스">
            <div class="달성실천횟수">{{habitExecutionCount}}회 실천중</div>
            <i class="far fa-grin-alt fa-2x"></i>
            <i class="far fa-grin-alt fa-2x"></i>
            <i class="far fa-grin-alt fa-2x"></i>
          </div>

        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            LogoData: "Logo",
      
      actionButtonClick:0,
      habitItems:[ 
                  {
                    userId: 1,
                    field: '돈관리',
                    objective: '매일 커피 1잔 덜마시기',
                    schedule: {
                    everyday: true
                    },
                    activated: true
                  },
                  {
                    userId: 1,
                    field: '운동',
                    objective: '달리기',
                    schedule: {
                    everyday: true
                    },
                    activated: true
                  },
                  {
                    userId: 1,
                    field: '숨쉬기',
                    objective: '숨쉬기',
                    schedule: {
                    everyday: true
                    },
                    activated: false
                  }
],
      habitTypes : "운동",
      habitName : "걷기",
      habitTotalNum: 0,
      habitExecutionCount : 0,
        }
    },
};
</script>

<style>
</style>