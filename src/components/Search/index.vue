<template>
  <div class="searchWrapper">
    <f7-subnavbar :inner="false" no-shadow>
      <f7-searchbar placeholder="请输入要搜索的测站" readonly></f7-searchbar>
    </f7-subnavbar>
    <div class="disableSearchbar" @click="handleClickSearchBar"></div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "SearchBar",
    data() {
      return {
        
      }
    },
    methods:{
      ...mapActions([
        'setShowSearchBar'
      ]),
      handleClickSearchBar(){
        this.setShowSearchBar(true)
      }
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
    height: 46px;
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
    /deep/.searchbar-backdrop{
      background: transparent;
    }
    .disableSearchbar{
      width: 100%;
      height: 46px;
      position: absolute;
      top: 0;
      left: 0;
      background: transparent;
      z-index: 700;
    }
  }
</style>