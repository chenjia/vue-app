<template>
  <div>
    <mt-header title="浏览器">
      <mt-button @click="go('home')" slot="left" icon="back">返回</mt-button>
      <mt-button slot="right" @click="input" class="fa fa-fw fa-plus"></mt-button>
    </mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item v-for="(tab, index) in tabs" :id="index+1" :key="index">{{tab.title}}</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" style="padding-top:2px;">
      <mt-tab-container-item v-for="(tab, index) in tabs" :id="index+1" :key="index">
        <iframe :src="tab.src" :style="{border:'none',width:'100%',height:screenHeight+'px'}"></iframe>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'Browser',
  data () {
    return {
      selected:1,
      tabs:[{
        title:'tab1',
        src:'https://www.baidu.com'
      }]
    }
  },
  methods:{
    input(){
      MessageBox.prompt("请输入url").then(({ value, action }) => {
        let pre = 'http://'
        const src = pre+value.replace('http://','')
        this.tabs.push({
          title:'tab'+(this.tabs.length+1),
          src:src
        })
        this.$nextTick(()=>{
          this.selected = this.tabs.length
        })
      })
    }
  },
  mounted(){
    // this.input()
  }
}
</script>