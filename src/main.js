import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Bus from './lib/bus'
if (process.env.NODE_ENV !== 'production') require('./mock')
import Mock from './mock'
import CounTo from '_c/conut-to'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  //render中使用的方法
  // render: h => {
  //   return h(CounTo, {
  //     //给组件加类名
  //     // 'class': ['count-to', true ? 'aa' : 'bb'],
  //     // 'class': { 'count-to': 1 === 1 },
  //     class: [],
  //     attr: {},
  //     style: {},
  //     props: {
  //       endVal: 100
  //     },
  //     // domProps:{
  //     //   innerHTML'123'
  //     // },
  //     on: {
  //       "on-annimation-end": (val) => {
  //         console.log("animation-end");
  //       }
  //     },
  //     nativeOn: {
  //       'click': () => {
  //         console.log('click');
  //       }
  //     },
  //     //在里面可以定义自定义的指令
  //     directives: [],
  //     scopedSlots: {},
  //     slot: '',
  //     key: '',
  //     ref: ''
  //   })
  // }
  //在里面创建虚拟节点
  render: h => h('div', [
    h('span', '111'),
    h('span', '222')
  ])
}).$mount('#app')
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


// new Vue({
//   router,
//   store,
//   render: h => {
//     return h('div', {
//       attrs: {
//         id: "box"
//       },
//       style: {
//         color: 'pink'
//       }
//     }, 'lmq')
//   }
// }).$mount('#app')