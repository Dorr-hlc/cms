<template>
  <div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
      @ready="onEditorReady($event)"
    >
    </quill-editor>
    <div class="sub" @click="subArticle">提交内容</div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  components: { quillEditor },
  props: [],
  data() {
    return {
      content: "",
      // 富文本编辑器配置
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
            ["blockquote", "code-block"], // 引用  代码块
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
            [{ script: "sub" }, { script: "super" }], // 上标/下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ direction: "rtl" }], // 文本方向
            [
              {
                size: [
                  "12",
                  "14",
                  "16",
                  "18",
                  "20",
                  "22",
                  "24",
                  "28",
                  "32",
                  "36",
                ],
              },
            ], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6] }], // 标题
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            // [{ font: ['songti'] }], // 字体种类
            [{ align: [] }], // 对齐方式
            ["clean"], // 清除文本格式
            ["image", "video"], // 链接、图片、视频
          ],
        },
        placeholder: "请输入正文",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 失去焦点事件
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    // 获得焦点事件
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    // 准备富文本编辑器
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    // 内容改变事件
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    async subArticle() {
      const res = await this.$api.subArticle;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.sub {
  width: 300px;
  height: 48px;
  background: rgb(142, 142, 247);
  margin: 40px auto;
  color: #fff;
  line-height: 48px;
  font-weight: 600;
  cursor: pointer;
}
</style>
