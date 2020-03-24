<template>
	<f7-page :page-content="false" class="dataQuery">
		<f7-toolbar tabbar scrollable :position="isBottom ? 'bottom' : 'top'">
      <f7-link tab-link="#dataQuery-1" tab-link-active>河道</f7-link>
      <f7-link tab-link="#dataQuery-2">湖泊</f7-link>
      <f7-link tab-link="#dataQuery-3">水库</f7-link>
      <f7-link tab-link="#dataQuery-4">闸站</f7-link>
      <f7-link tab-link="#dataQuery-5">泵站</f7-link>
      <f7-link tab-link="#dataQuery-6">人工上传数据</f7-link>
    </f7-toolbar>
    <!-- swipeable 滑动切换-->
    <f7-tabs>
      <f7-tab id="dataQuery-1" class="page-content" tab-active>
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
      <f7-tab id="dataQuery-2" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="dataQuery-3" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="dataQuery-4" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
          ...
        </f7-block> 
      </f7-tab>
      <f7-tab id="dataQuery-5" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="dataQuery-6" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
    </f7-tabs>
	</f7-page>
</template>

<script>
	export default {
		name: "DataQuery",
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