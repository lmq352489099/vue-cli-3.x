<template>
  <div>
    <count-to :end-val="endVal" ref="countTo" @on-annimation-end="handleEnd">
      <span slot="left">总金额:</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">点击获取标签</button>
    <button @click="upo">更新值</button>
  </div>
</template>
<script>

import CountTo from "@/components/conut-to";
export default {
  name: "count_to",
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 100
    };
  },
  methods: {
    getNumber() {
      //这样子就可以获取子标签的节点
      this.$refs.countTo.getNumber();
        // console.log(this.$refs.countTo);
    },
    upo() {
      //   console.log(++this.endVal);
      //   this.endVal = 1001;
      this.endVal += Math.random() * 100;
    },
    handleEnd(endVal) {
      console.log(endVal);
      console.log("end =>" + endVal);
    }
  }
};
</script>