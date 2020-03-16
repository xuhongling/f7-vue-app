<template>
	<div class="AMap" id='map'></div>
</template>

<script>
	import AMap from 'AMap'
	export default {
		name: "AMaps",
		data() {
			return {
				
			}
		},
		methods:{
			initMap(){
				// 标准矢量地图
				let layer = new AMap.TileLayer({
					visible: true,    //是否可见
					opacity: 1,       //透明度
					zIndex: 0         //叠加层级
				})
				// 卫星地图
				let satellite = new AMap.TileLayer.Satellite({
					visible: true
				})
				// 路网图
				let roadNet = new AMap.TileLayer.RoadNet({
					visible: true
				})

				// 判断页面返回中心点，层级
				let Map = new AMap.Map('map', {
					layers:[layer, satellite, roadNet],
					resizeEnable: true,                 //是否监控地图容器尺寸变化
					zoom: 15,                         //初始化地图层级
					center: [114.1433656, 30.62866],                     //初始化地图中心点
					zooms: [9, 20],
					features: ['bg', 'road', 'building'],
					zoomToAccuracy: true,
					animateEnable: true,
					preloadMode: true,
					viewMode: '3D',
					pitchEnable: true,
					showBuildingBlock: true,
					buildingAnimation: true
				})
				satellite.hide()
				roadNet.hide()
				console.log(Map,'MapMap')
			}
		},
		mounted(){
			this.initMap()
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.AMap{
		width: 100%;
		height: 100%;
	}
</style>