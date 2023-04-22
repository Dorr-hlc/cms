/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:32:49
 * @Author:
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-22 16:33:33
 * @RevisionHistory:
 */
const mongoose = require("mongoose");
// 创建文档的结构对象:设置集合中的属性以及类型
let ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
  },
  content: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  htmlText: {
    type: String,
  },
  directory: {
    type: Array,
  }
});
//   创建模型对象
let ArticleModel = mongoose.model("article", ArticleSchema);
module.exports = ArticleModel;
