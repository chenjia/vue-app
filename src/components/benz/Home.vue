<template>
  <div class="page">
    <mt-header title="首页">
    	<mt-button slot="right" @click="go('/page/benz/login')" class="fa fa-fw fa-lock"></mt-button>
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
              <img style="width:60%" :src="'../../../static/img/benz/'+menu.icon"/><br/>
              <span>{{menu.name}}</span>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <mt-tabbar v-model="selected" fixed>
    	<mt-tab-item id="首页">
    		<img slot="icon" src="../../../static/img/benz/homebtn1.png">
    		首页
    	</mt-tab-item>
    	<mt-tab-item id="消息">
    		<img slot="icon" src="../../../static/img/benz/homebtn6.png">
    		消息
    	</mt-tab-item>
    	<mt-tab-item id="签到">
    		<img slot="icon" src="../../../static/img/benz/kaoqin2.png">
    		签到
    	</mt-tab-item>
    	<mt-tab-item id="晨训">
    		<img slot="icon" src="../../../static/img/benz/chenxun2.png">
    		晨训
    	</mt-tab-item>
    	<mt-tab-item id="我的">
    		<img slot="icon" src="../../../static/img/benz/homebtn8.png">
    		我的
    	</mt-tab-item>
    </mt-tabbar>
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
      selected:'首页',
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
        name: '客户',
        icon: 'imglink03.png',
        url:'../list'
      },{
        name: '保单',
        icon: 'imglinkpolicy.png',
        url:'../chart'
      },{
        name: '绩效',
        icon: 'imglink04.png',
        url:'../contact'
      },{
        name: '建议书',
        icon: 'imglink05.png',
        url:'../form'
      },{
        name: '预警中心',
        icon: 'imglink10.png',
        url:'../tab'
      },{
        name: '组织',
        icon: 'imglink08.png',
        url:'../lock'
      },{
        name: '活动管理',
        icon: 'imglink01.png',
        url:'../loading'
      },{
        name: '产品中心',
        icon: 'imglink11.png',
        url:'../calendar'
      },{
        name: '保单整理',
        icon: 'imglink13.png',
        url:'../map'
      },{
        name: '四大账户',
        icon: 'imglink14.png',
        url:'../dialog'
      },{
        name: '简易规划',
        icon: 'imglink16.png',
        url:'../chat'
      },{
        name: '立保通',
        icon: 'lbt.png',
        url:'../map'
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
  padding:15px 0 5px;
}
.icon-table td i{
  font-size:24px;
}
</style>