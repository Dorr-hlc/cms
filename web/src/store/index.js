import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 导入用户信息仓库
import userinfo from "./userinfo/userinfo";
export default new Vuex.Store({
  modules: { userinfo },
});
