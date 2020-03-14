<template>
	<div class="AMap"></div>
</template>

<script>
	export default {
		name: "AMap",
		data() {
			return {
				
			}
		},
		methods:{
			/*initMap(){
				let layer = new AMap.TileLayer({
					zooms:[3,20],    //可见级别
					visible:true,    //是否可见
					opacity:1,       //透明度
					zIndex:0         //叠加层级
				})
				let map = new AMap.Map('container',{
					layers:[layer] //当只想显示标准图层时layers属性可缺省
				})
			}*/
		},
		mounted(){
			
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