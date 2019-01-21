<template>
  <div class="split-pane-wrapper"></div>
    <div class="pane pane-left" :style="{ width: leftOffsetPercent }"></div>
       <button @click="hanlClick">ssss1231s</button>
    <div class="pane pane-trigger-con" :style="{width: leftOffsetPercent}"></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent}"></div>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftOffset: 0.3
    };
  },
  methods: {
    hanlClick() {
      this.leftOffset -= 0.2;
    }
  },
  computed: {
    leftOffsetPercent() {
      return `${this.leftOffset * 100}%`;
    }
  }
};
</script>

<style scoped  lang="less">
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      //   width: 30%;
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      //   left: 30%;
      background: palegoldenrod;
    }
    &-pane-trigger-on {
      width: 8px;
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index:10;
    }
  }
  button {
    z-index: 11123;
    position: absolute;
  }
}
</style>