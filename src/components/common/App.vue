<template>
  <div>
    <transition name="slide-y" mode="out-in">
      <mt-header v-show="hasHeader" style="position:absolute;top:0;width:100%;"></mt-header>
    </transition>
    <router-view></router-view>
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