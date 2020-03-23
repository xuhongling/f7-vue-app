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
					zoom: 9,                         //初始化地图层级
					center: [112.239503,30.328042],                     //初始化地图中心点
					zooms: [7, 20],
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
				Vue.prototype.satelliteMap = satellite
				Vue.prototype.roadNetMap = roadNet
				
				// 荆州市边界遮罩
				new AMap.DistrictSearch({
					extensions: 'all',
					subdistrict: 0
				}).search('421000', (status, result)=> {
					// 外多边形坐标数组和内多边形坐标数组
					let outer = [
						new AMap.LngLat(-360, 90, true),
						new AMap.LngLat(-360, -90, true),
						new AMap.LngLat(360, -90, true),
						new AMap.LngLat(360, 90, true)
					]
					let holes = result.districtList[0].boundaries
					let pathArray = [outer]
					pathArray.push.apply(pathArray, holes)
					let polygon = new AMap.Polygon({
						pathL: pathArray,
						strokeColor: '#00eeff',
						strokeWeight: 1,
						fillColor: '#71B3ff',
						fillOpacity: 0.5
					})
					polygon.setPath(pathArray)
					globalMap.add(polygon)
				})
				
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