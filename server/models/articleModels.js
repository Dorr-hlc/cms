/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:32:49
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-26 09:32:56
 * @RevisionHistory:
 */
const mongoose = require("mongoose");
// 创建文档的结构对象:设置集合中的属性以及类型
let ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
  },
});
//   创建模型对象
let ArticleModel = mongoose.model("article", ArticleSchema);
module.exports = ArticleModel;
