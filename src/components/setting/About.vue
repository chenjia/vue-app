<template>
  <div style="position:absolute;background:#eee;width:100%;height:100%;">
    <mt-header title="关于app">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <div class="list-group">
    	<mt-cell title="评分鼓励" is-link></mt-cell>
    	<mt-cell title="欢迎页" is-link></mt-cell>
    	<mt-cell title="分享推荐" is-link></mt-cell>
    	<mt-cell title="客服电话" is-link></mt-cell>
    	<mt-cell title="问题反馈" is-link></mt-cell>
    </div>

    <div class="list-group">
    	<mt-cell is-link @click.native="check()">
    		<span slot="title">
    			检查更新
    			<mt-badge v-if="latest" type="error" size="small">new</mt-badge>
    		</span>
    	</mt-cell>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/store'
export default {
	name: 'about',
	data () {
		return {
			latest: false
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
		check(){
      utils.version.checkForUpdate()
    }
  },
  mounted () {
    utils.version.getServerVersion().then(response => {
      if(Config.nativeVersion != response.data.nativeVersion){
        MessageBox.alert('当前版本过低，请安装最新版本！', '版本更新').then(()=>{
          window.open(Config.appDownloadUrl)
        })
      }else if(Config.appVersion != response.data.appVersion){
        this.latest = true
      }
    })
  }
}
</script>
<style type="text/css" scoped>
	.list-group{
		padding-top:15px;
	}
</style>