<template>
  <div class="page has-footer">
    <mt-header title="首页">
      <mt-button slot="left" @click="popupMenu = true" class="fa fa-fw fa-bars"></mt-button>
      <mt-button slot="right" @click="scan()" class="fa fa-fw fa-qrcode"></mt-button>
    </mt-header>
    
    <div>
      <mt-swipe v-if="showSwipe" @change="handleChange" :prevent="true" :auto="auto" :style="{height:screenWidth*0.6+'px'}">
        <mt-swipe-item v-for="i in 5" :key="i">
          <img width="100%" :src="'./static/img/banner/'+(i-1)+'.jpg'">
        </mt-swipe-item>
      </mt-swipe>
      <table class="icon-table">
        <tr v-if="index%4 == 0" v-for="(menu, index) in menus" :key="index">
          <td @click="go(menu.url)" v-if="i>=index && i<index+4" v-for="(menu, i) in menus" style="width:25%;padding-top:5px;">
            <div>
              <i class="fa fa-fw" :class="'fa fa-'+menu.icon" :style="{color:colors[i]}"></i><br/>
              <span>{{menu.name}}</span>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <mt-button size="large" style="border-radius:0;text-align:left;color:#26a2ff;">
      <i class="fa fa-calendar-o"></i> 日程安排
    </mt-button>

    <timeline :items="timelines"></timeline>

    <mt-popup v-model="popupMenu" position="left" style="width:80%;">
      <mt-header title="菜单" fixed>
        <mt-button @click="popupMenu = !popupMenu" slot="right" icon="back">隐藏</mt-button>
      </mt-header>

      <div class="has-header" style="overflow-y:auto;" :style="{height:screenHeight-40+'px'}">
        <mt-cell @click.native="popupMenu = false;go(menu.url)" v-for="(menu, index) in menus" :key="index" :title="menu.name">
          <i slot="icon" class="fa fa-fw" :class="'fa fa-'+menu.icon" :style="{verticalAlign:'middle', color:colors[index]}"></i>
        </mt-cell>
      </div>
    </mt-popup>

    <mt-popup v-model="scanned" popup-transition="popup-fade" style="width:100%;height:100%;">
      <mt-header title="二维码登录">
        <mt-button @click="scanned=false" slot="left" icon="back"><span>返回</span></mt-button>
      </mt-header>
      <div style="padding:15px;line-height: 30px;overflow-y:auto;" :style="{height:(screenHeight-140)+'px'}">
        <span style='color:#4caf50'>二维码已扫描成功，请确认登录</span>

        <div style="position:fixed;left:5%;padding:15px 0;bottom:0;width:90%;">
          <div>
            <mt-button @click="qrcodeLogin()" type="primary" size="large">确认登录</mt-button>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '../../vuex/store'
