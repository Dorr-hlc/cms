/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:42:42
 * @Author:
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-16 01:48:30
 * @RevisionHistory:
 */
const ArticleModel = require("../../../models/articleModels");
const { disposeSendResponse } = require("../../../utils/resFunction");
const moment = require("moment");
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

async function addArticle(req, res) {
  try {
    const user = req.user.data.user._id;
    console.log(req.user.data);
    const { _id, ...articleData } = req.body;
    const time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    const options = { new: true }; // 将选项对象提取出来，避免代码重复 ,{ new: true }告诉MongoDB返回更新后的文档。
    const article = _id
      ? await ArticleModel.findByIdAndUpdate(
          _id,
          { ...articleData, time, user },
          options
        )
      : await ArticleModel.create({ ...articleData, time, user });
    const message = _id ? "文章更新成功" : "文章创建成功";
    return disposeSendResponse({
      res,
      code: "200",
      msg: message,
      type: "success",
      data: article,
    });
  } catch (err) {
    console.log(err);
    return disposeSendResponse({
      res,
      code: "500",
      msg: "服务器错误",
      type: "error",
    });
  }
}

// 处理上传文件的请求
async function uploadImg(req, res, next) {
  try {
    upload.single("file")(req, res, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send("上传失败");
      }
      const file = req.file;
      const url = `${req.protocol}://${req.get("host")}/images/${
        file.filename
      }`;
      return disposeSendResponse({
        res,
        code: "200",
        msg: "图片资源上传成功",
        type: "success",
        data: {
          url,
        },
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("上传失败");
  }
}

// 查询文章
async function getArticle(req, res, next) {
  try {
    const user_id = req.user.data.user._id;
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;
    let query = ArticleModel.find({ user: user_id }).skip(skip).limit(limit);
    const { article_id, desc } = req.query;
    if (article_id) {
      query = ArticleModel.findOne({ _id: article_id })
        .where("user")
        .equals(user_id);
    }
    if (desc) {
      query = query.sort({ time: desc }).where("user").equals(user_id);
    }
    // 当给定查询执行两次时，Mongoose 会抛出 "Query was already executed"(查询已执行)错误。对此最常见的解释是您正在混合 await 和回调。
    //解决方案是跳过传递回调。在 Mongoose 中不需要回调，因为 Mongoose 支持 promises 和 async/await。但如果我们想执行两次查询呢？可以使用 clone() 方法：
    const count = await ArticleModel.find({ user: user_id }).countDocuments();
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

// 删除文章
async function deleteArticle(req, res) {
  try {
    let { article_id } = req.body;
    if (article_id) {
      await ArticleModel.deleteOne({ _id: article_id });
      return disposeSendResponse({
        res,
        code: "200",
        msg: "删除文章成功",
        type: "success",
      });
    }
  } catch (err) {
    console.error(err);
    return disposeSendResponse({
      res,
      code: "500",
      msg: "删除失败",
      type: "error",
    });
  }
}

module.exports = {
  addArticle,
  getArticle,
  deleteArticle,
  uploadImg,
};
