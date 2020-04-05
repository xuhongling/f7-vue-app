<template>
  <div class="infoManageTab">
    <div class="dataTable">
      <table>
        <thead>
          <tr>
            <th class="index-cell">序号</th>
            <th>巡查人</th>
            <th>巡查指令</th>
            <th>指令类型</th>
            <th>巡查目标</th>
            <th>开始时间</th>
            <th>开始位置</th>
            <th>结束时间</th>
            <th>结束位置</th>
            <th>已上传资料</th>
            <th>轨迹查看</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td class="index-cell">{{ index + 1 }}</td>
            <td>{{ item.NAME }}</td>
            <td>{{ item.OrderContent }}</td>
            <td>{{ item.ReportType == 0 ? "普通指令" : "紧急指令" }}</td>
            <td>{{ item.target }}</td>
            <td>{{ item.BeginTime }}</td>
            <td>{{ item.BeginGis }}</td>
            <td>{{ item.endTime }}</td>
            <td>{{ item.EndGis }}</td>
            <td><f7-link @click="openFails(item)">详情</f7-link></td>
            <td><f7-link @click="getLinePoint(item)">详情</f7-link></td>
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
  </div>
</template>

<script>
import { config } from "utils/config";
import files from "./files.vue";
import AMap from "AMap";
export default {
  name: "InfoManageTab4",
  data() {
    return {
      popupOpened: false,
      tableData: []
    };
  },
  methods: {
    //查看文件
    openFails(item) {
      this.popupOpened = true;
      item.BelongType = 0; // 0 巡检1应急
      this.$refs.file.getFailsList(item);
    },
    //获取轨迹
    getLinePoint(item) {
      let that = this;
      this.$axios({
        method: "post",
        url: config.server + "/api/moveinspect/getInspectGis",
        data: {
          inspectid: item.id
        }
      }).then(res => {
        if (res.code === 1) {
          let newXy = [];
          let data = res.detail.result;
          data.forEach((item, index) => {
            newXy.push([item.LGTD, item.LTTD]);
          });
          that.linecanv(newXy);
        }
      });
    },
    //画轨迹测试
    linecanv(paths) {
      let Map = this.globalMap;
      let line = new AMap.Polyline({
        path: paths,
        isOutline: false, //线条是否带描边，默认false
        outlineColor: "#ffeeff", //线条描边颜色，此项仅在isOutline为true时有效，默认：#000000
        borderWeight: 1, //描边的宽度，默认为1
        strokeColor: "#3366FF", //线条颜色，使用16进制颜色代码赋值。默认值为#006600
        strokeOpacity: 1, //线条透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
        strokeWeight: 4, //线条宽度，单位：像素
        // 折线样式还支持 'dashed'
        strokeStyle: "dashed", //线样式，实线:solid，虚线:dashed
        // strokeStyle是dashed时有效
        strokeDasharray: [10, 5], //勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效
        lineJoin: "round", //折线拐点的绘制样式，默认值为'miter'尖角，其他可选值：'round'圆角、'bevel'斜角
        lineCap: "round", //折线两端线帽的绘制样式，默认值为'butt'无头，其他可选值：'round'圆头、'square'方头
        zIndex: 50 //折线覆盖物的叠加顺序。默认叠加顺序，先添加的线在底层，后添加的线在上层。通过该属性可调整叠加顺序，使级别较高的折线覆盖物在上层显示默认zIndex：50、
      });

      //经度偏移了-0.02  纬度偏移了0.02
      let startMarker = new AMap.Marker({
        map: Map,
        position: paths[0],
        icon: new AMap.Icon({
          size: new AMap.Size(19, 31), //图标大小
          imageSize: new AMap.Size(19, 31),
          image: "https://webapi.amap.com/theme/v1.3/markers/b/start.png"
        }),
        offset: new AMap.Pixel(-9, -31)
      });
      let endMarker = new AMap.Marker({
        map: Map,
        position: paths[paths.length - 1],
        icon: new AMap.Icon({
          size: new AMap.Size(19, 31), //图标大小
          imageSize: new AMap.Size(19, 31),
          image: "https://webapi.amap.com/theme/v1.3/markers/b/end.png"
        }),
        offset: new AMap.Pixel(-9, -31)
      });

      Map.setZoomAndCenter(13, paths[0]);
      Map.add(line);
      Map.add(startMarker);
      Map.add(endMarker);
      //   this.$f7router.navigate("/home/");
    },
    deviation(path) {
      return {
        Q: path.Q + 0.002,
        R: path.R - 0.002,
        lat: path.lat + 0.002,
        lng: path.lng - 0.002
      };
    },
    getTabsData4() {
      let that = this;
      this.$axios({
        method: "post",
        url: config.server + "/api/system/action/load_inspect_record",
        data: {
          ACTION: [
            {
              DBKEY: "",
              TYPE: "LOAD",
              CODE: "load_inspect_record",
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
    this.getTabsData4();
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
