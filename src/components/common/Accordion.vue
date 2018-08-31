<template>
  <div class="accordion" :style="{'margin-top':cascade?'-1px':''}">
    <mt-cell style="background:#fefefe;">
      <div slot="title" @click="expand = !expand" style="color:#26a2ff;">
        <slot name="title"></slot>
        <i class="fa fa-fw fa-angle-down" style="-webkit-transition:all .2s ease-out;position:absolute;right:10px;top:14px;font-size:20px;" :style="{'-webkit-transform':expand?'rotate(180deg)':''}"></i>
      </div>
    </mt-cell>
    <mt-cell v-if="$slots.content[0].children.length>0" :style="{height:ready&&expand?$refs.content.clientHeight+'px':'1px','min-height':ready&&expand?$refs.content.clientHeight+'px':'1px','-webkit-transition':animation?'all .2s ease-out':''}">
      <div slot="title" ref="content" class="content">
        <slot name="content"></slot>
      </div>
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: {
    open:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ready: false,
      cascade: false,
      animation: false,
      expand: this.open
    }
  },
  mounted(){
    this.ready = true
    let prev = this.$el.previousElementSibling
    if(prev && prev.className == 'accordion'){
      this.cascade = true
    }
    setTimeout(()=>{
      this.animation = true
    })
  }
}
</script>
<style>
.content{
  padding:1px 0;
}
.content .mint-cell:last-child{
  background:none;
}
.content .mint-cell:first-child .mint-cell-wrapper{
  background:none;
}
</style>