<template>
	<ul class="mapLeftTool">
		<li class="listItem" raised panel-open="left" @click="handleClickOpenPanel"><i class="iconfont icon-shoucang"></i></li>
		<li class="listItem">
			<f7-link href="/contactsList/"><i class="iconfont icon-tongxunlu"></i></f7-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "MapLeftTool",
		data() {
			return {
				
			}
		},
		methods:{
			handleClickOpenPanel(){
				let panelLeft = this.$f7.panel.get('.panel-left')
				panelLeft.open()
			}
		},
		mounted(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.mapLeftTool{
		position: absolute;
		top: 80px;
		left: 10px;
		z-index: 1000;
		width: 36px;
		.listItem{
			width: 36px;
			height: 36px;
			border-radius: 50%;
			background: #fff;
			box-shadow: 0 0 5px rgba(0,0,0,0.2);
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
			i{color: #ff4444;}
		}
		.listItem:nth-child(2){
			i{color: #969b9e;}
		}
	}
</style>