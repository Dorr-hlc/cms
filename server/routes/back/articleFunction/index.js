/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:42:42
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-03 15:26:44
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
    let query = ArticleModel.find({ user: user_id });
    const { article_id, desc } = req.query;
    if (article_id) {
      query = ArticleModel.findOne({ _id: article_id}).where("user").equals(user_id);
    }
    if (desc) {
      query = query.sort({ time: desc }).where("user").equals(user_id);
    }
    const data = await query.exec();
    return disposeSendResponse({
      res,
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
