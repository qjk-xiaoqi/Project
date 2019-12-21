<template>
    <div id="app">

     
    <!-- 使用 router-link 组件来导航，通过传入 `to` 属性指定链接，<router-link>
     默认会被渲染成一个 `<a>` 标签 -->
    <!-- `to`后面的路径与`r-config.js`里面配置的路由path路径相同 -->
    <!-- <router-link to="/app1">Go to app1</router-link>
    <router-link to="/app2">Go to app2</router-link>
    <router-link to="/Home">Go to home</router-link>
    <router-link to="/Login">Go to login</router-link> -->

    
    <router-view></router-view>
       
    </div>

</template>

<script>
  
  export default {
    name: 'App',
    
  }
</script>
 
<style>
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
  #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
