window.Config = {
  appVersion:'1.0.11',
  nativeVersion:'1.0',
  // server: 'http://localhost:8201/api',
  server: 'http://47.100.119.102/api',
  appDownloadUrl:'https://chenjia.github.io/vue-app/public/index.html',
  chcpUrl:'https://chenjia.github.io/vue-app/public/chcp.json',
  key:'dzg5czJyejd5NjFkN3g3MjNjc2QwamN3OXUxODFjb280YWE4djhvYmV1NW9lemUxMzFjdGFiYTZ0OXo5dXhkMWNrYzRvZHZ3NjcyMzZkdWU=',
  random:new Date().getTime(),
  preload: 1
}

import Vue from 'vue'
import utils from './utils'
import App from './components/common/App'
import router from './router'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import '../static/css/main.css'

import { mapMutations } from 'vuex' 
Vue.config.productionTip = false

window.utils = utils
window.Vue = Vue

Vue.mixin({
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    go(url) {
      this.$router.push(url)
    },
    back() {
      router.goBack()
    },
    ...mapMutations({
      toggleHeader: 'TOGGLE_HEADER',
      toggleFooter: 'TOGGLE_FOOTER',
      toggleLoading: 'TOGGLE_LOADING'
    })
  }
})

window.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
