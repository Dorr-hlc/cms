<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-26 22:31:37
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-04 15:33:37
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
          <span style="margin-left: 10px">{{
            formatDated(scope.row.time)
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.title }}</el-tag>
          </div>
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
          <el-popconfirm
            class="deleteBtn"
            title="确认删除改文章？"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button size="mini" type="danger" slot="reference"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.totalArticles"
    >
    </el-pagination>
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
      currentPage: 1,
      limit: 2,
      pagination: {
        page: 1,
        totalArticles: 0,
        totalPages: 0,
      },
    };
  },
  watch: {},
  computed: {
    formatDated() {
      return (timestamp) => {
        return moment.utc(timestamp).local().format("YYYY-MM-DD HH:mm:ss");
      };
    },
  },
  methods: {
    handleEdit(index, row) {
      this.$router.push({ name: "Edit", params: { article_id: row._id } });
    },
    async handleDelete(index, row) {
      let result = await this.$api.deleteArticle({
        article_id: row._id,
      });
      if (result.code == 200) {
        this.getArticleList();
      }
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
      let reslut = await this.$api.getArticle({
        page: this.currentPage,
        limit: this.limit,
      });
      if (reslut.code == "200") {
        this.tableData = reslut.data.articles;
        this.pagination = reslut.data.pagination;
      }
    },
    handleSizeChange(val) {
      this.limit = val;
      this.getArticleList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getArticleList();
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

  .deleteBtn {
    margin-left: 20px;
  }
}
</style>
<style>
.el-popconfirm__main {
  margin-bottom: 10px;
}
.el-pagination {
  text-align: center;
  margin-top: 80px;
}
.el-tag {
  margin: 0 5px;
}
</style>
