<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 00:35:22
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-20 22:58:56
 * @FilePath: \myblog\pages\blog.vue
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
          <MyHeader />
          <!-- Section -->
          <section>
            <header class="major">
              <h2>博客列表</h2>
            </header>
            <div class="blog-box">
              <div class="posts">
                <article v-for="post in posts.articles" :key="post._id">
                  <div class="info">
                    <div class="time">
                      <span class="post-time">{{
                        timeMonthFormate(post.time)
                      }}</span>
                      <span class="post-year">{{
                        timeYearFormate(post.time)
                      }}</span>
                    </div>

                    <h3>{{ post.title }}</h3>
                  </div>

                  <p class="desc">
                    {{ post.desc }}
                  </p>

                  <ul class="actions">
                    <li>
                      <nuxt-link
                        :to="{
                          path: '/articleDetails',
                          query: { _id: post._id },
                        }"
                        class="button"
                      >
                        阅读更多
                      </nuxt-link>
                    </li>
                  </ul>
                </article>
              </div>
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
          </section>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
import moment from "moment";
export default {
  components: {},
  props: [],
  data() {
    return { currentToggle: false };
  },

  async asyncData({ store }) {
    await store.dispatch("getArticle", {
      page: 1,
      limit: 6,
    });
    let response = store.state.articles;

    return {
      posts: response,
    };
  },
  watch: {},
  computed: {
    timeMonthFormate() {
      return (timestamp) => {
        return moment.utc(timestamp).local().format("MM.DD");
      };
    },
    timeYearFormate() {
      return (timestamp) => {
        return moment.utc(timestamp).local().format("YYYY");
      };
    },
  },
  methods: {
    toggle(data) {
      this.currentToggle = data;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.blog-box {
  display: flex;
  align-items: center;
  article {
    position: relative;
    width: 70%;
    background: #fff;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 24px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    &::before {
      position: absolute;
      left: 0px;
      top: 0px;
      content: "";
      display: inline-block;
      width: 6px;
      height: 100%;
      background: #f56a6a;
      border-radius: 10px 0 0 10px;
    }
  }
  .userinfo {
    width: 30%;
  }
  ul.actions {
    justify-content: flex-end;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;
    h3 {
      margin: 0px;
    }
    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #f56a6a;
      color: #fff;
      font-size: 16px;
      line-height: 1;
      font-weight: 600;
      border-radius: 4px;
      padding: 2px 5px;
      margin-right: 10px;
      span {
        display: inline-block;
      }
      .post-year {
        font-size: 14px;
      }
    }
  }
  .desc {
    margin: 30px 0;
  }
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
