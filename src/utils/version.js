import store from '../vuex/store'
import cache from './cache'
import { MessageBox } from 'mint-ui'

const version = {
	check(){
		if(!window.chcp){return}
		store.commit('TOGGLE_POPUP', {visible: true, text: '正在检测新版本'})
		chcp.getVersionInfo((err, versionInfo) => {
			chcp.fetchUpdate((error, data) => {
				let config = JSON.parse(data.config)
				if(config.native_version != window.native_version){
					store.commit('TOGGLE_POPUP', {visible: true, text: '当前版本过低，请安装最新版本'})
					alert('当前版本过低，请安装最新版本')
					window.open(Config.appUrl)
				}else {
					if(error){
						console.log(error)
						if(error.code == 2){
							store.commit('TOGGLE_POPUP', {visible: true, text: '已经更新为最新版本', duration: 1000})
						}else{
							store.commit('TOGGLE_POPUP', {visible: true, text: '更新包获取失败'})
							setTimeout(()=>{
								store.commit('TOGGLE_POPUP', {visible: false, text: ''})
							},5000)
						}
					}else{
						if(config.release != versionInfo.currentWebVersion){
							MessageBox('版本提示（'+config.release+'）', config.description).then(action => {
							  this.install(versionInfo)
							})
							document.querySelector('.mint-msgbox-message').style.textAlign = 'left'
						}
					}
				}
			}, {
				'config-file': Config.chcpUrl
			})
		})
	},
	install(versionInfo){
		store.commit('TOGGLE_POPUP', {visible: true, text: '正在安装新版本'})
		chcp.installUpdate(error => {
			if (error) {
				store.commit('TOGGLE_POPUP', {visible: true, text: '更新包安装失败'})
	    } else {
	      store.commit('TOGGLE_POPUP', {visible: true, text: '已经更新为最新版本', duration: 1000})
	    	setTimeout(()=>{
	    		store.commit('UPDATE_VERSION', versionInfo.currentWebVersion)
	    	},3000)
	    }
		})
	}
}

document.addEventListener("deviceready", () => {
	//version.check()
}, false)

export default version