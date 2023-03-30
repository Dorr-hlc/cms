/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 11:13:10
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-30 23:00:46
 * @RevisionHistory:
 */
const express = require("express");
const router = express.Router();
const multer = require("multer");
// 配置multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ dest: 'uploads/' });
const { Login, Register } = require("../userFunciton/index");
const {
  addArticle,
  getArticle,
  uploadImg,
} = require("../articleFunction/index");
module.exports = router.post("/login", Login);
module.exports = router.post("/register", Register);
module.exports = router.post("/api/addArticle", addArticle);
module.exports = router.get("/api/getArticle", getArticle);
module.exports = router.post(
  "/api/uploadImg",
  upload.single("file"),
  uploadImg
);
