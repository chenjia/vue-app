<template>
  <div>
    <mt-header title="视频">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <video autoplay controls loop src="../../../static/media/movie.ogg">您的浏览器不支持 video 标签。</video>
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      
    }
  },
  mounted(){
    
  }
}
</script>