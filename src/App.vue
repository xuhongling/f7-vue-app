<template>
  <f7-app :params="f7params">
    <f7-views tabs class="appViewWrapper">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom class="navigationTabbar">
        <f7-link tab-link="#view-home" tab-link-active><i class="iconfont icon-map"></i><span class="tabbar-label">首页地图</span></f7-link>
        <f7-link tab-link="#view-dataQuery"><i class="iconfont icon-data"></i><span class="tabbar-label">数据查询</span></f7-link>
        <f7-link tab-link="#view-infoManage"><i class="iconfont icon-xinxi"></i><span class="tabbar-label">信息管理</span></f7-link>
        <f7-link tab-link="#view-myProfile"><i class="iconfont icon-wode"></i><span class="tabbar-label">我的</span></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- 数据查询 View -->
      <f7-view id="view-dataQuery" name="dataQuery" tab url="/dataQuery/"></f7-view>

      <!-- 信息管理 View -->
      <f7-view id="view-infoManage" name="infoManage" tab url="/infoManage/"></f7-view>
      
      <!-- 我的 View -->
      <f7-view id="view-myProfile" name="myProfile" tab url="/myProfile/"></f7-view>
    </f7-views>
  </f7-app>
</template>

<script>
  import { Device }  from 'framework7/framework7-lite.esm.bundle.js'
  import cordovaApp from 'utils/cordova-app.js'
  import routes from 'router/index.js'
  export default {
    name: 'app',
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          id: 'io.framework7.jzfxApp', // App bundle ID
          name: 'jzfxApp', // App name
          theme: 'auto', // Automatic theme detection
          // App routes
          routes: routes,
          // Input settings
          input: {
            scrollIntoViewOnFocus: Device.cordova && !Device.electron,
            scrollIntoViewCentered: Device.cordova && !Device.electron,
          },
          // Cordova Statusbar settings
          statusbar: {
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
          },
        },

        // Login screen data
        username: '',
        password: '',
      }
    },
    mounted() {
      this.$f7ready((f7) => {
        // Init cordova APIs (see cordova-app.js)
        if (Device.cordova) {
          cordovaApp.init(f7);
        }
        // Call F7 APIs here
      });
    },
    components: {
      
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .appViewWrapper{
    padding-bottom: var(--f7-tabbar-labels-height);
  }
  .navigationTabbar{
    position: fixed;
    i.iconfont{
      font-size: var(--f7-tabbar-icon-size);
      height: var(--f7-tabbar-icon-size);
      line-height: var(--f7-tabbar-icon-size);
    }
  }
</style>
