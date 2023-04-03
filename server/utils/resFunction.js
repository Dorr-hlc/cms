function disposeSendResponse({
  code = "200",
  res,
  msg,
  data = null,
  type = "success",
}) {
  if (!res) {
    throw new Error("无效的响应对象");
  }
  return res.json({ code, msg, type, data });
}

module.exports = {
  disposeSendResponse,
};
