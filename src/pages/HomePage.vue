<template>
	<f7-page>
		fdsfd
	</f7-page>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		name: "HomePage",
		data() {
			return {
				isBottom: true,
			}
		},
		computed: {
			...mapState([
				'isAuthenticated',
				'userName'
			])
		},
		methods:{
			...mapActions([
				'logIn',
				'logOut',
				'setUserName'
			])
		},
		mounted(){
			//this.logIn()
			this.logOut()
			this.setUserName('qqq')
			console.log(this.isAuthenticated,this.userName,'1111')

			console.log(this.$f7route, 'f7router')

			// 路由判断登录 根据路由配置文件的参数
			//this.$f7route.navigate('/login')
			console.log(this.$f7route.beforeEnter)
			
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>