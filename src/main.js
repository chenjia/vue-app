window.Config = {
  server: 'http://localhost:8080/lxt-server',
  appUrl:'https://chenjia.github.io/vue-app/demo/index.html',
  chcpUrl_bak:'https://b7c0c46b.ngrok.io/chcp.json',
  chcpUrl: 'https://chenjia.github.io/vue-app/demo/chcp.json'
}

import FastClick from 'fastclick'
FastClick.attach(document.body)
import Vue from 'vue'
import App from './components/common/App'
import router from './router'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import '../static/css/main.css'
import utils from './utils'
import {
  mapGetters,
  mapMutations
} from 'vuex'

import {
  Actionsheet,
  Button,
  Cell,
  CellSwipe,
  Checklist,
  Field,
  Header,
  IndexList,
  IndexSection,
  Loadmore,
  Popup,
  Progress,
  Radio,
  Search,
  Spinner,
  Swipe,
  SwipeItem,
  Switch,
  Tabbar,
  TabContainer,
  TabContainerItem,
  TabItem
} from 'mint-ui'
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(Checklist.name, Checklist)
Vue.component(Field.name, Field)
Vue.component(Header.name, Header)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Popup.name, Popup)
Vue.component(Progress.name, Progress)
Vue.component(Radio.name, Radio)
Vue.component(Search.name, Search)
Vue.component(Spinner.name, Spinner)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Switch.name, Switch)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(TabItem.name, TabItem)

Vue.config.productionTip = false

window.utils = utils

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