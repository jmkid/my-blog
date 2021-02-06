import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: 'home'
    }, {
        path: '/home',
        redirect: '/home/articleList',
        name: 'home',
        component: Home,
        children: [{
            path: '/home/articleList', component: () => import('@/views/ArticleList')
        }, {
            path: "/home/articleEdit", component: () => import('@/views/ArticleEdit')
        }, {
            path: "/home/reNew", component: () => import('@/views/RenewPage')
        }, {
            path: "/home/friendLink", component: () => import('@/views/FriendLink')
        }, {
            path: "/home/messagePage", component: () => import('@/views/mesPage')
        }, {
            path: "/home/bookShare", component: () => import('@/views/bookShare')
        }, {
            path: "/home/videoShare", component: () => import('@/views/videoPage')
        }, {
            path: "/home/gameList", component: () => import('@/views/GameList')
        }, {
            path: "/home/fanList", component: () => import('@/views/fanList')
        }]
    },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

