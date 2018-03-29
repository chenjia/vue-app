<template>
  <div style="position:absolute;overflow-y:auto;background:#eee;width:100%;height:100%;">
    <mt-header title="设置">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="list-group">
    	<mt-cell is-link>
    		<span slot="title">账号：admin</span>
    		<img slot="icon" src="../../../static/img/logo.png" width="24" height="24">
    	</mt-cell>
    </div>

    <div class="list-group">
    	<mt-cell title="账号与安全" is-link></mt-cell>
    </div>

    <div class="list-group">
    	<mt-cell title="新消息通知" is-link></mt-cell>
    	<mt-cell title="隐私" is-link></mt-cell>
    	<mt-cell title="通用" is-link></mt-cell>
        <mt-cell title="调试" is-link @click.native="debug()"></mt-cell>
    </div>
    
    <div class="list-group">
    	<mt-cell title="关于app" is-link @click.native="go('about')"></mt-cell>
    </div>

    <div style="padding:20px">
    	<mt-button @click="logout()" type="danger" size="large">退出登录</mt-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
	name: 'setting',
	data () {
		return {

		}
	},
	methods: {
		logout(){
			MessageBox.confirm('确定要退出登录吗?', '确认退出').then(action => {
        this.go('login')
      },action => {
        console.log(action)
      })
		},
    debug(){
      if(!window.eruda){
        axios({
          method:'get',
          url:'http://cdn.jsdelivr.net/npm/eruda',
          responseType:'application/script'
        }).then(function(response) {
          eval(response.data)
          eruda.init()
        });
      }
    }
	},
	mounted () {

	}
}
</script>
<style type="text/css" scoped>
	.list-group{
		padding-top:15px;
	}
</style>