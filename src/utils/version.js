import store from '../vuex/store'
import { MessageBox } from 'mint-ui'

const version = {
	checkForUpdate(){
		version.getServerVersion().then(response => {
			if(Config.nativeVersion != response.data.nativeVersion){
				MessageBox.alert('当前版本过低，请安装最新版本！', '版本更新').then(()=>{
					window.open(Config.appDownloadUrl)
				})
			}else if(Config.appVersion != response.data.appVersion){
				store.commit('TOGGLE_POPUP_VERSION', true)
				store.commit('TOGGLE_NEXT_VERSION', response.data.appVersion)
				store.commit('TOGGLE_DESCRIPTION', response.data.description)
			}
		})
	},
	getServerVersion(){
		return axios.get(Config.chcpUrl+'?r='+new Date().getTime())
	},
	fetchUpdate(){
		if(!window.chcp){
			alert('未找到热更新插件！')
			return false
		}

		chcp.fetchUpdate((error, data) => {
			console.log('in fetchUpdate', data, data.config)
			
			if (error) {
				console.log(error)
				return
			}

			if (data.totalNum) {
				let progress = parseInt(data.progress * 100);
				console.log('progress', progress)
				store.commit('TOGGLE_PROGRESS', progress)
				if (progress == 100) {
					store.commit('TOGGLE_UPDATING_TEXT', '正在安装新版本')
					setTimeout(() => {
						alert('ready to install')
						version.installUpdate()
					}, 200)
				}
			}
		}, {
			'config-file': Config.chcpUrl
		})
	},
	installUpdate(){
		chcp.installUpdate(error => {
			if (error) {
				store.commit('TOGGLE_UPDATING_TEXT', '更新包安装失败')
				alert(JSON.stringify(error))
			}else{
				store.commit('TOGGLE_POPUP', {visible: true, text: '已经更新为最新版本', duration: 3000})
			}
		})
	}
}

export default version
