<template>
  <f7-page class="myProfile">
    <div class="userInfo">
      <div class="userName">
        <h3 class="name">{{userName}}</h3>
        <div class="ascription">
          <span>{{useInfo.dept_name}}</span>
          <span>{{useInfo.role_name}}</span>
        </div>
      </div>
      <div class="userInfoHead">
        <img :src="userImg">
      </div>
    </div>
    <ul class="list">
      <li class="listItem">
        <f7-link href="/myMessage/" class="item">
          <div class="itemLeft">
            <i class="iconfont icon-xiaoxi"></i>
            <span>我的消息</span>
          </div>
          <div class="itemRight">
            <i class="iconfont icon-arrow"></i>
          </div>
        </f7-link>
      </li>
      <li class="listItem">
        <div class="item">
          <div class="itemLeft">
            <i class="iconfont icon-mimaxiugai"></i>
            <span>密码修改</span>
          </div>
          <div class="itemRight">
            <i class="iconfont icon-arrow"></i>
          </div>
        </div>
      </li>
      <li class="listItem">
        <div class="item">
          <div class="itemLeft">
            <i class="iconfont icon-banben"></i>
            <span>版本信息</span>
          </div>
          <div class="itemRight">
            <i class="iconfont icon-arrow"></i>
          </div>
        </div>
      </li>
    </ul>
    <f7-block>
      <f7-button fill round large @click="handleClickLogout"><span style="font-size: 16px">退出登录</span></f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
  import { mapState } from "vuex"
  import { config } from "utils/config"
  import userImg from 'assets/images/user.png'
  export default {
    name: "MyProfile",
    data() {
      return {
        userName: '张小明',
        userImg: '',
        useInfo: {
          dept_name: "",
          role_name: ""
        }
      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods:{
      //获取已有的角色
      hasRoles(id) {
        this.$axios.get(config.server + "/api/system/user/findSysUserInfoById/" + id).then(res => {
          this.roleIds = []
          let roleIds = []
          if (res.code == 1 && res.detail.result.length > 0) {
            this.useInfo = res.detail && res.detail.result[0]
          }
        })
      },
      handleClickLogout(){
        sessionStorage.setItem("isAuthenticated", "false")
        this.$f7router.navigate("/login/")
        window.location.reload()
      }
    },
    mounted(){
      this.userImg = userImg
      this.hasRoles(1) //this.userName.id
    },
    watch:{
      userInfo(val){
        this.userName = val.realname
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .myProfile{
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    .userInfo{
      width: 100%;
      height: 130px;
      padding: 0 15px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .userName{
        display: flex;
        flex-direction: column;
        h3.name{
          font-size: 25px;
          margin-bottom: 5px;
        }
        .ascription{
          display: flex;
          span{
            font-size: 12px;
            color: #999;
            margin-right: 10px;
          }
        }
      }
      .userInfoHead{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #f4f4f4;
        border: 1px solid #eee;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .list{
      width: 100%;
      background: #fff;
      margin-top: 15px;
      .listItem{
        padding-left: 14px;
        background: #fff;
        &:active{
          background: #f5f8ff;
        }
        .item{
          width: 100%;
          height: 54px;
          padding-right: 10px;
          border-top: 1px solid #f2f3f7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .itemLeft{
            display: flex;
            align-items: center;
            i{
              font-size: 20px;
              margin-left: 5px;
              margin-right: 10px;
            }
            span{
              font-size: 16px;
              color: #333;
            }
          }
          .itemRight{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 15px;
            .version{
            }
          }
          i[class^="iconfont icon-arrow"]{
            font-size: 17px;
            margin-left: 6px;
          }
        }
      }
      .listItem:nth-child(1) .item{
        border-top: transparent;
      }
    }
    i[class^="iconfont icon-xiaoxi"]{color: #faa660 !important;}
    i[class^="iconfont icon-mima"]{color: #70b547 !important;}
    i[class^="iconfont icon-banben"]{color: #54afff !important;}
    i[class^="iconfont icon-arrow"]{
      color: #ccc;
      font-size: 16px;
    }
  }
</style>