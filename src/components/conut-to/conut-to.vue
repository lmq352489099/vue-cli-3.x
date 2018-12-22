<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
    <!-- <button @click="getNumber">123</button> -->
  </div>
</template>

<script>
import CountUp from "countup";
// import  './count-to.less'
export default {
  name: "CountTo",
  computed: {
    eleId() {
      //m每个组件都有一个_uid
      return `count_up_${this._uid}`;
    },
    countClass() {
      return ["count-to-number", this.className];
    }
  },
  data() {
    return {
      counter: ""
    };
  },
  props: {
    className: {
      type: String,
      default: ""
    },
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 动画延迟开始时间
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时常
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 默认使用分组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号
     */
    separator: {
      type: String,
      default: ","
    },
    /**
     * @description 整数和小数分割符号
     */
    decimal: {
      type: String,
      default: ","
    }
  },
  methods: {
    getNumber() {
      return this.$refs.number.innerText;
    },
    emitEndEvent() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$emit("on-annimation-end", Number(this.getNumber()));
        }, this.duration * 1000 + 5);
      });
    }
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update(newVal);
      this.emitEndEvent();
    }
  },
  mounted() {
    //百分百拿的到DOM
    this.$nextTick(() => {
      this.counter = new CountUp(
        this.eleId,
        this.startVal,
        this.endVal,
        this.useEasing,
        this.decimals,
        this.duration,
        {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal
        }
      );
      setTimeout(() => {
        this.counter.start();
        this.emitEndEvent();
      }, this.delay);
    });
  }
};
</script>

<style lang="less" scoped>
@import url("./count-to.less");
</style>
