<template>
	<div class="AMap" id='map'></div>
</template>

<script>
	import Vue from 'vue'
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
				let globalMap = new AMap.Map('map', {
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

				// 把地图挂载到 Vue.prototype，以便全局可以访问到
        Vue.prototype.globalMap = globalMap
        
        // 去掉高德地图logo和版权信息
        document.getElementsByClassName('amap-logo')[0].remove();
				document.getElementsByClassName('amap-copyright')[0].remove();
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