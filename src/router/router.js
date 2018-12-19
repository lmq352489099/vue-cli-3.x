import Home from '@/views/Home.vue'
export default [{
    path: '/',
    //别名
    alias: "/home_page",
    name: 'home',
    component: Home,
    /**
     * es6 写法  如果不是es6 就是这样子写法
     * 返回一个对象的话就用括号包着  
     *  props: route => {
     * retrue {
     *     //
     *    }
     * }
     * 
     *  */
    //router里面的方法
    props: router => ({
      food: router.query.food
    }),
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      // ...
      // if (from.name === 'about') alert('这是从about页来的')
      // else alert('这不是从about页来的')
      next()
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: "banner"
    },
    meta:{
      title:'关于'
    }
  },
  {
    path: "/argu/:name",
    name: "argu",
    component: () => import('@/views/argu.vue'),
    props: true
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
  //路由规则,*是匹配任何的路径
  //前面找不到就会报404
  {
    path: "*",
    component: () => import('@/views/error_404.vue')
  }
]
