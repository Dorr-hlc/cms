/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-23 22:19:57
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-04 16:47:44
 * @RevisionHistory:
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.0.92:3000", // 后台服务器的地址
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "CMS";
      return args;
    });
  },
});
