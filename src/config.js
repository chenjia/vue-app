window.Config = {
  appVersion:'1.0.11',
  nativeVersion:'1.0',
  // server: 'http://localhost:8201/api',
  server: 'http'+(location.href.indexOf('https')==0?'s':'')+'://47.100.119.102/api',
  appDownloadUrl:'http://47.100.119.102/vue-app',
  chcpUrl:'http://47.100.119.102/vue-app/chcp.json',
  key:'dzg5czJyejd5NjFkN3g3MjNjc2QwamN3OXUxODFjb280YWE4djhvYmV1NW9lemUxMzFjdGFiYTZ0OXo5dXhkMWNrYzRvZHZ3NjcyMzZkdWU=',
  random:new Date().getTime(),
  preload: 1000
}
