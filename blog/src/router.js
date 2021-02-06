import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        // 重定向默认首页为homePage
        path: '/',
        redirect: 'homePage'
    }, {
        // 博客首页，重定向到文章列表子页面
        path: '/homePage',
        name: 'homePage',
        component: Home,
        redirect: '/homePage/article',
        children: [{
            // 文章子页面
            path: '/homePage/article',
            name: 'article',
            component: () => import('./views/Article.vue')
        }, {
            // 更新列表页面
            path: '/homePage/timeLine',
            name: 'timeLine',
            component: () => import('./views/TimeLine.vue')
        }, {
            // 友链页面
            path: '/homePage/friendLink',
            name: 'friendLink',
            component: () => import('./views/FriendLink.vue')
        }, {
            // 文章归档
            path: '/homePage/fileLine',
            name: 'FileLine',
            component: () => import('./views/FileLine.vue')
        }, {
            // 评论页面
            path: '/homePage/remarkPage',
            name: 'remarkPage',
            component: () => import('./views/RemarkPage.vue')
        },]
    },
    ]
})
