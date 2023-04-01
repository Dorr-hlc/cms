/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 12:11:51
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-01 20:17:40
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
          .json({ code: 401, msg: "登录信息过期，请重新登录", type: "error" });
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
