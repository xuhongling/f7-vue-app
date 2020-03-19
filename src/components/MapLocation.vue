<template>
  <div class="mapLocation" @click="handleClick">
    <i class="iconfont icon-dingwei"></i>
  </div>
</template>

<script>
  import AMap from 'AMap'
  export default {
    name: "MapLocation",
    data() {
      return {
        
      }
    },
    methods:{
      handleClick(){
        let Map = this.globalMap
        AMap.plugin('AMap.Geolocation', ()=> {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000,           //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,            //定位结果缓存0毫秒，默认：0
            convert: true,            //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: false,        //显示定位按钮，默认：true
            buttonPosition: 'LB',     //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,         //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,         //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,      //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          })
          Map.addControl(geolocation)
          geolocation.getCurrentPosition((status, result)=>{
            console.log(status, result)
            if (status == 'complete') {
              //onComplete(result)
              console.log(result)
            } else {
              //onError(result)
            }
          })
        })
      }
    },
    mounted(){
      
    },
    components:{
      
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .mapLocation{
    position: absolute;
    left: 10px;
    bottom: 50px;
    background: #fff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    i{
      color: #777;
      font-size: 24px;
    }
    &:active{
      color: #4287ff !important;
      background: #deedff;
      i{
        color: #4287ff !important;
      }
    }
  }
</style>