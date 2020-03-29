<template>
  <f7-panel left resizable>
    <f7-page>
      <h3 class="headerTitle">收藏列表</h3>
      <f7-list simple-list>
				<f7-list-item v-for="(item, index) in collectData" :key="index">{{item.stnm}}</f7-list-item>
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script>
	import { config } from "utils/config";
	export default {
	  name: "LeftPanelCollection",
	  data() {
	    return {
				collectData: []
			}
	  },
	  methods: {
	    getCollectData() {
	      this.$axios({
	        method: "post",
	        url: config.server + "/api/system/action/load_app_collect_data",
	        data: {
	          ACTION: [
	            {
	              DBKEY: "",
	              TYPE: "LOAD",
	              CODE: "load_app_collect_data",
	              RCODE: "",
	              CDN: {}
	            }
	          ]
	        }
	      }).then(res => {
	        if (res.code === 1) {
	        	console.log(res.detail.DATA,'收藏列表')
			  		this.collectData = res.detail.DATA
	        }
	      })
	    }
	  },
	  mounted() {
		  this.getCollectData() 
	  },
	  components: {}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.panel {
	  min-width: 100px;
	  max-width: 90vw;
	}
	.headerTitle {
	  background: #f4f4f4;
	  padding: 10px 12px;
	  font-size: 14px;
	  color: #666;
	}
	/deep/.list {
	  margin: 0;
	}
</style>