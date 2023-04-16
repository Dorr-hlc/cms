<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-15 17:36:40
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-16 00:35:34
 * @FilePath: \myblog\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-15 17:36:40
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-16 00:33:13
 * @FilePath: \myblog\pages\index.vue
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

          <!-- Banner -->
          <section id="banner">
            <div class="content">
              <header>
                <h1>
                  嗨咯，欢迎来到<br />
                  Hlc的个人站点
                </h1>
                <p>记录工作，生活的个人网站</p>
              </header>
              <p>
                作为一名web前端开发人员，我负责构建和维护网站和应用程序。我有扎实的HTML、CSS和JavaScript编程技能，能够将设计师提供的设计转化为交互性强、易于使用的网站和应用程序。
                能够根据项目需求选择合适的工具。我了解响应式设计和移动优先设计的原则，并能够开发适用于各种设备和屏幕大小的网站和应用程序。
                我也了解后端开发，熟悉Node.js和Express框架，能够与后端开发人员合作构建完整的应用程序。我了解数据库设计和管理，能够使用MySQL和MongoDB等数据库管理工具。
                我注重代码质量和可维护性，熟悉版本控制工具，例如Git和SVN，能够使用这些工具进行协作开发。
              </p>
              <ul class="actions">
                <li><a href="#" class="button big">了解更多</a></li>
              </ul>
            </div>
            <span class="image object">
              <img
                src="~assets/images/pexels-kevin-bidwell-2042281.jpg"
                alt=""
              />
            </span>
          </section>

          <!-- Section -->
          <section>
            <header class="major">
              <h2>关于我</h2>
            </header>
            <div class="features">
              <article>
                <span class="icon fa-gem"></span>
                <div class="content">
                  <h3>用户体验设计</h3>
                  <p>
                    我非常注重用户体验设计，通过仔细考虑用户需求和习惯，我可以优化您的网站，使其更加易于使用和可访问，从而提高用户的满意度和忠诚度。
                  </p>
                </div>
              </article>
              <article>
                <span class="icon solid fa-paper-plane"></span>
                <div class="content">
                  <h3>技术栈广泛</h3>
                  <p>
                    我拥有多年的前端开发经验，熟练掌握HTML、CSS、JavaScript等多种技术，并且不断学习和掌握最新的技术和趋势，因此可以将我的广泛技术栈作为我的优势来展示我的全面性和专业性。
                  </p>
                </div>
              </article>
              <article>
                <span class="icon solid fa-rocket"></span>
                <div class="content">
                  <h3>协作能力</h3>
                  <p>
                    我拥有很强的协作能力，与其他团队成员如设计师、后端工程师等等紧密合作，我了解如何与他人合作，提供建设性的反馈，促进项目进展，并确保项目成功完成。
                  </p>
                </div>
              </article>
              <article>
                <span class="icon solid fa-signal"></span>
                <div class="content">
                  <h3>持续学习</h3>
                  <p>
                    作为前端开发人员，我始终保持学习的状态，并随时掌握最新的技术和趋势。我了解学习新技能的重要性，因此我将我的持续学习能力作为我的优势，展示我的学习能力和适应能力。
                  </p>
                </div>
              </article>
            </div>
          </section>

          <!-- Section -->
          <section>
            <header class="major">
              <h2>最新博客</h2>
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
  name: "IndexPage",
  data() {
    return {
      currentToggle: false,
    };
  },
  methods: {
    toggle(data) {
      console.log(data);
      this.currentToggle = data;
    },
  },
};
</script>
