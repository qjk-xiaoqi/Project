// Vuex的配置
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 仓库store包含了应用的数据和操作过程，Vuex里的数据都是响应式的，任何组件使用统一store的数据时，
// 只要store的数据变化，对应的组件也会立即更新
export default new Vuex.Store({
    state: {
        // user数据待改善
        user: {
            // name: '未登录',
            name: window.localStorage.getItem('user' || '[]') == null ? '未登录' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
            userface: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userface,
            username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username,
            roles: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).roles
          },
        routes: [],
    },
    mutations: {
        initMenu(state, menus){
            state.routes = menus;
        },
        login(state, user){
            state.user = user;
            window.localStorage.setItem('user', JSON.stringify(user));
        }
    }



});