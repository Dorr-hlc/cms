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
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/Register"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && window.localStorage.getItem("token") != "null") {
    // 如果去往的页面不是登录页面，并且token不存在。就跳转到登录页登录
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
