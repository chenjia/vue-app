<template>
  <mt-field ref="picker" @click.native="open" v-model="text" :placeholder="placeholder" :label="label" :disableClear="true" :readonly="true">
    <i @click="open" class="fa fa-angle-down icon-picker"></i>
  </mt-field>
</template>
<script>

export default {
  name: 'MultiPicker',
  props: {
    label: {
      type: String,
      default: "请选择"
    },
    placeholder:{
    	type: String
    },
    value:{},
    readonly:{
      type:Boolean,
      default:false
    },
    data:{type:Array[Object]},
    dataText:{type:String},
    dataValue:{}
  },
  data() {
    return {
      init: false,
      text: '请选择',
      visible: false,
      inputValue:null,
      instance:{},
      picker:null
    }
  },
  methods: {
    open() {
      // $('.modal-open').css({pointerEvents:'auto'})
      if(this.readonly)return;
      
      if(!this.init){
        mui.init();
        var options = {layer:1} || this.options
        this.picker = new mui.PopPicker(options)
        this.picker.setData(this.data)
        this.init = true
        this.setText(this.inputValue,this.data,0)
      }
			this.picker.show(items => {
				for(var i=items.length-1;i>=0;i--){
					if(items[i].value != null){
						this.text = items[i].text;
						this.inputValue = items[i].value;
            this.picker.dispose()
            this.init = false
						break;
					}
				}
			});
    },
    setText(value,data,level){
    	data = data || this.data;
    	level = level || 0;
    	if(value != null){
    		for(var i=0;i<data.length;i++){
    			if(data[i].children != null){
            if(this.picker){
              this.picker.pickers[level].setSelectedIndex(i)
            }
    				var result = this.setText(value,data[i].children,level+1)
    				if(result) break;
    			}else if(data[i].value == this.inputValue){
    				this.text = data[i].text;
            if(this.picker){
              this.picker.pickers[level].setSelectedIndex(i)
            }
    				return true;
    			}
    		}
    	}
    }
  },
  watch:{
  	value(val){
  		this.inputValue = val
  	},
  	inputValue(val){
  		if(val){
  			this.setText(val, this.data, 0)
  		}
  	}
  },
  mounted(){
  	this.inputValue = this.value
  }
}
</script>
<style type="text/css" scoped>
.icon-picker{
  position:absolute;
  top:-12px;
  right:3px;
  color:#26a2ff;
  font-size:26px;
}
</style>