/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-26 09:42:42
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-26 12:29:57
 * @RevisionHistory:
 */
const ArticleModel = require("../../../models/articleModels");
async function addArticle(req, res) {
  try {
    res.json({
      code: 200,
      msg: "success",
      data: 111,
    });
  } catch (error) {}
}

module.exports = {
  addArticle,
};
