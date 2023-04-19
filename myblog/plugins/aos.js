/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-19 21:23:06
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-19 21:23:13
 * @FilePath: \myblog\plugins\aos.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import AOS from 'aos';
import "aos/dist/aos.css";
export default ({app}) => {
    app.AOS = new AOS.init();
}
