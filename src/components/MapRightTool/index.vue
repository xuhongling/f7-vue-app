<template>
	<ul class="mapRightTool">
		<li class="listItem" @click="handleClickOpenPanel"><i class="iconfont icon-tuceng"></i></li>
		<li class="listItem" v-bind:class="{isActive: isRule}" @click="handleClickRule"><i class="iconfont icon-celiang"></i></li>
		<li class="listItem">
			<f7-link href="/goInspection/"><i class="iconfont icon-xunjian"></i></f7-link>
		</li>
		<li class="listItem">
			<f7-link href="/emergencyReport/"><i class="iconfont icon-shangbao"></i></f7-link>
		</li>
		<li class="listItem">
			<f7-link href="/dataReport/"><i class="iconfont icon-shujushangbao"></i></f7-link>
		</li>
	</ul>
</template>

<script>
	import AMap from 'AMap'
	export default {
		name: "MapRightTool",
		data() {
			return {
				isRule: false
			}
		},
		methods:{
			handleClickOpenPanel(){
				let panelRight = this.$f7.panel.get('.panel-right')
				panelRight.open()
			},
		  // 测量距离
		  handleClickRule(){
		    let Map = this.globalMap
		    let mouseTool = new AMap.MouseTool(Map)
		    if (!this.isRule) {
		      mouseTool.rule({
		        startMarkerOptions: { //可缺省
		          icon: new AMap.Icon({
		            size: new AMap.Size(19, 31), //图标大小
		            imageSize: new AMap.Size(19, 31),
		            image: "https://webapi.amap.com/theme/v1.3/markers/b/start.png"
		          })
		        },
		        endMarkerOptions: { //可缺省
		          icon: new AMap.Icon({
		            size: new AMap.Size(19, 31), //图标大小
		            imageSize: new AMap.Size(19, 31),
		            image: "https://webapi.amap.com/theme/v1.3/markers/b/end.png"
		          }),
		          offset: new AMap.Pixel(-9, -31)
		        },
		        midMarkerOptions: { //可缺省
		          icon: new AMap.Icon({
		            size: new AMap.Size(19, 31), //图标大小
		            imageSize: new AMap.Size(19, 31),
		            image: "https://webapi.amap.com/theme/v1.3/markers/b/mid.png"
		          }),
		          offset: new AMap.Pixel(-9, -31)
		        },
		        lineOptions: { //可缺省
		          strokeStyle: "solid",
		          strokeColor: "#FF33FF",
		          strokeOpacity: 1,
		          strokeWeight: 2
		        }
		      })
		    } else {
		      mouseTool.close(true) //关闭，并清除覆盖物
		    }
		    this.isRule = !this.isRule
		  }
		},
		mounted(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.mapRightTool{
		position: absolute;
		top: 80px;
		right: 10px;
		z-index: 1000;
		width: 36px;
		.listItem{
			width: 36px;
			height: 36px;
			border-radius: 50%;
			background: #fff;
			box-shadow: 0 0 5px rgba(0,0,0,.2);
			margin-bottom: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #eee;
			i{
				font-size: 22px;
			}
		}
		.listItem:nth-child(1){
			i{color: #f57f2c;}
		}
		.listItem:nth-child(2){
			i{color: #238aff;}
		}
		.listItem:nth-child(3){
			i{color: #52ca61;}
		}
		.listItem:nth-child(4){
			i{color: #f55b5b;}
		}
		.listItem:nth-child(5){
			i{color: #fccd40;}
		}
		.isActive{
			color: #4287ff !important;
			background: #deedff;
			i{
				color: #4287ff !important;
			}
		}
	}
</style>