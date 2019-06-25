<template>
  <div>
    <mt-header title="主播">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <mt-field label="推流地址" placeholder="请输入拉流地址" v-model="url"></mt-field>
    <mt-field label="stream" placeholder="请输入stream" v-model="stream"></mt-field>
    

    <mt-field label="videoWidth" placeholder="videoWidth" v-model="options.videoWidth"></mt-field>
    <mt-field label="videoHeight" placeholder="videoHeight" v-model="options.videoHeight"></mt-field>
    <mt-field label="videoBitRate" placeholder="videoBitRate" v-model="options.videoBitRate"></mt-field>
    <mt-field label="videoMaxBitRate" placeholder="videoMaxBitRate" v-model="options.videoMaxBitRate"></mt-field>
    <mt-field label="videoMinBitRate" placeholder="videoMinBitRate" v-model="options.videoMinBitRate"></mt-field>
    <mt-field label="videoFrameRate" placeholder="videoFrameRate" v-model="options.videoFrameRate"></mt-field>
    <mt-field label="videoMaxKeyframeInterval" placeholder="videoMaxKeyframeInterval" v-model="options.videoMaxKeyframeInterval"></mt-field>
    <mt-field label="videoOrientation" placeholder="videoOrientation" v-model="options.videoOrientation"></mt-field>
    
    <div class="pd-md">
      <mt-button @click="start" type="primary" size="large">开　播</mt-button>
    </div>

    <div class="pd-md">
      <mt-button v-show="streamer != null" @click="stop" type="primary" size="large">停　播</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      url: 'rtmp://47.100.119.102:1935/hls',
      stream: 'chenjia',
      streamer: null,
      options: {
        videoWidth: '375',
        videoHeight: '667',
        videoBitRate: "819200", //(800 * 1024)
        videoMaxBitRate: "1024000", //(1000 * 1024)
        videoMinBitRate: "512000", //(500 * 1024)
        videoFrameRate: "24",
        videoMaxKeyframeInterval: "48",
        videoOrientation: "1", //1 = portrait, 2 = landscape
        labelLive: "Live",
        labelViewers: "Viewers",
        labelNoQuestions: "No Questions",
        alertStopSessionTitle: "结束提醒",
        alertStopSessionYes: "确定",
        alertStopSessionNo: "取消",
        alertStopSessionMessage: "要关闭直播间吗?",
        alertStartSessionTitle: "开播提醒",
        alertStartSessionOK: "确定",
        alertStartSessionMessage: "请点击下方红色按钮开启直播！",
        videoTitleStart: "开始",
        videoTitlePaused: "暂停",
        videoTitleEnd: "结束"
      }
    }
  },
  methods: {
    start(){
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        this.iosStart()
      } else if (/(Android)/i.test(navigator.userAgent)) {
        this.androidStart()
      } else {
        alert('未能识别设备类型，默认用安卓！')
        this.androidPlay()
      }
    },
    stop(){
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        this.iosStop()
      } else if (/(Android)/i.test(navigator.userAgent)) {
        this.androidStop()
      } else {
        alert('未能识别设备类型！')
      }
    },
    androidStart(){
      window.videoStreamer.streamRTMP(this.url + '/' + this.stream, ()=>{
        console.log('success streamRTMP')
      }, ()=>{
        console.log('failure streamRTMP')
      });
    },
    androidStop(){
      window.videoStreamer.streamStop(()=>{
        console.log('success streamStop')
      }, ()=>{
        console.log('failure streamStop')
      })
    },
    iosStart(){
      let options = Object.assign({}, this.options)
      options.videoWidth = options.videoWidth || this.screenWidth
      options.videoHeight = options.videoHeight || this.screenHeight
      options.rtmpServerURL = this.url + '/' + this.stream
      console.log(options, JSON.stringify(window.rtmpLiveStreamer))
      this.streamer = window.rtmpLiveStreamer;

      this.streamer.start(results => {
        console.log('Results: ' + results);
      }, error => {
        console.log('Error: ' + error);
      }, options );
    },
    iosStop(){
      this.streamer.stop(results => {
        console.log('Results: ' + results);
      }, error => {
        console.log('Error: ' + error);
      }, null)
    }
  },
  watch: {
    
  },
  mounted(){
    
  }
}
</script>