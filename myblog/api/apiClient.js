/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 23:59:02
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-17 00:12:15
 * @FilePath: \myblog\api\apiClient.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://192.168.0.92:3000/front',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default apiClient

