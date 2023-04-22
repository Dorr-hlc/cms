/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:42:42
 * @Author:
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-22 16:27:16
 * @RevisionHistory:
 */
const ArticleModel = require("../../../models/articleModels");
const { disposeSendResponse } = require("../../../utils/resFunction");

const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const filename = uuidv4();
    cb(null, filename + extname);
  },
});
const upload = multer({ storage: storage });
// 添加文章


// 查询文章
async function getArticle(req, res, next) {
  try {
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;
    let query = ArticleModel.find().skip(skip).limit(limit);
    const { article_id, desc } = req.query;
    if (article_id) {
      query = ArticleModel.findOne({ _id: article_id })
    }
    if (desc) {
      query = query.sort({ time: desc }).where("user").equals();
    }
    // 当给定查询执行两次时，Mongoose 会抛出 "Query was already executed"(查询已执行)错误。对此最常见的解释是您正在混合 await 和回调。
    //解决方案是跳过传递回调。在 Mongoose 中不需要回调，因为 Mongoose 支持 promises 和 async/await。但如果我们想执行两次查询呢？可以使用 clone() 方法：
    const count = await ArticleModel.find().countDocuments();
    const data = await query.exec();
    const totalPages = Math.ceil(count / limit);
    return disposeSendResponse({
      res,
      code: "200",
      msg: "获取文章成功",
      type: "success",
      data: {
        articles: data,
        pagination: {
          page,
          totalPages,
          totalArticles: count,
        },
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("读取失败");
  }
}



module.exports = {

  getArticle,

};
