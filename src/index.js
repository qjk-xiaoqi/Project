import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
import './css/style.css';


// 路由守卫
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})
new Vue({
    el: '#app',
    router,
    store,
    render: h => {
        return h(App);
    }

})