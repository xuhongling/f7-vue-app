<template>
	<div class="infoManageTab">
		<div class="dataTable">
			<table>
				<thead>
					<tr>
						<th class="index-cell">序号</th>
						<th>时间</th>
						<th>发送人</th>
						<th>指令类别</th>
						<th>指令内容</th>
						<th>处置情况</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in tableData" :key="index">
						<td class="index-cell">{{ index + 1 }}</td>
						<td>{{ item.create_time }}</td>
						<td>{{ item.SendPersonName }}</td>
						<td>{{ item.OrderType == 0 ? "普通指令" : "紧急指令" }}</td>
						<td>{{ item.OrderContent }}</td>
						<td>{{ statusByte[item.DealStatus] }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { config } from "utils/config";
export default {
	name: "InfoManageTab3",
	data() {
		return {
			statusByte: ["未处置", "处置中", "已处置"],
			tableData: []
		};
	},
	methods: {
		getTabsData() {
			let that = this;
			this.$axios({
				method: "post",
				url: config.server + "/api/system/action/load_inspect_order_by_cond",
				data: {
					ACTION: [
						{
							DBKEY: "",
							TYPE: "LOAD",
							CODE: "load_inspect_order_by_cond",
							RCODE: "",
							CDN: {},
							PAGE_CONF: {}
						}
					]
				}
			}).then(res => {
				if (res.code === 1) {
					console.log(res);
					that.tableData = res.detail.DATA;
				}
			});
		}
	},
	mounted() {
		this.getTabsData();
	},
	components: {}
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
