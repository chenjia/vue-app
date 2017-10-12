<template>
  <div class="lxt-page">
    <mt-header title="登录"></mt-header>

    <div class="lxt-content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="password"></mt-field>
      <mt-field label="验证码" v-model="captcha">
        <img src="../../../static/img/captcha.png" height="36px" width="100px">
      </mt-field>
      <div class="pd-md">
        <mt-button @click="login" type="primary" size="large">登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      captcha: ''
    }
  },
  methods: {
    login(){
      Indicator.open({
        text: '登录中...',
        spinnerType: 'snake'
      })
      setTimeout(() => {
        Indicator.close()
        this.go('/home')
      }, 1000)
    }
  }
}
</script>
<style type="text/css" scoped>
  
</style>