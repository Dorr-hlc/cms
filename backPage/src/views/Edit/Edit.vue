<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-25 20:35:22
 * @Author: 
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-22 16:21:24
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
        <el-cascader
          v-model="form.tags"
          :options="options"
          @change="handleChange"
        ></el-cascader>
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
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {},
  props: [],
  data() {
    return {
      form: {
        title: "",
        tags: [],
        desc: "",
        status: "1",
        content: "",
        htmlText: "",
      },
      options: [
        {
          value: "生活",
          label: "生活",
          children: [
            {
              value: "美食",
              label: "美食",
            },
            {
              value: "旅游",
              label: "旅游",
            },
          ],
        },
        {
          value: "工作",
          label: "工作",
          children: [
            {
              value: "jQuery",
              label: "jQuery",
            },
            {
              value: "Vue",
              label: "Vue",
            },
            {
              value: "React",
              label: "React",
            },
            {
              value: "Node",
              label: "Node",
            },
            {
              value: "MongoDB",
              label: "MongoDB",
            },
            {
              value: "MySql",
              label: "MySql",
            },
            {
              value: "Css",
              label: "Css",
            },
            {
              value: "JavaScript",
              label: "JavaScript",
            },
          ],
        },
      ],
    };
  },
  watch: {},
  computed: {
    ...mapState({
      username: (state) => state.userinfo.LoginInfo.username,
    }),
  },
  methods: {
    onSubmit() {
      const newProps = {
        author: this.username,
      }; //新增属性，一个是tags格式化成数组，一个是当前登录的作者名
      const updatedForm = Object.assign({}, this.form, newProps);
      this.$set(this, "form", updatedForm); //添加当前登录的作者名
      this.$api.subArticle(this.form);
      this.$router.push({ name: "List" });
    },
    onCancel() {},
    valueChange(value, render) {
      //value为输入的内容，render是markdown渲染之后的html代码
      if (value) {
        console.log(value, render);
        this.form.htmlText = render;
      }
    },
    handleChange(value) {
      console.log(value);
    },
    async imgAdd(pos, $file) {
      let _this = this;
      let result = await this.$api.uploadImg($file);
      console.log(result);
      if (result.code == 200) {
        let url = result.data.url;
        _this.$refs.md.$img2Url(pos, url);
      }
    },

    handleError(err) {
      console.log(err);
    },
    async byIdGetArticle() {
      let article_id = this.$route.params.article_id;
      if (article_id) {
        let result = await this.$api.getArticle({
          article_id,
        });
        this.form = result.data.articles;
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
.el-cascader {
  width: 100%;
}
</style>
<style>
.el-cascader-menu {
  min-height: auto;
}
.el-cascader-menu__wrap {
  /* height: auto; */
}
</style>
