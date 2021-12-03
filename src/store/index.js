import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      user: null,
      loading: false
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