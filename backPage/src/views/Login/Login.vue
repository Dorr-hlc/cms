<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-23 22:33:07
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-01 22:40:09
 * @RevisionHistory: 
-->
<template>
  <div class="wrap_bg">
    <div
      id="main"
      :class="{
        login_wrap: true,
        signUpActive: isSignUpActive,
        loginActive: isLoginActive,
      }"
    >
      <div class="login_question_wrap">
        <div class="question_singUp">
          <h2 class="title">没有注册账号?</h2>
          <p>欢迎来到狗屁不通文章发布系统</p>
          <a
            href="javascript:void(0)"
            id="signUpBtn"
            @click="toggleLogin"
            class="btn btn_rounded"
            >注册</a
          >
        </div>
        <div class="question_login">
          <h2 class="title">有账户吗？</h2>
          <p>欢迎来到狗屁不通文章发布系统</p>
          <a
            href="javascript:void(0)"
            id="loginBtn"
            @click="toggleSignUp"
            class="btn btn_rounded"
            >登录</a
          >
        </div>
        <div class="action_singUp">
          <form action="#">
            <fieldset>
              <legend class="title">注册</legend>
              <div class="input_block">
                <div class="input_wrap">
                  <input
                    type="text"
                    id="sing_name"
                    class="input"
                    placeholder="账户"
                    v-model="RegInfo.username"
                  />
                  <label for="sing_name" class="label_name"></label>
                </div>
                <div class="input_wrap">
                  <input
                    type="text"
                    id="sing_email"
                    class="input"
                    placeholder="邮箱"
                    v-model="RegInfo.email"
                  />
                  <label for="sing_email" class="label_mail"></label>
                </div>
                <div class="input_wrap">
                  <input
                    type="password"
                    id="sing_pass"
                    class="input"
                    placeholder="密码"
                    v-model="RegInfo.password"
                  />
                  <label for="sing_pass" class="label_pass"></label>
                </div>
              </div>
              <div class="btn btn_red" @click="regBtn">注册</div>
            </fieldset>
          </form>
        </div>
        <div class="action_login">
          <form action="#">
            <fieldset>
              <legend class="title">登录</legend>
              <div class="input_block">
                <div class="input_wrap">
                  <input
                    type="text"
                    id="username"
                    class="input"
                    placeholder="账户/邮箱"
                    v-model="LoginInfo.usernameOrEmail"
                  />
                  <label for="sing_pass" class="label_mail"></label>
                </div>
                <div class="input_wrap">
                  <input
                    type="password"
                    id="pass"
                    class="input"
                    placeholder="密码"
                    v-model="LoginInfo.password"
                  />
                  <label for="sing_pass" class="label_pass"></label>
                </div>
              </div>
              <a href="#" class="forgotPass">忘记密码?</a>
              <div class="btn btn_red" @click="loginBtn">登录</div>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="login_action_wrap"></div>
    </div>
  </div>
