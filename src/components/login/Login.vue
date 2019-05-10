<template>
  <div :style="{height: screenHeight+'px'}">
    <mt-header title="vue-app">
      <mt-button slot="left" @click="go('home')" class="fa fa-fw fa-home"></mt-button>
      <mt-button slot="right" @click="check()" class="fa fa-fw fa-refresh"></mt-button>
    </mt-header>

    <div class="pd-md center">
      <img src="static/img/logo.png" style="width:50%;">
    </div>
    
    <div>
      <mt-field label="账　号" placeholder="请输入账号" v-model="model.username"></mt-field>
      <mt-field label="密　码" placeholder="请输入密码" type="password" v-model="model.password"></mt-field>
      <mt-field label="验证码" type="tel" v-model="model.captcha" @keyup.enter.native="login()" placeholder="请输入验证码">
        <div class="border-animation">
          <img @click="getCaptcha" :src="base64Img" style="width:100px;height:36px;">
        </div>
      </mt-field>
      <div class="pd-md">
        <mt-button @click="login" type="primary" size="large">登　录</mt-button>
      </div>
        
      <mt-field v-if="showVersion" label="服务器url" v-model="server"></mt-field>
      <mt-field v-if="showVersion" label="热更新url" v-model="chcpUrl"></mt-field>
      <div @click="showVersion = !showVersion" style="position:absolute;width:100%;bottom:5px;color:gray;font-size:12px;text-align:center">版本号：{{appVersion}}</div>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/store'
import {
  Indicator
} from 'mint-ui'
import {
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      model:{
        userId: 'admin',
        username: 'admin',
        password: 'admin',
        captcha: '',
        captchaToken: ''
      },
      showVersion: false,
      appVersion: Config.appVersion,
      server: Config.server,
      chcpUrl: Config.chcpUrl,
      base64Img:''
    }
  },
  methods: {
    ...mapMutations({
      doLogin:'LOGIN',
      doLogout:'LOGOUT'
    }),
    getCaptcha(){
      utils.http.post('/manage/user/captcha').then(response => {
        this.model.captchaToken = response.data.body.data.captchaToken
        this.base64Img = 'data:image/png;base64, '+response.data.body.data.base64Img
      })
    },
    login(){
      if(this.model.captcha == ''){
        store.commit('TOGGLE_POPUP', {visible: true, text: '验证码不能为空', duration: 3000})
        return
      }

      Indicator.open({
        text: '登录中'
      })

      setTimeout(()=>{
        utils.http.post('/manage/user/login', this.model).then(response => {
          Indicator.close()
          if(response.data.body.data) {
            this.doLogin({
              user:response.data.body.data.user,
              userSetting:response.data.body.data.userSetting
            })
            this.go('/page/home')
          }else{
            store.commit('TOGGLE_POPUP', {visible: true, text: response.data.head.msg, duration: 3000})
            this.getCaptcha()
          }
        }, error => {
          Indicator.close()
          this.go('/page/home')
        })
      },10)
    },
    check(){
      utils.version.checkForUpdate()
    }
  },
  watch:{
    server(value){
      Config.server = value
    },
    chcpUrl(value){
      Config.chcpUrl = value
    }
  },
  mounted(){
    
  },
  beforeRouteEnter(to, from, next){
    next(vm=>{
      vm.doLogout()
      vm.getCaptcha()
      vm.model.captcha = ''
    })
  }
}
</script>
<style type="text/css" scoped>
.border-animation{
  padding:1px;
  background: linear-gradient(0deg, transparent 6px, #ccc 6px) repeat-y, linear-gradient(0deg, transparent 50%, #ccc 0) repeat-y, linear-gradient(90deg, transparent 50%, #ccc 0) repeat-x, linear-gradient(90deg, transparent 50%, #ccc 0) repeat-x;
  background-size: 1px 12px, 1px 12px, 12px 1px, 12px 1px;
  background-position: 0 0, 100% 0, 0 0, 0 100%;
  animation: border-move 1s infinite linear;
}
@keyframes border-move {
  from {}
  to {
    background-position: 0 -12px, 100% 12px, 12px 0, -12px 100%;
  }
}
</style>
