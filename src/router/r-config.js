import Vue from 'vue';
import VueRouter from 'vue-router';

import app1 from '../components/app1.vue';
import app2 from '../components/app2.vue';
import Home from '../components/Home.vue';
import Login from '../components/login.vue';


Vue.use(VueRouter);
// 定义路由
const Routers = [
    {path: '/', redirect: '/Login'},
    {
        path:'/app1',
        component: app1
    }, 
    {
        path:'/app2',
        component: app2,
        
    },
    {
        path:'/Home',
        name: 'Home',
        component: Home,
        // Home 路由跳转前需要登录的,配置下meta下的requireAuth的为true就ok了.
        meta: {          
            requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
          },
    },
    {
        name: 'Login',
        path:'/Login',
        component: Login
    }
]
// 创建router实例，然后传`routes`配置
export default new VueRouter({   
    routes: Routers
})
