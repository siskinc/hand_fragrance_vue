import Vue from 'vue'
import Router from 'vue-router'

// 引入路由
Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import("../views/index/index"),
            meta: {
                title: "主页"
            },
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("../views/login/login"),
            meta: {
                title: "登录"
            },
        },
        {
            path: '/wish',
            name: 'wish',
            component: () => import("../views/index/wish")
        },
    ]
})

// 设置页面标题读取
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next()
})

export default router
