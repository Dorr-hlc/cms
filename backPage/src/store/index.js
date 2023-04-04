/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-23 22:23:08
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-25 17:50:55
 * @RevisionHistory: 
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 导入用户信息仓库
import userinfo from "./userinfo/userinfo";
export default new Vuex.Store({
  modules: { userinfo },
});
  