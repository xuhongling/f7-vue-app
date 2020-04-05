<template>
  <div class="infoManageTab">
    <f7-list class="infoManageList">
      <f7-list-item title="类型选择：" smart-select :smart-select-params="{openIn: 'popover'}">
        <select name="superhero" v-model="stationType" @change='getSelectValue'>
          <option value="1" selected>河道</option>
          <option value="2">水库</option>
          <option value="3">泵站</option>
          <option value="4">闸站</option>
        </select>
      </f7-list-item>
    </f7-list>
    <div class="dataTable">
      <!-- 根据data动态生成的表格内容 -->
      <table>
        <thead>
          <tr>
            <th class="index-cell">序号</th>
            <th v-for="(item,index) in tableTitle" :key='index'>{{item.label}}</th>
          </tr>
        </thead>
        <tbody class="page-content infinite-scroll-content tbodyContent" ref="tbodyContent">
          <tr v-for="(items, index) in tbodyContentAllList" :key='index'>
            <td class="index-cell">{{index+1}}</td>
            <td v-for="(item,i) in tableTitle" :key='i'>
              <template v-if="item.prop == 'warnStatus'">
                <template v-if="items[item.prop] == 1">预警产生</template>
                <template v-if="items[item.prop] == 2">内部预警</template>
                <template v-if="items[item.prop] == 3">外部预警</template>
                <template v-if="items[item.prop] == 4">应急响应</template>
                <template v-if="items[item.prop] == 9">关闭预警</template>
              </template>
              <template v-else>{{items[item.prop]}}</template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { config } from 'utils/config'
  export default {
    name: "InfoManageTab2",
    data() {
      return {
        stationType: '1',
        tbodyContentAllList: [],
        limit: 20,
        tcount: 20,
        allowInfinite: true,
        tableTitle: [],
        tableTitleHD: [
          {prop:"stnm", label:"测站名称"},
          {prop:"tm", label:"预警时间"},
          {prop:"volume", label:"预警水位"},
          {prop:"volumeLimit", label:"水位阈值"},
          {prop:"warnLevel", label:"预警等级"},
          {prop:"warnStatus", label:"预警状态"},
          {prop:"level1", label:"等级1阈值"},
          {prop:"level2", label:"等级2阈值"},
          {prop:"level3", label:"等级3阈值"},
          {prop:"level4", label:"等级4阈值"}
        ],
        tableTitleSK: [
          {prop:"stnm", label:"测站名称"},
          {prop:"tm", label:"预警时间"},
          {prop:"volume", label:"预警水位"},
          {prop:"volumeLimit", label:"水位阈值"},
          {prop:"warnLevel", label:"预警等级"},
          {prop:"warnStatus", label:"预警状态"},
          {prop:"level1", label:"等级1阈值"},
          {prop:"level2", label:"等级2阈值"},
          {prop:"level3", label:"等级3阈值"},
          {prop:"level4", label:"等级4阈值"}
        ],
        tableTitleBZ: [
          {prop:"stnm", label:"测站名称"},
          {prop:"tm", label:"预警时间"},
          {prop:"volume", label:"预警水位"},
          {prop:"volumeLimit", label:"水位阈值"},
          {prop:"warnLevel", label:"预警等级"},
          {prop:"warnStatus", label:"预警状态"},
          {prop:"level1", label:"等级1阈值"},
          {prop:"level2", label:"等级2阈值"},
          {prop:"level3", label:"等级3阈值"},
          {prop:"level4", label:"等级4阈值"}
        ],
        tableTitleZZ: [
          {prop:"stnm", label:"测站名称"},
          {prop:"tm", label:"预警时间"},
          {prop:"volume", label:"预警水位"},
          {prop:"volumeLimit", label:"水位阈值"},
          {prop:"warnLevel", label:"预警等级"},
          {prop:"warnStatus", label:"预警状态"},
          {prop:"level1", label:"等级1阈值"},
          {prop:"level2", label:"等级2阈值"},
          {prop:"level3", label:"等级3阈值"},
          {prop:"level4", label:"等级4阈值"}
        ]
      }
    },
    methods:{
      getSelectValue(){
        if (this.stationType === '1') {this.tableTitle = this.tableTitleHD}
        if (this.stationType === '2') {this.tableTitle = this.tableTitleSK}
        if (this.stationType === '3') {this.tableTitle = this.tableTitleBZ}
        if (this.stationType === '4') {this.tableTitle = this.tableTitleZZ}
        this.getTabsData2()
      },
      getTabsData2(){
        this.$axios.get(config.server + `/api/app/getVolumeWarn?limit=${this.limit}&start=1&stationType=${this.stationType}`).then(data => {
          console.log(data,'getVolumeWarn data')
          if (data.code === 1) {
            this.$f7.preloader.hide()
            this.allowInfinite = true
            console.log(data.detail.list,'data.detail.result.list')
            this.tbodyContentAllList = data.detail.list
            this.tcount = data.detail.tcount
          }
        })
      },
      // 下拉加载数据，只最大加载400条
      infiniteScrollContent(){
        let This = this
        let $$ = this.Dom7
        let app = this.$f7
        let tbodyContent = this.$refs.tbodyContent
        let lastItemIndex = tbodyContent.querySelectorAll('tr').length
        let maxItems      
        // Attach 'infinite' event handler
        $$('.infinite-scroll-content').on('infinite', function () {
          if (This.tcount >= 380) {
            maxItems = 380
            This.tcount = 380
          }else {
            maxItems = This.tcount
          }
          if (!This.allowInfinite) return
          This.allowInfinite = false
          app.preloader.show()
          if (lastItemIndex >= maxItems) {
            app.infiniteScroll.destroy('.infinite-scroll-content')
            app.preloader.hide()
            return
          }
          This.limit = This.limit + 20
          This.getTabsData2()
          lastItemIndex = tbodyContent.querySelectorAll('tr').length
        })
      }
    },
    mounted(){
      this.tableTitle = this.tableTitleHD
      this.getTabsData2()
      this.infiniteScrollContent()
    },
    components:{
      
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .infoManageTab{
    width: 100%;
    height: 100%;
    background: #f2f3f5;
    padding: 10px 10px 18px 10px;
    .infoManageList{
      margin: 10px 0;
    }
    .dataTable{
      width: 100%;
      height: calc(100% - 48px);
      overflow: auto;
      background: #fff;
      table{
        width: auto;
        height: 100%;
      }
      table tbody {
        display: block;
        height: calc(100% - 40px);
        overflow-y:scroll;
        border: none;
      } 
      table thead, tbody tr {
        display: table;
        width: 100%;
        table-layout:fixed;
        border: none;
      }
      table thead th{
        height: 40px;
        background: #f6f7f9;
        border: none;
        font-size: 14px;
        font-weight: bold;
        color: #111;
      }
      tbody td {
        width: 100px;
        height: 40px;
        font-size: 15px;
        color: #666;
        border: none;
        border-bottom: 1px solid #e8ebee;
        text-align: center;
      }
      .index-cell{
        width: 50px;
      }
      tbody td:nth-child(2),table thead th:nth-child(2){
        width: 150px;
      }
    }
    .tbodyContent{
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>