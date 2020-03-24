<template>
	<f7-page name="dataReport" class="dataReport">
		<f7-navbar title="数据上报" back-link="Back"></f7-navbar>
		<f7-list>
			<f7-list-item title="测站类型" smart-select>
		    <select name="fruits">
		      <option value="河道" selected>河道</option>
		      <option value="水库">水库</option>
		      <option value="湖泊">湖泊</option>
		      <option value="闸站">闸站</option>
		      <option value="泵站">泵站</option>
		    </select>
		  </f7-list-item>
		  <f7-list-item title="测站名" smart-select>
		    <select name="fruits">
		      <option value="漳河测站" selected>漳河测站</option>
		      <option value="太湖港测站">太湖港测站</option>
		      <option value="虎渡河测站">虎渡河测站</option>
		    </select>
		  </f7-list-item>
		  <f7-list-item title="时间">
		    <f7-list-input
			    type="datepicker"
			    placeholder="请选择日期"
			    :value="[new Date()]"
			  ></f7-list-input>
		  </f7-list-item>
		  <f7-list-item title="当前水位(m)">
		  	<f7-list-input
			    type="text"
			    :value="name"
			    @input="name = $event.target.value"
			    placeholder="请输入当前水位"
			    clear-button
			  ></f7-list-input>
		  </f7-list-item >
		  <f7-list-item title="库容(百万m³)">
		  	<f7-list-input
			    type="text"
			    :value="name"
			    @input="name = $event.target.value"
			    placeholder="请输入库容"
			    clear-button
			  ></f7-list-input>
		  </f7-list-item >
		  <f7-list-item title="站前水位(m)">
		  	<f7-list-input
			    type="text"
			    :value="name"
			    @input="name = $event.target.value"
			    placeholder="请输入站前水位"
			    clear-button
			  ></f7-list-input>
		  </f7-list-item >
		  <f7-list-item title="站后水位(m)">
		  	<f7-list-input
			    type="text"
			    :value="name"
			    @input="name = $event.target.value"
			    placeholder="请输入站后水位"
			    clear-button
			  ></f7-list-input>
		  </f7-list-item >
		  <f7-list-item title="闸前水位(m)">
		  	<f7-list-input
			    type="text"
			    :value="name"
			    @input="name = $event.target.value"
			    placeholder="请输入闸前水位"
			    clear-button
			  ></f7-list-input>
		  </f7-list-item >
		  <f7-list-item title="闸后水位(m)">
		  	<f7-list-input
			    type="text"
			    :value="name"
			    @input="name = $event.target.value"
			    placeholder="请输入闸后水位"
			    clear-button
			  ></f7-list-input>
		  </f7-list-item >
		</f7-list>
		<f7-list class="submitBtn">
      <f7-button large round fill @click="handleClickSubmit">提 交</f7-button>
    </f7-list>
	</f7-page>
</template>

<script>
	export default {
		name: "DataReport",
		data() {
			return {
				name: ''
			}
		},
		methods:{
			handleClickSubmit(){

			}
		},
		mounted(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.dataReport{
		.submitBtn{
			padding: 0 10%;
			a{font-size: 16px;}
		}
	}
</style>