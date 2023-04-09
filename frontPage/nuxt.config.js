/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-05 17:46:21
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-09 17:25:44
 * @FilePath: \frontPage\nuxt.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE,
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "frontPage",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" },

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{
    src: "~/assets/css/style.css", ssr: false
  }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: "~/plugins/global-components.js",
    ssr: false
  },
  {
    src: "~/plugins/swiper.js",
    ssr: false
  },
  { src: '~/plugins/aos.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^swiper/, /^vue-awesome-swiper/],
    extend(config, { isDev, isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    }
  },
};
