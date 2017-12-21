import store from '../vuex/store'
import cache from './cache'

const version = {
	ready(){
		document.addEventListener("deviceready", () => {
			this.check()
			this.bindEvent()
		}, false)
	},
	check(){
		store.commit('TOGGLE_POPUP', {visible: true, text: '正在检测&下载新版本'})
		chcp.getVersionInfo((err, data) => {
			if(store.state.common.app.version != data.currentWebVersion){
				store.commit('UPDATE_VERSION', data.currentWebVersion)
			}
			var webVersion = data.currentWebVersion
			var nativeVersion = window.NativeVersion
			if(webVersion.indexOf(nativeVersion+'.') == -1){
				alert('当前版本过低，请安装最新版本')
				window.open('https://chenjia.github.io/vue-app/demo/index.html');
			}
		})
	},
	update(){
		chcp.fetchUpdate(() => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '正在获取新版本'})
		}, {
			'config-file': Config.chcpUrl
		})
	},
	bindEvent(){
		document.addEventListener('chcp_updateIsReadyToInstall', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '已经更新为最新版本'})
		}, false)
		
		document.addEventListener('chcp_updateLoadFailed', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '获取更新包失败'})
			setTimeout(()=>{
				store.commit('TOGGLE_POPUP', {visible: false, text: ''})
			},1000)
		}, false)

		document.addEventListener('chcp_nothingToUpdate', () => {
			store.commit('TOGGLE_POPUP', {visible: false, text: ''})
		}, false)
	}
};

version.ready()

export default version