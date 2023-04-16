<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 00:35:22
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-16 13:26:32
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
              <article>
                <a href="#" class="image"
                  ><img
                    src="~assets/images/pexels-andrea-davis-3653849.jpg"
                    alt=""
                /></a>
                <h3>什么是SPA页面？</h3>
                <p>
                  SPA（single-page
                  application），翻译过来就是单页应用SPA是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载
                </p>
                <ul class="actions">
                  <li>
                    <nuxt-link to="" class="button"> 更多 </nuxt-link>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image"
                  ><img
                    src="~assets/images/pexels-andrea-davis-3653849.jpg"
                    alt=""
                /></a>
                <h3>什么是SPA页面？</h3>
                <p>
                  SPA（single-page
                  application），翻译过来就是单页应用SPA是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载
                </p>
                <ul class="actions">
                  <li>
                    <nuxt-link to="" class="button"> 更多 </nuxt-link>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image"
                  ><img
                    src="~assets/images/pexels-andrea-davis-3653849.jpg"
                    alt=""
                /></a>
                <h3>什么是SPA页面？</h3>
                <p>
                  SPA（single-page
                  application），翻译过来就是单页应用SPA是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载
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
export default {
  components: {},
  props: [],
  data() {
    return { currentToggle: false };
  },
  asyncData(context) {
    console.log(context.$axios);
    return context.$axios.get("/getArticle?page=1&limit=2").then((res) => {
      console.log(res.data.data.articles);
    });
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