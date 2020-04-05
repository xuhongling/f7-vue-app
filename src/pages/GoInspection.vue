<template>
  <f7-page name="goInspection" class="goInspection">
    <f7-navbar title="巡查" back-link="Back"></f7-navbar>
    <f7-block-title>巡检指令</f7-block-title>
    <f7-list media-list>
      <f7-list-item v-if="nowInsData" @click="popupOpened = true" link="#" :title="nowInsData.OrderType == 0 ? '普通指令' : '紧急指令'" :after="nowInsData.create_time" :subtitle="nowInsData.SendPersonName" :text="nowInsData.OrderContent"></f7-list-item>
    </f7-list>
    <f7-block-title style="margin-top: 20px;">资料上报类型</f7-block-title>
    <div class="tabsHeader">
      <f7-segmented raised tag="p">
        <f7-button tab-link="#goInspectionTab1" tab-link-active>普通资料</f7-button>
        <f7-button tab-link="#goInspectionTab2">突发事件资料</f7-button>
      </f7-segmented>
    </div>
    <f7-tabs>
      <!-- 普通资料 -->
      <f7-tab id="goInspectionTab1" tab-active>
        <f7-list class='reportList'>
          <f7-list-item title="时间" class="calendarDateTime">
            <input type="text" placeholder="请选择日期时间" :value="from.putong.date" @change="from.putong.date = $event.target.value" readonly="readonly" id="calendar-date-time2" />
          </f7-list-item>
          <f7-list-item title="描述">
            <f7-list-input type="text" :value="from.putong.remark" @input="from.putong.remark = $event.target.value" placeholder="请输入描述" clear-button />
          </f7-list-item>
          <f7-list-item title="地址">
            <f7-list-input type="text" :value="from.putong.address" @input="from.putong.address = $event.target.value" placeholder="请输入地址" clear-button />
          </f7-list-item>
          <f7-list-item title="上报人">
            <f7-list-input type="text" :value="from.putong.report" @input="from.putong.report = $event.target.value" placeholder="请输入上报人" clear-button />
          </f7-list-item>
          <f7-list-item title="反馈内容">
            <f7-list-input type="textarea" resizable :value="from.putong.section" @input="from.putong.section = $event.target.value" placeholder="请输入反馈内容..." clear-button />
          </f7-list-item>
        </f7-list>
        <!-- 添加照片 -->
        <div class="addPhotograph">
          <div class="addPhotoBtn">
            <input ref="photoref" type="file" accept="image/*" @change="Photograph()" capture="camera" />
            <i class="f7-icons">camera</i>
          </div>
          <f7-messagebar-attachments>
            <f7-messagebar-attachment v-for="(image, index) in imagesAllData" :key="index" :image="image" @attachment:delete="deleteAttachment(image)"></f7-messagebar-attachment>
          </f7-messagebar-attachments>
        </div>
        <!-- 提交 -->
        <div class="submitBtn">
          <f7-row tag="p">
            <f7-col tag="span"><f7-button raised>修改</f7-button></f7-col> 
            <f7-col tag="span"><f7-button fill raised @click="submitFrom(0)">保存</f7-button></f7-col>
          </f7-row>
        </div>
      </f7-tab>
      <!-- 突发事件资料 -->
      <f7-tab id="goInspectionTab2">
        <f7-list class='reportList'>
          <f7-list-item title="时间" class="calendarDateTime">
            <input type="text" placeholder="请选择日期时间" @change="timeValue = $event.target.value" readonly="readonly" id="calendar-date-time2" />
          </f7-list-item>
          <f7-list-item title="描述">
            <f7-list-input type="text" :value="name" @input="name = $event.target.value" placeholder="请输入描述" clear-button />
          </f7-list-item>
          <f7-list-item title="地址">
            <f7-list-input type="text" :value="name" @input="name = $event.target.value" placeholder="请输入地址" clear-button />
          </f7-list-item>
          <f7-list-item title="上报人">
            <f7-list-input type="text" :value="name" @input="name = $event.target.value" placeholder="请输入上报人" clear-button />
          </f7-list-item>
          <f7-list-item title="反馈内容">
            <f7-list-input type="textarea" resizable :value="name" @input="name = $event.target.value" placeholder="请输入反馈内容..." clear-button />
          </f7-list-item>
        </f7-list>
        <div class="submitBtn">
          <f7-row tag="p">
            <f7-col tag="span">
              <f7-button raised>修改</f7-button>
            </f7-col>
            <f7-col tag="span">
              <f7-button fill raised>保存</f7-button>
            </f7-col>
          </f7-row>
        </div>
      </f7-tab>
    </f7-tabs>

    <!-- 巡检指令弹窗 -->
    <f7-popup class="demo-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar title="巡检指令">
          <f7-nav-right>
            <f7-link popup-close>关闭</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-list media-list>
            <f7-list-item radio @change="changeList(item)" :checked="nowIns == item.id ? true : false" v-for="(item, index) in insList" :key="index" name="demo-media-radio" :value="item.id" :title="item.OrderType == 0 ? '普通指令' : '紧急指令'" :after="item.create_time" :subtitle="item.SendPersonName" :text="item.OrderContent"></f7-list-item>
          </f7-list>
        </f7-block>
      </f7-page>
    </f7-popup>

  </f7-page>
