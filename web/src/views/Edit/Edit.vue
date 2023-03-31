<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-25 20:35:22
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-31 14:18:25
 * @LastEditTime: 2023-03-30 09:36:43
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
          @change="valueChange"
          ref="md"
          @imgAdd="imgAdd"
          :preview="true"
          :subfield="true"
        />
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
        content: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit() {
      this.$api.subArticle(this.form);
      this.$router.push({ name: "List" });
    },
    valueChange(value, render) {
      console.log(content);
      //value为输入的内容，render是markdown渲染之后的html代码
      if (value) {
        console.log(value, render);
      }
    },
    async imgAdd(pos, $file) {
      var _this = this;
      var formdata = new FormData();
      formdata.append("file", $file);
      await this.$api.uploadImg(formdata);
      // if (reslut.code == 200) {
      //   var url = reslut.url;
      //   _this.$refs.md.$img2Url(pos, url);
      // }
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
        this.form.tags = this.form.tags.map((item) => item).join(",");
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
