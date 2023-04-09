<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-05 17:46:21
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-09 21:44:12
 * @FilePath: \frontPage\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="loading" v-if="loading">
      <svg
        class="spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="path"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
    <div class="box" v-else>
      <Aside></Aside>
      <div class="pageContent">
        <div class="bnr">
          <div class="bnr-slider">
            <client-only>
              <swiper ref="mySwiper" :options="swiperOption">
                <swiper-slide>
                  <img src="~assets/images/img-1.jpg" alt="" srcset="" />
                </swiper-slide>
                <swiper-slide>
                  <img src="~assets/images/img-2.jpg" alt="" srcset="" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </client-only>
          </div>

          <div class="bnr-txt" data-aos="fade-down">
            <p class="subheading">嗨喽</p>
            <h1>Dorr一名热爱足球的前端工程师</h1>
            <p class="desc">
              作为一名web前端开发人员，我负责构建和维护网站和应用程序。我有扎实的HTML、CSS和JavaScript编程技能，能够将设计师提供的设计转化为交互性强、易于使用的网站和应用程序。
              能够根据项目需求选择合适的工具。我了解响应式设计和移动优先设计的原则，并能够开发适用于各种设备和屏幕大小的网站和应用程序。
              我也了解后端开发，熟悉Node.js和Express框架，能够与后端开发人员合作构建完整的应用程序。我了解数据库设计和管理，能够使用MySQL和MongoDB等数据库管理工具。
              我注重代码质量和可维护性，熟悉版本控制工具，例如Git和SVN，能够使用这些工具进行协作开发。
            </p>
            <p class="desc">
              除了技术技能，我也注重团队合作和沟通能力。我能够与设计师、后端开发人员和其他团队成员合作，共同解决问题，并确保项目按时交付。
              总之，作为一名web前端开发人员，我拥有扎实的技术技能和团队合作能力，能够构建高质量、易于使用的网站和应用程序，为用户提供良好的体验。
            </p>
          </div>
        </div>
        <div class="hot">
          <h2>最新博客</h2>
          <ul class="hot-list"  >
            <li  data-aos="fade-left" data-aos-duration="600">
              <nuxt-to to="/"
                ><img src="~assets/images/more-1.jpg" alt="" srcset="" />
                <div class="info">
                  <div class="title">Promoise异步</div>
                  <div class="author">Dorr</div>
                  <p class="desc">
                    设计必须是功能性的，功能性必须转化为视觉美学
                  </p>
                  <a href="" class="more">阅读更对 →</a>
                </div>
              </nuxt-to>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <nuxt-to to="/"
                ><img src="~assets/images/more-1.jpg" alt="" srcset="" />
                <div class="info">
                  <div class="title">Promoise异步</div>
                  <div class="author">Dorr</div>
                  <p class="desc">
                    设计必须是功能性的，功能性必须转化为视觉美学
                  </p>
                  <a href="" class="more">阅读更对 →</a>
                </div>
              </nuxt-to>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <nuxt-to to="/"
                ><img src="~assets/images/more-1.jpg" alt="" srcset="" />
                <div class="info">
                  <div class="title">Promoise异步</div>
                  <div class="author">Dorr</div>
                  <p class="desc">
                    设计必须是功能性的，功能性必须转化为视觉美学
                  </p>
                  <a href="" class="more">阅读更对 →</a>
                </div>
              </nuxt-to>
            </li>
            <li data-aos="fade-left" data-aos-duration="1200">
              <nuxt-to to="/"
                ><img src="~assets/images/more-1.jpg" alt="" srcset="" />
                <div class="info">
                  <div class="title">Promoise异步</div>
                  <div class="author">Dorr</div>
                  <p class="desc">
                    设计必须是功能性的，功能性必须转化为视觉美学
                  </p>
                  <a href="" class="more">阅读更对 →</a>
                </div>
              </nuxt-to>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      loading: true,
      swiperOption: {
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.loading = false;
  },
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  justify-content: flex-end;
}
.bnr {
  display: flex;
  align-items: center;

  &-slider {
    width: 50%;
  }
  &-txt {
    width: 50%;
    padding: 0 3em;
  }
  .swiper-wrapper {
    height: 100vh;
  }
  .swiper-slide img {
    width: 100%;
    height: 100vh;
  }
  .subheading {
    font-size: 30px;
    color: #bfbfbf;
    font-weight: 400;
  }
  h1 {
    font-size: 56px;
    margin: 20px 0 40px 0;
  }
  .desc {
    color: #999999;
    font-size: 16px;
    text-indent: 2em;
    line-height: 25px;
  }
}
.hot {
  padding: 5em 1.8em;
  text-align: center;
  h2 {
    font-size: 32px;
    margin-bottom: 60px;
  }
  &-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    li {
      position: relative;
      width: 23%;
    }
    .info {
      padding: 25px;
      background: #f7ecec;
      text-align: left;
      .title {
        font-size: 26px;
      }
      .author {
        font-size: 12px;
        margin: 10px 0 0;
        color: rgba(0, 0, 0, 0.4);
      }
      .desc {
        margin: 30px 0;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
      }
      .more {
        display: inline-block;
        font-size: 16px;
        color: #000;
      }
    }
  }
}
.pageContent {
  width: 78%;
}
</style>
<style lang="less">
.swiper-pagination-bullet {
  position: relative;
  width: 10px;
  height: 10px;
  margin: 0px 6px !important;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  &::after {
    position: absolute;
    left: -3px;
    top: -3px;
    right: 0;
    bottom: 0px;
    content: "";
    width: 14px;
    height: 14px;
    display: inline-block;
    border: 1px solid #e6e6e6;
    border-radius: 50%;
  }
}

.swiper-pagination-bullet-active {
  background: #fff !important;
}
</style>