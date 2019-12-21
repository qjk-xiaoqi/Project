<template>

    <!-- v--loading 为ElementUI自定义加载指令 -->
    <el-form  class="login-container" label-position="left" 
        label-width="0px"   :rules="rules" v-loading="loading"  :model="loginForm" ref="loginForm"> 
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号"></el-input> 
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input> 
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked"
                 label-position="left">记住密码</el-checkbox> 
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%" @click="submitClick()">登录</el-button> 
    </el-form-item>
  </el-form>
</template>
<script>
export default {
      data(){
      return {
        // 校验规则  `required`：是否必填，  `message`: 规则， `trigger`:何时事件触发
        rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
        checked: true,
        loginForm: {
          username: 'admin',
          password: '123'
        },
        loading: false,
        user: this.$store.state.user.name,
      }
    },
   
    methods: {
         // 数据提交待完善
         /*
        submitClick() {
            var _this = this;
            if(_this.loginForm.username === 'admin' && _this.loginForm.password === '123') {
                // 验证成功切换
               _this.$router.replace({path:'/Home'});
            }else{
                alert('密码错误');
            } 

        }*/

        
        submitClick: function () {
        var _this = this;
        this.loading = true;
        this.postRequest('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        }).then(resp => {
          _this.loading = false;
          if (resp && resp.status == 200) {
            var data = resp.data;
           _this.$store.commit('login', data.obj);
            var path = _this.$route.query.redirect;
            _this.$router
              .replace({path: path == '/' || path == undefined ? '/home' : path});
          }
        });
        }
      
             
             
    }
} 
 
</script>

<style scoped>
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin:180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .login_remember {
        margin: 0px 0px 30px 0px;
        text-align: left;
  }
</style>