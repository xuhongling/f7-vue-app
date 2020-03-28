<template>
	<f7-page :page-content="false" class="dataQuery">
		<f7-toolbar tabbar :position="isBottom ? 'bottom' : 'top'">
      <f7-link tab-link="#dataQuery-1" tab-link-active>河道</f7-link>
      <f7-link tab-link="#dataQuery-2">水库</f7-link>
      <f7-link tab-link="#dataQuery-3">泵站</f7-link>
      <f7-link tab-link="#dataQuery-4">闸站</f7-link>
      <f7-link tab-link="#dataQuery-5">雨量</f7-link>
    </f7-toolbar>
    <!-- swipeable 滑动切换-->
    <f7-tabs>
      <f7-tab id="dataQuery-1" class="page-content" tab-active>
        <div class="dataTable">
				  <table>
				    <thead>
				      <tr>
				        <th class="index-cell">序号</th>
				        <th>测站名</th>
				        <th>时间</th>
				        <th>水位</th>
				        <th>流量</th>
				        <th>水势</th>
				      </tr>
				    </thead>
				    <tbody>
				    	<tr v-for="(item, index) in HDData" :key="index">
				        <td class="index-cell">{{index+1}}</td>
				        <td>{{item.stnm}}</td>
				        <td>{{item.TM}}</td>
				        <td>{{item.Z}}</td>
				        <td>{{item.Q}}</td>
				        <td>{{item.WPTN}}</td>
				      </tr>
				    </tbody>
				  </table>
				</div>
      </f7-tab>
      <f7-tab id="dataQuery-2" class="page-content">
        <div class="dataTable">
				  <table>
				    <thead>
				      <tr>
				        <th class="index-cell">序号</th>
				        <th>测站名</th>
				        <th>时间</th>
				        <th>库上水位</th>
				        <th>蓄水量</th>
				      </tr>
				    </thead>
				    <tbody>
				    	<tr v-for="(item, index) in SKData" :key="index">
				        <td class="index-cell">{{index+1}}</td>
				        <td>{{item.stnm}}</td>
				        <td>{{item.TM}}</td>
				        <td>{{item.RZ}}</td>
				        <td>{{item.W}}</td>
				      </tr>
				    </tbody>
				  </table>
				</div>
      </f7-tab>
      <f7-tab id="dataQuery-3" class="page-content">
        <div class="dataTable">
				  <table>
				    <thead>
				      <tr>
				        <th class="index-cell">序号</th>
				        <th>测站名</th>
				        <th>时间</th>
				        <th>站上水位</th>
				        <th>站下水位</th>
				      </tr>
				    </thead>
				    <tbody>
				    	<tr v-for="(item, index) in BZData" :key="index">
				        <td class="index-cell">{{index+1}}</td>
				        <td>{{item.stnm}}</td>
				        <td>{{item.TM}}</td>
				        <td>{{item.UPZ}}</td>
				        <td>{{item.DWZ}}</td>
				      </tr>
				    </tbody>
				  </table>
				</div>
      </f7-tab>
      <f7-tab id="dataQuery-4" class="page-content">
        <div class="dataTable">
				  <table>
				    <thead>
				      <tr>
				        <th class="index-cell">序号</th>
				        <th>测站名</th>
				        <th>时间</th>
				        <th>闸上水位</th>
				        <th>水位</th>
				      </tr>
				    </thead>
				    <tbody>
				    	<tr v-for="(item, index) in ZZData" :key="index">
				        <td class="index-cell">{{index+1}}</td>
				        <td>{{item.stnm}}</td>
				        <td>{{item.TM}}</td>
				        <td>{{item.PPUPZ}}</td>
				        <td>{{item.PPDWZ}}</td>
				      </tr>
				    </tbody>
				  </table>
				</div>
      </f7-tab>
      <f7-tab id="dataQuery-5" class="page-content">
        <div class="dataTable">
				  <table>
				    <thead>
				      <tr>
				        <th class="index-cell">序号</th>
				        <th>测站名</th>
				        <th>1小时</th>
				        <th>24小时</th>
				        <th>72小时</th>
				      </tr>
				    </thead>
				    <tbody>
				    	<tr v-for="(item, index) in YLData" :key="index">
				        <td class="index-cell">{{index+1}}</td>
				        <td>{{item.stnm}}</td>
				        <td>{{item.H01}}</td>
				        <td>{{item.H24}}</td>
				        <td>{{item.H72}}</td>
				      </tr>
				    </tbody>
				  </table>
				</div>
      </f7-tab>
    </f7-tabs>
	</f7-page>
</template>

<script>
	import { config } from 'utils/config'
	export default {
		name: "DataQuery",
		data() {
			return {
        isBottom: false,
        sttpAllData:['ZZ','RR','DD','DP','PP'],
        HDData: [],
        SKData: [],
        BZData: [],
        ZZData: [],
        YLData: []
			}
		},
		methods:{
			getTabsData(sttp){
				this.$axios.get(config.server + `/api/app/getLatestDataForApp?limit=200&start=1&sttp=${sttp}`).then(data => {
          if (data.code === 1) {
            if (sttp === 'ZZ') {
							this.HDData  = data.detail.result.list
						}
						if (sttp === 'RR') {
							this.SKData  = data.detail.result.list
						}
						if (sttp === 'DD') {
							this.BZData  = data.detail.result.list
						}
						if (sttp === 'DP') {
							this.ZZData  = data.detail.result.list
						}
						if (sttp === 'PP') {
							this.YLData  = data.detail.result.list
						}
          }
        })
			}
		},
		mounted(){
			for (let i = 0; i < this.sttpAllData.length; i++) {
				this.getTabsData(this.sttpAllData[i])
			}
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.dataQuery{
		width: 100%;
		height: 100%;
		background: #f2f3f5;
		/deep/.toolbar{
			background: #fff;
		}
		/deep/.page-content{
			padding: 56px 10px 28px 10px;
		}
		div[id^='infoManage']{
			padding-left: 10px;
			padding-right: 10px;
			overflow: hidden;
		}
		.dataTable{
			width: 100%;
			height: 100%;
			overflow: auto;
			background: #fff;
			table{
				width: auto;
				height: 100%;
			}
			table tbody {
				display: block;
				height: calc(100% - 40px);
				overflow-y:scroll;
				border: none;
			} 
			table thead, tbody tr {
				display: table;
				width: 100%;
				table-layout:fixed;
				border: none;
			}
			table thead th{
				height: 40px;
				background: #f6f7f9;
				border: none;
				font-size: 14px;
				font-weight: bold;
				color: #111;
			}
			tbody td {
				width: 120px;
				height: 40px;
				font-size: 15px;
				color: #666;
				border: none;
				border-bottom: 1px solid #e8ebee;
				text-align: center;
			}
			.index-cell{
				width: 50px;
			}
		}
	}
</style>