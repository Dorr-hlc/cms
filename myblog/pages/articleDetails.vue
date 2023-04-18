<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 00:38:16
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-19 01:31:01
 * @FilePath: \myblog\pages\ArticleDetails.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <client-only>
    <div id="wrapper">
      <!-- Sidebar -->
      <myAside @change="toggle" />
      <!-- Main -->
      <div id="main" :class="{ inactive: currentToggle }">
        <div class="inner">
          <!-- Header -->
          <mavon-editor
            v-model="markdownText"
            @change="changeData"
            style="display: none"
          />
          <MyHeader />
          <!-- <article v-html="this.render" /> -->
          <!-- Section -->
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return { currentToggle: false, markdownText: "", render: "" };
  },
  async asyncData({ store, query }) {
    if (process.client) {
      // 客户端渲染
      const markdownText = await store.getters.getArticleById(query._id);
      return { markdownText: markdownText.content };
    } else {
      // 服务端渲染，需要重新请求数据
      await store.dispatch("getArticle", {
        page: 1,
        limit: 1,
        article_id: query._id,
      });
      const markdownText = await store.state.articles;
      console.log(markdownText);
      // return { markdownText: markdownText.content };
    }
  },
  watch: {},
  computed: {},
  methods: {
    toggle(data) {
      this.currentToggle = data;
    },
    changeData(value, render) {
      // value中是文本值,render是渲染出的html文本
      this.render = render;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
article {
  margin: 40px 0;
}
</style>