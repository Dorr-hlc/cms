/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 12:11:51
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-26 13:42:19
 * @RevisionHistory:
 */
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const secret = "Dorr_@&$(*^@#";
// 封装Token生成函数
function generateToken(data, expiresIn = "7d") {
  const payload = { data }; // 将数据存储在payload对象中
  return jwt.sign(payload, secret, { expiresIn });
}
// 封装Token验证中间件
function requireToken(req, res, next) {
  if (!req.path.includes("/api")) {
    next();
  } else {
    expressJwt({ secret })(req, res, (err) => {
      if (err) {
        res
          .status(401)
          .set("X-Auth-Error", "Token expired")
          .json({ code: 401, msg: "Token expired" });
      } else {
        next();
      }
    });
  }
}

module.exports = {
  generateToken,
  requireToken,
};
