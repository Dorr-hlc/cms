<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-25 20:35:22
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-30 09:14:09
 * @RevisionHistory: 
-->
<template>
  <div class="addForm">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="form.tags" placeholder="请输入文章标签"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" placeholder="请输入文章作者"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc" placeholder="请输入文章描述"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor
          v-model="form.content"
          :preview="true"
          :subfield="true"
          @error="handleError"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      form: {
        title: "",
        tags: "",
        author: "",
        desc: "",
        status: "1",
        content: "# 111",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit() {
      let result = this.$api.subArticle(this.form);
      console.log(result);
    },
    valueChange(value, render) {
      console.log(content);
      //value为输入的内容，render是markdown渲染之后的html代码
      if (value) {
        // this.form.content = value;
        // console.log(value, render);
      }
    },
    handleError(err) {
      console.log(err);
    },
    async byIdGetArticle() {
      let id = this.$route.params.id;
      if (id) {
        let result = await this.$api.getArticle({
          id: this.$route.params.id,
        });
        this.form = result.data;
        this.form.tags = this.form.tags.map((item) => item.join(","));
      }
    },
  },
  created() {},
  mounted() {
    this.byIdGetArticle();
  },
};
</script>
<style lang="less" scoped>
.addForm {
  background: #fff;
  border-radius: 10px;
  margin-top: 40px;
  padding: 30px;
}
</style>
