import axios from 'axios'
import cache from './cache'

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
      token: cache.get('token')
    },
    body: {
      data: config.data
    }
  }
  config.url = window.Config.server + config.url
  config.data = {
    request: JSON.stringify(data)
  }
  return config
}, function(error) {
  console.log(error)
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response) {
  let token = response.data.head.token
  cache.set('token', token || cache.get('token'))
  return response
}, function(error) {
  console.log(error)
  return Promise.reject(error)
})

export default instance