import {
  Cell,
  Swipe,
  SwipeItem
} from 'mint-ui'
Vue.component(Cell.name, Cell)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import timeline from '../common/Timeline.vue'
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'home',
  components:{
    timeline
  },
  data() {
    return {
      qrcode:'',
      scanned:false,
      auto: 5000,
      showSwipe:true,
      drawer: false,
      mini: false,
      temporary: true,
      right: null,
      popupMenu: false,
      leftMenus: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      colors:['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'],
      menus: [{
        name: '列表',
        icon: 'list',
        url: 'list'
      },{
        name: '选项卡',
        icon: 'folder',
        url: 'tab'
      },{
        name: '图表',
        icon: 'bar-chart',
        url: 'chart'
      },{
        name: '通讯录',
        icon: 'address-book-o',
        url: 'contact'
      },{
        name: '表单',
        icon: 'list-alt',
        url: 'form'
      },{
        name: '锁屏',
        icon: 'hand-o-up',
        url: 'lock'
      },{
        name: '加载',
        icon: 'spinner',
        url: 'loading'
      },{
        name: '视频',
        icon: 'video-camera',
        url: 'video'
      },{
        name: '日历',
        icon: 'calendar',
        url: 'calendar'
      },{
        name: '地图',
        icon: 'map',
        url: 'map'
      },{
        name: '弹窗',
        icon: 'window-restore',
        url: 'dialog'
      },{
        name: '聊天',
        icon: 'qq',
        url: 'chat'
      },{
        name: '上传',
        icon: 'upload',
        url: 'upload'
      },{
        name: '浏览器',
        icon: 'chrome',
        url: 'browser'
      },{
        name: '缩放',
        icon: 'arrows-alt',
        url: 'zoom'
      },{
        name: '流程图',
        icon: 'sitemap',
        url: 'workflow'
      },{
        name: '电子签名',
        icon: 'pencil-square-o',
        url: 'signature'
      },{
        name: '启动页',
        icon: 'ellipsis-h',
        url: 'splash'
      }],
      timelines:[{
        time:(()=>{
          let date = new Date()
          date.setHours(9, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(9, 0, 0, 0)
          return date < new Date()
        })(),
        title:'会议',
        content:'部门早会',
        icon:'fa fa-microphone'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(12, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(12, 0, 0, 0)
          return date < new Date()
        })(),
        title:'午饭',
        content:'员工食堂用餐',
        icon:'fa fa-cutlery'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(15, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(15, 0, 0, 0)
          return date < new Date()
        })(),
        title:'下午茶',
        content:'放松一下心情',
        icon:'fa fa-coffee'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(20, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(20, 0, 0, 0)
          return date < new Date()
        })(),
        title:'生日',
        content:'朋友生日，一起庆祝',
        icon:'fa fa-birthday-cake'
      },{
        time:(()=>{
          let date = new Date()
          date.setHours(22, 0, 0, 0)
          return date
        })(),
        history:(()=>{
          let date = new Date()
          date.setHours(22, 0, 0, 0)
          return date < new Date()
        })(),
        title:'睡觉',
        content:'亲爱滴，晚安么么哒~',
        icon:'fa fa-moon-o'
      }]
    }
  },
  methods: {
    scan(){
      if(this.env == 'app'){
        store.commit('TOGGLE_POPUP', {visible: true, text: '正在启用摄像头', duration: 3000})

        cordova.plugins.barcodeScanner.scan(result => {
          if(!result.cancelled){
            this.qrcode = result.text
            utils.http.post('/manage/user/scan', {qrcode:this.qrcode, type:'qrcodeScan', msg:'登录二维码已扫描'}).then(response => {
              console.log(response)
              this.scanned = true
            }, error => {
              console.log(error)
            })
          }
          
          console.log("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);

        }, error => {
          alert("Scanning failed: " + error);
        }, {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: false, // Android, save scan history (default false)
          prompt : "请将二维码对准扫描区域", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : false, // iOS
          disableSuccessBeep: true // iOS and Android
        })
      }else{
        store.commit('TOGGLE_POPUP', {visible: true, text: '请在app中使用二维码扫描', duration: 3000})
      }
      
    },
    qrcodeLogin(){
      utils.http.post('/manage/user/scan', {qrcode:this.qrcode, type:'qrcodeLogin', msg:'二维码登录'}).then(response => {
        console.log(response)
        this.scanned = false
        this.qrcode = ''
      }, error => {
        console.log(error)
      })
    },
    handleChange(index){
      if(this.$route.name != 'home'){
        this.showSwipe = false
      }
    }
  },
  watch:{
    popupMenu(val){
      if(val){
        utils.ui.modal.afterOpen()
      }else{
        utils.ui.modal.beforeClose()
      }
    }
  },
  mounted(){
    console.log('home')
  },
  beforeRouteEnter(to, from, next) {
    next(vm=>{
      vm.showSwipe = true
    })
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
  border:1px solid #dfdfdf;
}
.icon-table td i{
  font-size:24px;
}
</style>