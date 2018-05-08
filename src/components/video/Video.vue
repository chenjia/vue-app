<template>
  <div>
    <mt-header title="视频">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <video :style="{width:'100%'}" autoplay controls loop>
      <source src="../../../static/media/7957a8f7246d2caf1e552e1a989f37f6.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      
    }
  },
  mounted(){
    
  }
}
</script>