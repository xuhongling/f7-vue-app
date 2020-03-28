<template>
  <f7-sheet class="mapLayerPopup" :opened="sheetOpened" @sheet:closed="sheetOpened = false" swipe-to-close swipe-to-step backdrop>
    <!-- 初始步骤内容 -->
    <div class="sheet-modal-swipe-step">
      <div class="sheetStepTop">
        <div class="monitorName">{{monitorName}}</div>
        <div class="shoucang"><i class="iconfont icon-weishoucang"></i></div>
      </div>
      <ul class="sheetStepList">
        <li><span>位置：</span><p>dsdassaldladka</p></li>
        <li><span>当前水位：</span><p>dsdassaldladka</p></li>
        <li><span>获取时间：</span><p>dsdassaldladka</p></li>
      </ul>
    </div>
    <!-- 向上刷起，打开的其余部分内容 -->
    <f7-block-title medium style="margin: 4px 16px 0 16px;">详细列表:</f7-block-title>
    <f7-list no-hairlines>
      <f7-list-item title="Item 1">
        <b slot="after" class="text-color-black">萨达啊所</b>
      </f7-list-item>
      <f7-list-item title="Item 2">
        <b slot="after" class="text-color-black">是大深打出的</b>
      </f7-list-item>
      <f7-list-item title="Item 3">
        <b slot="after" class="text-color-black">大的深很多时候</b>
      </f7-list-item>
      <f7-list-item title="Item 4">
        <b slot="after" class="text-color-black">大的深很多时候</b>
      </f7-list-item>
      <f7-list-item title="Item 5">
        <b slot="after" class="text-color-black">大的深很多时候</b>
      </f7-list-item>
      <f7-list-item title="Item 6">
        <b slot="after" class="text-color-black">大的深很多时候</b>
      </f7-list-item>
      <f7-list-item title="Item 7">
        <b slot="after" class="text-color-black">大的深很多时候</b>
      </f7-list-item>
    </f7-list>
  </f7-sheet>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "MapLayerPopup",
    data() {
      return {
        markerListAll: [],
        sheetOpened: false,
        monitorName: 'XXX水位（雨量）监测点'
      }
    },
    methods:{
      // 点击地图监测点
      clickMonitoring(){
        let This = this
        let monitorListAll = this.markerListAll
        for (let i = 0; i < monitorListAll.length; i++) {
          monitorListAll[i].on('click', function(){
            This.monitorClickFn(this)
          })
        }
      },
      monitorClickFn(That){
        let globalMap = this.globalMap
        let markerListAll = this.markerListAll
        // 清除之前点动画，点击平移到中心，设置当前点点击动画
        for (let j = 0; j < markerListAll.length; j++) {
          markerListAll[j].setAnimation('AMAP_ANIMATION_NONE')
        }
        globalMap.panTo([That.getPosition().lng, That.getPosition().lat])
        That.setAnimation('AMAP_ANIMATION_DROP')
        this.sheetOpened = true
      }
    },
    computed: {
      ...mapState([
        'markerList'
      ])
    },
    mounted(){
      
    },
    watch:{
      markerList(val){
        if (val) {
          this.markerListAll = this.monitorListAll
          this.clickMonitoring()
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .mapLayerPopup{
    height:auto;
    --f7-sheet-bg-color: #fff;
    .sheetStepTop{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px 6px 16px;
    }
    .monitorName{
      font-size: 18px;
      font-weight: bold;
    }
    .shoucang{
      i{
        font-size: 24px;
      }
    }
    .sheetStepList{
      padding: 0 16px 10px 16px;
      li{
        display: flex;
        align-items: center;
        padding: 6px 0;
        span{
          font-size: 15px;
          margin-right: 4px;
        }
      }
    }
  }
</style>