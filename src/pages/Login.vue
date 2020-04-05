<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen name="login" class="loginPage">
    <div class="loginPageBG">
      <div class="logo"></div>
      <div class="login_bg"></div>
      <div class="login_figure1"></div>
      <div class="login_figure2"></div>
      <div class="login_figure3"></div>
      <div class="login_figure4"></div>
    </div>
    <f7-list form class="loginList">
      <f7-list-input label="用户名" type="text" placeholder="请输入用户名" :value="username" @input="username = $event.target.value"></f7-list-input>
      <f7-list-input label="密码" type="password" placeholder="请输入密码" :value="password" @input="password = $event.target.value"></f7-list-input>
    </f7-list>
    <f7-list class="signInBtn">
      <f7-button large round fill @click="signIn"><span style="font-size: 18px">登 录</span></f7-button>
    </f7-list>
  </f7-page>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "admin",
      password: "admin"
    };
  },
  methods: {
    ...mapActions({
      logIn: "auth/loginByEmail",
      setUserInfo: "setUserInfo"
    }),
    signIn() {
      this.logIn({
        code: this.username,
        pwd: this.password
      }).then(res => {
        console.log(res.detail)
        sessionStorage.setItem("userInfo", JSON.stringify(res.detail)) //开发使用  避免刷新时丢失用户信息
        this.setUserInfo(res.detail)
      })
      // 保存数据到sessionStorage
      sessionStorage.setItem("isAuthenticated", "true")
      this.$f7router.navigate("/home/")
    }
  },
  mounted() {
    
  },
  components: {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.loginPage {
  width: 100%;
  height: 100%;
  position: relative;
  /deep/.page-content {
    width: 100%;
    height: 100%;
  }
  .loginList {
    margin-top: 66%;
  }
}
.signInBtn {
  padding: 0 10%;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
}
.loginPageBG {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  .logo {
    width: 248.5px;
    height: 62px;
    background: url(../assets/images/logo.png) no-repeat;
    background-size: cover;
    margin-top: 46%;
  }
  .login_bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 375px;
    height: 195px;
    background: url(../assets/images/login_bg.png) no-repeat;
    background-size: cover;
  }
  .login_figure1 {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(197px / 2);
    height: calc(386px / 2);
    background: url(../assets/images/login_figure1.png) no-repeat;
    background-size: cover;
  }
  .login_figure2 {
    position: absolute;
    top: 17.6%;
    left: 0;
    width: calc(125px / 2);
    height: calc(148px / 2);
    background: url(../assets/images/login_figure2.png) no-repeat;
    background-size: cover;
  }
  .login_figure3 {
    position: absolute;
    top: 39.7%;
    right: 0;
    width: calc(80px / 2);
    height: calc(127px / 2);
    background: url(../assets/images/login_figure3.png) no-repeat;
    background-size: cover;
  }
  .login_figure4 {
    position: absolute;
    top: 46%;
    left: 0;
    width: calc(270px / 2);
    height: calc(355px / 2);
    background: url(../assets/images/login_figure4.png) no-repeat;
    background-size: cover;
  }
}
</style>