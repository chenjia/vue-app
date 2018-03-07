<template>
  <div>
    <mt-header title="视频">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <video src="../../../static/media/movie.ogg"></video>
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