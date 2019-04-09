<template>
  <div>
    <mt-header title="电子签名">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
      <mt-button @click="preview" slot="right"><span>预览</span></mt-button>
    </mt-header>

    <signaturePad ref="signaturePad" @save="save" :w="(screenWidth-10)+'px'" :h="(screenHeight-100)+'px'"></signaturePad>
  
    <zoom title="预览签名" :dialog="true" :show.sync="popupPreview">
      <mt-button style="position:absolute;top:10px;right:10px;" @click="popupPreview = !popupPreview" type="primary" size="small" plain>
        <i class="fa fa-close"></i>
      </mt-button>
      <div style="overflow-y:auto;" :style="{height:screenHeight+'px'}">
        <img :src="dataURL" style="width:100%;">
      </div>
    </zoom>
    <!-- <mt-popup v-model="showPreview" popup-transition="popup-fade" style="width:100%;height:100%;">
      <mt-header title="预览签名">
        <mt-button @click="showPreview=false" slot="left" icon="back"><span>返回</span></mt-button>
      </mt-header>
      <div style="padding:15px;line-height: 30px;overflow-y:auto;" :style="{height:(screenHeight-40)+'px'}">
        <img :src="dataURL">
      </div>
    </mt-popup> -->
  </div>
</template>

<script>
import signaturePad from '../common/SignaturePad'
import zoom from '../common/Zoom.vue'
export default {
  name:"signature",
  components:{
    signaturePad,
    zoom
  },
  data(){
    return {
      popupPreview: false,
      dataURL:''
    }
  },
  methods:{
    preview(){
      const data = this.$refs.signaturePad.getDataURL()
      this.dataURL = data
      this.popupPreview = true
      console.log(data)
    },
    save(data){
      alert(data)
    }
  },
  mounted(){
    
  }
}
</script>