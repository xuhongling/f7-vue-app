<template>
  <div class="infoManageTab">
    <div class="dataTable">
      <table>
        <thead>
          <tr>
            <th class="index-cell">序号</th>
            <th>时间</th>
            <th>发送人</th>
            <th>事件类别</th>
            <th>响应类型</th>
            <th>指令内容</th>
            <th>处理情况</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td class="index-cell">{{ index + 1 }}</td>
            <td>{{ item.stm }}</td>
            <td>{{ item.recUserNm }}</td>
            <td>{{ levelArr[item.warnLevel] + "级预警" }}</td>
            <td>{{ warnStatus(item.warnStatus) }}</td>
            <td><f7-link @click="openPop(item)">详情</f7-link></td>
            <td>{{ item.dealStatus == 0 ? "未处置" : "已处置" }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <f7-popup
      class="demo-popup"
      :opened="popupOpened"
      @popup:closed="popupOpened = false"
    >
      <f7-page>
        <f7-navbar title="指令详情">
          <f7-nav-right>
            <f7-link popup-close>
              <i class="f7-icons">xmark</i>
            </f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <div class="nowDataTime">
            {{ nowListData.stm }}
          </div>
          <div class="nowDataSec">
            {{ nowListData.content }}
          </div>
        </f7-block>
      </f7-page>
    </f7-popup>
  </div>
</template>

<script>
import { config } from "utils/config";
export default {
  name: "InfoManageTab5",
  data() {
    return {
      levelArr: ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ"],
      popupOpened: false,
      nowListData: {},
      tableData: []
    };
  },
  computed: {
    userInfo() {
      // return this.$store.state.userInfo;
      return JSON.parse(sessionStorage.getItem("userInfo"));
    }
  },
  methods: {
    warnStatus(num) {
      if (num == 2) {
        return "内部预警";
      } else if (num == 3) {
        return "外部预警";
      }
    },
    openPop(item) {
      this.popupOpened = true;
      this.nowListData = item;
    },
    getTableData5() {
      let that = this;
      this.$axios
        .get(
          config.server +
            `/api/app/getEmergenCyOrderByUserId?limit=10&start=1&recUserId=${this.userInfo.id}`
        )
        .then(res => {
          if (res.code == 1) {
            that.tableData = res.detail.list;
          }
        });
    }
  },
  mounted() {
    this.getTableData5();
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

.nowDataTime {
  font-size: 8px;
  color: #898989;
}
.nowDataSec {
  font-size: 16px;
  background: #f5f5f5;
  padding: 10px;
  margin-top: 4px;
  border-radius: 4px;
}
</style>
