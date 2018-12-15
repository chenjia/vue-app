window.Config = {
  appVersion:'1.0.34',
  nativeVersion:'1.0',
  // server: 'http://localhost:8201/lxt-gateway',
  server: 'http://47.100.119.102/lxt-gateway',
  appDownloadUrl:'https://chenjia.github.io/vue-app/public/index.html',
  chcpUrl:'https://chenjia.github.io/vue-app/public/chcp.json',
  key:'ed26d4cd99aa11e5b8a4c89cdc776729',
  random:(''+Math.random()).substr(2),
  preload: 3000
}

import Vue from 'vue'
import utils from './utils'
import App from './components/common/App'
import router from './router'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import '../static/css/main.css'

import {
  mapMutations
} from 'vuex' 

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

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
