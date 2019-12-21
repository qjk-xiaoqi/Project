// Vuex可实现跨组件数据共享。
// Vuex的配置
import Vue from 'vue';
import Vuex from 'vuex';

import product_data from '../product.js';
Vue.use(Vuex);

// store中包含了应用数据（状态）和操作过程。Vuex里的数据都是响应式的，任何组件使用同一store的数据时
// 只要store的数据变化，对应的组件也会立即更新。
export default new Vuex.Store({
    // state里面的数据只能读取，不能手动改变。在组件中使用this.$store.state.XX来读取数据
    state: {
        // 商品列表数据
        productList: [],
        // 购物车
        cartList: []
    },
    // mutations里面的用来修改state里面的数据，在组件中使用this.$store.commit来执行mutations
    mutations: {
        // 添加商品
        setProductList(state, data) {
            state.productList = data;
        }
    },

    // getters
    getters:{

    }
    // actions : mutations中不能异步操作数据，就有了actions。使用this.$store.dispatch触发
    actions:{
        getProductList (context) {
            // 模拟异步请求数据
            setTimeout(() => {
                context.commit('setProductList', product_data);
            }, 500)
        }

    }
})