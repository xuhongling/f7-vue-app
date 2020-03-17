<template>
	<f7-page name="home" :page-content="false">
		<f7-toolbar tabbar bottom>
			<f7-link tab-link="#tab-1" tab-link-active><i class="iconfont icon-map"></i><span>首页地图</span></f7-link>
			<f7-link tab-link="#tab-2"><i class="iconfont icon-data"></i><span>数据查询</span></f7-link>
			<f7-link tab-link="#tab-3"><i class="iconfont icon-xinxi"></i><span>信息管理</span></f7-link>
			<f7-link tab-link="#tab-4"><i class="iconfont icon-wode"></i><span>我的</span></f7-link>
		</f7-toolbar>
		<f7-tabs animated>
			<f7-tab id="tab-1" class="page-content" tab-active>
				<f7-block>
					ddfsfjsjkfjskjdj
					<!-- <AMaps/> -->
				</f7-block>
			</f7-tab>
			<f7-tab id="tab-2" class="page-content">
				<f7-block>
					<p>Tab 2 content</p>
					...
				</f7-block>
			</f7-tab>
			<f7-tab id="tab-3" class="page-content">
				<f7-block>
					<p>Tab 3 content</p>
					...
				</f7-block>
			</f7-tab>
			<f7-tab id="tab-4" class="page-content">
				<f7-block>
					<p>Tab 4 content</p>
					...
				</f7-block>
			</f7-tab>
		</f7-tabs>
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
			// 从sessionStorage获取数据
			let isAuthenticated = sessionStorage.getItem('isAuthenticated')
			// 路由判断登录 根据路由配置文件的参数
			if (isAuthenticated !== 'true') {
				this.$f7router.navigate('/login/')
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