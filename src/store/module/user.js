const state = {
  userName: "lison"
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  //
}
const actions = {
  //
}
export default {
  //命名空间
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
