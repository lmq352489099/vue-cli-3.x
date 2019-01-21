<template>
  <div class="split-pane-con">
    <splitPane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </splitPane>
  </div>
</template>

<script>
import splitPane from "_c/split-pane";
export default {
  components: {
    splitPane
  },
  data() {
    return {
      offset: 0.3
    };
  },
  methods: {
    // hangleInput(value) {
    //   this.offser = value;
    // }
  }
};
</script>

<style scoped lang='less'>
.split-pane-con {
  width: 400px;
  height: 200px;
  background: papayawhip;
}
</style>