<template>
  <div class="습관카드_상위박스">
    <div class="습관카드_박스" :class="backgroundColor">
      <!-- 상단 -->
      <div class="습관카드_내용카드">
        <!-- 체크버튼 -->
        <!-- 미달성 -->
        <img
          @click="habitPracticed(habitItem.id)"
          src="@/assets/img_check_unexecuted.png"
          alt=""
          v-if="$route.path != '/total' && !practiced"
          :class="{ pointer: $route.path != '/total' }"
        />
        <!-- 달성 -->
        <img
          @click="undoPracticed(habitItem.id)"
          :src="checkBtn"
          v-if="$route.path == '/total' || practiced"
          :class="{ pointer: $route.path != '/total' }"
        />

        <!-- 습관이름 -->
        <div class="내용카드_습관이름">
          [{{ categoryName }}]{{ habitItem.objective }}
        </div>

        <!-- 수정버튼 -->
        <img
          class="수정버튼 pointer"
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

      <!-- 하단 -->
      <div v-if="$route.path == '/total' || practiced">
        <div class="구분선"></div>
        <div class="달성목표_실천박스">
          <div class="실천횟수">{{ totalPracticed }}회째 실천중!!!</div>
          <img v-for="num in 3" :key="num" src="@/assets/img_clapping.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["habitItem"],
  data() {
    return {
      today: null,
      categoryName: null,
      checkBtnUrl: null,
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
      return require(`@/assets/img_check_${this.checkBtnUrl}.png`);
    },
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
        params: {
          id: this.habitItem.id,
        },
      });
      console.log(this.habitItem.id);
    },
  },
  async created() {
    switch (this.habitItem.category) {
      case 0:
        this.checkBtnUrl = "exercise";
        this.categoryName = "운동";
        break;

      case 1:
        this.checkBtnUrl = "hobby";
        this.categoryName = "취미";
        break;

      case 2:
        this.checkBtnUrl = "reading";
        this.categoryName = "독서";
        break;

      case 3:
        this.checkBtnUrl = "learning";
        this.categoryName = "학습";
        break;

      case 4:
        this.checkBtnUrl = "money_management";
        this.categoryName = "자산관리";
        break;

      case 5:
        this.checkBtnUrl = "business_life";
        this.categoryName = "회사생활";
        break;

      case 6:
        this.checkBtnUrl = "time_for_me";
        this.categoryName = "나를 위한 시간";
        break;

      case 7:
        this.checkBtnUrl = "lifestyle";
        this.categoryName = "생활습관";
        break;

      default:
        this.checkBtnUrl = null;
        this.categoryName = null;
        break;
    }

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    this.today = year + "-" + month + "-" + date;
  },
};
</script>

<style scoped>
.pointer {
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

.습관카드_박스 {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  width: 672px;
  min-height: 100px;
  height: max-content;
  padding: 20px 0px;
  margin-bottom: 10px;
  border-radius: 15px;
}

/* 상단 */
.습관카드_내용카드 {
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0px 4px 0px 20px;
  border-radius: 5px 5px 0% 0%;
}
.습관카드_내용카드 img {
  width: 50px;
  height: 50px;
}
.내용카드_습관이름 {
  font-weight: bold;
  font-size: 24px;
  line-height: 50px;
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
  padding-left: 80px;
  text-align: left;
  font-size: 20px;
  color: #000;
}
.세부습관 {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.세부습관_목록 img {
  width: 6px;
  height: 6px;
  margin-right: 10px;
}
/* 구분선 */
.구분선 {
  border-top: 2px solid #fff;
  width: 548px;
  height: 0;
  margin: 10px 0px 10px 70px;
  margin-top: 10px;
}

/* 하단 */
.달성목표_실천박스 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding-left: 90px;
  align-items: center;
  border-radius: 0% 0% 5px 5px;
}
.달성목표_실천박스 img {
  width: 30px;
  height: 30px;
}
.실천횟수 {
  height: 50px;
  line-height: 50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #666666;
  flex-grow: 0;
  margin-right: 18px;
}
</style>