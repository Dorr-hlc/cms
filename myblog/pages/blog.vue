<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 00:35:22
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-19 00:59:15
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
              <div class="userinfo"></div>
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
      limit: 1,
    });
    let response = store.state.articles;
    console.log(response);
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
    width: 70%;
    background: #fff;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 24px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    &::before {
      content: none;
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
</style>
