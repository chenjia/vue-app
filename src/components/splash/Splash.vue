<template>
  <div style="position:absolute;width:100%;height:100%;overflow-y:auto;">
    <mt-swipe :auto="0" :continuous="false">
      <mt-swipe-item class="splash-bg" :style="{backgroundPosition: '0 100%', backgroundSize:screenWidth*3+'px 100%'}">
        <img class="splash-cloud" src="static/img/splash/ADMIABAEGAAgr9qc5AUo1cXihgYw6wY4ngM!800x800.png.webp" alt="">
        <img class="splash-dragonfly splash-dragonfly0" src="static/img/splash/ADMIABAEGAAgtJGC5AUo19nb4QYwKDg1.png.webp">
        <img class="splash-dragonfly splash-dragonfly1"src="static/img/splash/ADMIABAEGAAgtJGC5AUo19nb4QYwKDg1.png.webp">
      </mt-swipe-item>
      <mt-swipe-item class="splash-bg" :style="{backgroundPosition: (screenWidth*-1)+'px 100%', backgroundSize:screenWidth*3+'px 100%'}">
        <img class="splash-cloud" src="static/img/splash/ADMIABAEGAAgr9qc5AUo1cXihgYw6wY4ngM!800x800.png.webp" alt="">
        <img class="splash-flower" style="left:-2%;" src="static/img/splash/ADMIABAEGAAgsNqc5AUosKnR-wQwtwE41AI!300x300.png.webp" alt="">
        <img class="splash-flower splash-flower1" style="left:45%;bottom:5%;" src="static/img/splash/ADMIABAEGAAgsNqc5AUosKnR-wQwtwE41AI!300x300.png.webp" alt="">
        <img class="splash-flower splash-flower2" style="right:-2%;bottom:2%;" src="static/img/splash/ADMIABAEGAAgsNqc5AUosKnR-wQwtwE41AI!300x300.png.webp" alt="">
        <img class="splash-butterfly splash-butterfly0" src="static/img/splash/ADMIABAEGAAgv7D34wUovsXanQIwjAE4eA.png.webp" alt="">
        <img class="splash-butterfly splash-butterfly1" src="static/img/splash/ADMIABAEGAAgv7D34wUouMyx6AQwoAE4nQE.png.webp" alt="">
        <img class="splash-kite" src="static/img/splash/ADMIABADGAAgoOin5AUoyom7oQMw6wM4lwY.gif" alt="">
      </mt-swipe-item>
      <mt-swipe-item class="splash-bg" :style="{backgroundPosition: (screenWidth*-2)+'px 100%', backgroundSize:screenWidth*3+'px 100%'}">
        <img class="splash-cloud" src="static/img/splash/ADMIABAEGAAgr9qc5AUo1cXihgYw6wY4ngM!800x800.png.webp" alt="">
        <img class="splash-bird" style="left:80%;top:10%;width:30px;" src="static/img/splash/ADMIABAEGAAgjKLz4wUoy6LHOjCKAjjOAQ!160x160.png.webp" alt="">
        <div class="center" style="position:fixed;width:100%;bottom:40px;">
          <mt-button @click="go('/page/home')" type="primary">立即体验</mt-button>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
    }
  },
  methods: {
    
  },
  mounted () {
    
  }
}
</script>
<style type="text/css" scoped>
.splash-bg{
  background:url(../../../static/img/splash/bg.jpeg) no-repeat;
}
.splash-dragonfly{
  position:absolute;
}
.splash-dragonfly0{
  left:80%;
  bottom:30%;
  width:30px;
  animation: dragonfly0 3s 1s linear infinite;
  -webkit-transform: rotate(50deg);
}
.splash-dragonfly1{
  left:10%;
  bottom:30%;
  width:20px;
  animation: dragonfly1 3s linear infinite;
  -webkit-transform: rotate(180deg);
}
@keyframes dragonfly0{
  0% {bottom:30%;left:80%;}
  25% {bottom:31%;left:77.5%;}
  50% {bottom:29%;left:75%;}
  75% {bottom:31%;left:77.5%;}
  100% {bottom:30%;left:80%;}
}
@keyframes dragonfly1{
  0% {bottom:30%;left:10%;}
  25% {bottom:31%;left:7.5%;}
  50% {bottom:29%;left:5%;}
  75% {bottom:31%;left:7.5%;}
  100% {bottom:30%;left:10%;}
}
.splash-cloud{
  opacity: .8;
  width:100%;
  animation: cloud 3s linear infinite;
}
@keyframes cloud{
  0% {width:90%;opacity:.8;margin-left:5%;}
  50% {width:98%;opacity:1;margin-left:1%;}
  100% {width:90%;opacity:.8;margin-left:5%;}
}
.splash-flower{
  position:absolute;
  bottom:10%;
  width:50px;
  animation: flower 3s ease-out infinite;
  transform-origin:50% 100%;
}
.splash-flower1{
  animation-delay: 1s;
}
.splash-flower2{
  animation-delay: 2s;
}
@keyframes flower{
  0% {-webkit-transform: rotate(-10deg);}
  25% {-webkit-transform: rotate(10deg);}
  50% {-webkit-transform: rotate(-5deg);}
  75% {-webkit-transform: rotate(5deg);}
  100% {-webkit-transform: rotate(-10deg);}
}
.splash-kite{
  position:absolute;
  top:30%;
  right:30%;
  width:100px;
}
.splash-butterfly{
  position:absolute;
  bottom:10%;
  width:20px;
  animation: butterfly 3s ease-out infinite;
}
.splash-butterfly0{
  left:35%;
  bottom:14%;
  -webkit-transform: rotate(50deg);
}
.splash-butterfly1{
  left:65%;
  bottom:20%;
  animation-delay: 1s;
  -webkit-transform: rotate(-20deg);
}
@keyframes butterfly{
  0% {opacity:0;}
  25% {opacity:1;}
  50% {opacity:0;}
  75% {opacity:0;}
  100% {opacity:0;}
}
.splash-bird{
  position:absolute;
  top:10%;
  animation: bird 3s linear infinite;
}
@keyframes bird{
  0% {top:9%;left:80%;}
  25% {top:11%;left:77.5%;}
  50% {top:9%;left:75%;}
  75% {top:11%;left:77.5%;}
  100% {top:10%;left:80%;}
}
</style>