/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-23 22:28:18
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-01 23:03:44
 * @RevisionHistory:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/layout/Basic"),
      meta: {
        title: "首页",
      },
      children: [
        {
          path: "/list",
          name: "List",
          component: () => import("@/views/List/List"),
          meta: {
            title: "文章列表",
          },
        },
        {
          path: "/edit",
          name: "Edit",
          component: () => import("@/views/Edit/Edit"),
          meta: {
            title: "文章编辑",
            keepAlive: true, // 需要缓存页面
          },
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login/Login"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(store.state.userinfo.LoginInfo.token);
  if (to.name != "Login" && !store.state.userinfo.LoginInfo.token) {
    // 如果去往的页面不是登录页面，并且token不存在。就跳转到登录页登录
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
