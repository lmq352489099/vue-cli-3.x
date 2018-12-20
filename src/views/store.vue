<template>
  <div>
    <!-- v-model="inputvalue"  双向数据绑定 -->
    <a-input @input="handleInput"></a-input>
    <p>{{inputValue}} => lastletter is {{inputValueLastLetter}}</p>
    <AShow :content="inputValue"></AShow>
    <p>appName:{{appName}},appNameWithVersion :{{appNameWithVersion}}</p>
    <p>userName:{{userName}} , firstLetter is {{firstLetter}}</p>
  </div>
</template>

<script>
import AInput from "_c/Ainput.vue";
import AShow from "_c/Ashow.vue";
// import { mapState } from "vuex";
// vuex的命名空间
//就不用再写模块名称了
// import { createNamespacedHelpers } from "vuex";
// const { mapState } = createNamespacedHelpers("user");
import { mapState, mapGetters } from "vuex";
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
  computed: {
    // ...mapState([
    //   'appName'
    // ])
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion;
    // } ,
    ...mapGetters(["appNameWithVersion"]),
    ...mapGetters("user", ["firstLetter"]),
    //就不用再写模块名称了
    // ...mapState({
    //   userName: state => state.userName
    // })
    // 或者这样子写
    // ...mapState("user", {
    //   userName: state => state.userName
    // })

    // appName() {
    //   return this.$store.state.appName;
    // },
    // userName() {
    //   this.$store.state.user.userName;
    // }

    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    }
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