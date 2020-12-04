import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    basicSettings: {},
    formList: [],
    formDetail: {},
    processData: {},
    advancedSettings: {}
  },
  getters: {

  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {

  },

})
