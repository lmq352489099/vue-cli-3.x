export default store => {
    console.log("store初始化了");
  //store提供的方法
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  //当你每次提交之后的操作
  store.subscribe((mutation, state) => {
    // console.log("提交mutation");
    localStorage.state = JSON.stringify(state)
  })
}