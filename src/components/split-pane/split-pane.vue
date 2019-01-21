<template>
  <div class="split-pane-wrapper" ref="outer">
    <div
      class="pane pane-left"
      :style="{ width: leftOffsetPercent,paddingRight:`${this.triggerWidth / 2}px` }"
    >
      <slot name="left"></slot>
    </div>

    <button @click="handleClick">ssss1231s</button>
    <div
      class="pane-trigger-con"
      @mousedown="handleMousedown"
      :style="{left: triggerLeft,width:`${triggerWidth}px`}"
    ></div>
    <div
      class="pane pane-right"
      :style="{left: leftOffsetPercent,paddingLeft:`${this.triggerWidth / 2}px`}"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SplitPane",
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      //   leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    };
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    }
  },
  methods: {
    handleClick() {
      this.leftOffset -= 0.02;
    },
    handleMousedown(event) {
      document.addEventListener("mousemove", this.handleMousemove);
      document.addEventListener("mouseup", this.handleMouseup);
      console.log(event.srcElement.getBoundingClientRect());
      console.log(event.pageX);

      this.initOffset =
        event.pageX - event.srcElement.getBoundingClientRect().left;

      this.canMove = true;
    },
    handleMousemove(event) {
      if (!this.canMove) return;
      console.log(123);

      //鼠标距离页面左侧多少距离
      //   console.log(event.pageX);
      //   console.log(this.$refs.outer.getBoundingClientRect());
      //   console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left);
      const outerRect = this.$refs.outer.getBoundingClientRect();
      const offsetPercent =
        (event.pageX -
          this.initOffset +
          this.triggerWidth / 2 -
          outerRect.left) /
        outerRect.width;
      if (offsetPercent < this.min) offsetPercent = this.min;
      if (offsetPercent > this.max) offsetPercent = this.max;
      //   this.$emit("input", offsetPercent);
      this.$emit("update:value", offsetPercent);
    },
    handleMouseup() {
      this.canMove = false;
    }
  }
};
</script>
<style lang="less">
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      // width: 30%;
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      background: paleturquoise;
    }
    &-trigger-con {
      width: 8px;
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
  button {
    z-index: 1111;
    // position: absolute;
  }
}
</style>