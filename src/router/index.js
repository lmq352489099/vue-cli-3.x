import Vue from 'vue'
import Router from 'vue-router'
import routes from './router';
import {setTitle} from '@/lib/util';
Vue.use(Router)

// export default new Router({
//   //默认是哈希模式
//   //无刷新页面的跳转,如果需要history模式你需要后端的模式的
//   mode:'history',
//   routes: routes
// })

const router = new Router({
  routes
})

const HAS_LOGINEG = true

//路由守卫
//前置守卫
router.beforeEach((to, from, next) => {
  // if(to.meta.title)
  // if 干嘛 还不如直接用下面的
  to.meta.title && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINEG) next()
    else next({
      name: "login"
    })
  } else {
    if (HAS_LOGINEG) next({
      name: "home"
    })
    else next()
  }
})

//也是全局守卫
//区别在他是在导航被确定之前,异步路由组件解析之后调用的
// router.beforeResolve
//还有一个路由独享守卫

//后置钩子(守卫)
//路由跳转之后做什么操作
//一般是在beforeEach的时候加个login的样式,然后在这边取消
router.afterEach((to, from) => {
  //logining = false

})
/**
 * 1.导航被触发
 * 2.在失活的组件(即将离开的页面组件) 里调用离开守卫 beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件里调用 beforeRouteUpdate  如果不是被复用的就会调用beforeRouteEnter
 * 5.调用路由独享的守卫   beforEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件(即将进入的页面组件) 里调用 beforeRouteEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认了
 * 10.调用全局的后置守卫 afterEach
 * 11.会触发DOM更新
 * 12.用创建好的实例调用beforeRouterEnter 守卫里传给next的回调函数
 */
export default router
