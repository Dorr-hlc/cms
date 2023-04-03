<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-23 22:31:20
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-03 17:19:21
 * @RevisionHistory: 
-->
<template>
  <el-container class="layout">
    <el-aside width="200px">
      <el-col>
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
        <div class="logo">HLC-BOLG</div>
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
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >狮子头</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >螺蛳粉</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check"
                >蚵仔煎</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <div class="loginout" @click="loginOut()">退出</div> -->
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
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {},
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
    justify-content: space-between;
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
        margin-left: 40px;
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
}
</style>
