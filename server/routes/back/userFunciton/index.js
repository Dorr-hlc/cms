/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 12:33:25
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-04 16:39:24
 * @RevisionHistory:
 */
const { disposeSendResponse } = require("../../../utils/resFunction");

const UserModel = require("../../../models/userModels");
const { generateToken } = require("../../../config/tokenConfig");
async function Login(req, res) {
  try {
    const { usernameOrEmail, password } = req.body;
    const user = await UserModel.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    }).exec();
    if (!usernameOrEmail || !password) {
      return disposeSendResponse({
        res,
        code: "400",
        msg: "用户名或密码不能为空",
        type: "error",
      });
    }
    if (!user) {
      return disposeSendResponse({
        res,
        code: "401",
        msg: "未找到该用户",
        type: "error",
      });
    }
    if (
      user.password != password ||
      (user.username != usernameOrEmail && user.email != usernameOrEmail)
    ) {
      return disposeSendResponse({
        res,
        code: "401",
        msg: "用户名或密码错误",
        type: "error",
      });
    }
    console.log("继续执行");
    const token = generateToken({ user });
    return disposeSendResponse({
      res,
      code: "200",
      msg: "恭喜您登录成功！",
      type: "success",
      data: {
        username: user.username,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    console.error(error);
    return disposeSendResponse({
      res,
      code: "500",
      msg: "服务器错误",
      type: "error",
    });
  }
}
async function Register(req, res) {
  try {
    const { username, password, email } = req.body;
    const user = await UserModel.findOne({
      $or: [{ username: username }, { email: email }],
    }).exec();

    if (!username || !password || !email) {
      return disposeSendResponse({
        res,
        code: "400",
        msg: "用户名或密码不能为空",
        type: "error",
      });
    }
    if (user !== null) {
      if (user.username === username || user.email === email) {
        return disposeSendResponse({
          res,
          code: "400",
          msg: "用户名或密码已被占用",
          type: "error",
        });
      }
    }
    UserModel.create(
      {
        ...req.body,
      },
      (err, data) => {
        if (err) {
          return disposeSendResponse({
            res,
            code: "401",
            msg: "注册失败",
            type: "error",
          });
        }
        return disposeSendResponse({
          res,
          code: "200",
          msg: "注册成功",
          type: "success",
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  Login,
  Register,
};
