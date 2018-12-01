<template>
  <div :style="{height:screenHeight+'px'}">
    <mt-header title="手势解锁">
      <mt-button @click="toHome" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <pattern-lock></pattern-lock>
  </div>
</template>

<script>
import patternLock from '../common/PatternLock';
export default {
  name: 'lock',
  components:{
    patternLock
  },
  data() {
    return {
      
    }
  },
  methods: {
    toHome(){
      this.go('home')
    }
  }
}
</script>
<style type="text/css" scoped>
  
</style>