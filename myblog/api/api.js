/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-17 00:12:05
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-19 01:28:28
 * @FilePath: \myblog\api\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import apiClient from './apiClient'
const get = (url, params) => {
    console.log(params);
    return apiClient
        .get(url, { params })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            if (process.env.NODE_ENV !== "production") {
                console.error(error);
            }
            throw error;
        });
};

const post = (url, data) => {

    return apiClient
        .post(url, data)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            if (process.env.NODE_ENV !== "production") {
                console.error(error);
            }
        });
};

export const getPosts = (params) => {
    return get('/getArticle', params)
}