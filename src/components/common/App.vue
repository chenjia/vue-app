<template>
  <div>
    <transition name="slide-y" mode="out-in">
      <mt-header v-show="hasHeader" style="position:absolute;top:0;width:100%;"></mt-header>
    </transition>
    <router-view></router-view>

    <mt-popup v-model="$store.state.common.ui.popupTop" :closeOnClickModal="false" position="top" :modal="true" style="width:100%;height:50px;line-height:50px;color:#fff;text-align:center;background:rgba(0,0,0,0.5)">
      {{$store.state.common.ui.popupText}}
    </mt-popup>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'app',
  data(){
    return {
      transitionName: 'animate-in'
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
  }
  
}
</script>