<template>
  <f7-page class="myMessage">
    <f7-navbar>
      <f7-nav-left back-link="Back"></f7-nav-left>
      <f7-nav-title>我的消息</f7-nav-title>
      <f7-nav-right style="margin-right:10px" panel-open="right">
        <f7-button popover-open=".popover-menu"><i class="f7-icons">envelope_badge</i></f7-button>
      </f7-nav-right>
      <f7-subnavbar>
        <f7-segmented raised tag="p" @click.native="changeFooter">
          <f7-button tab-link="#myMessage1" tab-link-active>预警消息</f7-button>
          <f7-button tab-link="#myMessage2">巡查消息</f7-button>
          <f7-button tab-link="#myMessage3">预警指令消息</f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar>
    <f7-popover class="popover-menu">
      <f7-list>
        <f7-list-item popover-close title="全选" @click="selectAll"></f7-list-item>
        <f7-list-item popover-close title="标记为已读"></f7-list-item>
        <f7-list-item popover-close title="标记为未读"></f7-list-item>
      </f7-list>
    </f7-popover>
    <!-- <f7-toolbar tabbar bottom @click.native="changeFooter">
      
    </f7-toolbar> -->
    <f7-tabs swipeable>
      <!-- 预警消息 -->
      <f7-tab id="myMessage1" tab-active>
        <f7-list class="myMessageList" media-list>
          <f7-list-item link="#" @click="openOneData(item)" :checkbox="concal.dataIsCheck" :checked="concal.dataIsChecked" v-for="(item, index) in listData" :key="index" :title="filter(item, 'data')" :subtitle="item.content">
            <div class="headeImg" slot="media">
              <i class="iconfont icon-geren"></i>
            </div>
          </f7-list-item>
        </f7-list>
      </f7-tab>
      <!-- 巡查消息 -->
      <f7-tab id="myMessage2">
        <f7-list class="myMessageList" media-list>
          <f7-list-item link="#" :checkbox="concal.dataIsCheck" @click="openOneData(item)" :checked="concal.dataIsChecked" v-for="(item, index) in xcxx" :key="index" :title="filter(item, 'xcxx')" :subtitle="item.OrderContent">
            <div class="headeImg" slot="media">
              <i class="iconfont icon-geren"></i>
            </div>
          </f7-list-item>
        </f7-list>
      </f7-tab>
      <!-- 预警指令消息 -->
      <f7-tab id="myMessage3">
        <f7-list class="myMessageList" media-list>
          <f7-list-item link="#" :checkbox="concal.dataIsCheck" @click="openOneData(item)" :checked="concal.dataIsChecked" v-for="(item, index) in yjzl" :key="index" :title="filter(item, 'yjzl')" :subtitle="item.content">
            <div class="headeImg" slot="media">
              <i class="iconfont icon-geren"></i>
            </div>
          </f7-list-item>
        </f7-list>
      </f7-tab>
    </f7-tabs>
    <f7-popup class="demo-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar :title="nowData.nm || nowData.SendPersonName || nowData.recUserNm">
          <f7-nav-right>
            <f7-link popup-close>
              <i class="f7-icons">xmark</i>
            </f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <div class="nowDataTime">
            {{ nowData.tm || nowData.create_time || nowData.stm }}
          </div>
          <div class="nowDataSec">
            {{ nowData.content || nowData.OrderContent }}
          </div>
        </f7-block>
      </f7-page>
    </f7-popup>
    <f7-fab position="right-bottom" slot="fixed">
      <f7-icon><i class="iconfont icon-add"></i></f7-icon>
      <f7-icon><i class="f7-icons">xmark</i></f7-icon>
      <f7-fab-buttons position="top">
        <f7-fab-button>未读</f7-fab-button>
        <f7-fab-button>已读</f7-fab-button>
        <f7-fab-button>全部</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
  </f7-page>
</template>
<script>
import { config } from "utils/config.js";
export default {
  name: "MyMessage",
  data() {
    return {
      popupOpened: false,
      listData: [],
      xcxx: [],
      yjzl: [],
      nowData: {}, //当前数据
      concal: {
        dataIsCheck: false,
        dataIsChecked: false
      }
    };
  },
  computed: {
    userInfo() {
      // return this.$store.state.userInfo;
      return JSON.parse(sessionStorage.getItem("userInfo"));
    }
  },
  methods: {
    filter(dataSou, type) {
      if (type == "data") {
        let typeArr = ["降雨预警", "水位预警"];
        if (dataSou.type - 1 < 2) {
          return `${dataSou.nm}(${typeArr[dataSou.type - 1]})`;
        } else {
          return `${dataSou.nm}`;
        }
      } else if (type == "xcxx") {
        let typeArr = ["普通指令", "紧急指令"];
        if (dataSou.OrderType - 1 < 2) {
          return `${dataSou.SendPersonName}(${typeArr[dataSou.OrderType]})`;
        } else {
          return `${dataSou.SendPersonName}`;
        }
      } else if (type == "yjzl") {
        let typeArr = ["内部预警", "外部预警"];
        if (dataSou.status == 2) {
          return `${dataSou.recUserNm}(${typeArr[0]})`;
        } else if (dataSou.status == 3) {
          return `${dataSou.recUserNm}(${typeArr[1]})`;
        } else {
          return `${dataSou.recUserNm}`;
        }
      }
    },
    openOneData(item) {
      if (this.concal.dataIsCheck && this.concal.dataIsChecked) {
        console.log(666);
        this.popupOpened = false;
      } else {
        this.popupOpened = true;
        this.nowData = item;
      }
    },
    changeFooter(event) {
      // console.log(event);
      if (event) {
        this.concal.dataIsCheck = false;
        this.concal.dataIsChecked = false;
      }
    },
    // 全选
    selectAll() {
      this.concal.dataIsCheck = true;
      this.concal.dataIsChecked = true;
    },
    getThreeListData() {
      let that = this;
      this.$axios({
        method: "get",
        url: config.server + "/api/app/getMyMsgInfo",
        data: {
          recUserId: this.userInfo.id
        }
      }).then(res => {
        if (res.code === 1) {
          let { data, inspectOrder, warnSendConfig } = res.detail;
          console.log(res, "我的消息列表");
          that.listData = data;
          that.xcxx = inspectOrder.result;
          that.yjzl = warnSendConfig.list;
        }
      });
    }
  },
  mounted() {
    this.getThreeListData();
  },
  components: {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.myMessage {
  /deep/.list {
    margin: 0;
  }
  .myMessageList {
    width: 100%;
    height: 100%;
    .headeImg {
      width: 42px;
      height: 42px;
      background: #3fbdf0;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 36px;
        color: #fff;
        margin-top: 12px;
      }
    }
    li:nth-child(2n) .headeImg {
      background: #ff6d90;
    }
    li:nth-child(3n) .headeImg {
      background: #eb7f75;
    }
    li:nth-child(4n) .headeImg {
      background: #50a2b0;
    }
    li:nth-child(5n) .headeImg {
      background: #947cd4;
    }
    li:nth-child(6n) .headeImg {
      background: #7bb57b;
    }
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