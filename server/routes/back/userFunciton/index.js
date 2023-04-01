/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 12:33:25
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-01 21:46:09
 * @RevisionHistory:
 */
const UserModel = require("../../../models/userModels");
const { generateToken } = require("../../../config/tokenConfig");
async function Login(req, res) {
  try {
    const { usernameOrEmail, password } = req.body;
    const user = await UserModel.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    if (!usernameOrEmail || !password) {
      return res.json({
        code: "400",
        msg: "用户名或密码不能为空",
        type: "error",
        data: null,
      });
    }
    if (!user) {
      return res.json({
        code: "401",
        msg: "未找到该用户!",
        type: "error",
        data: null,
      });
    }
    if (user.password != password || user.username != usernameOrEmail) {
      return res.json({
        code: "401",
        msg: "用户名或密码错误!",
        type: "error",
        data: null,
      });
    } else {
      const userInfo = await UserModel.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      }).exec(); //登录时根据用户名或者邮箱都可以去登录
      const token = generateToken({ userInfo });
      res.json({
        code: "200",
        msg: "恭喜您登录成功！",
        type: "success",
        data: {
          username: userInfo.username,
          email: userInfo.email,
          token,
        },
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      code: "500",
      msg: "服务器错误",
      type: "error",
      data: null,
    });
  }
}
async function Register(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      code: "400",
      msg: "用户名或密码不能为空",
      type: "error",
      data: null,
    });
  }
  const user = await UserModel.findOne({ username });
  if (user != null && user.password == password) {
    return res.json({
      code: "401",
      msg: "用户已存在",
      type: "error",
      data: null,
    });
  }
  UserModel.create(
    {
      ...req.body,
    },
    (err, data) => {
      if (err) {
        return res.json({
          code: "401",
          msg: "注册失败",
          type: "error",
          data: null,
        });
      }
      return res.json({
        code: "200",
        msg: "注册成功",
        type: "success",
        data: null,
      });
    }
  );
}

module.exports = {
  Login,
  Register,
};
