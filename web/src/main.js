/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-23 22:19:57
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-23 22:45:31
 * @RevisionHistory:
 */
import Vue from "vue";
import App from "./App.vue";
// 导入仓库
import store from "./store/index";
// 导入路由
import router from "./router/index";
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
