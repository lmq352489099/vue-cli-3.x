<template>
  <div class="home">
    <button @click="hanleClick('back')">返回上一页12</button>
    <button @click="hanleClick('push')">跳转到parent</button>
    <button @click="hanleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    hanleClick(type) {
      if (type === "back") this.$router.go(-1);
      else if (type === "push") {
        const name = "lison";
        this.$router.push({
          // path: `/argu/${name}`
          // params:{name:"lison"}
          // query:{name:"lison"}
        });
      }
      //用replace 是当前的浏览页 替换成
      else if (type === "replace") this.$router.replace({ name: "parent" });
    }
  }
};
</script>
