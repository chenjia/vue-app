import axios from 'axios'
import cache from './cache'
import store from '../vuex/store'
import {encryptByAES,decryptByAES,encryptKey,decryptKey} from './security'
var CryptoJS = require("crypto-js");
window.axios = axios

let instance = axios.create({
  method: 'post',
  timeout: 60000,
  withCredentials: true,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  transformRequest: [function(data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
})

instance.interceptors.request.use(function(config) {
  let user = cache.get('user')
  let data = {
    head: {
      url: config.url,
      debug: true,
      userId: user ? user.userId : null,
      token: cache.get('token'),
      timestamp:new Date().getTime()
    },
    body: {
      data: config.data
    }
  }
  console.log('\n【request:'+config.url+'】', data, '\n\n')
  config.url = window.Config.server + config.url

  config.data = {
    request: encryptByAES(JSON.stringify(data), decryptKey(Config.key))
  }
  return config
}, function(error) {
  console.log(error)
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response) {
  let resp = decryptByAES(response.data.response, decryptKey(Config.key))
  response.data = JSON.parse(resp)
  console.log('\n【response:'+response.config.url+'】',response, '\n\n')
  if(response.data.head.status != 200){
    store.commit('TOGGLE_POPUP', {visible: true, text: response.data.head.msg, duration: 3000})
  }
  let token = response.data.head.token
  cache.set('token', token || cache.get('token'))
  return response
}, function(error) {
  console.log(error)
  return Promise.reject(error)
})

export default instance