<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-23 22:31:20
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-04 17:24:21
 * @RevisionHistory: 
-->
<template>
  <el-container class="layout">
    <el-aside width="220px">
      <el-col>
        <!-- partial:index.partial.html -->
        <div class="avatar-box">
          <div class="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img src="@/assets/images/skytsunami.png" alt="Skytsunami" />
            </a>
          </div>
          <div class="content">
            <h1>HLC BOLG</h1>
          </div>
        </div>
        <!-- partial -->
        <el-menu
          default-active="1"
          text-color="#000"
          active-text-color="#000"
          class="el-menu-vertical-demo"
        >
          <router-link to="/">
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>文章管理</span>
            </template>
            <router-link to="/list">
              <el-menu-item index="2-1">
                <i class="el-icon-reading"></i>
                <span>文章列表</span>
              </el-menu-item>
            </router-link>
            <router-link to="/edit">
              <el-menu-item index="2-2">
                <i class="el-icon-edit"></i>
                <span>文章编辑</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-aside>

    <el-container>
      <el-header>
        <div class="user-info">
          <div class="avator">
            <img src="@/assets/images/tx.png" alt="" sizes="" srcset="" />
          </div>

          <el-dropdown>
            <span class="el-dropdown-link">
              <div class="name">
                {{ username }} <i class="el-icon-caret-bottom"></i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">上传头像</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >修改密码</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <el-button size="mini" class="loginout" icon="el-icon-circle-close" @click="loginOut()"
            >退出</el-button
          >
        </div>
      </el-header>
      <el-container>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="breadCrumbItem in breadCrumbList"
              :key="breadCrumbItem.path"
            >
              {{ breadCrumbItem.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <template v-if="$route.name == '/'">
            <Home />
          </template>
          <template v-else>
            <router-view> </router-view>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import Home from "@/components/Home/";
import { mapState } from "vuex";
export default {
  components: { Home },
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({
      username: (state) => state.userinfo.LoginInfo.username,
    }),
    breadCrumbList() {
      return this.$route.matched;
    },
  },
  methods: {
    loginOut() {
      window.localStorage.removeItem("user");
      this.$router.push({ name: "Login" });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.layout {
  min-height: 100vh;
  background: #e4e6ee;
  .el-aside {
    min-height: 100%;
  }

  .el-header {
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: #fff;
    color: #333;
    text-align: center;
    height: auto !important;
    line-height: 1;
    padding: 20px 30px;
    .logo {
      font-size: 32px;
      font-weight: 600;
    }
    .user-info {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
      .name {
        font-size: 16px;
        font-weight: 600;
        margin-left: 10px;
      }
      .loginout {
        font-size: 16px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  .el-aside {
    background-color: #001d3b;
    color: #333;
  }
  /deep/ .el-menu {
    background-color: #001d3b;
    color: #fff;
    border: none;
    .el-menu-item,
    .el-submenu__title {
      &.is-active {
        color: #ff7e00 !important;
        background-color: #00142c;
      }
      &:hover {
        background-color: #00142c !important;
      }
    }
    .el-menu-item,
    .el-submenu__title {
      color: #788ea5 !important;
    }
  }
  .el-main {
    background-color: #fcf8ff;
    color: #333;
    text-align: center;
  }

  h1 {
    font-size: 24px;
    margin: 10px 0 0 0;
    font-weight: lighter;
    text-transform: uppercase;
    color: #eeeeee;
  }

  p {
    font-size: 12px;
    font-weight: light;
    color: #333333;
  }

  span a {
    font-size: 18px;
    color: #cccccc;
    text-decoration: none;
    margin: 0 10px;
    transition: all 0.4s ease-in-out;
  }
  span a:hover {
    color: #ffffff;
  }

  @-webkit-keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
  .avatar-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    box-sizing: border-box;
    border: 5px white solid;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
    -webkit-animation: float 6s ease-in-out infinite;
    animation: float 6s ease-in-out infinite;
  }
  .avatar img {
    width: 100%;
    height: auto;
  }

  .content {
    width: 100%;
    max-width: 600px;
    padding: 10px 40px 30px;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
<style>
.el-breadcrumb {
  font-size: 16px;
}
</style>
