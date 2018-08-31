import Vue from 'vue'

const fillZero = (value) => {
	value = '' + value
	if(value.length < 2){
		value = '0' + value
	}
	return value
}

Vue.filter('dateFilter', (value, simple = true) => {
	const type = typeof value
	if(type === 'string'){
		return new Date(value)
	}else if(type === 'object'){
		let str = value.getFullYear() + '-' + fillZero(value.getMonth()+1) + '-' + fillZero(value.getDate())
		if(!simple){
			str = str + ' ' + fillZero(value.getHours()) + ':' + fillZero(value.getMinutes())
		}
		value = str
	}
  return value
})