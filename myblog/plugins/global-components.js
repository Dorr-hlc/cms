/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-15 18:00:49
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-15 18:01:05
 * @FilePath: \myblog\plugins\global-components.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// plugins/global-components.js
import Vue from "vue";
import MyAside from "~/components/Aside.vue";
import MyHeader from "~/components/Header.vue";
Vue.component("MyAside", MyAside);
Vue.component("MyHeader", MyHeader);