<template>
  <div>
    <transition :name="transitionName" mode="out-in">
      <keep-alive :include="keepAlive">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import router from '../../router'
import {
  mapGetters
} from 'vuex'
export default {
  name: 'page',
  data(){
    let path = location.href.substr(location.href.indexOf('#')+1)
    const urlArray = []
    if(path==='/page/login'){
      urlArray.push('/page/login')
    }else if(path==='/page/home'){
      urlArray.push('/page/login', '/page/home')
    }else{
      urlArray.push('/page/login', '/page/home', path)
    }
    return {
      keepAlive:['login','home'],
      urlArray:urlArray,
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
    if(this.urlArray.length>1 && this.urlArray[this.urlArray.length-2] == to.path){
      this.$router.isBack = true
    }
    
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'animate-out'
      this.$router.isBack = false
    } else {
      this.transitionName = 'animate-in'
    }

    if(to.meta.keepAlive && this.keepAlive.indexOf(to.meta.name) == -1){
      this.keepAlive.push(to.name)
    }

    if(window.lazyLibsLoaded || ['login'].indexOf(to.name) != -1){
      next()
    }else{
      let timer = () => {
        setTimeout(() => {
          if(window.lazyLibsLoaded){
            next()
          }else{
            timer()
          }
        }, 200)
      }

      timer()
    }
  },
  created(){
    router.afterEach((to, from) => {
      if(this.urlArray.length>1 && this.urlArray[this.urlArray.length-2] == to.path){
        this.urlArray.pop()
      }else{
        this.urlArray.push(to.path)
      }
    })
  }
}
</script>
<style>
.animate-out-leave-active,.animate-in-leave-active{
  transition: all .15s ease-in;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.animate-in-enter-active,.animate-out-enter-active{
  transition: all .15s ease-out;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.animate-in-enter, .animate-out-leave-to{
  transform: translateX(50px) translateZ(0);
  opacity: 0;
}
.animate-out-enter, .animate-in-leave-to{
  transform: translateX(-50px) translateZ(0);
  opacity: 0;
}
/*.animate-in-enter>div{
  transform: translateX(100%);
}
.animate-out-enter>div{
  transform: translateX(-100%);
}
.animate-in-enter-to>div{
  transition: all .5s ease-out;
  transform: translateX(0%);
}
.animate-out-enter-to>div{
  transition: all .5s ease-out;
  transform: translateX(0%);
}
.animate-in-enter>header>h1{
  transform: translateX(100%);
  opacity:0;
}
.animate-out-enter>header>h1{
  transform: translateX(-100%);
  opacity:0;
}
.animate-in-enter-to>header,.animate-out-enter-to>header{
  background-color:rgba(0,0,0,0);
}
.animate-in-enter-to>header>h1{
  transition: all .5s ease-out;
  transform: translateX(0%);
  opacity:1;
}
.animate-out-enter-to>header>h1{
  transition: all .5s ease-out;
  transform: translateX(0%);
  opacity:1;
}
.animate-in-enter>header>div{
  transition: all .5s ease-out;
  opacity:0;
}
.animate-out-enter>header>div{
  transition: all .5s ease-out;
  opacity:0;
}
.animate-in-enter-to,.animate-out-enter-to{
  position:absolute;
  width:100%;
  top:0;
  transition: all .5s ease-out;
  opacity:1;
}
.animate-in-leave-to{
  transition: all 0s ease-out .5s;
  transform: translateX(-100%);
}
.animate-out-leave-to{
  transition: all 0s ease-out .5s;
  transform: translateX(100%);
}
.animate-in-leave-to>div{
  transition: all .5s ease-out;
  transform: translateX(-100%);
}
.animate-out-leave-to>div{
  transition: all .5s ease-out;
  transform: translateX(100%);
}
.animate-in-leave-to>header>div,.animate-out-leave-to>header>div{
  transition: all .5s ease-out;
  opacity:0;
}
.animate-in-leave-to>header>h1{
  transition: all .5s ease-out;
  opacity:0;
  transform: translateX(-20%);
}
.animate-out-leave-to>header>h1{
  transition: all .5s ease-out;
  opacity:0;
  transform: translateX(20%);
}*/
</style>