import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      user: null,
      loading: false,
      habitCategory: {
        0: {
          name: "운동",
          color: "887DE5",
          iconUrl: "exercise"
        },
        1: {
          name: "취미",
          color: "E17279",
          iconUrl: "hobby"
        },
        2: {
          name: "독서",
          color: "74BF7C",
          iconUrl: "reading"
        },
        3: {
          name: "학습",
          color: "F5BD4E",
          iconUrl: "learning"
        },
        4: {
          name: "자산관리",
          color: "7191F8",
          iconUrl: "money_management"
        },
        5: {
          name: "회사생활",
          color: "55BAA8",
          iconUrl: "business_life"
        },
        6: {
          name: "나를 위한 시간",
          color: "F29782",
          iconUrl: "time_for_me"
        },
        7: {
          name: "생활습관",
          color: "E28BD2",
          iconUrl: "lifestyle"
        }
      }
    }
  },
  mutations: {
    loadingStart (state) {
      state.loading = true
    },
    loadingEnd (state) {
      state.loading = false
    }
  },
  actions: {

  },
  modules: {
  }
});