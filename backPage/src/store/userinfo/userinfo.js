import { login, register } from "@/axios/api";
const state = {
  LoginInfo: {
    username: JSON.parse(window.localStorage.getItem("user"))?.username || "",
    email: JSON.parse(window.localStorage.getItem("user"))?.email || "",
    token: JSON.parse(window.localStorage.getItem("user"))?.token || "",
  },
  RegInfo: {
    username: "",
    email: "",
    password: "",
  },
};
const getters = {};
const actions = {
  async login({ commit }, LoginInfo) {
    const res = await login({ ...LoginInfo });
    if (res.code == 200) {
      commit("LOGIN", res.data);
    }
    return res;
  },
  async register({ commit }, RegInfo) {
    const res = await register({ ...RegInfo });
    if (res.code == 200) {
      commit("REGISTER", res.data);
    }
    return res;
  },
};
const mutations = {
  LOGIN(state, userInfo) {
    state.LoginInfo = userInfo;
  },
  REGISTER(state, userInfo) {
    state.RegInfo = userInfo;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
