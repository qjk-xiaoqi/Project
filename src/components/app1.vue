<template>
    <div>
        <h1>首页</h1>
        
        <!-- 在任何组件内，可以直接通过$store.state.count读取，但是写在template里面有点乱，可以
            用一个计算属性来显示
         -->
         <!-- {{$store.state.count}}   -->

         {{getCount}}
    </div>  
    
</template>
<script>
    export default {
        computed: {
            getCount() {
                return this.$store.state.count;
            }
        }
    }
</script>