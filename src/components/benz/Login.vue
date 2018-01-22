<template>
  <div :style="{height: screenHeight+'px',background:'url(./static/img/benz/home.jpg) no-repeat','background-size':'cover'}">
    <div style="text-align:center;padding:25px 0;">
    	<img src="static/img/benz/logo.png" style="width:65%;">
    </div>
    

    <div style="padding:10px;">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="model.username" style="border-radius:5px 5px 0 0;"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="model.password"></mt-field>
      <mt-field label="验证码" v-model="model.captcha" placeholder="请输入验证码" style="border-radius:0 0 5px 5px;">
        <img @click="getCaptcha" :src="captchaBase64" height="30px" width="80px">
      </mt-field>
      <div>
      	
      </div>
      <div class="pd-md">
        <mt-button @click="login" type="primary" size="large">登录</mt-button>
      </div>
    </div>

    <mt-popup v-model="popupTop" position="top" :modal="false" style="width:100%;height:50px;line-height:50px;color:#fff;text-align:center;background:rgba(0,0,0,0.5)">
      {{msg}}
    </mt-popup>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import axios from 'axios'
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
    	axios.post('http://intest.life.cntaiping.com/sfss-web/portal/loadIdentifyCodeRestful.do').then(response => {
    		console.log(response)
    		this.captchaBase64 = response.data.opt.data[0].certCode
    	})
    },
    login(){
      Indicator.open({
        text: '登录中...',
        spinnerType: 'fading-circle'
      })

      setTimeout(()=>{
        Indicator.close()
        this.go('/page/benz/home')
      },500+Math.random()*1000)
      

      utils.http.post('/system/login', this.model).then(response => {
        console.log(response)
        if(response.data.head.status == 200){
          this.doLogin({
            user:response.data.body.data.user,
            userSetting:response.data.body.data.userSetting
          })
          this.go('/page/home')
        }else {
          this.msg = response.data.body.data
          this.popupTop = true
          setTimeout(()=>{
            this.popupTop = false
          }, 3000)
          this.getCaptcha()
        }
        
      })
    },
    check(){
      utils.version.check()
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
    this.getCaptcha()
  }
}
</script>