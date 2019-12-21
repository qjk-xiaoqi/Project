import Vue from 'vue';
import App from './App.vue';
import router from './router/r-config.js'; 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import store from './store/sto';
import {getRequest} from './utils/axi.js';
import {postRequest} from './utils/axi.js';
import {deleteRequest} from './utils/axi.js';
import {putRequest} from './utils/axi.js';
Vue.use(ElementUI);

Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;



// 路由守卫 待完善

/*
router.beforeEach((to, from, next)=> {
  
)
*/
 


 

new Vue({
    el: '#app',
    router,
    store,
    render: h =>h(App)
  });