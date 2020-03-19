<template>
	<ul class="mapRightTool">
		<li class="listItem"><i class="iconfont icon-tuceng"></i></li>
		<li class="listItem"><i class="iconfont icon-celiang"></i></li>
		<li class="listItem"><i class="iconfont icon-xunjian"></i></li>
		<li class="listItem"><i class="iconfont icon-shangbao"></i></li>
		<li class="listItem"><i class="iconfont icon-shujushangbao"></i></li>
	</ul>
</template>

<script>
	export default {
		name: "MapRightTool",
		data() {
			return {
				
			}
		},
		methods:{
			
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
	}
</style>