<template>
  <div>
    <!-- v-model="inputvalue"  双向数据绑定 -->
    <a-input  @input="handleInput"></a-input>
    <p>{{inputValue}}</p>
    <AShow :content="inputValue"></AShow>
  </div>
</template>

<script>
import AInput from "_c/Ainput.vue";
import AShow from "_c/Ashow.vue";
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>

<style scoped>
</style>