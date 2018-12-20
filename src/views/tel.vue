<template>
  <div>
    <p>{{message}}</p>myiphone: 12319390190
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.$bus.$on("on-click", mes => {
      console.log(123);
      
      this.message = mes;
    });
  }
};
</script>

<style scoped>
</style>