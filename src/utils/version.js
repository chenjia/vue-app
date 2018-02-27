import store from '../vuex/store'
import cache from './cache'
import { MessageBox } from 'mint-ui'

const version = {
	log:[],
	getVersionInfo(){
		chcp.getVersionInfo((err, versionInfo) => {
			store.commit('UPDATE_VERSION', versionInfo.currentWebVersion)
		})
	},
	fetchUpdate(){
		if(!window.chcp){return}
		store.commit('TOGGLE_POPUP', {visible: true, text: '正在检测新版本'})
		chcp.getVersionInfo((err, versionInfo) => {
			version.log.push('getVersionInfo:'+new Date().getTime())
			chcp.fetchUpdate((error, data) => {
				store.commit('TOGGLE_POPUP', {visible: true, text: '正在下载新版本...'})
				version.log.push('fetchUpdate:'+new Date().getTime())
				let config = JSON.parse(data.config)
				if(config.native_version != window.native_version){
					store.commit('TOGGLE_POPUP', {visible: true, text: '当前版本过低，请安装最新版本'})
					alert('当前版本过低，请安装最新版本！')
					window.open(Config.appUrl)
				}else {
					if(error){
						if(error.code == 2){
							store.commit('TOGGLE_POPUP', {visible: true, text: '已经是最新版本', duration: 1000})
						}else{
							store.commit('TOGGLE_POPUP', {visible: true, text: '更新包获取失败', duration: 5000})
						}
					}else{
						if(config.release != versionInfo.currentWebVersion){
							version.log.push('MessageBox:'+new Date().getTime())
							MessageBox('版本提示（'+config.release+'）', config.description).then(action => {
							  version.log.push('beforeinstallUpdate:'+new Date().getTime())
							  this.installUpdate(config)
							})
							setTimeout(()=>{
								document.querySelector('.mint-msgbox-message').style.textAlign = 'left'
							})
						}
					}
				}
			}, {
				'config-file': Config.chcpUrl
			})
		})
	},
	installUpdate(config){
		store.commit('TOGGLE_POPUP', {visible: true, text: '正在安装新版本'})
		chcp.installUpdate(error => {
			version.log.push('installUpdate:'+new Date().getTime())
			if (error) {
				store.commit('TOGGLE_POPUP', {visible: true, text: '更新包安装失败', duration: 5000})
	    } else {
	      store.commit('TOGGLE_POPUP', {visible: true, text: '已经更新为最新版本', duration: 1000})
	    }
	    alert(JSON.stringify(version.log))
		})
	}
}

document.addEventListener("deviceready", () => {
	version.getVersionInfo()
}, false)

export default version