</template>
<script>
import { config } from "utils/config";
export default {
  name: "EmergencyReport",
  data() {
    return {
      popupOpened: false,
      insList: [],
      nowInsData: {},
      nowIns: 3,
      timeValue: "",
      from: {
        putong: {
          date: "",
          remark: "",
          address: "",
          report: "",
          section: "",
          image: []
        },
        tufa: {}
      },
      name: "",
      base64ImgData: null,
      imagesAllData: []
    };
  },
  computed: {
    userInfo() {
      // return this.$store.state.userInfo;
      return JSON.parse(sessionStorage.getItem("userInfo"));
    }
  },
  methods: {
    ssss() {
      console.log("sdadad");
    },
    // 切换指令
    changeList(item) {
      console.log(item);
      this.getNowInsData();
    },
    getNowInsData() {
      this.insList.forEach((item, index) => {
        if (item.id == this.nowIns) {
          this.nowInsData = item;
        }
      });
    },
    //上报
    submitFrom(type) {
      let data = {};
      let that = this;
      type == 0 ? (data = this.from.putong) : (data = this.from.tufa);
      this.$axios({
        method: "post",
        url: config.server + "/api/app/addorUpdateInspectRecord",
        params: {
          Address: data.address ? data.address : null,
          InsDesc: data.remark ? data.remark : null,
          OrderId: this.nowIns,
          ReportType: type,
          files: this.imagesAllData.length != 0 ? this.imagesAllData : null
        }
      }).then(res => {
        if (res.code === 1) {
          this.$f7.dialog.alert("操作成功！", "提示");
        }
      });
    },
    //获取指令列表
    getInstructions() {
      let that = this;
      this.$axios({
        method: "post",
        url: config.server + "/api/system/action/load_inspect_order_by_cond",
        data: {
          ACTION: [{
            DBKEY: "",
            TYPE: "LOAD",
            CODE: "load_inspect_order_by_cond",
            RCODE: "",
            CDN: {
              id: this.userInfo.id
            },
            PAGE_CONF: {}
          }]
        }
      }).then(res => {
        if (res.code === 1) {
          console.log(res);
          that.nowIns = res.detail.DATA[0].id;
          that.insList = res.detail.DATA;
          this.getNowInsData();
        }
      });
    },
    //获取用户拍照的图片信息
    async Photograph() {
      let self = this
      // 获取用户拍照的图片名字，显示到页面上
      this.fileName = this.$refs.photoref.files[0].name
      // 获取图片base64 代码，并存放到 base64ImgData 中
      this.base64ImgData = await this.FileReader(this.$refs.photoref.files[0])
      console.log(this.base64ImgData, 'this.base64ImgData')
      this.imagesAllData.unshift(this.base64ImgData)
    },
    //返回用户拍照图片的base64
    FileReader(FileInfo) {
      let self = this
      let reader = new FileReader()
      let ImgData = new Image()
      reader.readAsDataURL(FileInfo)
      reader.onload = (e)=> {
        ImgData.src = e.target.result
      }
      // base64地址图片加载完毕后
      return new Promise((resolve)=>{
        ImgData.onload = ()=> {
          // 缩放图片需要的canvas
          let canvas = document.createElement('canvas')
          let context = canvas.getContext('2d')
          let originWidth = ImgData.width
          let originHeight = ImgData.height
          // 最大尺寸限制
          let maxWidth = 1000,
            maxHeight = 1000
          // 目标尺寸
          let targetWidth = originWidth,
            targetHeight = originHeight
          // 图片尺寸超过1000x1000的限制
          if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
              // 更宽，按照宽度限定尺寸
              targetWidth = maxWidth
              targetHeight = Math.round(maxWidth * (originHeight / originWidth))
            } else {
              targetHeight = maxHeight
              targetWidth = Math.round(maxHeight * (originWidth / originHeight))
            }
          }
          // canvas对图片进行缩放
          canvas.width = targetWidth
          canvas.height = targetHeight
          // 清除画布
          context.clearRect(0, 0, targetWidth, targetHeight)
          // 图片压缩
          context.drawImage(ImgData, 0, 0, targetWidth, targetHeight)
          let base64ImgData = canvas.toDataURL('image/png')
          // 返回 base64ImgData
          resolve(base64ImgData)
        }
      })
    },
    deleteAttachment(image) {
      const index = this.imagesAllData.indexOf(image);
      this.imagesAllData.splice(index, 1)[0]; // eslint-disable-line
    }
  },
  mounted() {
    // 日期时间组件
    this.$f7.calendar.create({
      inputEl: "#calendar-date-time2",
      timePicker: true,
      dateFormat: "yyyy-mm-dd HH::mm:ss"
    });
    this.getInstructions();
  },
  components: {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.goInspection {
  background: #f7f7f7;
  /deep/.list{margin: 0;}
  .calendarDateTime {
    input {
      width: 226px;
    }
  }
  .reportList{
    margin: 16px 0;
  }
  /deep/.block-title {
    font-size: 15px;
  }
  /deep/.item-content.item-input{
    width: 240px;
  }
  .tabsHeader {
    padding: 0 50px;
    p {
      padding: 0;
    }
  }
  .submitBtn {
    padding: 0 20px;
    margin-bottom: 20px;
  }
  .addPhotograph{
    padding: 0 20px;
    margin-bottom: 20px;
    .addPhotoBtn{
      width: 80px;
      height: 80px;
      border: 1px dashed #bbb;
      border-radius: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      input{
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
      }
      i{
        font-size: 40px;
        color: #bbb;
      }
    }
    .messagebar-attachments{
      border-bottom: transparent;
    }
  }
}
</style>