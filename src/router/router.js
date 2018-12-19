import Home from '@/views/Home.vue'
export default [{
    path: '/',
    //别名
    alias:"/home_page",
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: "/argu/:name",
    name: "argu",
    component: () => import('@/views/argu.vue')
  },
  {
    path: "/parent",
    name: "parent",
    component: () => import('@/views/parent.vue'),
    children: [{
      path: "child",
      component: () => import('@/views/child.vue')
    }]
  },
  //路由多用
  {
    path: "/named_view",
    components: {
      default: () => import("@/views/child.vue"),
      email: () => import("@/views/email.vue"),
      tel: () => import('@/views/tel.vue')
    }
  },
  //路由重定向
  {
    path: '/main',
    //es6 箭头函数 里面是return的话 直接写
    redirect: to => {
      return {
        name: 'home'
      }
    }
  },
]
