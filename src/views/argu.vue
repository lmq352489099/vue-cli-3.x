<template>
  <div>
    {{$route.params.name}}
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  //在路由中  props: true不传就默认是listen
  //有就是跟路由后面的参数
  props: {
    name: {
      type: String,
      default: "listen"
    }
  },
  //你的url发生变化,然后这个组件是个复用组件才会调用
  beforeRouteUpdate(to, from, next) {
    // this可以使用
    console.log(to.name, from.name);
  }
};
</script>

<style scoped>
</style>