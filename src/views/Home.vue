<template>
  <div class="home">
    {{food}}
    <button @click="hanleClick('back')">返回上一页12</button>
    <button @click="hanleClick('push')">跳转到parent</button>
    <button @click="hanleClick('replace')">替换到parent</button>
    <button @click="getInfo" :style="{background:bgColor}">请求数据</button>
    <img :src="url" alt>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import { getUserInfo } from "@/api/user";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      url: "",
      bgColor: ""
    };
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  //路由触发,要进来这个页面的时候之前调用的,页面还没渲染的
  beforeRouteEnter(to, from, next) {
    //this 是用不到的
    // console.log(to.name);
    // console.log(from.name);

    // if()
    next(vm => {
      // 组件的实例
      // console.log(vm);
    });
  },
  //你在一个页面用户做了一个编辑,
  //当用户要离开的时候,你希望提醒用户,编辑内容还没保存,是否要离开
  //页面即将离开的时候 调用
  beforeRouteLeave(to, from, next) {
    // const leave = confirm("你确定要离开吗?");
    // if (leave) next();
    // else next(false);
    next();
  },
  methods: {
    hanleClick(type) {
      if (type === "back") this.$router.go(-1);
      else if (type === "push") {
        const name = "lison";
        this.$router.push({
          path: `/argu/${name}`
          // params:{name:"lison"}
          // query:{name:"lison"}
        });
      }
      //用replace 是当前的浏览页 替换成
      else if (type === "replace") this.$router.replace({ name: "parent" });
    },
    getInfo() {
      // getUserInfo('http://localhost:3000/getCategorySub',{ userId: 21 }).then(res => {
      //   console.log("res", res);
      // });
      getUserInfo({ userId: 21 }).then(res => {
        console.log("res", res.data);
        this.url = res.data.img;
        this.bgColor = res.data.color;
      });
    }
  }
};
</script>
