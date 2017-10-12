<template>
  <mu-dialog :open="showDialog" dialogClass="zoomDialog">
    <mu-appbar :title="title">
      <mu-icon-button disabled slot="left"/>
      <mu-icon-button @click="showDialog = false" icon="close" slot="right"/>
    </mu-appbar>
    <div :style="{width:screenWidth+'px',height:(screenHeight-48)+'px'}" style="position:absolute;overflow:auto;">
      <slot></slot>
    </div>
  </mu-dialog>
</template>

<script>
  export default {
    name: 'zoom',
    props:['show', 'title'],
    data () {
      return {
        showDialog: null
      }
    },
    watch:{
      show(value){
        this.showDialog = value
      },
      showDialog(newVal, oldVal){
        document.querySelector('#app').style.display = (newVal?'none':'block')
        document.querySelector('meta[name=viewport]').setAttribute('content','width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable='+(newVal?'yes':'no'))
        this.$emit('update:show', newVal)
      }
    },
    mounted(){
      this.showDialog = this.show
    }
  }
</script>
<style>
  .zoomDialog{
    width:100%;
    height:100%;
  }
</style>