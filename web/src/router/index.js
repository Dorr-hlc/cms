/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-23 22:28:18
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-25 18:12:42
 * @RevisionHistory:
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/layout/Basic"),
      children: [
        {
          path: "/edit",
          name: "Edit",
          component: () => import("@/views/Edit/Edit"),
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name != "Login" && window.localStorage.getItem("token") == null) {
    // 如果去往的页面不是登录页面，并且token不存在。就跳转到登录页登录
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
