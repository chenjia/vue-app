const version = {
	ready(){
		document.addEventListener('chcp_updateIsReadyToInstall', () => {
			console.log('检测到新版本')
		}, false);

		document.addEventListener('chcp_updateInstalled', () => {
			console.log('版本更新成功')
		}, false);
	},
	check(){
		console.log('check')
		
	},
	update(){
		console.log('update')
	}
};

version.ready()

export default version