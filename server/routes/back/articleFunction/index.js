/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:42:42
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-29 17:08:36
 * @RevisionHistory:
 */
const ArticleModel = require("../../../models/articleModels");
const moment = require("moment");
const { param } = require("../../../app");
// 添加文章
async function addArticle(req, res) {
  await ArticleModel.create(
    {
      ...req.body,
      // 修改time属性的值
      time: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    },
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          code: "500",
          msg: "服务器错误",
          type: "error",
        });
      }
      return res.json({
        code: "200",
        msg: "文章创建成功",
        type: "success",
        data: null,
      });
    }
  );
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
