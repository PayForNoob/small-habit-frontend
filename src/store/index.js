import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      user: null,
      loading: false,
      habitCategory: [{
        name: "운동",
        color: "#887DE5",
        imgUrl: "exercise"
      }, {
        name: "취미",
        color: "#E17279",
        imgUrl: "hobby"
      }, {
        name: "독서",
        color: "#74BF7C",
        imgUrl: "reading"
      }, {
        name: "학습",
        color: "#F5BD4E",
        imgUrl: "learning"
      }, {
        name: "자산관리",
        color: "#7191F8",
        imgUrl: "money_management"
      }, {
        name: "회사생활",
        color: "#55BAA8",
        imgUrl: "business_life"
      }, {
        name: "나를 위한 시간",
        color: "#F29782",
        imgUrl: "time_for_me"
      }, {
        name: "생활습관",
        color: "#E28BD2",
        imgUrl: "lifestyle"
      }]
    }
  },
  mutations: {
    loadingStart (state) {
      state.loading = true
    },
    loadingEnd (state) {
      state.loading = false
    },
  },
  actions: {

  },
  modules: {
  }
});