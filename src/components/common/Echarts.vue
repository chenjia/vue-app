<template>
  <div ref="myChart"></div>
</template>

<script>
import chinaJson from './china.json'
const echarts = require('echarts/lib/echarts')
export default {
  name: 'echarts',
  props:['width', 'height','options'],
  data () {
    return {
      opts: null
    }
  },
  watch:{
    opts(val){
      let myChart = echarts.getInstanceByDom(this.$refs.myChart)
      if(myChart){
        myChart.setOption(val, true)
      }
    },
    options(val){
      this.opts = val
    }
  },
  mounted(){
    this.opts = this.options
    
    require([
      './macarons',
      'echarts/lib/chart/bar',
      'echarts/lib/chart/line',
      'echarts/lib/chart/pie',
      'echarts/lib/chart/radar',
      'echarts/lib/chart/funnel',
      'echarts/lib/chart/gauge',
      'echarts/lib/chart/map',
      'echarts/lib/component/tooltip',
      'echarts/lib/component/title',
      'echarts/lib/component/legend'
    ], () => {
      this.$refs.myChart.style.width = this.width+'px'
      this.$refs.myChart.style.height = this.height+'px'
      echarts.registerMap('china', chinaJson)
      let myChart = echarts.init(this.$refs.myChart, 'macarons')
      myChart.setOption(this.options, true)
    })
  }
}
</script>