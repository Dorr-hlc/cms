<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-26 22:31:37
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-26 23:06:01
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
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标签">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.tags }}</span>
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
            <el-tag size="medium">{{ scope.row.status }}</el-tag>
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
export default {
  components: {},
  props: [],
  data() {
    return {
      tableData: [
        {
          date: "2023-05-02",
          tags: "vue",
          title: "深入vue",
          author: "侯柳村",
          status: 1,
        },
        {
          date: "2023-05-04",
          tags: "vue",
          title: "深入vue",
          author: "侯柳村",
          status: 0,
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    toEdit() {
      this.$router.push({ name: "Edit" });
    },
  },
  created() {},
  mounted() {},
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
