<template>
  <div>
    <mt-header title="主播">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <div class="pd-md">
      <div class="pd-md">
        <mt-button @click="go('/page/publisher')" type="primary" size="large">我是主播</mt-button>
      </div>

      <div class="pd-md">
        <mt-button @click="go('/page/observer')" type="primary" size="large">我是粉丝</mt-button>
      </div>

      <div class="pd-md">
        <mt-button @click="popup = true" type="primary" size="large">观看回放</mt-button>
      </div>
    </div>

    <mt-popup v-model="popup" position="right" style="width:100%;border-radius:4px;">
      <mt-header title="观看回放" fixed>
        <mt-button @click="popup = false" slot="left" icon="back">返回</mt-button>
      </mt-header>

      <div class="has-header" style="overflow-y:auto;" :style="{height:screenHeight-40+'px'}">
        <video :style="{width:'100%'}" controls loop>
          <source src="static/media/7957a8f7246d2caf1e552e1a989f37f6.mp4" type="video/mp4" />
        </video>
      </div>
    </mt-popup>
  </div>
</template> 

<script>
export default {
  name: 'Video',
  data () {
    return {
      popup: false,
      mp4: 'static/media/7957a8f7246d2caf1e552e1a989f37f6.mp4'
    }
  },
  methods: {
    
  },
  watch: {
    
  },
  mounted(){
    
  }
}
</script>