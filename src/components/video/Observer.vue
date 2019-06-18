<template>
  <div>
    <mt-header title="视频">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <link href="static/lib/videojs/video-js.css" rel="stylesheet" />

    <div ref="box">
      <video id="my-player" class="video-js" :style="{width: screenWidth+'px'}" controls>
          <!-- <source src="rtmp://live.hkstv.hk.lxdns.com/live/hks2" type="rtmp/flv"> -->
          <!-- <source :src="url" type="application/x-mpegURL"> -->
          <!-- <source src="http://localhost:5080/oflaDemo/chenjia.m3u8" type="application/x-mpegURL"> -->
          <!-- <source id="source" src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" type="video/mp4"></source> -->
      </video>
    </div>

    <mt-field label="拉流地址" placeholder="请输入拉流地址" v-model="url"></mt-field>
    <div class="pd-md">
      <mt-button @click="init" type="primary" size="large">播　放</mt-button>
    </div>
    <RemoteScript src="static/lib/videojs/video.js"></RemoteScript>
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
      url: 'http://47.100.119.102/hls/chenjia.m3u8'
    }
  },
  methods: {
    init(){
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
  watch: {
    
  },
  mounted(){
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