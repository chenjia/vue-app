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
		return axios.get(Config.chcpUrl+'?r='+(''+Math.random()).substr(2))
	},
	fetchUpdate(){
		if(!window.chcp){
			return false
		}

		chcp.fetchUpdate((error, data) => {
			console.log(data)
			
			if (error) {
				console.log(error)
				return
			}

			if(data.totalNum){
				let progress = parseInt(data.progress * 100);
				store.commit('TOGGLE_PROGRESS', progress)
				if (progress == 100) {
					store.commit('TOGGLE_UPDATING_TEXT', '正在安装新版本')
					setTimeout(()=>{
						version.installUpdate()
					},100)
				}
			}
		})
	},
	installUpdate(){
		store.commit('TOGGLE_UPDATING_TEXT', '正在安装新版本')
		chcp.installUpdate(error => {
			alert('installUpdate')
			if (error) {
				store.commit('TOGGLE_UPDATING_TEXT', '更新包安装失败')
				alert(JSON.stringify(error))
	    } else {
	    	utils.cache.set('prevVersion', Config.appVersion)
	    	alert(Config.appVersion)
	    }
		})
	}
}

export default version