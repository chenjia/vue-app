import store from '../vuex/store'
import cache from './cache'

const version = {
	version: cache.get('version'),
	ready(){
		this.check()
		this.bindEvent()
	},
	check(){
		setTimeout(()=>{
			chcp.getVersionInfo((err, data) => {
				if(this.version != null && this.version != data.currentWebVersion){
					this.version = data.currentWebVersion
					cache.set('version', this.version)
				}else{
					store.commit('TOGGLE_POPUP', {visible: true, text: '正在检测新版本'})
				}
			})
		})
	},
	update(){
		chcp.fetchUpdate(() => {

		}, {
			'config-file': 'https://chenjia.github.io/vue-app/demo/chcp.json'
		})
	},
	bindEvent(){
		document.addEventListener('chcp_updateIsReadyToInstall', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '正在更新版本'})
		}, false);
		
		document.addEventListener('chcp_updateLoadFailed', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '获取更新包失败'})
			setTimeout(()=>{
				store.commit('TOGGLE_POPUP', {visible: false, text: ''})
			},1000)
		}, false);

		document.addEventListener('chcp_nothingToUpdate', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '已经是最新版本'+version.version})
			setTimeout(()=>{
				store.commit('TOGGLE_POPUP', {visible: false, text: ''})
			},1000)
		}, false);

		document.addEventListener('chcp_updateInstalled', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '版本更新成功'})
			setTimeout(()=>{
				store.commit('TOGGLE_POPUP', {visible: false, text: ''})
			},1000)
		}, false);
	}
};

version.ready()

export default version