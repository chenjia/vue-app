<template>
  <div>
    <mt-header title="加载">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="pd-md" style="position: relative;">
      <div @click="percentTimer" class="circle" :style="{left:(screenWidth-100)*0.5+'px',background:percent==100?'#eee':'#26a2ff'}">
        <div class="pie_left" :style="{transform:percent>50?'rotate('+(percent-50)*3.6+'deg)':'rotate(0deg)'}"></div>
        <div class="pie_right" :style="{background:percent>50&&percent!=100?'#26a2ff':'#eee',transform:percent<=50?'rotate('+percent*3.6+'deg)':'rotate(0deg)'}"></div>
        <div :style="{'background-image':percent==100?'url(static/img/head.jpg)':'url(static/img/head_bg.jpg)'}" class="mask"><span v-show="percent!=100&&percent!=0">{{percent}}%</span></div>
      </div>

      <mt-progress :value="percent" :bar-height="5" style="margin-top:120px;">
        <div slot="start">上传文件　</div>
        <div slot="end"><span style="display:inline-block;width:60px;">　{{percent}}%</span></div>
      </mt-progress>
    </div>

    <div class="pd-md">
      <mt-button type="primary" size="large" @click="showIndicator('snake')">snake</mt-button><br/>
      <mt-button type="primary" size="large" @click="showIndicator('fading-circle')">fading-circle</mt-button><br/>
      <mt-button type="primary" size="large" @click="showIndicator('double-bounce')">double-bounce</mt-button><br/>
      <mt-button type="primary" size="large" @click="showIndicator('triple-bounce')">triple-bounce</mt-button><br/>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'loading',
  data() {
    return {
      percent:0
    }
  },
  methods: {
    showIndicator(type){
      Indicator.open({
        text: '加载中...',
        spinnerType: type
      })
      setTimeout(()=>{
        Indicator.close()
      },3000)
    },
    upload(){
      this.percent = 0
      let timer = setInterval(()=>{
        let r = parseInt(Math.random()*3,10)
        if((this.percent + r)>=101){
          this.percent = 100
          clearInterval(timer)
        }else{
          this.percent += r
        }
      },100)
    },
    percentTimer(){
      this.percent = 0;
      let timer = setInterval(()=>{
        this.percent += parseInt(Math.random()*3,10)
        if(this.percent>=100){
          this.percent = 100
          clearInterval(timer)
        }
      },100)
    }
  },
  mounted(){
    
  }
}
</script>
<style scoped>
.circle {
  width:100px;
  height:100px;
  position: absolute;
  border-radius: 50%;
  background: #32cd32;
}
.pie_left, .pie_right{
  width:100px;
  height:100px;
  position: absolute;
  border-radius: 50%;
  top: 0px;left: 0px;
  background:#eee;
}
.pie_right{
  clip:rect(0,auto,auto,50px);
}
.pie_left{
  clip:rect(0,50px,auto,0);
}
.mask {
  width: 94px;
  height: 94px;
  border-radius: 50%;
  left: 3px;
  top: 3px;
  background: #FFF;
  position: absolute;
  text-align: center;
  line-height: 94px;
  font-size: 16px;
  background-size:94px 94px;
  transition: all 1s;
}
.uploader-example {
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>