<template>
  <div>
    <transition :name="transitionName" mode="out-in">
      <keep-alive include="home">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'page',
  data(){
    return {
      urlArray:[location.href.substr(location.href.indexOf('#')+1)],
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
  },
  beforeRouteUpdate (to, from, next) {
    if(this.urlArray.length>1){
      if(this.urlArray[this.urlArray.length-2] == to.path){
        this.$router.isBack = true
        this.urlArray.pop()
      }else{
        this.urlArray.push(to.path)
      }
    }

    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'animate-out'
      this.$router.isBack = false
    } else {
      this.transitionName = 'animate-in'
    }

    next()
  },
  mounted(){
    // window.onpopstate = () => {
    //   if(++this.count % 2 == 0){
    //     this.$router.isBack = true
    //     this.count = 0
    //   }
    // }
  }
}
</script>
<style>
.animate-in-enter-active,
.animate-out-enter-active,
.animate-in-leave-active,
.animate-out-leave-active{
  transition: all .25s ease;
}
.animate-in-enter, .animate-out-leave-to{
  transform: translateX(10%);
  opacity: 0;
}
.animate-out-enter, .animate-in-leave-to{
  transform: translateX(-10%);
  opacity: 0;
}
</style>