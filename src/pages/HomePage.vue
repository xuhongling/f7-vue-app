<template>
	<f7-page name="home">
		<!-- 用来js模拟点击a标签跳转至目标页面 -->
    <f7-link class="setPsd" href="/login/" ref="setPsd" text="设置密码"></f7-link>
		<!-- <AMaps/> -->
	</f7-page>
</template>

<script>
	import {mapState} from 'vuex'
	import AMaps from 'components/AMaps'
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
			
		},
		mounted(){
			console.log(this.userName,'userName')
			// 路由判断登录 根据路由配置文件的参数
			if (!this.isAuthenticated) {
				this.$refs.setPsd.$el.click() // 模拟点击a标签实现跳转
				//this.$f7router.navigate('/login/')
			}
			
		},
		components:{
			AMaps
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.setPsd{
		display: none;
	}
</style>