<template>
  <div>
    <!-- v-model="inputvalue"  双向数据绑定 -->
    <!-- <a-input @input="handleInput"></a-input> -->
    <a-input v-model="stateValue"></a-input>
    <p>{{stateValue}}</p>
    <p>{{inputValue}} => lastletter is {{inputValueLastLetter}}</p>
    <AShow :content="inputValue"></AShow>
    <p>appName:{{appName}},appNameWithVersion :{{appNameWithVersion}}</p>
    <p>userName:{{userName}} , firstLetter is {{firstLetter}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{appVersion}}</p>
    <button @click="changeUserName">修改用户名</button>
    <button @click="registerModel">动态注册模块</button>
    <p v-for="(li,index) in todoList" :key="index">{{li}}</p>
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
      // appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => (state.user.todo ? state.user.todo.todoList : [])
    }),
    stateValue: {
      get() {
        return this.$store.state.stateValue;
      },
      set(newValie) {
        this.SET_STATE_VALUE(newValie);
      }
    },
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion;
    // } ,
    ...mapGetters(["appNameWithVersion"]),
    ...mapGetters("user", ["firstLetter"]),
    //有命名空间就不用再写模块名称了
    // ...mapState({
    //   userName: state => state.userName
    // })
    // 或者这样子写
    // ...mapState("user", {
    //   userName: state => state.userName
    // })

    // appName: {
    //   set: function(newValue) {
    //     this.inputValue = newValue + "sd";
    //   },
    //   get: function() {
    //     this.inputValue = newValue + "sd";
    //   }
    // },

    appName() {
      return this.$store.state.appName;
    },
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
    },
    ...mapMutations(["SET_APP_NAME", "SET_STATE_VALUE"]),
    ...mapMutations("user", ["SET_USER_NAME"]),
    ...mapActions(["updateAppName"]),
    handleChangeAppName() {
      // this.$store.commit('SET_APP_NAME',{
      //   appName:"newAppName"
      // })
      // this.$store.commit({
      //   //type 就是你要提交方法的名称
      //   type: "SET_APP_NAME",
      //   appName: "newAppName"
      // });
      this.SET_APP_NAME({
        appName: "newAppName"
      });
      this.$store.commit("SET_APP_VERSION");
      this.updateAppName();
    },
    changeUserName() {
      this.SET_USER_NAME("lmq");
      this.$store.dispatch("updateAppName", "123");
      // this.$store.state.user.userName = "haha"; 错误的方式
    },
    registerModel() {
      //动态添加模块的名称
      // this.$store.registerModule("todo", {
      //   state: {
      //     todoList: ["学习mutations", "学习actions"]
      //   }
      // });
      this.$store.registerModule(["user", "todo"], {
        state: {
          todoList: ["学习mutations", "学习actions"]
        }
      });
    },
    handleStateValueChange(value) {
      this.SET_STATE_VALUE(value);
    }
  }
};
</script>

<style scoped>
</style>