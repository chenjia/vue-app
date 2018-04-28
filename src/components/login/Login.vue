<template>
  <div class="lxt-page" :style="{height: screenHeight+'px'}">
    <mt-header title="登录">
      <mt-button slot="left" @click="go('home')" class="fa fa-fw fa-home"></mt-button>
      <mt-button slot="right" @click="check()" class="fa fa-fw fa-refresh"></mt-button>
    </mt-header>

    <div>
      <mt-field label="账　号" placeholder="请输入用户名" v-model="model.username"></mt-field>
      <mt-field label="密　码" placeholder="请输入密码" type="password" v-model="model.password"></mt-field>
      <mt-field label="验证码" v-model="model.captcha" placeholder="请输入验证码">
        <img @click="getCaptcha" :src="captchaBase64" height="36px" width="100px">
      </mt-field>
      <div class="pd-md">
        <mt-button @click="login" type="primary" size="large">登　录</mt-button>
        <br/><mt-button @click="test" type="primary" size="large">test</mt-button>
      </div>
      <mt-field label="服务器地址" v-model="server"></mt-field>
      <mt-field label="热更新地址" v-model="chcpUrl"></mt-field>
      <div style="position:absolute;width:100%;bottom:0;color:gray;font-size:12px;text-align:center">版本号：{{$store.state.common.app.version}}</div>
    </div>

    <mt-popup v-model="popupTop" position="top" :modal="false" style="width:100%;height:50px;line-height:50px;color:#fff;text-align:center;background:rgba(0,0,0,0.5)">
      {{msg}}
    </mt-popup>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import store from '../../vuex/store'
import {
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      model:{
        username: 'admin',
        password: 'admin',
        captcha: ''
      },
      server: Config.server,
      chcpUrl: Config.chcpUrl,
      popupTop:false,
      msg: '',
      captchaBase64:''
    }
  },
  methods: {
    ...mapMutations({
      doLogin:'LOGIN',
      doLogout:'LOGOUT'
    }),
    getCaptcha(){
      utils.http.post('/captcha').then(response => {
        this.captchaBase64 = 'data:image/png;base64, '+response.data.body.data
      })
    },
    login(){
      Indicator.open({
        text: '登录中...',
        spinnerType: 'fading-circle'
      })

      setTimeout(()=>{
        store.commit('LOGIN', {user:this.model})
        Indicator.close()
        this.go('/page/home')
      },Math.random()*3000)
      

      // utils.http.post('/system/login', this.model).then(response => {
      //   console.log(response)
      //   if(response.data.head.status == 200){
      //     this.doLogin({
      //       user:response.data.body.data.user,
      //       userSetting:response.data.body.data.userSetting
      //     })
      //     this.go('/page/home')
      //   }else {
      //     this.msg = response.data.body.data
      //     this.popupTop = true
      //     setTimeout(()=>{
      //       this.popupTop = false
      //     }, 3000)
      //     this.getCaptcha()
      //   }
      //   
      // })
    },
    check(){
      utils.version.fetchUpdate()
    },
    test(){
      console.log('getCurrentPosition')
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position)
      },function(err){
        console.log(err)
      },{ enableHighAccuracy: true })
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
    this.doLogout()
    // this.getCaptcha()
  }
}
</script>