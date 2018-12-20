<template>
  <div @click="handleClick">按我 email:352489099@qq.com</div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$bus.$emit("on-click", "hello");
    }
  },
  mounted() {
    console.log(this.$bus);
  }
};
</script>

<style scoped>
</style>