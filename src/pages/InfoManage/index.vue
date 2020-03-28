<template>
	<f7-page :page-content="false" class="infoManage">
		<f7-toolbar tabbar scrollable :position="isBottom ? 'bottom' : 'top'">
      <f7-link tab-link="#infoManage-1" tab-link-active>数据上报记录</f7-link>
      <f7-link tab-link="#infoManage-2">预警信息记录</f7-link>
      <f7-link tab-link="#infoManage-3">巡查指令记录</f7-link>
      <f7-link tab-link="#infoManage-4">巡查记录</f7-link>
      <f7-link tab-link="#infoManage-5">应急指令记录</f7-link>
      <f7-link tab-link="#infoManage-6">应急上报记录</f7-link>
    </f7-toolbar>
    <!-- swipeable 滑动切换-->
    <f7-tabs>
      <f7-tab id="infoManage-1" class="page-content" tab-active>
      	<InfoManageTab1/>
	    </f7-tab>
	    <f7-tab id="infoManage-2" class="page-content">
	    </f7-tab>
	    <f7-tab id="infoManage-3" class="page-content">
	    </f7-tab>
	    <f7-tab id="infoManage-4" class="page-content">
	    </f7-tab>
	    <f7-tab id="infoManage-5" class="page-content">
	    </f7-tab>
	    <f7-tab id="infoManage-6" class="page-content">
	    </f7-tab>
	  </f7-tabs>
	</f7-page>
</template>

<script>
	import InfoManageTab1 from './components/InfoManageTab1'
	export default {
		name: "InfoManage",
		data() {
			return {
				isBottom: false
			}
		},
		methods:{
			
		},
		mounted(){
			
		},
		components:{
			InfoManageTab1
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.infoManage{
		width: 100%;
		height: 100%;
		background: #f2f3f5;
		/deep/.list{margin: 0;}
		/deep/.toolbar{background: #fff;}
		div[id^='infoManage']{
			overflow: hidden;
			padding-bottom: 0;
		}
	}
</style>