const state = {
  userName: "lison"
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME(state, params) {
    state.userName = params
  }
}
const actions = {
  //里面包含一个对象,用来提交mutations
  //第二参数当前state的
  //rootStete 根实例上的
  //dispatch调用模块
  updateUserName({ commit, state, rootStete,dispatch }) {
    // rootStete.appName
    dispatch('xxx','')
  },
  xxx(){

  }
}
export default {
  //命名空间
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
  modules: {
    //
  }
}