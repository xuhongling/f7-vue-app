<template>
	<f7-panel left resizable>
		<f7-page>
			<h3 class="headerTitle">收藏列表</h3>
			<f7-list simple-list>
			  <f7-list-item title="Item 1"></f7-list-item>
			  <f7-list-item title="Item 2"></f7-list-item>
			  <f7-list-item title="Item 3"></f7-list-item>
			</f7-list>
		</f7-page>
	</f7-panel>
</template>

<script>
	export default {
		name: "LeftPanelCollection",
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
	.panel {
		min-width: 100px;
		max-width: 90vw;
	}
	.headerTitle{
		background: #f4f4f4;
		padding: 10px 12px;
		font-size: 14px;
		color: #666;
	}
	/deep/.list{
		margin: 0;
	}
</style>