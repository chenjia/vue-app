<template>
  <div>
    <mt-header title="列表" fixed>
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="has-header">
      <mt-loadmore 
      :maxDistance="100"
        :top-method="loadTop"
        @top-status-change="handleTopChange"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        @bottom-status-change="handleBottomChange"
        ref="loadmore">

        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" class="loadmore-arrow" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="fading-circle" color="#26a2ff" :size="20"></mt-spinner>
            <span style="position:relative;top:-4px;left:4px;color:#26a2ff;">加载中...</span>
          </span>
        </div>
        <mt-cell-swipe class="fade" :class="{'fade-out':item.fade}" v-for="(item,index) in list" :key="index" :title="item.name" label="http://chenjia.github.io/vue-app" is-link value="带链接" :right="[{
          content: '<i class=\'fa fa-fw fa-remove\'></i> 删除',
          style: { background: '#ef4f4f', color: '#fff' },
          handler: () => swipeItem(index)
        }]"></mt-cell-swipe>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" class="loadmore-arrow" :class="{ 'rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="fading-circle" color="#26a2ff" :size="20"></mt-spinner>
            <span style="position:relative;top:-4px;left:4px;color:#26a2ff;">加载中...</span>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui'
import { MessageBox } from 'mint-ui';
Vue.use(InfiniteScroll)

export default {
  name: 'list',
  data() {
    return {
      length:0,
      loading: false,
      list: [],
      topStatus: '',
      bottomStatus: '',
      allLoaded: false
    }
  },
  methods: {
    loadTop(){
      setTimeout(()=>{
        this.length = 0
        this.list = []
        this.add(5)
        this.$refs.loadmore.onTopLoaded()
      }, Math.random()*2000+1000)
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadBottom(){
      setTimeout(()=>{
        this.add(5)
        this.$refs.loadmore.onBottomLoaded()
      }, Math.random()*2000+1000)
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadMore() {
      this.loading = true
      setTimeout(() => {
        this.add(5)
        this.loading = false
        this.bottomStatus = 'loading'
      }, Math.random()*2000+1000)
    },
    add(count){
      for (let i = this.length; i < this.length+count; i++) {
        const item = {
          name:'标题'+i,
          fade:true
        }
        this.list.push(item)
      }

      this.length += count
    },
    swipeItem(index){
      this.list.splice(index,1)
    }
  },
  created(){
    this.add(5)
  }
}
</script>
<style type="text/css">
.rotate{
  transform:rotate(-180deg);
}
.loadmore-arrow{
  transition:all .3s ease-out;
  display:inline-block;
  font-size:24px;
  font-family: '微软雅黑';
  color:#26a2ff;
}
.mint-loadmore-top{
  height:44px;
}
.mint-loadmore-bottom{
  height:54px;
}
.mint-loadmore-top{
  margin-top:-45px;
}
div[class^="mint-spinner-"]{
  display:inline-block;
}
/*.fade{
  opacity:1;
  transition:all .2s ease-in .1s;
}
.fade.fade-out{
  opacity:0;
}*/
</style>