import store from '../vuex/store'

const version = {
	ready(){
		document.addEventListener('chcp_updateIsReadyToInstall', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '正在更新版本'})
		}, false);

		document.addEventListener('chcp_nothingToUpdate', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '已经是最新版本'})
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
	},
	check(){
		console.log('check')
		
	},
	update(){
		console.log('update')
		chcp.fetchUpdate(() => {
			
		}, {
			'config-file': 'https://chenjia.github.io/vue-app/demo/chcp.json'
		})
	}
};

version.ready()

export default version