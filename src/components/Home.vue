<template>
<div>
    <el-container class="home-container">
        <!-- 头部 -->
        <el-header class="home-header">
            <span class="home_title">微人事</span>
            <!-- 头部右边部分 -->
            <div style="display: flex;align-items: center;margin-right: 7px">
                <el-badge style="margin-right: 30px" > <!--:is-dot="this.$store.state.nfDot" -->
                    <i class="fa fa-bell-o" style="cursor: pointer"></i> <!--@click="goChat" -->
                </el-badge>
                <el-dropdown > <!--@command="handleCommand"-->
                    <span class="el-dropdown-link home_userinfo" style="display: flex;align-items: center">
                    {{user.name}}
                        <i><img v-if="user.userface!=''" :src="user.userface"
                        style="width: 40px;height: 40px;margin-right: 5px;margin-left: 5px;border-radius: 40px"/> </i>                       
                    </span>
                    <el-dropdown-menu > <!--slot="dropdown"-->
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item >注销</el-dropdown-item> <!--command="logout" divided-->
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-header>

        <!-- 主体 -->
        <el-container>

        </el-container>
    </el-container> 

    
</div>
</template>
<script>
export default {
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
      user(){
        return this.$store.state.user;
      },
      routes(){
        return this.$store.state.routes
      }
       
    }

    
}
</script>
<style scoped>
    .home-container {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .home-header {
        background-color: #20a0ff;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: content-box;
        padding: 0px
    }
    .home_title {
        color: #fff;
        font-size: 22px;
        display: inline;
        margin-left: 8px;
    }
    .home_userinfo {
        color: #fff;
        cursor: pointer;
    }



</style>
