<template>
  <div class="lxt-page">
    <mt-header title="手势解锁">
      <mt-button @click="toHome" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <h5lock></h5lock>
  </div>
</template>

<script>
import h5lock from '../common/H5lock.vue';
export default {
  name: 'lock',
  components:{
    h5lock
  },
  data() {
    return {
      
    }
  },
  methods: {
    toHome(){
      let lock = document.getElementById('h5lock')
      lock.parentNode.removeChild(lock); 
      this.go('home')
    }
  }
}
</script>
<style type="text/css" scoped>
  
</style>