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
import {
  Notification,
  Message,
  Button,
  Container,
  Main,
  Aside,
  Footer,
  Header,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Icon,
  Col,
  Table,
  TableColumn,
  Popover,
  Tag,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Input,
} from "element-ui";
Vue.use(Button)
  .use(Container)
  .use(Main)
  .use(Aside)
  .use(Footer)
  .use(Header)
  .use(Menu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Submenu)
  .use(Icon)
  .use(Col)
  .use(Table)
  .use(TableColumn)
  .use(Popover)
  .use(Tag)
  .use(Breadcrumb)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Form)
  .use(FormItem)
  .use(Input);
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
