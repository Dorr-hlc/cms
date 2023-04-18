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
        console.log(res);
        commit("GETARTICE", res.data)
    }
}
const getters = {
    getArticleById: (state) => (id) => {
        return state.articles.articles.find(item => item._id === id)
    }
}

export default { namespaced: true, state, mutations, actions, getters }
