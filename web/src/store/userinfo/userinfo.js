import { validateUsername, validateEmail } from "@/utils/common";
import { login, register } from "@/axios/api";
const state = {
  LoginInfo: {
    usernameOrEmail: "",
    password: "",
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
