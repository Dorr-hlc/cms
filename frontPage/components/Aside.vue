<!--
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-06 22:35:21
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-09 17:46:19
 * @FilePath: \frontPage\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <aside class="aside">
      <div class="aside-top">
        <div class="aside-logo">
          <span class="avator"></span>
          <p>Dorr</p>
        </div>
        <ul class="aside-list">
          <li
            v-for="(navItem, index) in nuxtLinks"
            :key="navItem.url"
            :class="{ active: selectedNavItem === index }"
            @mouseenter="selectedNavItem = index"
            @mouseleave="selectedNavItem = 0"
          >
            <nuxt-link :to="navItem.url">{{ navItem.text }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="aside-ft">
        <p>© 2023 HLC</p>
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      nuxtLinks: [
        {
          url: "/",
          text: "主页",
        },
        {
          url: "/blog",
          text: "工作博客",
        },
        {
          url: "/life",
          text: "旅游生活",
        },
        {
          url: "/photo",
          text: "我的相册",
        },
      ],
      selectedNavItem: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    mouseEnter() {},
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.aside {
  position: fixed;
  z-index: 999;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 22%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.04);
  padding: 3em;
  overflow-y: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  &-logo {
    font-size: 32px;
    color: #000;
    font-weight: 600;
    .avator {
      display: inline-block;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: url("~assets/images/user.jpg") no-repeat;
      background-size: cover;
      background-position: center center;
      margin-bottom: 5px;
    }
  }
  &-list {
    font-size: 24px;
    font-weight: 600;
    margin-top: 3em;

    transition: all 0.3s ease;

    li {
      margin: 0 0 25px 0;
      a {
        padding: 10px 0;
        position: relative;
        color: rgba(0, 0, 0, 0.7);
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        transition: all 0.3s ease;
        text-decoration: none;
        &:hover {
          text-decoration: none;
        }
        &::after {
          content: "";
          position: absolute;
          height: 1px;
          bottom: 7px;
          left: 0;
          right: 0;
          background-color: #000000;
          visibility: hidden;
          -webkit-transform: scaleX(0);
          -moz-transform: scaleX(0);
          -ms-transform: scaleX(0);
          -o-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      }

      &.active {
        a {
          color: #000;
          &::after {
            visibility: visible;
            -webkit-transform: scaleX(1);
            -moz-transform: scaleX(1);
            -ms-transform: scaleX(1);
            -o-transform: scaleX(1);
            transform: scaleX(1);
          }
        }
      }
    }
  }
  &-ft {
    font-size: 14px;
    text-align: center;
    width: 100%;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>