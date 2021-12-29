<template>
  <div class="습관카드_상위박스">
    <div class="습관카드_박스" :class="backgroundColor">
      <!-- 상단 -->
      <div class="습관카드_내용카드">
        <!-- 체크버튼 -->
        <!-- 미달성 -->
        <img
          @click="habitPracticed(habitItem.id)"
          src="@/assets/checkBtn/img_check_unexecuted.png"
          alt=""
          v-if="$route.path != '/total' && !practiced"
          :class="{ '체크버튼': $route.path != '/total' }"
        />
        <!-- 달성 -->
        <img
          @click="undoPracticed(habitItem.id)"
          :src="checkBtn"
          v-if="$route.path == '/total' || practiced"
          :class="{ '체크버튼': $route.path != '/total' }"
        />

        <!-- 습관이름 -->
        <div class="내용카드_습관이름">
          [{{ categoryName }}]{{ habitItem.objective }}
        </div>

        <!-- 수정버튼 -->
        <img
          class="수정버튼 버튼"
          src="@/assets/img_edit.png"
          @click="clickEdit"
        />
      </div>

      <!-- 세부습관 -->
      <div class="세부습관_목록">
        <div
          v-for="detailedObjective in habitItem.detailedObjectives"
          :key="detailedObjective.id"
          class="세부습관"
        >
          <img src="@/assets/dot.png" alt="" />
          {{ detailedObjective.objective }}
        </div>
      </div>
      
      <div v-if="$route.path == '/total' || practiced" class="구분선"></div>
      <!-- 하단 -->
      <div 
      v-if="$route.path == '/total' || practiced"
      class="달성목표_실천박스">
        <div class="실천횟수">{{ totalPracticed }}회째 실천중!!!</div>
        <img v-for="num in 3" :key="num" src="@/assets/img_clapping.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    habitItem: {
      type: Object,
      required: true
    }},
  data() {
    return {
      categoryName: this.$store.state.habitCategory[this.habitItem.category].name,
      checkBtnUrl: this.$store.state.habitCategory[this.habitItem.category].imgUrl,
      detailedHabits: this.habitItem.detailedObjectives,
      practiced: this.habitItem.practiced,
      totalPracticed: this.habitItem.totalPracticed,
    };
  },
  computed: {
    backgroundColor() {
      if (this.$route.path == "/total" || this.practiced) {
        return "습관카드_달성색상" + this.habitItem.category;
      } else {
        return "습관카드_미달성";
      }
    },
    checkBtn() {
      return require(`@/assets/checkBtn/img_check_${this.checkBtnUrl}.png`);
    },
    today() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let date = new Date().getDate();
      return year + "-" + month + "-" + date;
    }
  },
  methods: {
    // 습관 실천하기
    async habitPracticed(id) {
      try {
        await this.axios({
          method: "post",
          url: `/api/practiced/${id}`,
          data: {
            date: this.today,
          },
        });
      } catch (err) {
        console.log(err);
      }
      await this.checkPracticed();
      this.totalPracticed += 1;
    },

    // 습관 실천 취소
    async undoPracticed(id) {
      if (this.$route.path != "/total") {
        try {
          await this.axios({
            method: "delete",
            url: `/api/practiced/${id}`,
            params: {
              date: this.today,
            },
          });
        } catch (err) {
          console.log(err);
        }
        await this.checkPracticed();
        this.totalPracticed -= 1;
      }
    },

    // 습관 실천여부 확인
    async checkPracticed() {
      let { data } = await this.axios({
        method: "get",
        url: `/api/practiced/${this.habitItem.id}`,
        params: {
          date: this.today,
        },
      });
      this.practiced = data;
    },

    // 수정버튼 클릭
    clickEdit() {
      this.$router.push({
        path: `/edit/${this.habitItem.id}`,
      });
    },
  },
};
</script>

<style scoped>
.버튼 {
  cursor: pointer;
}

/* 배경색 */
.습관카드_달성색상0 {
  background: #b8b1f0;
}
.습관카드_달성색상1 {
  background: #eaa2a6;
}
.습관카드_달성색상2 {
  background: #a8ddad;
}
.습관카드_달성색상3 {
  background: #ffd98e;
}
.습관카드_달성색상4 {
  background: #afc2ff;
}
.습관카드_달성색상5 {
  background: #95dfd2;
}
.습관카드_달성색상6 {
  background: #ffbaaa;
}
.습관카드_달성색상7 {
  background: #ffb6f2;
}
.습관카드_미달성 {
  background: #dddddd;
}
.습관카드_상위박스 {
  width: 100%;
}
.체크버튼 {
  cursor: pointer;
}
.습관카드_박스 {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  padding: 20px 0px;
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 20px;
}

/* 상단 */
.습관카드_내용카드 {
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
  padding: 0px 4px 0px 20px;
  border-radius: 5px 5px 0% 0%;
}
.습관카드_내용카드 img {
  width: 30px;
  height: 30px;
}
.내용카드_습관이름 {
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  flex-grow: 1;
  color: #000000;
  text-align: left;
  padding-left: 20px;
}
img.수정버튼 {
  opacity: 40%;
}

/* 세부습관 */

.세부습관_목록 {
  width: 100%;
  height: max-content;
  line-height: 30px;
  padding-left: 60px;
  text-align: left;
  font-size: 16px;
  color: #000;
}
.세부습관 {
  display: flex;
  align-items: center;
}
.세부습관_목록 img {
  width: 6px;
  height: 6px;
  margin-right: 10px;
}
/* 구분선 */
.구분선 {
  border-top: 2px solid #fff;
  width: 80%;
  height: 0;
}

/* 하단 */
.달성목표_실천박스 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 30px;
  align-items: center;
  border-radius: 0% 0% 5px 5px;
}
.달성목표_실천박스 img {
  width: 26px;
  height: 26px;
}
.실천횟수 {
  font-size: 16px;
  color: #666666;
  flex-grow: 0;
  margin-right: 14px;
}
</style>