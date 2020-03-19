<template>
  <div class="searchWrapper">
    <f7-subnavbar :inner="false" no-shadow>
      <f7-searchbar placeholder="请输入要搜索的测站"></f7-searchbar>
    </f7-subnavbar>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    data() {
      return {
        
      }
    },
    methods:{
      
    },
    mounted(){
      
    },
    components:{
      
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .searchWrapper{
    position: absolute;
    top: 10px;
    width: 100%;
    height: 50px;
    padding: 0 30px;
    box-sizing: border-box;
    *{
      box-sizing: border-box;
    }
    /deep/.searchbar,/deep/.subnavbar,/deep/.subnavbar:before,form{
      width: 100%;
      background: transparent;
    }
    /deep/.searchbar{
      margin-left: 14px;
      margin-right: 14px;
    }
  }
</style>