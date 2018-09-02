<template>
  <div>
    <mt-header title="百度地图">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <div>
      <baiduMap></baiduMap>
      <div style="height:50%;overflow-y:auto;"></div>
    </div>
  </div>
</template>

<script>
  import baiduMap from '../common/BaiduMap.vue'
  export default {
    name: 'Map',
    components:{
      baiduMap
    },
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    mounted () {
      
    }
  }
</script>