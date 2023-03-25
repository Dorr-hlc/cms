const mongoose = require("mongoose");
// 创建文档的结构对象:设置集合中的属性以及类型
let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//   创建模型对象
let UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