</template>
<script>
import { validateUsername, validateEmail } from "@/utils/common";
import { mapActions } from "vuex";
export default {
  components: {},
  props: [],
  data() {
    return {
      isSignUpActive: true,
      isLoginActive: false,
      LoginInfo: {
        usernameOrEmail: "",
        password: "",
      },
      RegInfo: {
        username: "",
        email: "",
        password: "",
      },
      TipsTxt: {
        p1: "用户名或密码不能小于3位字符",
        p2: "邮箱格式不正确",
        p3: "用户名或密码不能为空",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions("userinfo", ["login", "register"]),
    toggleSignUp() {
      this.isSignUpActive = !this.isSignUpActive;
      this.isLoginActive = !this.isLoginActive;
    },
    toggleLogin() {
      this.isSignUpActive = !this.isSignUpActive;
      this.isLoginActive = !this.isLoginActive;
    },

    async loginBtn() {
      if (
        this.LoginInfo.usernameOrEmail == "" ||
        this.LoginInfo.password == ""
      ) {
        return validateUsername(this.TipsTxt.p3, "warning");
      }
      const res = await this.login({ ...this.LoginInfo });
      if (res.code == 200) {
        window.localStorage.setItem("user", JSON.stringify(res.data));
        this.$router.push({ path: "/" });
      }
    },

    async regBtn() {
      if (
        this.RegInfo.username.length < 3 ||
        this.RegInfo.password.length < 3
      ) {
        return validateUsername(this.TipsTxt.p1, "warning");
      }
      if (!validateEmail(this.RegInfo.email)) {
        return validateUsername(this.TipsTxt.p2, "warning");
      }
      const res = await this.register({ ...this.RegInfo });
      if (res.code == 200) {
        this.toggleLogin();
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.wrap_bg {
  position: relative;
  height: 100vh;
  background-image: url("@/assets/images/wallhaven-rrgxdq.jpg");
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  margin: 0;
  font-family: "Lato", sans-serif;
}
.btn {
  display: inline-block;
  min-width: 140px;
  padding: 0 20px;
  border-radius: 5px;
  line-height: 31px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  outline: 0;
  border: 0;
  &:hover {
    cursor: pointer;
  }
}
.btn_rounded {
  border: 1px solid #c3c3c3;
  color: #c3c3c3;
  transition: all 0.3s ease-in-out;
}
.btn_red {
  background-color: #f78c7b;
  line-height: 33px;
}
.label_name,
.label_mail,
.label_pass {
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.label_name:before,
.label_mail:before,
.label_pass:before {
  content: "";
  position: absolute;
  right: 5px;
  top: 10px;
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  transition: color 0.4s cubic-bezier(1, 0, 0, 1);
}
.label_name:before {
  background-image: url("@/assets/images/icon/user.png");
}
.label_mail:before {
  background-image: url("@/assets/images/icon/mail.png");
}
.label_pass:before {
  background-image: url("@/assets/images/icon/password.png");
}
.forgotPass {
  text-decoration: none;
  color: #c3c3c3;
}
.login_wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 830px;
  height: 350px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.55);
  color: #c1c4d6;
  transform: translate(-50%, -50%);
}
.login_action_wrap {
  position: absolute;
  top: -40px;
  left: 50px;
  height: 430px;
  width: 430px;
  background-color: #f7f7f6;
  border-radius: 3px;
  box-shadow: 0 0 10px 3px rgba(39, 37, 37, 0.45);
}
.question_singUp,
.question_login {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 270px;
}
.question_singUp .title,
.question_login .title {
  margin: 0;
  line-height: 32px;
  font-size: 28px;
}
.question_singUp p,
.question_login p {
  padding: 15px 0 20px 0;
  font-size: 14px;
}
.question_singUp {
  left: 50px;
}
.question_login {
  right: 50px;
}
.action_singUp,
.action_login {
  position: absolute;
  top: 30px;
  width: 330px;
  z-index: 3;
}
.action_singUp .btn,
.action_login .btn {
  float: right;
}
.action_singUp .title,
.action_login .title {
  color: #f78c7b;
  text-transform: uppercase;
  font-size: 22px;
}
.action_singUp .input,
.action_login .input {
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 2px solid #c1c4d6;
  background-color: transparent;
  line-height: 32px;
  font-size: 13px;
}
.action_singUp .input:hover,
.action_login .input:hover,
.action_singUp .input:focus,
.action_login .input:focus,
.action_singUp .input:active,
.action_login .input:active {
  outline: 0;
}
.action_singUp .input_block,
.action_login .input_block {
  margin: 35px 0;
}
.action_singUp {
  left: 100px;
}
.action_login {
  right: 100px;
}
.input_wrap {
  position: relative;
}
.loginActive .login_action_wrap {
  -webkit-animation: 0.6s loginActive forwards;
  animation: 0.6s loginActive forwards;
}
.loginActive .action_singUp,
.loginActive .question_login {
  visibility: hidden;
}
.signUpActive .login_action_wrap {
  -webkit-animation: 0.6s signUpActive forwards;
  animation: 0.6s signUpActive forwards;
}
.signUpActive .action_login,
.signUpActive .question_singUp {
  visibility: hidden;
}
.input + label:after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #f78c7b;
  transition: width 0.4s cubic-bezier(1, 0, 0, 1);
}
.input:focus + label:after {
  width: 100%;
}
.input:focus + label:before {
  color: #f78c7b;
}
@-webkit-keyframes loginActive {
  40% {
    transform: translateX(320px);
  }
  65% {
    transform: translateX(280px);
  }
  100% {
    transform: translateX(300px);
  }
}
@keyframes loginActive {
  40% {
    transform: translateX(320px);
  }
  65% {
    transform: translateX(280px);
  }
  100% {
    transform: translateX(300px);
  }
}
@-webkit-keyframes signUpActive {
  0% {
    transform: translateX(300px);
  }
  40% {
    transform: translateX(-20px);
  }
  65% {
    transform: translateX(20px);
  }
  100% {
    transform: none;
  }
}
@keyframes signUpActive {
  0% {
    transform: translateX(300px);
  }
  40% {
    transform: translateX(-20px);
  }
  65% {
    transform: translateX(20px);
  }
  100% {
    transform: none;
  }
}
</style>
