<template>
	<f7-page name="dataReport" class="dataReport">
		<f7-navbar title="数据上报" back-link="Back"></f7-navbar>
		<f7-list>
			<f7-list-item title="Fruit" smart-select>
		    <select name="fruits">
		      <option value="apple" selected>Apple</option>
		      <option value="pineapple">Pineapple</option>
		      <option value="pear">Pear</option>
		      <option value="orange">Orange</option>
		      <option value="melon">Melon</option>
		      <option value="peach">Peach</option>
		      <option value="banana">Banana</option>
		    </select>
		  </f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
	export default {
		name: "DataReport",
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
	.dataReport{

	}
</style>