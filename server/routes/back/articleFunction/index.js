/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:42:42
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-29 22:58:25
 * @RevisionHistory:
 */
const ArticleModel = require("../../../models/articleModels");
const moment = require("moment");
// 添加文章

async function addArticle(req, res) {
  try {
    const { _id, ...articleData } = req.body;
    const time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    const options = { new: true }; // 将选项对象提取出来，避免代码重复
    const article = _id
      ? await ArticleModel.findByIdAndUpdate(_id, { ...articleData, time }, options)
      : await ArticleModel.create({ ...articleData, time });
    const message = _id ? "文章更新成功" : "文章创建成功";
    return res.json({
      code: "200",
      msg: message,
      type: "success",
      data: article,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: "500",
      msg: "服务器错误",
      type: "error",
    });
  }
}

// 查询文章
async function getArticle(req, res, next) {
  try {
    const { id, desc } = req.query;
    let query = ArticleModel.find();
    if (id) {
      query = ArticleModel.findById({ _id: id });
    }
    if (desc) {
      query = query.sort({ time: desc });
    }
    const data = await query.exec();
    res.json({
      code: "200",
      msg: "获取文章列表成功",
      type: "success",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("读取失败");
  }
}

module.exports = {
  addArticle,
  getArticle,
};
