import axios from 'axios'
import cache from './cache'
import store from '../vuex/store'
require('../../static/lib/security/tripledes')
require('../../static/lib/security/mode-ecb-min')
window.axios = axios

const encryptByDES = (message, key) => {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64).replace(/[\r\n]/g, '');
}

const decryptByDES = (ciphertext, key) => {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext.replace(/[\r\n]/g, ''))
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}


const encryptKey = key => {
  let array = key.split('')
  let letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let encryptedKey = ''
  for(let i=0;i<array.length;i++){
    encryptedKey += array[i]
    for(let j=0;j<i%2+1;j++){
      encryptedKey += letters.substr(parseInt(Math.random()*letters.length),1)
    }
  }
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encryptedKey.split('').reverse().join('')))
}

const decryptKey = encryptedKey => {
  encryptedKey = CryptoJS.enc.Base64.parse(encryptedKey).toString(CryptoJS.enc.Utf8).split('').reverse().join('')
  let str = ''
  for(let i=0,j=0;i<encryptedKey.length;i++){
    str += encryptedKey[i]
    i += (j++ % 2 + 1)
  }
  return str
}

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
    request: encryptByDES(JSON.stringify(data), decryptKey(Config.key))
  }
  return config
}, function(error) {
  console.log(error)
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response) {
  let resp = decryptByDES(response.data.response, decryptKey(Config.key))
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