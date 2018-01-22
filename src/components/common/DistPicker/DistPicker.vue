<template>
	<div>
		<mt-field @click.native="toggleVisible(true)" v-model="text" :label="label" :readonly="true" :disableClear="true">
			<i @click="toggleVisible(true)" class="fa fa-map-marker icon-picker"></i>
		</mt-field>
		<mt-popup v-model="visible" position="bottom" @close="toggleVisible(false)" :closeOnClickModal="true" class="popup-dist">
			<vdistpicker type="mobile" @selected="selected" :province="province" :city="city" :area="area"/>
		</mt-popup>
	</div>
</template>
<script>
import vdistpicker from './vdistpicker.vue'
import DISTRICT from './districts'
export default {
  name: 'distpicker',
  components:{vdistpicker},
  props:['value','label'],
  data() {
    return {
    	province:'',
    	city:'',
    	area:'',
    	text:'',
      visible:false
    }
  },
  methods: {
    toggleVisible(flag){
    	this.visible = flag
    },
    selected(data){
      this.$emit("input", data.area.code);
      this.setText(data.province.value,data.city.value,data.area.value)
    	this.visible = false
    },
    setText(p,c,a){
      this.text = p +' '+ c +' '+ a
      return this.text
    }
  },
  watch:{
  	visible(val){
  		val?utils.ui.modal.afterOpen():utils.ui.modal.beforeClose();
  	}
  },
  mounted(){
    if(this.value){
      let province = DISTRICT['100000'][this.value.substr(0,2)+'0000']
      let city = DISTRICT[this.value.substr(0,2)+'0000'][this.value.substr(0,4)+'00']
      let area = DISTRICT[this.value.substr(0,4)+'00'][this.value]
      this.setText(province,city,area)
    }
  }
}
</script>
<style type="text/css" scoped>
.icon-picker{
  position:absolute;
  top:-8px;
  right:6px;
  color:#26a2ff;
}
.popup-dist{
	width:100%;
}
</style>
<style type="text/css">
.distpicker-address-wrapper{
	color:#666!important;
}
.distpicker-address-wrapper .address-header ul li.active{
	color:#26a2ff!important;
	border-bottom:#26a2ff solid 2px!important;
}
.distpicker-address-wrapper .address-container ul{
	height:300px!important;
}
</style>