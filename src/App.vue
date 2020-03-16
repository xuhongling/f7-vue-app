<template>
  <div id="app">
    <f7-app :params="f7params">
      <f7-view main url="/"></f7-view>
    </f7-app>
  </div>
</template>

<script>
  import router from './router/index.js'
  export default {
    name: 'app',
    data() {
      return {
        //具体参考http://framework7.io/docs/app.html
        f7params: {
          routes: router,
          name: 'f7-vue-app',
          id: 'com.myapp.test',
          theme: 'auto', // 主题 auto:自适应; ios:苹果; android:安卓 
          touch: {
            disableContextMenu: false //是否开启上下文联动    
          },
          view: {
            pushState: true,
            pushStateRoot: '', //根URL分隔符也可以使用   document.location.pathname.split('index.html')[0]
            pushStateSeparator: '#'  //pushStateRoot为空字符才能使用，网址 分隔符号 # !
          }, //f7移植到vue后路由切换后刷新无法保存当前路由在app.vue中加入pushState属性和pushStateRoot属性以及让‘/’根路由匹配index.html
          dialog: { //fw7-vue选择框按钮内容
            buttonOk: "确认",
            buttonCancel: "取消"
          },
        }
      };
    },
    components: {
      
    }
  }
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
