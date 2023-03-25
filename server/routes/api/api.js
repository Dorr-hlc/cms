/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 11:13:10
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-25 12:55:37
 * @RevisionHistory:
 */
const express = require("express");
const router = express.Router();
const { Login, Register } = require("../userFunciton/index");
module.exports = router.post("/login", Login);
module.exports = router.post("/register", Register);
