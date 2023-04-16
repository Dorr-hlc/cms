/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 01:16:59
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-16 01:17:09
 * @FilePath: \myblog\plugins\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default ({ app }, inject) => {
    //配置基础接口域名
    let baseApiDomain = 'https://api.xxx.com/'
    //基准域名
    const baseApiUrl = baseApiDomain + 'api'
    //接口配置
    const _API = {
        //评论列表接口
        getCommentList: (data) =>
            app.$requestApi(`${baseApiUrl}/aosbase/_comment_show`, data),
        //发表评论
        submitComment: (data) =>
            app.$requestApi(`${baseApiUrl}/aosbase/comment_sub`, data, 'POST'),
        //可以添加更多接口...
    }
    //注入到全局nuxt示例中
    inject('api', _API)
}