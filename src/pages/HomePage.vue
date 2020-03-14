<template>
	<f7-page>
		<AMap/>
	</f7-page>
</template>

<script>
	import {mapState} from 'vuex'
	import AMap from 'components/AMap'
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
				this.$f7router.navigate('/login')
			}
			
		},
		components:{
			AMap
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>