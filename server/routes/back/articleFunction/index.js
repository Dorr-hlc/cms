/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:42:42
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-01 21:59:59
 * @RevisionHistory:
 */
const ArticleModel = require("../../../models/articleModels");
const moment = require("moment");

// 添加文章

async function addArticle(req, res) {
  try {
    const user = req.user.data.userInfo._id;
    const { _id, ...articleData } = req.body;
    const time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    console.log(user);
    const options = { new: true }; // 将选项对象提取出来，避免代码重复 ,{ new: true }告诉MongoDB返回更新后的文档。
    const article = _id
      ? await ArticleModel.findByIdAndUpdate(
          _id,
          { ...articleData, time, user },
          options
        )
      : await ArticleModel.create({ ...articleData, time, user });
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

// 添加图片

async function uploadImg(req, res, next) {
  try {
    const file = req.file;
    const url = `${req.protocol}://${req.get("host")}/${file.path}`;
    res.json({
      code: 0,
      data: {
        url,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("上传失败");
  }
}

// 查询文章
async function getArticle(req, res, next) {
  try {
    const user_id = req.user.data.userInfo._id;
    let query = ArticleModel.find({ user: user_id });
    const { article_id, desc } = req.query;
    if (article_id) {
      query = ArticleModel.findOne({ _id: article_id, user: user_id });
    }
    if (desc) {
      query = query.sort({ time: desc }).where("user").equals(user_id);
    }
    const data = await query.exec();
    res.json({
      code: "200",
      msg: "获取文章成功",
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
  uploadImg,
};
