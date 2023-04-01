/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 10:22:31
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-02 00:28:18
 * @RevisionHistory:
 */
import axios from "axios";
import store from "@/store";
import { Message } from "element-ui";
// 创建axios实例
const service = axios.create({
  //   baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // 请求的基础url, // 接口的基础路径
  baseURL: "http://127.0.0.1:3000/front",
  timeout: 5000, // 请求超时时间
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求头中添加token
    const token = store.state.userinfo.LoginInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  // 对响应数据进行处理
  (response) => {
    // 如果返回的状态码为 200，说明接口请求成功，可以正常拿到数据
    Message({
      type: response.data.type,
      message: response.data.msg,
    });
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      // 否则的话抛出错误
      return Promise.reject(response.data);
    }
  },
  // 对响应错误进行处理
  (error) => {
    if (error.response) {
      // 根据不同的状态码进行不同的处理
      switch (error.response.status) {
        case 401:
          // 当响应状态为 401 Unauthorized 时，跳转到登录页面
          localStorage.removeItem("token");
          router.push({ name: "Login" });
          Message.error("访问接口失败，登录信息过期");
          break;
        case 403:
          // 当响应状态为 403 Forbidden 时，提示没有权限访问该资源
          Message.error("没有权限访问该资源");
          break;
        case 404:
          // 当响应状态为 404 Not Found 时，提示访问的资源不存在
          Message.error("访问的资源不存在");
          break;
        default:
          // 对其他响应状态码的处理
          Message.error(`发生了错误，错误代码：${error.response.status}`);
      }
    } else {
      // 对请求错误进行处理
      Message.error("网络错误，请稍后再试");
    }
    return Promise.reject(error);
  }
);

export default service;
