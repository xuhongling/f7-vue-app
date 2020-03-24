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
        <div class="data-table">
				  <table>
				    <thead>
				      <tr>
				        <th class="label-cell">序号</th>
                <th class="numeric-cell">测站类型</th>
                <th class="numeric-cell">测站名</th>
                <th class="numeric-cell">时间</th>
                <th class="numeric-cell">当前水位（m）</th>
				      </tr>
				    </thead>
				    <tbody>
				    	<tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				    	<tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
				      </tr>
				      <tr>
				        <td class="label-cell">Frozen yogurt</td>
				        <td class="numeric-cell">159</td>
				        <td class="numeric-cell">6.0</td>
				        <td class="numeric-cell">24</td>
				        <td class="numeric-cell">4.0</td>
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
		background: #f4f4f4;
		/deep/.toolbar{
			background: #fff;
		}
		th{
			background: #fff;
		}
		tbody{
			height: 500px;
			overflow-y: scroll;
		}
	}
</style>