/*
 * @Author: Dorr-hlc 1726660621@qq.com
 * @Date: 2023-04-18 23:40:57
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-19 21:59:39
 * @FilePath: \myblog\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as api from "~/api/api.js";
const state = () => ({ articles: [] })

const mutations = {
    GETARTICE(state, val) {
        state.articles = val
    }
}

const actions = {
    async getArticle({ commit }, value) {
        let res = await api.getPosts({ ...value });
        commit("GETARTICE", res.data)
    }
}
const getters = {
    getArticleById: (state) => (id) => {
        return state.articles.articles.find(item => item._id === id)
    }
}

export default { namespaced: true, state, mutations, actions, getters }
