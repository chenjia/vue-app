import axios from 'axios'
import format from './format'
import store from '../vuex/store'
// axios({
//   method: 'post',
//   url: 'http://182.254.145.132:21000/module/email/sendEmail',
//   data: {
//     data: '{cToMailAdd:"251746034@qq.com",cSubject:"测试",cContent:"测试测试测试"}'
//   },
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   transformRequest: [function(data) {
//     let ret = ''
//     for (let it in data) {
//       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//     }
//     return ret
//   }]
// })
let instance = axios.create({
  timeout: 30000,
  method: 'post',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function(data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
});
//当请求异常，网络异常,返回异常时候进行提示
function showError() {
  store.commit('LOADING', {
    loading: false
  })
  store.commit('TOGGLE_TOAST', {
    toast: true,
    toastMsg: '网路异常,请检查网络'
  })
};
//请求拦截器
instance.interceptors.request.use(config => {
  store.commit('LOADING', {
    loading: true,
    msg: '加载中'
  })
  let params = {
    "packageList": {
      "packages": {
        "header": {
          "requestType": config.url,
          "comId": globalConfig.comId,
          "from": globalConfig.from,
          "sendTime": new Date().format('yyyy-MM-dd HH:mm:ss'),
          "orderSerial": "orderId",
          "comSerial": "comSerial"
        },
        request: DES3.encrypt('', JSON.stringify({
          requestPayload: Base64.encode(JSON.stringify(config.data))
        }).replace(/\s/g, ""))
      }
    }
  }
  let paramStr = JSON.stringify(params)
  let sign = hex_hmac_md5(globalConfig.transfer, paramStr)
  config.url = globalConfig.rootUrl + 'interfaceChannel?sign=' + sign + '&com_id=' + globalConfig.comId
  config.data = paramStr
  return config
}, error => {
  store.commit('TOGGLE_TOAST', {
    toast: true,
    toastMsg: '发送请求失败！'
  })
  return Promise.reject({
    isLogicError: false,
    errorMessage: "网路异常,请检查网络"
  })
});
//返回拦截器
instance.interceptors.response.use(response => {
  store.commit('LOADING_DISABLED', false)
  store.commit('LOADING', {
    loading: false
  })
  try {
    response.data.packageList.packages.response = JSON.parse(DES3.decrypt('', response.data.packageList.packages.response).replace(/(\\)*"/g, '"').replace(/"{/g, '{').replace(/}"/g, '}'))
      // response.data.packageList.packages.response.responsePayload.result = false
    console.log("%c 返回数据>>>>>>>", 'color:green', JSON.parse(JSON.stringify(response)))
    if (!response.data.packageList.packages.response.responsePayload.result) {
      return Promise.reject({
        isLogicError: true,
        errorMessage: response.data.packageList.packages.response.responsePayload.data.ErrorMessage,
        data: response.data.packageList.packages.response.responsePayload
      })
    }
  } catch (e) {
    console.log(e)
    showError();
    return Promise.reject({
      isLogicError: false,
      errorMessage: "网路异常,请检查网络"
    })
  }
  response.data = response.data.packageList.packages.response.responsePayload.data;
  return response
}, error => {
  store.commit('LOADING_DISABLED', false)
  showError();
  return Promise.reject({
    isLogicError: false,
    errorMessage: "网路异常,请检查网络"
  })
})

export default {
  axios: axios,
  post(service, params) {
    console.log("%c 请求数据>>>>>>>", 'color:green', JSON.parse(JSON.stringify(params)))
    return instance.post(service, params)
  }
}