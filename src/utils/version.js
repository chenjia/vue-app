import store from '../vuex/store'

const version = {
	getServerVersion(){
		return axios.get(Config.chcpUrl)
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

			let progress = parseFloat(data.progress);
			if (progress == 1.0) {
				this.installUpdate()
			}else{
				store.commit('TOGGLE_PROGRESS', progress * 100)
			}
		})
	},
	installUpdate(){
		store.commit('TOGGLE_UPDATING', '正在安装新版本')
		chcp.installUpdate(error => {
			if (error) {
				store.commit('TOGGLE_UPDATING', '更新包安装失败')
				alert(JSON.stringify(error))
	    } else {
	      store.commit('TOGGLE_UPDATING', '已经更新为最新版本')
	    }
		})
	}
}

export default version