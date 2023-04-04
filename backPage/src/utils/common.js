import Vue from "vue";
export function validateUsername(str, type) {
  console.log(2112);
  Vue.prototype.$message({
    message: str,
    type,
  });
}
export function validateEmail(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
  return regex.test(email);
}
