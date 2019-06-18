<template>
  <div>
    <mt-header title="主播">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <mt-field label="推流地址" placeholder="请输入拉流地址" v-model="url"></mt-field>
    <mt-field label="stream" placeholder="请输入stream" v-model="stream"></mt-field>

    <div class="pd-md">
      <mt-button @click="play" type="primary" size="large">开　播</mt-button>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'Video',
  data () {
    return {
      url: 'rtmp://47.100.119.102:1935/hls',
      stream: 'chenjia'
    }
  },
  methods: {
    play(){
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        this.iosPlay()
      } else if (/(Android)/i.test(navigator.userAgent)) {
        this.androidPlay()
      } else {
        alert('未能识别设备类型，默认用安卓！')
        this.androidPlay()
      }
    },
    androidPlay(){
      window.videoStreamer.streamRTMP(this.url + '/' + this.stream, ()=>{
        console.log('success callback')
      }, ()=>{
        console.log('failure callback')
      });
    },
    iosPlay(){
      var options = {
        videoWidth: this.screenWidth,
        videoHeight: this.screenHeight,
        videoBitRate: "819200", //(800 * 1024)
        videoMaxBitRate: "1024000", //(1000 * 1024)
        videoMinBitRate: "512000", //(500 * 1024)
        videoFrameRate: "24",
        videoMaxKeyframeInterval: "48",
        videoOrientation: "1", //1 = portrait, 2 = landscape
        rtmpServerURL: this.url + '/' + this.stream,
        labelLive: "Live",
        labelViewers: "Viewers",
        labelNoQuestions: "No Questions",
        alertStopSessionTitle: "Alert",
        alertStopSessionYes: "Yes",
        alertStopSessionNo: "No",
        alertStopSessionMessage: "Are you sure you want to stop the session?",
        alertStartSessionTitle: "Alert",
        alertStartSessionOK: "OK",
        alertStartSessionMessage: "Are you sure you want to start the session?",
        videoTitleStart: "Start",
        videoTitlePaused: "Paused",
        videoTitleEnd: "End"
      };

      var streamer = window.rtmpLiveStreamer;

      streamer.start(results => {
        console.log('Results: ' + results);
      }, error => {
        console.log('Error: ' + error);
      }, options );
    }
  },
  watch: {
    
  },
  mounted(){
    
  }
}
</script>