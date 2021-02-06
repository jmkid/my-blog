import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articleNum: ''
    },
    mutations: {
        // eslint-disable-next-line no-unused-vars
        getArticleNum(state) {
            state.articleNum = localStorage.getItem("articleNum")
        }
    },
    actions: {}
})
