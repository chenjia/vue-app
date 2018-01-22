<template>
  <div>
    <mt-header title="首页">
      <mt-button slot="left" class="fa fa-fw fa-bars"></mt-button>
      <mt-button slot="right" @click="go('/page/login')" class="fa fa-fw fa-lock"></mt-button>
    </mt-header>
    
    <div>
      <mt-swipe :auto="4000" :style="{height:screenWidth*0.6+'px'}">
        <mt-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.src" :style="{height:screenWidth*0.6666+'px'}">
        </mt-swipe-item>
      </mt-swipe>
      <table class="icon-table">
        <tr v-if="index%4 == 0" v-for="(menu, index) in menus" :key="index">
          <td v-if="i>=index && i<index+4" v-for="(menu, i) in menus" style="width:25%;">
            <div @click="go(menu.url)">
              <i class="fa fa-fw" :class="'fa fa-'+menu.icon" :style="{color:menu.color}"></i><br/>
              <span>{{menu.name}}</span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      drawer: false,
      mini: false,
      temporary: true,
      right: null,
      leftMenus: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      banners: [{
        src: require('../../../static/img/banner1.jpg')
      },{
        src: require('../../../static/img/banner2.jpg')
      },{
        src: require('../../../static/img/banner3.jpg')
      },{
        src: require('../../../static/img/banner4.jpg')
      },{
        src: require('../../../static/img/banner5.jpg')
      }],
      menus: [{
        name: '列表',
        icon: 'list',
        color: '#ff7f50',
        url: 'list'
      },{
        name: '图表',
        icon: 'bar-chart',
        color: '#87cefa',
        url: 'chart'
      },{
        name: '通讯录',
        icon: 'book',
        color: '#da70d6',
        url: 'contact'
      },{
        name: '表单',
        icon: 'list-alt',
        color: '#32cd32',
        url: 'form'
      },{
        name: '选项卡',
        icon: 'folder',
        color: '#6495ed',
        url: 'tab'
      },{
        name: '锁屏',
        icon: 'hand-o-up',
        color: '#ff69b4',
        url: 'lock'
      },{
        name: '加载',
        icon: 'spinner',
        color: '#ffa500',
        url: 'loading'
      },{
        name: '视频',
        icon: 'video-camera',
        color: '#cd5c5c',
        url: 'live'
      },{
        name: '日历',
        icon: 'calendar',
        color: '#ba55d3',
        url: 'calendar'
      },{
        name: '地图',
        icon: 'map',
        color: '#40e0d0',
        url: 'map'
      },{
        name: '弹窗',
        icon: 'window-restore',
        color: '#1e90ff',
        url: 'dialog'
      },{
        name: '聊天',
        icon: 'qq',
        color: '#ff6347',
        url: 'chat'
      }]
      /*
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0' 
      */
    }
  },
  methods: {
    
  }
}
</script>
<style type="text/css" scoped>
.icon-table{
  width:100%;
  text-align:center;
  background:white;
  font-size:13px;
  border:none;
  border-collapse: collapse;
}
.icon-table td{
  height:64px;
  line-height: 20px;
  vertical-align:middle;
  border:1px dashed #dfdfdf;
}
.icon-table td i{
  font-size:24px;
}
</style>