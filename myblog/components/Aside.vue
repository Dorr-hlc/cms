<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-15 17:59:17
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-15 19:56:10
 * @FilePath: \myblog\components\aside.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <client-only>
    <div id="sidebar" :class="{ inactive: selectedNavItem }">
      <div class="inner">
        <!-- Search -->
        <section id="search" class="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="搜索" />
          </form>
        </section>

        <!-- Menu -->
        <nav id="menu">
          <header class="major">
            <h2>菜单</h2>
          </header>
          <ul>
            <li>
              <nuxt-link to="/">主页</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog">blog</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tour">旅游</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/life">生活</nuxt-link>
            </li>

            <!-- <li>
              <span class="opener">Submenu</span>
              <ul>
                <li><a href="#">Lorem Dolor</a></li>
                <li><a href="#">Ipsum Adipiscing</a></li>
                <li><a href="#">Tempus Magna</a></li>
                <li><a href="#">Feugiat Veroeros</a></li>
              </ul>
            </li>
            <li><a href="#">Etiam Dolore</a></li>
            <li><a href="#">Adipiscing</a></li>
            <li>
              <span class="opener">Another Submenu</span>
              <ul>
                <li><a href="#">Lorem Dolor</a></li>
                <li><a href="#">Ipsum Adipiscing</a></li>
                <li><a href="#">Tempus Magna</a></li>
                <li><a href="#">Feugiat Veroeros</a></li>
              </ul>
            </li>
            <li><a href="#">Maximus Erat</a></li>
            <li><a href="#">Sapien Mauris</a></li>
            <li><a href="#">Amet Lacinia</a></li> -->
          </ul>
        </nav>

        <section>
          <ul class="contact">
            <li class="icon solid fa-envelope">
              <a href="#">1726660621@qq.com</a>
            </li>
            <li class="icon solid fa-phone">17380127492</li>
            <li class="icon solid fa-home">四川省成都市水碾河</li>
          </ul>
        </section>

        <!-- Footer -->
        <footer id="footer">
          <p class="copyright">@版权所有-HLC的个人博客，记录生活，成长学习</p>
        </footer>
      </div>
      <a href="javacript:;" class="toggle" @click="toggleAside">Toggle</a>
    </div>
  </client-only>
</template>
<script>
export default {
  name: "myAside",
  components: {},
  props: [],
  data() {
    return { selectedNavItem: false };
  },
  watch: {},
  computed: {},
  methods: {
    toggleAside() {
      this.selectedNavItem = !this.selectedNavItem;
      if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        this.$emit("change", this.selectedNavItem);
      }
    },
  },
  created() {},
  mounted() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      this.selectedNavItem = true;
    } else {
      this.selectedNavItem = false;
    }
    this.$emit("change", this.selectedNavItem);
  },
};
</script>
<style lang="less" scoped>
</style>