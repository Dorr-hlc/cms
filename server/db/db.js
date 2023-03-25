/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 11:11:13
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-25 11:26:01
 * @RevisionHistory:
 */
//success 数据库链接成功的回调
//error 数据库链接失败的回调
module.exports = function (success, error) {
  //
  if (typeof error !== "function") {
    error = () => {
      console.log("链接失败");
    };
  }
  const mongoose = require("mongoose");
  //   导入配置文件
  const { DBHOST, DBPORT, DBNAME } = require("../config/config");
  mongoose.set("strictQuery", true);
  // 链接mongodb服务
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  // 只执行一次
  mongoose.connection.once("open", () => {
    success();
    console.log('连接数据库成功，服务器运行在3000端口');
  }); //设置链接成功的回调
  mongoose.connection.on("error", () => {
    error();
  }); //设置链接错误的回调
  mongoose.connection.on("close", () => {
    console.log("链接关闭");
  }); //设置链接关闭的回调
};
