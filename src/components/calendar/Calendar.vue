<template>
  <div class="lxt-page">
    <mt-header title="日历">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div id="calendar"></div>
  </div>
</template>

<script>
import '../../../static/lib/mobiscroll/css/mobiscroll.javascript.min.css'
import mobiscroll from '../../../static/lib/mobiscroll/js/mobiscroll.javascript.min.js'
export default {
  name: 'calendar',
  data() {
    return {
      date:null,
      value:null,
      disabled:false,
      format: 'yyyy-MM-dd',
    }
  },
  methods: {
    onDayClick2(){
      
    }
  },
  mounted(){
    let calendar = mobiscroll.calendar('#calendar', {
      theme: 'mobiscroll',
      display: 'inline',
      layout: 'liquid',
      lang: 'zh',
      firstDay: 1,
      controls: ['calendar', 'date', 'time'],
      headerText: '请选择查看日期',
      showScrollArrows: true,
      events: (function() {
        let events = [];
        let icons = ['fa fa fa-paw', 'fa fa fa-heart', 'fa fa fa-flag'];
        for (let m = 1; m <= 12; m++) {
          let count = parseInt(Math.random() * 10, 10);
          for (let i = 0; i < count; i++) {
            let day = parseInt(Math.random() * 31, 10);
            let icon = icons[parseInt(Math.random() * 3, 10)];
            events.push({
              d: m + '/' + day,
              icon: icon
            });
          }
        }
        return events;
      })(),
      onMonthChange: function(event, inst) {
        this.date = event;
      }
    })
  }
}
</script>
<style type="text/css" scoped>
  
</style>