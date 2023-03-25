/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-23 22:19:57
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-25 17:57:33
 * @RevisionHistory:
 */
import Vue from "vue";
import App from "./App.vue";
// 导入仓库
import store from "./store/index";
// 导入路由
import router from "./router/index";
// 导入elementui
import { Notification,Message, Button } from "element-ui";
Vue.use(Button);
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
// 导入axios
import axios from "@/axios/http.js";
import * as Api from "@/axios/api";
Vue.prototype.$api = Api;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
