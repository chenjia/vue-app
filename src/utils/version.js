import store from '../vuex/store'
import cache from './cache'
import { MessageBox } from 'mint-ui'

const version = {
	getVersionInfo(callback){
		if(window.chcp){
			// chcp.getVersionInfo(callback)
		}
	},
	fetchUpdate(){
		if(!window.chcp){return}

		try {
			chcp.fetchUpdate(function(error, data) {
				console.log(data)
				if (error) {
					console.log(error);
					return;
				}
				var progress = parseFloat(data.progress);
				if (progress == 1.0) {
					chcp.installUpdate();
				}
			})
		} catch (err) {
			console.log(err);
		}
		return;

		store.commit('TOGGLE_POPUP', {visible: true, text: '正在检测新版本'})
		chcp.getVersionInfo((err, versionInfo) => {
			console.log(versionInfo)
			chcp.fetchUpdate((error, data) => {
				console.log(data)
				store.commit('TOGGLE_POPUP', {visible: true, text: '正在下载新版本...'})
				let config = JSON.parse(data.config)
				if(config.native_version != window.Config.native_version){
					store.commit('TOGGLE_POPUP', {visible: true, text: '当前版本过低，请安装最新版本'})
					alert('当前版本过低，请安装最新版本！')
					window.open(Config.appUrl)
				}else {
					if(error){
						if(error.code == 2){
							store.commit('TOGGLE_POPUP', {visible: true, text: '已经是最新版本', duration: 1000})
						}else{
							store.commit('TOGGLE_POPUP', {visible: true, text: '更新包获取失败', duration: 3000})
							alert(JSON.stringify(error))
						}
					}else{
						if(config.release != versionInfo.currentWebVersion){
							MessageBox('版本提示（'+config.release+'）', config.description).then(action => {
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
			if (error) {
				store.commit('TOGGLE_POPUP', {visible: true, text: '更新包安装失败', duration: 3000})
				alert(JSON.stringify(error))
	    } else {
	      store.commit('TOGGLE_POPUP', {visible: true, text: '已经更新为最新版本', duration: 1000})
	    }
		})
	}
}

document.addEventListener("deviceready", () => {
	version.getVersionInfo((err, versionInfo) => {
		store.commit('UPDATE_VERSION', versionInfo.currentWebVersion)
	})
}, false)

export default version