<template>
  <div>
    <mt-popup v-if="dialog" v-model="showDialog" popup-transition="popup-fade" style="width:100%;height:100%;">
      <slot></slot>
    </mt-popup>
    <div v-if="!dialog"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'zoom',
    props:['show', 'title', 'dialog'],
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
        // document.querySelector('#app').style.display = (newVal?'none':'block')
        document.querySelector('meta[name=viewport]').setAttribute('content','width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable='+(newVal?'yes':'no'))
        this.$emit('update:show', newVal)
      }
    },
    mounted(){
      if(this.dialog){
        this.showDialog = this.show
      }else{
        document.querySelector('meta[name=viewport]').setAttribute('content','width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes')
      }
    }
  }
</script>
<style>
  .zoomDialog{
    width:100%;
    height:100%;
  }
</style>
