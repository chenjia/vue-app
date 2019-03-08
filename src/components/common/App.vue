<template>
  <div>
    <transition name="slide-up" mode="out-in">
      <mt-header v-show="hasHeader" style="position:absolute;top:0;width:100%;"></mt-header>
    </transition>
    <router-view></router-view>
    <transition name="slide-y" mode="out-in">
      <mt-tabbar v-show="hasTabs" v-model="$store.state.common.ui.tab" fixed>
        <mt-tab-item v-for="(item,index) in tabs" :key="index" :id="item.id">
          <i slot="icon" class="fa" :class="item.icon" style="font-size:24px;"></i>
          {{item.text}}
        </mt-tab-item>
      </mt-tabbar>
    </transition>

    <mt-popup v-model="$store.state.common.ui.popupTop" :closeOnClickModal="false" position="top" :modal="true" style="width:100%;height:50px;line-height:50px;color:#fff;text-align:center;background:rgba(0,0,0,0.5)">
      {{$store.state.common.ui.popupText}}
    </mt-popup>

    <mt-popup v-model="$store.state.common.version.popupVersion" popup-transition="popup-fade" style="width:100%;height:100%;">
      <mt-header title="版本更新提示">
        <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
      </mt-header>
      <div style="padding:15px;line-height: 30px;overflow-y:auto;" :style="{height:(screenHeight-140)+'px'}">
        <span style='color:#4caf50'>本次更新内容（{{appVersion}} -&gt; {{$store.state.common.version.nextVersion}}）：</span>
        <div v-for="item in $store.state.common.version.description" style="font-size:14px;">{{item}}</div>

        <div style="position:fixed;left:5%;padding:15px 0;bottom:0;width:90%;">
          <div v-show="$store.state.common.version.updating">
            <mt-progress :value="$store.state.common.version.progress" :bar-height="5"></mt-progress>
            <div v-if="$store.state.common.version.updatingText == ''" class="center">更新进度：<span style="display:inline-block;width:46px;text-align:right;">{{$store.state.common.version.progress + '%'}}</span></div>
            <div v-if="$store.state.common.version.updatingText!=''" class="center">{{$store.state.common.version.updatingText}}</div>
          </div>
          <div v-show="!$store.state.common.version.updating">
            <mt-button @click="toggleUpdating" type="primary" size="large">立即更新</mt-button>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Button,
  Field,
  Header,
  Popup,
  Progress,
  Tabbar,
  TabItem
} from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
Vue.component(Header.name, Header)
Vue.component(Progress.name, Progress)
Vue.component(Popup.name, Popup)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

import { mapGetters } from 'vuex'
import store from '../../vuex/store'

export default {
  name: 'app',
  data(){
    return {
      appVersion: Config.appVersion,
      transitionName: 'animate-in',
      tab:store.state.common.ui.tab || 'home',
      tabs:[{
        id:'home',
        icon:'fa-home',
        text:'首页',
        url:'home'
      },{
        id:'contact',
        icon:'fa-address-book-o',
        text:'通讯录',
        url:'contact'
      },{
        id:'calendar',
        icon:'fa-calendar',
        text:'日历',
        url:'list'
      },{
        id:'setting',
        icon:'fa-cog',
        text:'设置',
        url:'setting'
      }]
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
  methods:{
    toggleUpdating(){
      store.commit('TOGGLE_UPDATING', true)
      utils.version.fetchUpdate()
    },
    back(){
      store.commit('TOGGLE_POPUP_VERSION', false)
    }
  },
  watch:{
    '$store.state.common.ui.tab'(val){
      this.go({name:val})
    }
  },
  created(){
    require('../../lazyLibs')
  },
  mounted(){
    document.addEventListener("deviceready", () => {
      utils.version.checkForUpdate()
    }, false)
  }
}
</script>

<style type="text/css">
.slide-y-enter {
  opacity: 0;
  transform: translate(0, 50px);
}
.slide-y-enter-to{
  transition:all .4s ease-out;
}
.slide-y-leave {
  opacity: 1;
  transform: translate(0, 0);
}
.slide-y-leave-to{
  transition:all .4s ease-out;
  opacity: 0;
  transform: translate(0, 50px);
}
</style>
