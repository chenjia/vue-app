<template>
  <div :style="{height: screenHeight+'px'}">
    <mt-header title="登录">
      <mt-button slot="left" @click="go('home')" class="fa fa-fw fa-home"></mt-button>
      <mt-button slot="right" @click="check()" class="fa fa-fw fa-refresh"></mt-button>
    </mt-header>

    <div>
      <mt-field label="账　号" placeholder="请输入用户名" v-model="model.username"></mt-field>
      <mt-field label="密　码" placeholder="请输入密码" type="password" v-model="model.password"></mt-field>
      <mt-field label="验证码" v-model="model.captcha" placeholder="请输入验证码">
        <img @click="getCaptcha" :src="base64Img" height="36px" width="100px">
      </mt-field>
      <div class="pd-md">
        <mt-button @click="login" type="primary" size="large">登　录</mt-button>
      </div>
      <mt-field label="服务器地址" v-model="server"></mt-field>
      <mt-field label="热更新地址" v-model="chcpUrl"></mt-field>
      <div style="position:absolute;width:100%;bottom:0;color:gray;font-size:12px;text-align:center">版本号：{{appVersion}}</div>
    </div>
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
        userId: 'admin',
        username: 'admin',
        password: 'admin',
        captcha: '',
        captchaToken: ''
      },
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
      utils.http.post('/captcha').then(response => {
        this.model.captchaToken = response.data.body.data.captchaToken
        this.base64Img = 'data:image/png;base64, '+response.data.body.data.base64Img
      })
    },
    login(){
      Indicator.open({
        text: '登录中'
      })

      // setTimeout(()=>{
      //   store.commit('LOGIN', {user:this.model})
      //   Indicator.close()
      //   this.go('/page/home')
      // },Math.random()*3000)
      

      utils.http.post('/login', this.model).then(response => {
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
        Indicator.close()
      })
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
    this.doLogout()
    this.getCaptcha()
  }
}
</script>