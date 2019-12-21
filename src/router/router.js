// 路由的配置
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const Routers = [
    {
        path: '/list',
        meta: {
            title: '商品列表'
        },
        component:(resolve) => require(['../views/list.vue'], resolve)
    },
]

// 创建路由实例，并导出
export default new VueRouter({
    routes: Routers;
})