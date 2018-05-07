<template>
  <mt-field ref="picker" @click.native="open" v-model="value" :label="label" :disableClear="true" :readonly="true">
    <i @click="open" class="fa fa-chevron-down icon-picker"></i>
  </mt-field>
</template>
<script>
import '../../../static/lib/mobiscroll/css/mobiscroll.javascript.min.css'
import mobiscroll from '../../../static/lib/mobiscroll/js/mobiscroll.javascript.min.js'
export default {
  name: 'datePicker',
  props: {
    label: {
      type: String,
      default: "请选择"
    },
    value: {},
    disabled:{
      type:Boolean,
      default:false
    },
    data:{type:Array[Object]},
    dataText:{type:String},
    dataValue:{}
  },
  data() {
    return {
      text: '请选择',
      visible: false,
      inputValue:'',
      instance:{},
    }
  },
  methods: {
    open(e) {
      
    },
    close() {
      
    },
    confirm(value) {
      
    }
  },
  mounted(){
    let options = {
      theme: 'android-holo-light',
      lang: 'zh',
      display:'bottom',
      data:this.data,
      dataValue:this.dataText||'value',
      dataText:this.dataText||'text',
      placeholder:'请选择选项',
      headerText:this.title||'请选择',
      buttons:[{
        text:'取消',
        handler:'cancel',
        icon:'close'
      },{
        text:'清空',
        handler:'clear',
        icon:'loop2'
      },{
        text:'确定',
        handler:'set',
        icon:'checkmark'
      }],
      onInit(event,inst){
        this.instance = inst;
        if(this.value){
          inst.setVal(this.inputValue);
        }
      },
      onBeforeShow(event,inst){
        
      },
      onSet(value, inst) {
        
      },
      onClear(){
        
      }
    }

    this.instance = mobiscroll.select(this.$refs.picker.$refs.input, options);
  }
}
</script>
<style type="text/css">
.icon-picker{
  position:absolute;
  top:-8px;
  right:4px;
  color:#26a2ff;
}
.mbsc-control{
  border:none;
  width:100%;
}
.mbsc-android-holo-light .mbsc-cal-sc-c, .mbsc-android-holo-light .mbsc-fr-w{
  background-color:white;
}
.mbsc-android-holo-light .mbsc-sc-whl-o{
  background:none;
}
.mbsc-android-holo-light .mbsc-fr-hdr {
    color: #26a2ff;
    border-color: #26a2ff;
}
.mbsc-fr-btn{
  color:#26a2ff!important;
}
.mbsc-sc-itm{
  text-overflow:clip!important;
}
.mbsc-fr-btn-c .mbsc-fr-btn{
  color:#ef4f4f!important;
}
.mbsc-fr-btn-s .mbsc-fr-btn{
  color:#4caf50!important;
}
</style>