import {encryptByDES,decryptByDES,encryptKey,decryptKey} from './security'

const cache = {
	set(key, value, seconds = 60*60*24) {
		if(typeof value != 'string') {
			value = JSON.stringify(value)
		}
		value = JSON.stringify({value:value, expired: new Date().getTime()+seconds*1000})
		localStorage.setItem(key, encryptByDES(value, decryptKey(window.Config.key)))
	},
	get(key) {
		let value = localStorage.getItem(key)

		if(value){
			value = eval('(' + decryptByDES(value, decryptKey(window.Config.key)) + ')')
			if(value.expired > new Date().getTime()){
				value = value.value
				if (value.substr(0, 1) == '{' || value.substr(0, 1) == '[') {
					try {
						value = eval('(' + value + ')');
					} catch (e) {
						console.log('error in get cache key:' + key + ', value:' + value)
					}
				}
			}else{
				localStorage.removeItem(key)
				value = null
			}
		}
		return value
	},
	removeItem(key) {
		localStorage.removeItem(key)
	},
	clear() {
		localStorage.clear()
	}
}

export default cache