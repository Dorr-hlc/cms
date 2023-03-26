/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 12:33:25
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-26 13:23:25
 * @RevisionHistory:
 */
const UserModel = require("../../../models/userModels");
const { generateToken } = require("../../../config/tokenConfig");
async function Login(req, res) {
  try {
    const { usernameOrEmail, password } = req.body;
    if (!usernameOrEmail || !password) {
      return res.json({
        code: "400",
        msg: "用户名或密码不能为空",
        data: null,
      });
    }
    const user = await UserModel.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    console.log(user);
    if (!user) {
      return res.json({
        code: "401",
        msg: "用户名或密码错误",
        data: null,
      });
    }

    const token = generateToken({ usernameOrEmail });
    res.json({
      code: "200",
      msg: "success",
      data: { token },
    });
  } catch (error) {
    console.error(error);
    res.json({
      code: "500",
      msg: "服务器错误",
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
      data: null,
    });
  }
  const user = await UserModel.findOne({ username });
  if (user != null && user.password == password) {
    return res.json({
      code: "401",
      msg: "用户已存在",
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
          data: null,
        });
      }
      return res.json({
        code: "200",
        msg: "注册成功",
        data: null,
      });
    }
  );
}

module.exports = {
  Login,
  Register,
};
