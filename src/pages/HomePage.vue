<template>
	<f7-page name="home" :page-content="false" class="homePage">
		<f7-toolbar class="navigationTabbar" tabbar bottom>
			<f7-link tab-link="#tab-1" tab-link-active><i class="iconfont icon-map"></i><span class="tabName">首页地图</span></f7-link>
			<f7-link tab-link="#tab-2"><i class="iconfont icon-data"></i><span class="tabName">数据查询</span></f7-link>
			<f7-link tab-link="#tab-3"><i class="iconfont icon-xinxi"></i><span class="tabName">信息管理</span></f7-link>
			<f7-link tab-link="#tab-4"><i class="iconfont icon-wode"></i><span class="tabName">我的</span></f7-link>
		</f7-toolbar>
		<f7-tabs animated>
			<!-- 首页地图 -->
			<f7-tab id="tab-1" class="page-content" tab-active>
				<div class="homeWrapper">
					<AMaps/>
					<MapLeftTool/>
					<MapRightTool/>
					<SearchBar/>
					<MapLocation/>
					<MapScale/>
				</div>
			</f7-tab>
			<!-- 数据查询 -->
			<f7-tab id="tab-2" class="page-content">
				<div class="homeWrapper">
					dfddadds2222222
				</div>
			</f7-tab>
			<!-- 信息管理 -->
			<f7-tab id="tab-3" class="page-content">
				<div class="homeWrapper">
					daadk333333
				</div>
			</f7-tab>
			<!-- 我的 -->
			<f7-tab id="tab-4" class="page-content">
				<div class="homeWrapper">
					<MyProfile/>
				</div>
			</f7-tab>
		</f7-tabs>
	</f7-page>
</template>

<script>
	import {mapState} from 'vuex'
	import AMaps from 'components/AMaps'
	import MapLeftTool from 'components/MapLeftTool'
	import MapRightTool from 'components/MapRightTool'
	import SearchBar from 'components/Search'
	import MapLocation from 'components/MapLocation'
	import MapScale from 'components/MapScale'
	import MyProfile from 'pages/MyProfile'
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
			AMaps,
			MapLeftTool,
			MapRightTool,
			SearchBar,
			MapLocation,
			MapScale,
			MyProfile
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.homePage{
	.navigationTabbar{
		i.iconfont{
			font-size: 20px !important;
		}
		.tabName{
			font-size: 10px;
		}
	}
	.homeWrapper{
		width: 100%;
		height: 100%;
		position: relative;
	}
}
</style>