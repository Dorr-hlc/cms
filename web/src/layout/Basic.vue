<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-23 22:31:20
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-25 20:48:06
 * @RevisionHistory: 
-->
<template>
  <el-container class="layout">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <router-link to="/edit">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">文章发布</span>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
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
  computed: {},
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
    background-color: rgb(176, 228, 248);
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #dde1e6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
}
</style>
