const getters = {
    //第一个参数代表你当前vuex实例中统计的state
    //可以通过state.appName 来获取值
    appNameWithVersion: (state) => {
        return state.appName + '2.0'
    }
}
export default getters