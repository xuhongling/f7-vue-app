<template>
	<f7-page no-toolbar no-navbar no-swipeback login-screen name="login">
    <f7-login-screen-title>荆州市农村基层防汛</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="用户名"
        type="text"
        placeholder="请输入用户名"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="密码"
        type="password"
        placeholder="请输入密码"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list class="signInBtn">
      <f7-button large round fill @click="signIn">登 录</f7-button>
    </f7-list>
  </f7-page>
</template>

<script>
  import {mapActions} from 'vuex'
	export default {
		name: "Login",
		data() {
			return {
				username: '',
        password: ''
			}
		},
		methods:{
      ...mapActions([
        'logIn',
        'setUserName'
      ]),
			signIn() {
        /*const app = this.$f7;
        const router = this.$f7router;
        app.dialog.alert(`Username: ${this.username}<br>Password: ${this.password}`, () => {
          router.back();
        });*/
        this.logIn()
        this.setUserName(this.username)
        // 保存数据到sessionStorage
        sessionStorage.setItem('isAuthenticated', 'true')
        this.$f7router.navigate('/home/')
      }
		},
		mounted(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.signInBtn{
		padding: 0 10%;
	}
</style>