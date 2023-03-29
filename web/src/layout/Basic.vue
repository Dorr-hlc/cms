<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-23 22:31:20
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-29 14:29:24
 * @RevisionHistory: 
-->
<template>
  <el-container class="layout">
    <el-header>
      <div class="logo">HLC-BOLG</div>
      <div class="user-info">
        <div class="avator">
          <img src="@/assets/images/tx.png" alt="" sizes="" srcset="" />
        </div>
        <div class="name">HLC</div>
        <div class="loginout">退出</div>
      </div>
    </el-header>
    <el-container>
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
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="breadCrumbItem in breadCrumbList"
              :key="breadCrumbItem.path"
            >
              {{ breadCrumbItem.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <!-- 主要对文章编辑页面进行缓存，切换页面时，已经编辑的文字不会清空 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {
    breadCrumbList() {
      return this.$route.matched;
    },
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.layout {
  min-height: 100vh;
  .el-aside {
    min-height: 100%;
  }
  .el-header,
  .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    background-color: #dde1e6;
    color: #333;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
}
</style>
