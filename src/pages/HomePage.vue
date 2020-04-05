<template>
	<f7-page name="home" :page-content="false" class="homePage">
		<AMaps/>
		<MapLeftTool/>
		<LeftPanelCollection/>
		<MapRightTool/>
		<RightPanelCollection/>
		<SearchBar/>
		<SearchContent/>
		<MapLocation/>
		<MapScale/>
		<MapLayerPopup/>
	</f7-page>
</template>

<script>
	import {mapState} from 'vuex'
	import AMaps from 'components/AMaps'
	import MapLeftTool from 'components/MapLeftTool'
	import LeftPanelCollection from 'components/MapLeftTool/LeftPanelCollection'
	import MapRightTool from 'components/MapRightTool'
	import RightPanelCollection from 'components/MapRightTool/RightPanelCollection'
	import SearchBar from 'components/Search'
	import SearchContent from 'components/Search/SearchContent'
	import MapLocation from 'components/MapLocation'
	import MapScale from 'components/MapScale'
	import MapLayerPopup from 'components/MapLayerPopup'
	export default {
		name: "HomePage",
		data() {
			return {
				isBottom: true,
			}
		},
		computed: {
			...mapState([
				'isAuthenticated'
			])
		},
		methods:{
			
		},
		mounted(){
			console.log(this.userInfo,'userInfo')
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
			LeftPanelCollection,
			MapRightTool,
			RightPanelCollection,
			SearchBar,
			SearchContent,
			MapLocation,
			MapScale,
			MapLayerPopup
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.homePage{
	
}
</style>