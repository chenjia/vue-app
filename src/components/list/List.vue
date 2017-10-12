<template>
  <div>
    <mt-header title="列表">
      <mt-button @click="go('home')" slot="left" icon="back">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <mt-cell v-for="(item,index) in list" :key="index" title="标题文字" to="//github.com" is-link value="带链接"></mt-cell>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

export default {
  name: 'list',
  data() {
    return {
      loading: false,
      list: []
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.add()
        this.loading = false;
      }, 2500);
    },
    add(){
      let last = this.list[this.list.length - 1];
      for (let i = 1; i <= 10; i++) {
        this.list.push(last + i);
      }
    }
  },
  mounted(){
    this.add()
  }
}
</script>
<style type="text/css" scoped>
  
</style>