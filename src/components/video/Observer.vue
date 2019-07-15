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

    <mt-field label="播放地址" placeholder="播放地址" v-model="url"></mt-field>
    <MultiPicker label="播放类型" placeholder="playType" v-model="playType" :data="playTypes" />
    <mt-cell class="mint-field">
      <span slot="title">横屏/竖屏</span>
      <mt-switch class="switch-normal" v-model="mode">
        <span class="normal-text">
          <span>竖</span>
          <span>横</span>
        </span>
      </mt-switch>
    </mt-cell>
    <div class="pd-md">
      <mt-button @click="startPlay" type="primary" size="large">播　放</mt-button>
    </div>
    <div class="pd-md">
      <mt-button @click="stopPlay" type="danger" size="large">停　止</mt-button>
    </div>
  </div>
</template>

<script>
import MultiPicker from '../common/MultiPicker'
import RemoteScript from '../common/RemoteScript'
export default {
  name: 'Observer',
  components:{
    MultiPicker,
    RemoteScript
  },
  data () {
    return {
      tt:{},
      urls:{
        0: 'rtmp://47.100.119.102/hls/chenjia',
        4: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      },
      url: 'rtmp://47.100.119.102/hls/chenjia',
      playTypes:[{
        value:0,
        text:'RTMP直播'
      },{
        value:1,
        text:'FLV直播'
      },{
        value:2,
        text:'RTMP点播'
      },{
        value:3,
        text:'HLS(m3u8)点播'
      },{
        value:4,
        text:'MP4点播'
      },{
        value:5,
        text:'连麦链路直播'
      },{
        value:6,
        text:'本地'
      }],
      player: null,
      playType: 0,
      mode: true
    }
  },
  computed:{
    playMode(){
      return this.mode?1:0
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
          playType: this.playType,
          playMode: this.playMode
        }, ()=>{
          console.log('suc')
          document.body.classList.add('video-play');
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
        document.body.classList.remove('video-play')
      }, ()=>{
        console.log('stop fail')
      })
    },
    changeMode(mode){
      this.playMode = mode
      console.log('changeMode timeout:'+mode)
      setTimeout(()=>{
        window.CLiteAV.setPlayMode(mode)
        window.screen.orientation.unlock()
      },1111)
    }
  },
  watch: {
    playType(val){
      this.url = this.urls[val]
    }
  },
  mounted(){
    const _this = this
    document.addEventListener("backbutton", event => {
      this.stopPlay()
    }, false);

    document.addEventListener('CLiteAV.onNetStatusChange', netStatus => {
      console.log(`[CLiteAV WEB] 网络状态：${netStatus}`);
    });

    document.addEventListener('CLiteAV.onPlayEvent', data => {
      console.log(`[CLiteAV WEB] 播放事件：${data.eventID} - ${data.params}`);
    })

    window.addEventListener("orientationchange", () => {
      console.log(window.screen.orientation.type)
      if(window.screen.orientation.type == 'portrait' || window.screen.orientation.type == 'portrait-primary'){
        window.screen.orientation.lock('portrait');
        _this.changeMode(1)
      }else{
        window.screen.orientation.lock('landscape');
        _this.changeMode(0)
      }
    });
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