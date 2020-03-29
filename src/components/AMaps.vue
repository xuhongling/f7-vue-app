<template>
	<div class="AMap" id='map'></div>
</template>

<script>
	import Vue from 'vue'
	import AMap from 'AMap'
	import { mapActions } from 'vuex'
	import { config } from 'utils/config'
	import YLIcon from 'assets/images/gis/meteorological-station.png'
	import SKIcon from 'assets/images/gis/reservoir.png'
	import HDIcon from 'assets/images/gis/wl_0.png'
	import ZZIcon from 'assets/images/gis/brake_dd.png'
	import BZIcon from 'assets/images/gis/pump_dd.png'
	import TXIcon from "assets/images/gis/image.png"

	export default {
		name: "AMaps",
		data() {
			return {
				markerListAll: []
			}
		},
		methods:{
			...mapActions({
        setMarkerList: "setMarkerList"
      }),
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

					// 去掉高德地图logo和版权信息
					/*setTimeout(()=>{
						document.querySelector('.amap-logo').remove();
						document.querySelector('.amap-copyright').remove();
					},40)*/
				})

				this.loadMapData()
			},
			// 加载地图监测数据
			loadMapData() {
				//查询最新监测数据
				this.$axios.get(config.server + "/api/dataQuery/getLatestData").then(res => {
					if (res.code === 1) {
						// ZZ: 河道 RR: 水库 DD: 泵站 DP: 闸站 PP: 雨量
						let [YLData, HDData, SKData, BZData, ZZData, ISData] = [
							res.detail.pp,
							res.detail.zz,
							res.detail.rr,
							res.detail.dd,
							res.detail.dp,
							res.detail.is
						]
						this.addTypeMarker(YLData, YLIcon, 'YL')
						this.addTypeMarker(HDData, HDIcon, 'HD')
						this.addTypeMarker(SKData, SKIcon, 'SK')
						this.addTypeMarker(BZData, BZIcon, 'BZ')
						this.addTypeMarker(ZZData, ZZIcon, 'ZZ')
						this.addTypeMarker(ISData, TXIcon, "TX")

						// 数据传递给Vuex状态，结果“超出最大调用堆栈大小”，判断markerListAll是否完成
						this.setMarkerList(true)

						// 把monitorListAll挂载到 Vue.prototype，以便全局可以访问到
						Vue.prototype.monitorListAll = this.markerListAll

						// 先隐藏地图所有的站点，然后通过MapRightTool里面控制显示
						for(let i = 0; i< this.markerListAll.length; i++){
							this.markerListAll[i].hide()
						}
					}
				})
			},
			addTypeMarker(data,icon,type) {
				let marker = null
	      for (let item of data) {
	      	let position = [item.LGTD, item.LTTD]
					marker = this.addMarker(position, icon)
					// 实例化点标记
					marker.setMap(this.globalMap)
					// 给每个创建的坐标监测点添加id
					item.typeID = type
					marker.setExtData(item)
					this.markerListAll.push(marker)
	      }
	    },
			// 实例化点标记
			addMarker(position, icon) {
				let marker = new AMap.Marker({
					icon: new AMap.Icon({
						image: icon,
						size: new AMap.Size(18, 18),  //图标大小
						imageSize: new AMap.Size(18,18),
						offset: new AMap.Pixel(-9, -18)
					}),
					position: position,
					zooms: [9, 19]
				})
      	return marker
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