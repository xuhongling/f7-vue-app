<!--应急上报记录-->
<template>
  <div class="infoManageTab">
    <div class="dataTable">
      <table>
        <thead>
          <tr>
            <th class="index-cell">序号</th>
            <th>姓名</th>
            <th>应急事件类别</th>
            <th>响应类型</th>
            <th>指令内容</th>
            <th>接受指令时间</th>
            <th>处置完成时间</th>
            <th>已上传资料</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td class="index-cell">{{index+1}}</td>
            <td>{{item.sysUserName}}</td>
            <td>{{item.WARNLEVEL}}</td>
            <td>{{enums.StatusTypeEnum.getLabelByValue(parseInt(item.statustype))}}</td>
            <td>{{item.OrderId}}{{item.content}}</td>
            <td>{{item.stm}}</td>
            <td>{{item.DealFinishTime}}</td>
            <td><f7-link @click="openFails(item)">{{item.id}}详情</f7-link></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 附件查看-->
    	<f7-popup
			class="demo-popup"
			:opened="popupOpened"
			@popup:closed="popupOpened = false"
		>
			<f7-page>
				<f7-navbar title="文件详情">
					<f7-nav-right>
						<f7-link popup-close><i class="f7-icons">xmark</i></f7-link>
					</f7-nav-right>
				</f7-navbar>
				<f7-block>
					<files ref="file"></files>
				</f7-block>
			</f7-page>
		</f7-popup>
    <!-- -->
  </div>
</template>

<script>
import { config } from "utils/config";
import enums from "../enums.js";
import files from "./files.vue";
export default {
  name: "InfoManageTab6",
  data() {
    return {
      enums: enums,
      tableData: [],
      popupOpened: false
    };
  },
  methods: {
    	//查看文件
		openFails(item) {
			this.popupOpened = true;
			item.BelongType = 1// 0 巡检1应急
			this.$refs.file.getFailsList(item);
		},
    getEmergencyRecords() {
      this.$axios({
        method: "post",
        url: config.server + "/api/system/action/load_emergency_records",
        data: {
          ACTION: [
            {
              DBKEY: "",
              TYPE: "LOAD",
              CODE: "load_emergency_records",
              RCODE: "",
              CDN: {
                // stnm:vm.stationName
              }
              // "PAGE_CONF": {
              //     limit:vm.table.pageInf.pageSize,
              //     start:vm.table.pageInf.currPage
              // }
            }
          ]
        }
      }).then(res => {
        let data = res && res.detail && res.detail.DATA;
        this.tableData = data;
      });
    }
  },
  mounted() {
    this.getEmergencyRecords();
  },
	components: { files }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.infoManageTab {
  width: 100%;
  height: 100%;
  padding: 10px;
  .infoManageList {
    margin: 10px 0;
  }
  .dataTable {
    width: 100%;
    height: calc(100% - 8px);
    overflow: auto;
    background: #fff;
    table {
      width: auto;
      height: 100%;
    }
    table tbody {
      display: block;
      height: calc(100% - 40px);
      overflow-y: scroll;
      border: none;
    }
    table thead,
    tbody tr {
      display: table;
      width: 100%;
      table-layout: fixed;
      border: none;
    }
    table thead th {
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
    .index-cell {
      width: 50px;
    }
  }
  .tbodyContent {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>