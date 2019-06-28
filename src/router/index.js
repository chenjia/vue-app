import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import Page from '../components/common/Page'

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
import upload from './upload'
import browser from './browser'
import zoom from './zoom'
import workflow from './workflow'
import signature from './signature'
import splash from './splash'

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
    component: Page,
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
    ...setting,
    ...upload,
    ...browser,
    ...zoom,
    ...workflow,
    ...signature,
    ...splash
    ]
  }]
})

let routerMap = {}
let ready = false
let loader = document.querySelector('.loader-box')
let timer1,timer2;

router.beforeEach((to, from, next) => {
  if(!routerMap[to.name]){
    if(loader.className.indexOf('fadeOut') !== -1){
      timer1 = setTimeout(()=>{
        loader.style.display = 'block'
        timer2 = setTimeout(()=>{
          loader.className = loader.className.replace(' fadeOut', '')
        })
      },100)
    }
  }
  
  if(to.meta.login != false && !store.state.common.user) {
    console.log('to login')
    store.commit('TOGGLE_POPUP', {
      visible: true,
      text: '请先登录！',
      duration: 3000
    })
    next('/page/login')
    loader.className += ' fadeOut'
    setTimeout(()=>{
      loader.style.display = 'none'
    },500)
  } else {
    console.log('next')
    next()
  }
})

router.afterEach((to, from) => {
  clearTimeout(timer2)
  clearTimeout(timer1)
  routerMap[to.name] = true
  store.commit('TOGGLE_HEADER', to.meta.hasHeader != false)
  store.commit('TOGGLE_FOOTER', to.meta.hasFooter != false)
  store.commit('TOGGLE_TABS', {flag:to.meta.hasTabs == true, tab:to.name})
  if(ready){
    if(loader.className.indexOf('fadeOut') === -1){
      setTimeout(()=>{
        loader.className += ' fadeOut'
      },500)
    }
    setTimeout(()=>{
      loader.style.display = 'none'
    },1000)
  }else{
    ready = true
    if(loader.className.indexOf('fadeOut') === -1){
      loader.className += ' fadeOut'
      setTimeout(()=>{
        loader.style.display = 'none'
      },500)
    }
  }

})
export default router