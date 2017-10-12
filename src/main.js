import Vue from 'vue'
import App from './components/common/App'
import router from './router'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import '../static/css/main.css'
import {
  Header,
  Button,
  Cell,
  Field,
  Swipe,
  SwipeItem,
  Tabbar,
  TabItem
} from 'mint-ui'
import {
  mapGetters,
  mapMutations
} from 'vuex'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Field.name, Field)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
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