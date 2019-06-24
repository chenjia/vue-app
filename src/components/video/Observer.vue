<template>
  <div>
    <mt-header title="视频">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <!-- 

    <div ref="box">
      <link href="static/lib/videojs/video-js.css" rel="stylesheet" />
      <video id="my-player" class="video-js" :style="{width: screenWidth+'px'}" controls>
          <source src="rtmp://live.hkstv.hk.lxdns.com/live/hks2" type="rtmp/flv">
          <source :src="url" type="application/x-mpegURL">
          <source src="http://localhost:5080/oflaDemo/chenjia.m3u8" type="application/x-mpegURL">
          <source id="source" src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" type="video/mp4"></source>
      </video>
      <RemoteScript src="static/lib/videojs/video.js"></RemoteScript>
    </div> -->

    <mt-field label="拉流地址" placeholder="请输入拉流地址" v-model="url"></mt-field>
    <div class="pd-md">
      <mt-button @click="startPlay" type="primary" size="large">播　放</mt-button>
    </div>
  </div>
</template>

<script>
import RemoteScript from '../../components/common/RemoteScript'
export default {
  name: 'Observer',
  components:{
    RemoteScript
  },
  data () {
    return {
      player: null,
      url: 'rtmp://47.100.119.102/hls/chenjia'
    }
  },
  methods: {
    startPlay(){
      if(this.env == 'app'){
        // PLAY_TYPE = {
        //   LIVE_RTMP:     0, // 传入的URL为RTMP直播地址
        //   LIVE_FLV:      1, // 传入的URL为FLV直播地址
        //   VOD_FLV:       2, // 传入的URL为RTMP点播地址
        //   VOD_HLS:       3, // 传入的URL为HLS(m3u8)点播地址
        //   VOD_MP4:       4, // 传入的URL为MP4点播地址
        //   LIVE_RTMP_ACC: 5, // 低延迟连麦链路直播地址（仅适合于连麦场景）
        //   LOCAL_VIDEO:   6  // 手机本地视频文件
        // }
        // options.playMode 播放模式，0为横屏，1为竖屏

        window.CLiteAV.startPlay({
          url: this.url,
          playType: window.CLiteAV.PLAY_TYPE.LIVE_RTMP,
          playMode: 1
        }, ()=>{
          
          console.log('suc')
        }, ()=>{
          console.log('fail')
        })
      }else{
        if(this.player == null){
          this.player = videojs('my-player',{
            width:this.screenWidth
          });
        }
          
        this.player.src({
          src: this.url,
          type: 'application/x-mpegURL'
        });

        this.player.ready(()=>{
          this.player.play();
        })
      }
    },
    stopPlay(){
      window.CLiteAV.stopPlay(()=>{
        console.log('stop suc')
        document.body.className = ''
      }, ()=>{
        console.log('stop fail')
      })
    }
  },
  watch: {
    
  },
  mounted(){
    document.addEventListener("backbutton", event => {
      this.stopPlay()
    }, false);

    document.addEventListener('CLiteAV.onPlayEvent', data => {
      console.log(data.eventID)
      if(data.eventID == '2001'){
        document.body.className = 'video-play'
      }
    })
    // var params = {
    //     url: "rtmp://media3.sinovision.net:1935/live/livestream"
    // };
    // if(Math.random()>0.5){
    //   params.url = 'https://chenjia.github.io/vue-app/public/static/media/7957a8f7246d2caf1e552e1a989f37f6.mp4'
    // }
    // alert(params.url)
    // window.plugins.streamingMedia.playVideo(params.url);
  }
}
</script>