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
          <div class="article-content">
            <article v-html="this.render" />
            <!-- partial:index.partial.html -->
            <div class="user-card">
              <div class="container">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cookies.jpg"
                  alt="cookies"
                  class="hero-image"
                />

                <div class="information">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/avatar.png"
                    alt="avatar"
                    class="avatar"
                  />
                  <div class="name">Dorr</div>
                  <div class="position">道阻且长，行则将至</div>

                  <div class="stats">
                    <span class="followers">
                      <span class="value">323</span>
                      <span class="label">点赞</span>
                    </span>
                    <!-- end followers -->

                    <span class="following">
                      <span class="value">290</span>
                      <span class="label">收藏</span>
                    </span>

                    <span class="stories">
                      <span class="value">22</span>
                      <span class="label">文章</span>
                    </span>
                  </div>
                  <!-- end stats -->
                </div>
                <!-- end information -->
              </div>
              <!-- end container -->
            </div>
            <!-- end user-card -->
            <!-- partial -->
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
      return { markdownText: markdownText.articles.content };
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
.article-content {
  display: flex;
  align-items: flex-start;
  margin: 40px 0;
}
article {
  width: 70%;
}

.user-card {
  width: 30%;
  font: 13px/23px "Raleway", Arial, sans-serif;
  color: #303336;
  padding: 40px 0;
}

.container {
  margin: 0 auto;
  width: 300px;
  height: 465px;
  background: white;
  border-radius: 3px;
  position: relative;
}

.information {
  text-align: center;
}

.avatar {
  margin: 0 auto;
  margin: -82px auto 15px;
  display: block;
}

.name {
  font-size: 22px;
}

.position {
  font-size: 16px;
  color: #8c98a8;
  margin-bottom: 24px;
}

.stats {
  margin: auto;
  border-top: 1px solid #ced5e0;
  width: 240px;
}
.stats .followers,
.stats .following,
.stats .stories {
  display: inline-block;
  padding: 6px 10px 0;
}
.stats .followers,
.stats .following {
  border-right: 1px solid #ced5e0;
}
.stats .value {
  font-size: 18px;
  font-weight: 600;
}
.stats .label {
  display: block;
  font-size: 14px;
  color: #8c98a8;
}
</style>