<template>
  <div>
    <mt-header title="浏览器">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <mt-field placeholder="http://" v-model="src" style="border-bottom:1px solid #ccc;"></mt-field>

    <iframe :src="src" :style="{border:'none',width:'100%',height:screenHeight+'px'}"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Browser',
  data () {
    return {
      src:'',
    }
  },
  mounted(){
    
  }
}
</script>