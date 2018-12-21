import vue from 'vue'

const mutations = {
  //第一个参数是统计的state,
  //第二参数 ,如果有多个值是对象
  SET_APP_NAME(state, params) {
    state.appName = params.appName
  },
  SET_APP_VERSION(state) {
    //第一个值是你要给谁设置值,
    //第二在值是你要设置的名字,
    //第三个是你你要设置的值
    vue.set(state, 'appVersion', 'v2.0')
    // state.appVersion = 'v2.0'
  },
  SET_STATE_VALUE(state, value) {
    state.stateValue = value
  }
}
export default mutations