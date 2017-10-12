import Vue from 'vue'
import App from './components/common/App'
import router from './router'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import '../static/css/main.css'
import {
  mapGetters,
  mapMutations
} from 'vuex'

import {
  Header,
  Button,
  Cell,
  Checklist,
  Field,
  IndexList,
  IndexSection,
  Progress,
  Radio,
  Switch,
  Swipe,
  SwipeItem,
  Tabbar,
  TabItem,
  TabContainer,
  TabContainerItem
} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Checklist.name, Checklist)
Vue.component(Field.name, Field)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Progress.name, Progress)
Vue.component(Radio.name, Radio)
Vue.component(Switch.name, Switch)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    }
  },
  computed: {
    ...mapGetters([
      'hasHeader',
      'hasTabs',
      'hasFooter',
      'fixFooter',
      'isLoading'
    ])
  },
  methods: {
    go(url) {
      this.$router.push(url)
    },
    back() {
      router.back()
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