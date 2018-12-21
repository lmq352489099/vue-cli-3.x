import { getAppName } from '@/api/app.js'
const actions = {
  //第一个参数是对象,在里面可以取到东西
  /**
   * 下面的是ES6写法
   *  updateAppName({commit}) 相当于 
   *   updateAppName(paramsObj){
   *    const commit = paramsObj.commit
   *    }
   */
  //处理不够优雅
  //里面包含一个对象,用来提交mutations
  // updateAppName({ commit }) {
  // console.log({commit});

  // getAppName().then(res => {
  //   console.log(res);
  //   const { code, info } = res
  //   commit('SET_APP_NAME', res.info)
  // }).catch(err => {
  //   console.log(err);
  // })
  // }
  //ES8的
  //里面包含一个对象,用来提交mutations
  async updateAppName({ commit }) {
    try {
      const { info } = await getAppName()
      commit('SET_APP_NAME', info)
    } catch (err) {
      console.log(err);
    }
  }
}
export default actions