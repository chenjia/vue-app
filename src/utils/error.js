import Vue from 'vue'
import format from './format'

const errors = []
const getTimestamp = () => {
  return format.toDate(new Date())
}

Vue.config.errorHandler = error => {
  errors.push({time: getTimestamp(), content: error.stack})
}

window.onerror = (message, source, lineno, colno, error) => {
  errors.push({time: getTimestamp(), content: error.stack})
}

window.addEventListener('error', event => {
  errors.push({time: getTimestamp(), content: event.error.stack})
})

setInterval(()=>{
  if(errors.length > 0){
    const length = errors.length
    // utils.http.post('/manage/log/save', {logs:errors}).then(response => {
    //   errors.splice(0,length)
    // }, error => {
    //   console.log('保存日志报错了')
    // })
  }
},3000)