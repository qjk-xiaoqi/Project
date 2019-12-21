 <template>
    <div class="product">
        <router-link :to="'/product/' + infn.id" class="product-main">
            <img :src="info.image">
            <h4>{{ info.name}}</h4>
            <div class="product-color" :style="{background: colors[info.color]}"> </div>
            <div class="product-cost">￥ {{ info.cost}}</div>
            <!-- 点击按钮防止冒泡：使用prevent修饰符阻止冒泡 -->
            <div class="product-add-cart" @click.prevent="handleCart">加入购物车</div>
        </router-link>
    </div>
 </template>
 <script>
    export default {
        props: {
            info: {
                id: 1,
                name:'AirPods',
                brand: 'Apple',
                image: 'http: //ordfm6aah.bkt.clouddn.com/shop/1.jpeg',
                sales:1000,
                cost: 1288,
                color: '白色'
            },
            data () {
                return {
                    colors: {
                        '白色': '#ffffff',
                        '金色': '#dac272',
                        '蓝色': '#233472',
                        '红色': '#f2352e',
                    }
                }
            },
            methods: {
                handleCart () {
                    
                }
            }
        }
    }
 </script>
 <style scoped>
    .product {
        width: 25%;
        float: left;
    }
    .product-main {
        display: block;
        margin: 16px;
        padding: 16px;
        border: 1px solid #dddee1;
        border-radius: 6px;
        overflow: hidden;
        background-color: #fff;
        text-align: center;
        position: relative;
    }
    .product-main img{
        width: 100%;
    }
    h4{
        color: #222;
        overflow: hidden;
        /* 使用修饰符来隐藏多余的文字 */
        text-overflow: ellipsis; 
        white-space: nowrap;
    } 
    .product-main:hover h4{
        color: #0070c9;
    }
    .product-color{
        width: 16px;
        height: 16px;
        border: 1px solid #dddee1;
        border-radius: 50%;
        margin: 6px auto;
    }
    .product-cost{
        color: #de4037;
        margin-top: 6px;
    }
    .product-add-cart{
        display: none;
        padding: 4px 8px;
        background-color:#2d8cf0;
        color: #ffff;
        font-size: 12px;
        border-radius:3px;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .product-main:hover .product-add-cart{
        display: inline-block;
    }
 </style>
