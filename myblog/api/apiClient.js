/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-16 23:59:02
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-19 01:16:44
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
// 添加请求拦截器
apiClient.interceptors.request.use(
    (config) => {
        // 在请求头中添加token

        return config;
    },
    (error) => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// 添加响应拦截器
apiClient.interceptors.response.use(
    // 对响应数据进行处理
    (response) => {
        // 如果返回的状态码为 200，说明接口请求成功，可以正常拿到数据
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            // 否则的话抛出错误
            return Promise.reject(response.data);
        }
    },
    // 对响应错误进行处理
    (error) => {
        if (error.response) {
            // 根据不同的状态码进行不同的处理

        } else {
            // 对请求错误进行处理

        }
        return Promise.reject(error);
    }
);


export default apiClient

