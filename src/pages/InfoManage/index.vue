<template>
  <f7-page :page-content="false" class="infoManage">
    <f7-toolbar
      tabbar
      scrollable
      :position="isBottom ? 'bottom' : 'top'"
      @click.native="dianji($event)"
    >
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
        <InfoManageTab1  v-if="isPage=='infoManage-1'"/>
      </f7-tab>
      <f7-tab id="infoManage-2" class="page-content">
        <InfoManageTab2 v-if="isPage=='infoManage-2'"/>
      </f7-tab>
      <f7-tab id="infoManage-3" class="page-content">
        <InfoManageTab3 v-if="isPage=='infoManage-3'"/>
      </f7-tab>
      <f7-tab id="infoManage-4" class="page-content">
        <InfoManageTab4 v-if="isPage=='infoManage-4'"/>
      </f7-tab>
      <f7-tab id="infoManage-5" class="page-content">
        <InfoManageTab5 v-if="isPage=='infoManage-5'"/>
      </f7-tab>
      <f7-tab id="infoManage-6" class="page-content">
        <InfoManageTab6 v-if="isPage=='infoManage-6'"/>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import InfoManageTab1 from "./components/InfoManageTab1";
import InfoManageTab2 from "./components/InfoManageTab2";
import InfoManageTab3 from "./components/InfoManageTab3";
import InfoManageTab4 from "./components/InfoManageTab4";
import InfoManageTab5 from "./components/InfoManageTab5";
import InfoManageTab6 from "./components/InfoManageTab6";
export default {
  name: "InfoManage",
  data() {
    return {
      isBottom: false,
      isPage: "infoManage-1"
    };
  },
  methods: {
    dianji(event) {
      this.isPage = event.target.dataset.tab.split("#")[1];
    }
  },
  mounted() {},
  components: {
    InfoManageTab1,
    InfoManageTab2,
    InfoManageTab3,
    InfoManageTab4,
    InfoManageTab5,
    InfoManageTab6
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.infoManage {
  width: 100%;
  height: 100%;
  background: #f2f3f5;
  /deep/.list {
    margin: 0;
  }
  /deep/.toolbar {
    background: #fff;
  }
  div[id^="infoManage"] {
    overflow: hidden;
    padding-bottom: 0;
  }
}
</style>
