<template>
  <div class="infoManageTab">
    <f7-list class="infoManageList">
      <f7-list-item title="类型选择：" smart-select :smart-select-params="{openIn: 'popover'}">
        <select name="superhero" v-model="selectValue" @change='getSelectValue'>
          <option value="ZZ" selected>河道</option>
          <option value="RR">水库</option>
          <option value="DD">泵站</option>
          <option value="DP">闸站</option>
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
            <td v-for="(item,i) in tableTitle" :key='i'>{{items[item.prop]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { config } from 'utils/config'
  export default {
    name: "InfoManageTab1",
    data() {
      return {
        selectValue: 'ZZ',
        tbodyContentAllList: [],
        limit: 20,
        tcount: 20,
        allowInfinite: true,
        tableTitle: [],
        tableTitleHD: [
          {prop:"stnm", label:"测站名"},
          {prop:"tm", label:"时间"},
          {prop:"z", label:"水位"},
          {prop:"q", label:"流量"},
          {prop:"wptn", label:"水势"}
        ],
        tableTitleSK: [
          {prop:"stnm", label:"测站名"},
          {prop:"tm", label:"时间"},
          {prop:"rz", label:"库上水位"},
          {prop:"w", label:"蓄水量"}
        ],
        tableTitleBZ: [
          {prop:"stnm", label:"测站名"},
          {prop:"tm", label:"时间"},
          {prop:"UPZ", label:"站上水位"},
          {prop:"DWZ", label:"站下水位"}
        ],
        tableTitleZZ: [
          {prop:"stnm", label:"测站名"},
          {prop:"tm", label:"时间"},
          {prop:"PPUPZ", label:"闸上水位"},
          {prop:"PPDWZ", label:"水位"}
        ]
      }
    },
    methods:{
      getSelectValue(){
        console.log(this.selectValue,'this.selectValue')
        if (this.selectValue === 'ZZ') {this.tableTitle = this.tableTitleHD}
        if (this.selectValue === 'RR') {this.tableTitle = this.tableTitleSK}
        if (this.selectValue === 'DD') {this.tableTitle = this.tableTitleBZ}
        if (this.selectValue === 'DP') {this.tableTitle = this.tableTitleZZ}
        // if (this.selectValue === 'PP') {this.tableTitle = this.tableTitleYL}
        this.getTabsData()
      },
      getTabsData(){
        this.$axios.get(config.server + `/api/app/getReportDataByCondition?limit=${this.limit}&start=1&sttp=${this.selectValue}`).then(data => {
          if (data.code === 1) {
            this.$f7.preloader.hide()
            this.allowInfinite = true
            this.tbodyContentAllList = data.detail.result.list
            this.tcount = data.detail.result.tcount
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
          This.getTabsData()
          lastItemIndex = tbodyContent.querySelectorAll('tr').length
        })
      }
    },
    mounted(){
      this.tableTitle = this.tableTitleHD
      this.getTabsData()
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