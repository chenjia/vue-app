<template>
  <div class="lxt-page">
    <mt-header title="首页">
      <mt-button slot="left" class="fa fa-fw fa-bars"></mt-button>
      <mt-button slot="right" @click="go('/login')" class="fa fa-fw fa-lock"></mt-button>
    </mt-header>
    
    <div>
      <mt-swipe :auto="4000" :style="{height:screenWidth*0.6+'px'}">
        <mt-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.src" :style="{height:screenWidth*0.6666+'px'}">
        </mt-swipe-item>
      </mt-swipe>
      <table class="icon-table">
        <tr>
          <td>
            <div @click="go('list')">
              <i class="fa fa-fw fa-list" style="color:#ff7f50"></i><br/>
              <span>动态列表</span>
            </div>
          </td>
          <td>
            <div @click="go('chart')">
              <i class="fa fa-fw fa-bar-chart" style="color:#87cefa"></i><br/>
              <span>动态图表</span>
            </div>
          </td>
          <td>
            <div @click="go('contact')">
              <i class="fa fa-fw fa-book" style="color:#da70d6"></i><br/>
              <span>通讯录</span>
            </div>
          </td>
          <td>
            <div @click="go('form')">
              <i class="fa fa-fw fa-list-alt" style="color:#32cd32"></i><br/>
              <span>表单</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div @click="go('tab')">
              <i class="fa fa-fw fa-folder" style="color:#6495ed"></i><br/>
              <span>选项卡</span>
            </div>
          </td>
          <td>
            <div @click="go('lock')">
              <i class="fa fa-fw fa-hand-o-up" style="color:#ff69b4"></i><br/>
              <span>手势解锁</span>
            </div>
          </td>
          <td>
            <div @click="go('loading')">
              <i class="fa fa-fw fa-spinner fa-pulse" style="color:#40e0d0"></i><br/>
              <span>　加载　</span>
            </div>
          </td>
          <td>
            <div ui-sref="live">
              <i class="fa fa-fw fa-video-camera" style="color:#cd5c5c"></i><br/>
              <span>视频播放</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div @click="go('calendar')">
              <i class="fa fa-fw fa-calendar" style="color:#ffa500"></i><br/>
              <span>日历</span>
            </div>
          </td>
          <td>
            <div @click="go('map')">
              <i class="fa fa-fw fa-map" style="color:#40e0d0"></i><br/>
              <span>地图</span>
            </div>
          </td>
          <td>

          </td>
          <td>

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
        icon: 'reorder',
        path: 'list'
      },{
        name: '图表',
        icon: 'insert_chart',
        path: 'chart'
      },{
        name: '通讯录',
        icon: 'perm_contact_calendar'
      },{
        name: '表单',
        icon: 'description'
      },{
        name: '选项卡',
        icon: 'tab'
      },{
        name: '锁屏',
        icon: 'lock_outline'
      },{
        name: '加载',
        icon: 'refresh'
      },{
        name: '地图',
        icon: 'map'
      }]
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
  border:1px solid #f0f0f0;
}
.icon-table td i{
  font-size:24px;
}
</style>