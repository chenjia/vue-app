<template>
  <div ref="myChart"></div>
</template>

<script>
import chinaJson from './china.json'
import echarts from 'echarts/lib/echarts'
import './macarons'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/gauge'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

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
    this.$refs.myChart.style.width = this.width+'px'
    this.$refs.myChart.style.height = this.height+'px'
    echarts.registerMap('china', chinaJson)
    let myChart = echarts.init(this.$refs.myChart, 'macarons')
    myChart.setOption(this.options, true)
  }
}
</script>