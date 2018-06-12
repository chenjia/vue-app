<template>
  <div>
    <mt-header title="缩放">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="pd-md">
    	<mt-button @click="showPDF" type="primary" size="large">预览PDF</mt-button><br/>
      <mt-button @click="showTable" type="primary" size="large">预览表格</mt-button><br/>
    </div>
    
    <zoom title="放大缩小" :dialog="true" :show.sync="popupPDF">
      <mt-button @click="popupPDF = !popupPDF" type="primary" size="large">关闭</mt-button>
      <div style="overflow-y:auto;" :style="{height:screenHeight+'px'}">
        <img v-for="item in items" style="width:100%;" :src="'../../../static/img/pdf/'+item">
      </div>
    </zoom>

    <zoom title="放大缩小" :dialog="true" :show.sync="popupTable">
      <mt-button @click="popupTable = !popupTable" type="primary" size="large">关闭</mt-button>
      <div style="overflow:auto;" :style="{height:screenHeight+'px'}">
          
      </div>
    </zoom>
  </div>
</template>

<script>
import zoom from '../common/Zoom.vue'
export default {
  name: 'Zoom',
  components:{
    zoom
  },
  data () {
    return {
      popupPDF: false,
      popupTable: false,
      items: []
    }
  },
  methods:{
    showPDF(){
      this.popupPDF = !this.popupPDF
      if(this.items.length == 0){
        this.items = ['1.png','2.png','3.png','4.png','5.png']
      }
    },
    showTable(){
      this.popupTable = !this.popupTable
    }
  },
  mounted(){
    
  }
}
</script>
<style type="text/css">

</style>