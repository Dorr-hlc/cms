<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 00:38:16
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-22 22:24:26
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
          <!-- <mavon-editor
            v-model="markdownText"
            @change="changeData"
            style="display: none"
          /> -->
          <MyHeader />
          <div class="article-content">
            <article v-html="this.markdownText" ref="article" />
            <div class="article-directory">
              <strong class="title">目录</strong>
              <nuxt-link
                :to="Routeformatting(directoryItem.href)"
                v-for="directoryItem in directory"
                :key="directoryItem.href"
                >{{ directoryItem.name }}</nuxt-link
              >
            </div>
          </div>

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
    return { currentToggle: false, markdownText: "", render: "", tocs: [] };
  },
  async asyncData({ store, query }) {
    if (process.client) {
      const markdownText = await store.getters.getArticleById(query._id);
      console.log(markdownText);
      return {
        markdownText: markdownText.htmlText,
        directory: markdownText.directory,
      };
    } else {
      await store.dispatch("getArticle", {
        page: 1,
        limit: 6,
        article_id: query._id,
      });
      const markdownText = await store.state.articles;
      return {
        markdownText: markdownText.articles.htmlText,
        directory: markdownText.articles.directory,
      };
    }
  },
  watch: {},
  computed: {},
  methods: {
    toggle(data) {
      this.currentToggle = data;
    },
    Routeformatting(anchor) {
      return `${this.$route.path}?_id=${this.$route.query._id}#${anchor}`;
    },
  },
  created() {},
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style lang="less" scoped>
.article-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 40px 0;
}
article {
  width: 70%;
}

ul {
  margin: auto;
  padding: 0px;
}
</style>
<style lang="less">
h1 {
  font-size: 3em;
}
.article-directory {
  width: 26%;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  box-shadow: 2.8px 6.6px 18.3px rgba(0, 0, 0, 0.047),
    22px 53px 146px rgba(0, 0, 0, 0.11);
  padding: 24px;
  .title{
    font-size: 24px;
    margin-bottom: 14px;
  }
  a {
    font-size: 16px;
    text-decoration: none;
    border-bottom: none;
    color: #000;
  }
}
</style>