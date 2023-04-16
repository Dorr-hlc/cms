/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 01:16:59
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-17 00:19:39
 * @FilePath: \myblog\plugins\axios.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// axiosPlugin.js
export default function ({ $axios, redirect }) {
    // 请求拦截器
    $axios.interceptors.request.use(config => {
        console.log('请求拦截器被触发')
        return config
    })

    // 响应拦截器
    $axios.interceptors.response.use(response => {
        console.log('响应拦截器被触发')
        return response
    }, error => {
        if (error.response.status === 401) {
            redirect('/login')
        }
        return Promise.reject(error)
    })
}
