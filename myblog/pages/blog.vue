<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 00:35:22
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-17 00:18:46
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
            <div class="posts">
              <article v-for="post in posts.data.articles" :key="post._id">
                <a href="#" class="image"
                  ><img
                    src="~assets/images/pexels-andrea-davis-3653849.jpg"
                    alt=""
                /></a>
                <h3>{{ post.title }}</h3>
                <p>
                  {{ post.desc }}
                </p>
                <ul class="actions">
                  <li>
                    <nuxt-link to="" class="button"> 更多 </nuxt-link>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
import api from "~/api/api.js";
export default {
  components: {},
  props: [],
  data() {
    return { currentToggle: false, articleList: [] };
  },
  async asyncData() {
    let response = await api.getPosts();
    console.log(response.data);
    return {
      posts: response.data,
    };
  },
  watch: {},
  computed: {},
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
</style>