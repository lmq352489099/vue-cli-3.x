import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import user from "./module/user"
import saveInLocal from './plugin/savelnLocal';

Vue.use(Vuex)

export default new Vuex.Store({
  // 不能直接修改组件里面的值,开启严格模式
  // strict:true,
  strict: process.env.NODE_ENV === 'development',
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins: [saveInLocal]
})