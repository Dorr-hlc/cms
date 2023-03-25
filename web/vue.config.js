/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-23 22:19:57
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-25 11:34:16
 * @RevisionHistory:
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000", // 后台服务器的地址
        changeOrigin: true,
      },
    },
  },
});
