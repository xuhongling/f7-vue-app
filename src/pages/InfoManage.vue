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
      	<f7-list class="infoManageList">
					<f7-list-item title="类型选择：" smart-select :smart-select-params="{openIn: 'popover'}">
				    <select name="superhero">
				      <option value="Batman" selected>河道</option>
				      <option value="Superman">水库</option>
				      <option value="Hulk">湖泊</option>
				      <option value="Spiderman">闸站</option>
				      <option value="Ironman">泵站</option>
				    </select>
				  </f7-list-item>
			  </f7-list>
			  <div class="dataTable">
				  <table>
				    <thead>
				      <tr>
				        <th class="index-cell">序号</th>
				        <th>测站类型</th>
				        <th>测站名</th>
				        <th>时间</th>
				        <th>当前水位(m)</th>
				        <th>闸前水位(m)</th>
				        <th>闸后水位(m)</th>
				        <th>库容(百万m3)</th>
				      </tr>
				    </thead>
				    <tbody>
				    	<tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				      <tr>
				        <td class="index-cell">11</td>
				        <td>159</td>
				        <td>6.0</td>
				        <td>24</td>
				        <td>4.0</td>
				        <td>ewqed</td>
				        <td>vd</td>
				        <td>gdfg</td>
				      </tr>
				    </tbody>
				  </table>
				</div>
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
	export default {
		name: "InfoManage",
		data() {
			return {
				isBottom: false,
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
	.infoManage{
		width: 100%;
		height: 100%;
		background: #f2f3f5;
		/deep/.list{margin: 0;}
		/deep/.toolbar{background: #fff;}
		div[id^='infoManage']{
			padding-left: 10px;
			padding-right: 10px;
			overflow: hidden;
		}
		.infoManageList{
			margin: 10px 0;
		}
		.dataTable{
			width: 100%;
			height: calc(100% - 48px);
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
		.ellipsis{white-space: nowrap; }
	}
</style>