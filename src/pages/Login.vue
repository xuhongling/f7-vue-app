<template>
	<f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>荆州市农村基层防汛项</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="用户名"
        type="text"
        placeholder="Your username"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="密码"
        type="password"
        placeholder="Your password"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button @click="signIn">登 录</f7-list-button>
      <f7-block-footer>Some text about login information.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				username: '',
        password: ''
			}
		},
		methods:{
			signIn() {
        const app = this.$f7;
        const router = this.$f7router;
        app.dialog.alert(`Username: ${this.username}<br>Password: ${this.password}`, () => {
          router.back();
        });
      }
		},
		mounted(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.aaa{
		background: red;
	}
</style>