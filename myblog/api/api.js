import apiClient from './apiClient'
export default {
    getPosts() {
        return apiClient.get('/getArticle?page=1&limit=2')
    },
}