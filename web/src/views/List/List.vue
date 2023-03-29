<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-26 22:31:37
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-29 16:47:50
 * @RevisionHistory: 
-->
<template>
  <div class="article-list">
    <div class="addbtn">
      <el-button type="primary" icon="el-icon-add-location" @click="toEdit"
        >新增</el-button
      >
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标签">
        <template slot-scope="scope">
          <el-tag
            v-for="(tagitem, index) in scope.row.tags"
            :key="index"
            type="success"
            effect="plain"
          >
            {{ tagitem }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.title }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="作者">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.author }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag
              size="medium"
              :type="currentColorStatus(scope.row.status)"
              >{{ currentTextStatus(scope.row.status) }}</el-tag
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import moment from "moment";
export default {
  components: {},
  props: [],
  data() {
    return {
      tableData: [],
    };
  },
  watch: {},
  computed: {
    // formatDates(timestamp) {
    //   return moment(timestamp).format("YYYY-MM-DD");
    // },
  },
  methods: {
    handleEdit(index, row) {
      this.$router.push({ name: "Edit", params: { id: row._id } });
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    toEdit() {
      this.$router.push({ name: "Edit" });
    },
    currentColorStatus(status) {
      let str = "";
      if (status == "1") {
        str = "success";
      } else {
        str = "info";
      }
      return str;
    },
    currentTextStatus(status) {
      let str = "";
      if (status == "1") {
        str = "已发布";
      } else {
        str = "草稿";
      }
      return str;
    },
    async getArticleList() {
      let reslut = await this.$api.getArticle();
      if (reslut.code == "200") {
        this.tableData = reslut.data;
        console.log(this.tableData);
      }
    },
  },
  created() {},
  mounted() {
    this.getArticleList();
  },
};
</script>
<style lang="less" scoped>
.article-list {
  margin-top: 40px;
  text-align: left;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  .addbtn {
    margin-bottom: 10px;
  }
}
</style>
