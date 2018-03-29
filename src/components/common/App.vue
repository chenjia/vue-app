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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../vuex/store'
export default {
  name: 'app',
  data(){
    return {
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
  watch:{
    '$store.state.common.ui.tab'(val){
      this.go({name:val})
    }
  },
  mounted(){
    
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