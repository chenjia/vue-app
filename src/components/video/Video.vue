<template>
  <div>
    <mt-header title="视频">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>
    
    <!-- <iframe src="http://localhost:5080/oflaDemo/player.html?file=chenjia"></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  mounted(){
    var params = {
        url: "http://mobile.360heros.com/producers/4630608605686575/9813601418398322/video/video_31b451b7ca49710719b19d22e19d9e60.mp4"
    };
    alert(params.url)
    console.log(window.plugins,window.plugins.streamingMedia)
    window.plugins.streamingMedia.playVideo(params.url);
  }
}
</script>