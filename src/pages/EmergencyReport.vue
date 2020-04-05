<template>
  <f7-page name="emergencyReport" class="emergencyReport">
    <f7-navbar title="应急上报" back-link="Back"></f7-navbar>
     <f7-block-title>巡检指令</f7-block-title>
     <f7-list media-list>
      <f7-list-item
        @click='popupOpened = true'
        link="#"
        title="普通指令"
        after="2020-04-01 2020-04-01 17:14"
        subtitle="张三三"
        text="紧急指令内容，多写点啊啊，详细点啊啊啊啊啊阿啦啦啦啦"
      ></f7-list-item>
    </f7-list>
    
    <f7-block-title style="margin-top: 20px;">资料上报</f7-block-title>
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
        <f7-col tag="span"><f7-button fill raised>保存</f7-button></f7-col>
      </f7-row>
    </div>

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
            <f7-list-item
              radio
              checked
              name="demo-media-radio"
              value="1"
              title="普通指令"
              after="2020-04-01 17:14"
              subtitle="张三"
              text="大渡口区环境监测站，去大渡口区环境监测站巡查啦啦啦啦啦，去大渡口区环境监测站巡查啦啦啦啦啦，去大渡口区环境监测站巡查啦啦啦啦啦。。。。。。"
            ></f7-list-item>
            <f7-list-item
              radio
              checked
              name="demo-media-radio"
              value="1"
              title="普通指令"
              after="2020-04-01 17:14"
              subtitle="张三"
              text="紧急指令内容，多写点啊啊，详细点啊啊啊啊啊阿。。。。。。"
            ></f7-list-item>
            <f7-list-item
              radio
              checked
              name="demo-media-radio"
              value="1"
              title="普通指令"
              after="2020-04-01 17:14"
              subtitle="张三"
              text="紧急指令内容，多写点啊啊，详细点啊啊啊啊啊阿。。。。。。"
            ></f7-list-item>
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
        timeValue: "",
        name: "",
        base64ImgData: null,
        imagesAllData: []
      }
    },
    methods:{
      //获取用户拍照的图片信息
    async Photograph() {
      let self = this
      // 获取用户拍照的图片名字，显示到页面上
      this.fileName = this.$refs.photoref.files[0].name
      // 获取图片base64数据，并存放到 base64ImgData 中
      this.base64ImgData = await this.FileReader(this.$refs.photoref.files[0])
      console.log(this.base64ImgData)
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
    mounted(){
      // 日期时间组件
      this.$f7.calendar.create({
        inputEl: "#calendar-date-time2",
        timePicker: true,
        dateFormat: "yyyy-mm-dd HH::mm:ss"
      })
    },
    components:{
      
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .emergencyReport{
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