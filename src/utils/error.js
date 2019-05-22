import Vue from 'vue'
import format from './format'

const errors = []
const getTimestamp = () => {
  return format.toDate(new Date())
}

Vue.config.errorHandler = error => {
  errors.push({time: getTimestamp(), error: error.stack})
}

window.onerror = (message, source, lineno, colno, error) => {
  errors.push({time: getTimestamp(), error: error.stack})
}

window.addEventListener('error', event => {
  errors.push({time: getTimestamp(), error: event.error.stack})
})

setInterval(()=>{
  if(errors.length > 0){
    console.log(errors)
  }
},3000)