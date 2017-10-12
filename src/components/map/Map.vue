<template>
  <div class="lxt-page">
    <mt-header title="地图">
      <mt-button @click="go('home')" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div>
      <baiduMap></baiduMap>
      <div style="height:50%;overflow-y:auto;"></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BaiduMap from '../common/BaiduMap.vue'
  Vue.component('baiduMap', BaiduMap)
  export default {
    name: 'test',
    data () {
      return {
        activeStep: 0
      }
    },
    computed: {
      finished () {
        return this.activeStep > 2
      }
    },
    methods: {
      handleNext () {
        this.activeStep++
      },
      handlePrev () {
        this.activeStep--
      },
      reset () {
        this.activeStep = 0
      }
    },
    mounted () {
      
    }
  }
</script>