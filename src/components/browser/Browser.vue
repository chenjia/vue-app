<template>
  <div>
    <mt-header title="浏览器">
      <mt-button @click="go('home')" slot="left" icon="back">返回</mt-button>
      <mt-button slot="right" @click="input" type="default" size="normal">地址</mt-button>
    </mt-header>

    <iframe :src="src" :style="{border:'none',width:'100%',height:screenHeight+'px'}"></iframe>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'Browser',
  data () {
    return {
      src:''
    }
  },
  methods:{
    input(){
      MessageBox.prompt("请输入url").then(({ value, action }) => {
        let pre = 'http://'
        this.src = pre+value.replace('http://','')
      })
    }
  },
  mounted(){
    this.input()
  }
}
</script>