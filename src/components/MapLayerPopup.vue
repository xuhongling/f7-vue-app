<template>
  <f7-sheet
    class="mapLayerPopup"
    :opened="sheetOpened"
    @sheet:closed="sheetOpened = false"
    swipe-to-close
    swipe-to-step
    backdrop
  >
    <!-- 初始步骤内容 -->
    <div class="sheet-modal-swipe-step">
      <div class="sheetStepTop">
        <div class="monitorName">{{ monitorObj.stnm }}{{ this.monitorObj.typeName }}监测站</div>
        <div class="shoucang">
          <i
            class="iconfont"
            :class="[this.monitorObj.isCollect!==true ? 'icon-weishoucang': 'icon-shoucang']"
            @click="shoucangEvent"
          ></i>
        </div>
      </div>
      <!--雨量-->
      <ul class="sheetStepList" v-if="this.monitorObj.typeID == 'PP'">
        <li>
          <span>位置：</span>
          <p>{{ monitorObj.RGNNM }}</p>
        </li>
        <li>
          <span>当前雨量：</span>
          <p>{{ monitorObj.S === null ? "" : monitorObj.S }}</p>
        </li>
        <li>
          <span>获取时间：</span>
          <p>{{ monitorObj.tm }}</p>
        </li>
      </ul>
      <!-- 河道-->
      <ul class="sheetStepList" v-if="this.monitorObj.typeID == 'ZZ'">
        <li>
          <span>位置：</span>
          <p>{{ monitorObj.stlc }}</p>
        </li>
        <li>
          <span>当前水位：</span>
          <p>{{ monitorObj.Z === null ? "" : monitorObj.Z }}</p>
        </li>
        <li>
          <span>获取时间：</span>
          <p>{{ monitorObj.TM }}</p>
        </li>
      </ul>
      <!--泵站 -->
      <ul class="sheetStepList" v-if="this.monitorObj.typeID == 'DP'">
        <li>
          <span>位置：</span>
          <p>{{ monitorObj.stlc }}</p>
        </li>
        <li>
          <span>当前站上水位：</span>
          <p></p>
          <p>{{ monitorObj.PPUPZ === null ? "" : monitorObj.PPUPZ }}</p>
        </li>
        <li>
          <span>当前站下水位：</span>
          <p></p>
          <p>{{ monitorObj.PPDWZ === null ? "" : monitorObj.PPDWZ }}</p>
        </li>
        <li>
          <span>获取时间：</span>
          <p>{{ monitorObj.TM }}</p>
        </li>
      </ul>
      <!--水库-->
      <ul class="sheetStepList" v-if="this.monitorObj.typeID == 'RR'">
        <li>
          <span>位置：</span>
          <p>{{ monitorObj.stlc }}</p>
        </li>
        <li>
          <span>当前水位：</span>
          <p></p>
          <p>{{ monitorObj.RZ === null ? "" : monitorObj.RZ }}</p>
        </li>
        <li>
          <span>获取时间：</span>
          <p>{{ monitorObj.TM }}</p>
        </li>
      </ul>
      <!--闸站-->
      <ul class="sheetStepList" v-if="this.monitorObj.typeID == 'DD'">
        <li>
          <span>位置：</span>
          <p>{{ monitorObj.stlc }}</p>
        </li>
        <li>
          <span>当前闸上水位：</span>
          <p></p>
          <p>{{ monitorObj.UPZ === null ? "" : monitorObj.UPZ }}</p>
        </li>
        <li>
          <span>当前闸下水位：</span>
          <p></p>
          <p>{{ monitorObj.DWZ === null ? "" : monitorObj.DWZ }}</p>
        </li>
        <li>
          <span>获取时间：</span>
          <p>{{ monitorObj.TM }}</p>
        </li>
      </ul>
      <!--图像站-->
      <ul class="sheetStepList" v-if="this.monitorObj.typeID == 'IS'">
        <li>
          <span>位置：</span>
          <p>{{ monitorObj.stlc }}</p>
        </li>
        <li>
          <span>当前图像：</span>
          <p></p>
          <img
            style="width:30px;height:30px;"
            :src="monitorObj.IMGURL === null ? '' : monitorObj.IMGURL"
          />
        </li>
        <li>
          <span>获取时间：</span>
          <p>{{ monitorObj.imgCrateTime=== null ? '' : monitorObj.imgCrateTime}}</p>
        </li>
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
import { mapState } from "vuex";
import { config } from "utils/config";
export default {
  name: "MapLayerPopup",
  data() {
    return {
      markerListAll: [],
      sheetOpened: false,
      monitorName: "XXX水位（雨量）监测点",
      monitorObj: {
        isCollect: false
      },
      monitorObjEnum: {
        PP: "雨量",
        ZZ: "河道",
        RR: "水库",
        DD: "闸",
        DP: "泵",
        IS: "图像"
      }
    };
  },
  methods: {
    // 点击地图监测点
    clickMonitoring() {
      let This = this;
      let monitorListAll = this.markerListAll;
      for (let i = 0; i < monitorListAll.length; i++) {
        // monitorListAll[i].on('click', function(){
        //   console.log(this)
        //   This.monitorClickFn(this)
        // })
        monitorListAll[i].on("click", e => {
          // This.setMonitorClickInfo(monitorListAll[i])
          This.getMonitorDataByStcd(monitorListAll[i].getExtData())
          This.monitorClickFn(e);
        });
      }
    },
    setMonitorClickInfo(monitorStaObj) {
      if (monitorStaObj.typeID === "IS") {
        monitorStaObj.stcd = monitorStaObj.imstcd;
        monitorStaObj.stnm = monitorStaObj.IMSTNM;
      }
      this.monitorObj = monitorStaObj;
      this.monitorObj.typeName = this.monitorObjEnum[monitorStaObj.typeID];
      // this.getMonitorDataByStcd(monitorStaObj.typeID, monitorStaObj.stcd);
    },
    getMonitorDataByStcd(monitorStaObj) {
      let sttp = monitorStaObj.typeID
      let stcd = monitorStaObj.stcd
      this.$axios
        .get(
          config.server + "/api/app/getLatestDataByStcd/" + sttp + "/" + stcd
        )
        .then(res => {
          if (res.code === 1) {
            console.log(res.detail.result[0]);
            this.setMonitorClickInfo(monitorStaObj)
            this.monitorObj = Object.assign(
              {},
              this.monitorObj,
              this.monitorObj,
              res.detail.result[0]
            );
          }
        });
    },
    monitorClickFn(That) {
      let globalMap = this.globalMap;
      let markerListAll = this.markerListAll;
      // 清除之前点动画，点击平移到中心，设置当前点点击动画
      for (let j = 0; j < markerListAll.length; j++) {
        markerListAll[j].setAnimation("AMAP_ANIMATION_NONE");
      }
      // globalMap.panTo([That.getPosition().lng, That.getPosition().lat])
      globalMap.panTo([That.lnglat.lng, That.lnglat.lat]);
      // That.setAnimation('AMAP_ANIMATION_DROP')
      this.sheetOpened = true;
    },
    // 收藏保存
    shoucangEvent() {
      console.log(this.monitorObj);
      let data = {
        CollectStcdId: this.monitorObj.stcd,
        STTP: this.monitorObj.typeID
      };
      if (this.monitorObj.CollectId != null) {
        data["id"] = this.monitorObj.CollectId;
        if (this.monitorObj.isCollect) data["is_deleted"] = 1;
        else data["is_deleted"] = 0;
      } else {
        data["is_deleted"] = 0;
      }
      this.monitorObj.isCollect = !this.monitorObj.isCollect;

      this.$axios({
        method: "post",
        url: config.server + "/api/app/addorUpdateCollectData",
        data: data
      }).then(res => {
        window.console.log(res, "res");
        this.getMonitorDataByStcd(this.monitorObj)
      });
    }
  },
  computed: {
    ...mapState(["markerList"])
  },
  mounted() {},
  watch: {
    markerList(val) {
      if (val) {
        this.markerListAll = this.monitorListAll;
        this.clickMonitoring();
      }
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.mapLayerPopup {
  height: auto;
  --f7-sheet-bg-color: #fff;
  .sheetStepTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 6px 16px;
  }
  .monitorName {
    font-size: 18px;
    font-weight: bold;
  }
  .shoucang {
    i {
      font-size: 24px;
    }
  }
  .sheetStepList {
    padding: 0 16px 10px 16px;
    li {
      display: flex;
      align-items: center;
      padding: 6px 0;
      span {
        font-size: 15px;
        margin-right: 4px;
      }
    }
  }
}
</style>