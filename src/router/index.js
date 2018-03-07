import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import login from './login'
import home from './home'
import list from './list'
import chart from './chart'
import contact from './contact'
import form from './form'
import tab from './tab'
import lock from './lock'
import calendar from './calendar'
import loading from './loading'
import map from './map'
import dialog from './dialog'
import chat from './chat'
import video from './video'
import setting from './setting'

Vue.use(Router)

Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/page/login'
  },{
    path: '/page',
    component: function(resolve) {
      require.ensure([], () => resolve(require('../components/common/Page.vue')), 'page')
    },
    children:[
    ...login,
    ...home,
    ...list,
    ...chart,
    ...contact,
    ...form,
    ...tab,
    ...lock,
    ...calendar,
    ...loading,
    ...map,
    ...dialog,
    ...chat,
    ...video,
    ...setting
    ]
  }]
})
router.beforeEach((to, from, next) => {
  store.commit('TOGGLE_HEADER', to.meta.hasHeader != false)
  store.commit('TOGGLE_FOOTER', to.meta.hasFooter != false)
  store.commit('TOGGLE_TABS', {flag:to.meta.hasTabs == true, tab:to.name})
  if (to.meta.login != false && !store.state.common.user) {
    store.commit('TOGGLE_POPUP', {
      visible: true,
      text: '请先登录！',
      duration: 3000
    })
    next('/page/login')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  let loader = document.querySelector('.loader-box')
  if(loader.className.indexOf('fadeOut') === -1){
    loader.className += ' fadeOut'
    setTimeout(()=>{
      loader.style.display = 'none'
    },500)
  }
})
export default router