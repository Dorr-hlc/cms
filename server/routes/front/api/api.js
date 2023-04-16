/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 11:13:10
 * @Author:
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-16 01:54:23
 * @RevisionHistory:
 */
const express = require("express");
const router = express.Router();

const {
    getArticle,
} = require("../articleFunction/index");
module.exports = router.get("/getArticle", getArticle);
