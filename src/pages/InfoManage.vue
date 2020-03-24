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
      	<f7-list>
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
		background: #f4f4f4;
		/deep/.list{margin: 0;}
		th{
			background: #fff;
		}
	}
</style>