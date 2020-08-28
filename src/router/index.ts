import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const homePage = () => import('../views/index.vue')
const homePageHello = () => import('../views/components/index.vue')
const study = () => import('../views/components/study.vue')

export default new Router({
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: homePage
        },
        {
            path: '/',
            redirect: '/homePage',
        },
        {
            path: '/homePageHello',
            name: 'homePageHello',
            component: homePageHello
        },
        {
            path: '/study',
            name: 'study',
            component: study
        },
    ]
})