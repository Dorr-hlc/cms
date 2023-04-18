/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-15 17:36:40
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-19 00:40:31
 * @FilePath: \myblog\nuxt.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hlc-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/global-components.js",
      ssr: false
    },
    {
      src: "~/plugins/axiosPlugin.js",
      ssr: true
    },
    { src: '~/plugins/mavon-editor.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api": {
      target: "http://192.168.0.92:3000", // 后台服务器的地址
      changeOrigin: true
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0'
  }
}
