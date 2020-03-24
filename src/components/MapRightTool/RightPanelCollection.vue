<template>
	<f7-panel right resizable>
		<f7-page>
			<h3 class="headerTitle">地图切换</h3>
			<ul class="switchMap">
				<li class="item">
					<span class="title">标准地图</span>
					<div v-bind:class="[{ active: isNormal }, 'normal']" @click="changeNormalLayer"></div>
				</li>
				<li class="item">
					<span class="title">卫星地图</span>
					<div v-bind:class="[{ active: isSatellite }, 'satellite']" @click="changeSatelliteLayer"></div>
				</li>
			</ul>
			<h3 class="headerTitle">监测点</h3>
			<f7-list class="checkboxList">
			  <!-- <f7-list-item checkbox title="收藏点" name="demo-checkbox" checked></f7-list-item>
			  <f7-list-item checkbox title="水位测站" name="demo-checkbox"></f7-list-item>
			  <f7-list-item checkbox title="雨量测站" name="demo-checkbox"></f7-list-item>
			  <f7-list-item checkbox title="图像站" name="demo-checkbox"></f7-list-item>
			  <f7-list-item checkbox title="政区划分" name="demo-checkbox"></f7-list-item> -->
			  <f7-list-item title="收藏点">
			    <f7-toggle checked></f7-toggle>
			  </f7-list-item>
			  <f7-list-item title="水位测站">
			    <f7-toggle></f7-toggle>
			  </f7-list-item>
			  <f7-list-item title="雨量测站">
			    <f7-toggle></f7-toggle>
			  </f7-list-item>
			  <f7-list-item title="图像站">
			    <f7-toggle></f7-toggle>
			  </f7-list-item>
			  <f7-list-item title="政区划分">
			    <f7-toggle></f7-toggle>
			  </f7-list-item>
			</f7-list>
		</f7-page>
	</f7-panel>
</template>

<script>
	export default {
		name: "RightPanelCollection",
		data() {
			return {
				isNormal: true,
				isSatellite: false
			}
		},
		methods:{
			changeNormalLayer(){
				this.isNormal = true
				this.isSatellite = false
				this.satelliteMap.hide()
				this.roadNetMap.hide()
			},
			changeSatelliteLayer(){
				this.isNormal = false
				this.isSatellite = true
				this.satelliteMap.show()
				this.roadNetMap.show()
			}
		},
		mounted(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.panel {
		min-width: 100px;
		max-width: 90vw;
		background: #f4f4f4;
	}
	.headerTitle{
		background: #f4f4f4;
		padding: 10px 12px;
		font-size: 14px;
		color: #666;
	}
	.switchMap{
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		padding-top: 12px;
		li.item{
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			span.title{
				font-size: 15px;
				color: #666;
				margin-bottom: 4px;
			}
		}
		.normal,.satellite{
			width: 80px;
			height: 50px;
			border-radius: 4px;
			margin-bottom: 4px;
		}
		.active{
			border: 2px solid #4287ff;
		}
		.normal{
			background: url(../../assets/images/normal.png) no-repeat;
			background-size: cover;
		}
		.satellite{
			background: url(../../assets/images/satellite.png) no-repeat;
			background-size: cover;
		}
		.mapControl{
			margin-top: -6px;
			div[class^="am-checkbox-agree"]{
				margin-left: 0;
			}
			label[class^="am-checkbox-wrapper am-checkbox-agree-label"]{
				width: 54px;
				margin-left: 20px;
				font-size: 13px;
				color: #666;
			}
			span[class^="am-checkbox-inner"]{
				width: 16px;
				height: 16px;
			}
			span[class^="am-checkbox.am-checkbox-checked .am-checkbox-inner"]{
				border-color: #4287ff;
				background: #4287ff;
			}
			span[class^="am-checkbox-inner"]:after {
				top: 0;
				right: 4px;
				width: 5px;
				height: 10px;
				content: '';
			}
		}
	}
	.checkboxList{
		margin: 0 !important;
	}
</style>